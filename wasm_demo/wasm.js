
// *** Screen size
const width = 50;
const height = 50;
let pixel_size = 8;

// *** Sliders for the parameters
let sliders = [];
let values = [];

for (let i = 0; i < 12; i++) {
    sliders[i] = document.getElementById("slider_" + i);
    values[i] = document.getElementById("value_" + i);
    sliders[i].oninput = function () {
        values[i].innerHTML = this.value;
        memory[20000 + i] = this.value;
    };
};


// *** Color pallette
const color = [
    "#110011",
    "#220022",
    "#440044",
    "#660066",
    "#880088",
    "#660066",
    "#440044",
    "#220022",
    "#002200",
    "#224422",
    "#446644",
    "#668866",
    "#88aa88",
    "#66cc66",
    "#44aa44",
    "#228822",
    "#006600"
];


// *** WASM interface
let memory;


// *** Draw the screen from "Video RAM" in memory
function render_memory() {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            ctx.fillStyle = color[memory[y * width + x] & 0xf];
            //console.log((y * width + x) + " = " + memory[y * width + x])
            ctx.fillRect(10 * x, 10 * y, pixel_size, pixel_size);
        };
    };
    ctx.stroke();
};


// *** 50 Hz interrupt
function update() {
    instance.exports.update(); // call "interrupt service routine" in WASM
    render_memory();
    requestAnimationFrame(update);
};


// *** Make WASM instance
let instance = new WebAssembly.Instance(new WebAssembly.Module(wasm_data), {});
memory = new Uint8Array(instance.exports.memory.buffer);

// *** Create screen
const canvas = document.getElementById("screen");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#ff0000";

// *** Call WASM init procedure (jsr ISR)
instance.exports.init();


// *** Start the "50 Hz interrupt service routine" (cli)
update();





