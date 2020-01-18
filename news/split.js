


const fs = require("fs");


// I hate, that JavaScript has no simple sync file I/O

// *** File write

let output_file = "";

function write_file(x) {
  output_file = output_file + x;
};

function writeln_file(x) {
  output_file = output_file + x + "\r\n";
};

function writeln_file_lf_only(x) {
  output_file = output_file + x + "\n";
};

function emit_file(filename) {
  fs.writeFileSync(filename, output_file);
  output_file = "";
};




// *** Main


function go() {

  //const infile_contents = fs.readFileSync("old_news.html");
  const infile_contents = fs.readFileSync("all_news.html");

  const infile_array = infile_contents.toString().split("\n");


  let cnt = 0;
  let n = 122;
  let txt = "";
  for (let i = 0; i < infile_array.length; i++) {
    const line = infile_array[i];
    const m = line.match(/<h3 id=\"([0-9_]+)\">([^<]+)/i);
    if (m) {
      txt += "    `);"
      writeln_file(txt);
      const filenum = ("0000" + n).slice(-4);
      emit_file("a_" + filenum + ".js");
      n--;
      cnt++;
      const id_split = m[1].split("_");
      const year = parseInt(id_split[0], 10);
      const month = parseInt(id_split[1], 10);
      const day = parseInt(id_split[2], 10);
      const title_split = m[2].split(":");
      let title = (title_split[1] === undefined) ? "News" : title_split[1];
      title = title.trim();
      txt = `article( // #${n}\n    ${day}, ${month}, ${year},\n    \`${title}\`,\n    \`\n`;
    }
    else {
      if (!(/<br>/.test(line)) || /[A-Zc-q0-9]/.test(line)) {
        txt += "            " + line + "\n";
      };
    };
  };

  console.log(cnt + " articles.")


};




go();



