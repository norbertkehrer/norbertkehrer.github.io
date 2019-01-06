// ***
// ***
// *** Game Jam FH Salzburg, February 5-6, 2016
// ***
// ***
// ***  Written by Norbert Kehrer, http://memebers.aon.at/nkehrer
// ***
// ***




// *** Keyboard controls
var	keyCoin1		= false;
var	keyCoin2		= false;
var	keyCoin3		= false;
var	keyStart1		= false;
var	keyStart2		= false;
var	keyFire			= false;
var	keyRight		= false;
var	keyLeft			= false;
var	keyUp			= false;
var	keyDown			= false;



// *** Mouse position

var mouse_x = 0;
var mouse_y = 0;
var	mouse_has_moved = false;



// *** Game over mode
var in_game_over_mode = false;


// *** Error handler

window.onerror = emitErr;

function emitErr(msg, url, lno) {
	alert("Error: msg="+msg+" -- line="+lno);
};



// *** Get the canvas

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



// *** Get the audio files

var audio_buzzer = new Audio('buzzer.mp3');
var audio_power = new Audio('power.mp3');




// *** Globals

var world_width = 640;
var world_height = 480;

var counter = 0;
var time_left = 0;
var food_left = 0;

var level = 0;

var game_over = false;



// Origin
var ori_x = Math.round(world_width / 2);
var ori_y = Math.round(world_height / 2);;



// Player
var player_size = 40;
var player_speed = 8;
var sq_x = 100;
var sq_y = 100;

var player_is_colliding = false;


// Food

var food_list = [];
var food_size = 20;

// Poison

var poison_list = [];
var poison_size = 15;


// Scores

var	score = 0;
var	hi_score = 0;




// ***** Initialization

function init_game () {

	keyCoin1		= false;
	keyCoin2		= false;
	keyCoin3		= false;
	keyStart1		= false;
	keyStart2		= false;
	keyFire			= false;
	keyRight		= false;
	keyLeft			= false;
	keyUp			= false;
	keyDown			= false;

	score = 0;
	level = 0;

	mouse_has_moved = false;

	next_level();

};


// ***** Timer task

function timer_task () {
	time_left--;
	if (time_left < 0) {
		time_left = 0;
		game_over = true;
	};
};






// ***** Periodic task

function periodic_task () {

	// *** Do nothing, if game is over

	if (in_game_over_mode) {
		return;
	};

	// *** Input handling

	if (keyLeft) {
		sq_x -= player_speed;
		if (sq_x < 0) {
			sq_x = 0;
		};
	};

	if (keyRight) {
		sq_x += player_speed;
		if (sq_x > (world_width)) {
			sq_x = world_width;
		};
	};

	if (keyUp) {
		sq_y -= player_speed;
		if (sq_y < 0) {
			sq_y = 0;
		};
	};

	if (keyDown) {
		sq_y += player_speed;
		if (sq_y > (world_height)) {
			sq_y = world_height;
		};
	};

/*  // With the mouse it is bad

	if (mouse_has_moved) {
		mouse_has_moved = false;
		sq_x = Math.floor(mouse_x);
		sq_y = Math.floor(mouse_y);
	};
*/


	// *** Clear the screen

	ctx.canvas.width = ctx.canvas.width;
	ctx.fillStyle= "#000000"; 									// black for the background
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); 	// sets top left location points x,y and then width and height


	// *** Draw the food

	for (var i = 0; i < food_list.length; i++) {
		draw_food(food_list[i].x, food_list[i].y);
	};
	

	// *** Draw and move the poison
	for (var i = 0; i < poison_list.length; i++) {
		draw_poison(poison_list[i].x, poison_list[i].y);
		poison_list[i].x += poison_list[i].dx;
		poison_list[i].y += poison_list[i].dy;
		if ((poison_list[i].x < 2) || (poison_list[i].x > (world_width - poison_size - 2))) {
			poison_list[i].dx *= -1;
		};
		if ((poison_list[i].y < 2) || (poison_list[i].y > (world_height - poison_size - 2))) {
			poison_list[i].dy *= -1;
		};
	};
	

	// *** Draw the player
	draw_player(sq_x, sq_y);


	// *** Check player collision
	player_is_colliding = check_poison_collide();
	if (player_is_colliding) {
		// lose 25 secs of time per second of collision
		time_left -= 0.5;
		// play some sound
		audio_buzzer.play();
	};


	// *** Check if food was eaten
	for (var i = 0; i < food_list.length; i++) {
		var dx = food_list[i].x - sq_x;
		var dy = food_list[i].y - sq_y;
		var fp_diff = player_size - food_size + 8;
		if ((dx >= -8) && (dx <= fp_diff) && (dy >= -8) && (dy <= fp_diff)) {
			score += 10;
			audio_power.play();
			food_list.splice(i, 1);
		};
	};


	// *** Update High Score

	if (score > hi_score) {
		hi_score = score;
	};		


	// *** Draw scores
	ctx.font="bold 32px Arial";
	ctx.fillStyle= "#0080ff";
	//ctx.fillText("Level " + level, 40, 40);
	ctx.fillText("Time: " + Math.round(time_left), 40, 40);
	ctx.fillText("Hi Score: " + hi_score, world_width/2 - 110, 40);
	ctx.fillText("Score: " + score,	world_width - 190, 40);


	// *** Check, if level is complete
	if (food_list.length === 0) {
		score += Math.round(time_left);
		next_level();
	};


	// *** Check for GAME OVER
	if (time_left <= 0) {
		ctx.font="32px Arial";
		ctx.fillStyle= "blue";
		ctx.fillRect(160, 194, 320, 170);
		ctx.fillStyle= "yellow";
		ctx.fillText("*** GAME OVER ***", 180, 240);
		ctx.fillText("Click to play again", 190, 340);
		in_game_over_mode = true;
		init_game();
	};

};


// *** Game logic

function generate_food (n) {

	food_list.length = 0;

	for (var i = 0; i < n; i++) {
		var f = new Object();
		f.x = Math.random() * (world_width - food_size - 2);
		f.y = Math.random() * (world_height - food_size - 52) + 50;
		food_list.push(f);
	};

};


function generate_poison (n) {

	poison_list.length = 0;

	for (var i = 0; i < n; i++) {
		var f = new Object();
		f.x = Math.random() * (world_width - poison_size - 2);
		f.y = Math.random() * (world_height - poison_size - 2);
		f.dx = Math.random() * 2;
		f.dy = Math.random() * 2;
		// not too near to the origin
		if ((Math.abs(f.x - ori_x) < 50) || (Math.abs(f.y - ori_y) < 50)) {
			n++;
		}
		else {
			poison_list.push(f);
		};
	};

};

function check_poison_collide () {

	var px, py, d1_x, d1_y, d2_x, d2_y, diff;

	var collided = false;

	for (var i = 0; ((i < poison_list.length) && (collided === false)); i++) {

		// Check the line to the player
		px = poison_list[i].x;
		py = poison_list[i].y;
		d1_y = (sq_y - ori_y);
		d1_x = (sq_x - ori_x);
		d2_y = (py - ori_y);
		d2_x = (px - ori_x);
		diff = d1_y / d1_x - d2_y / d2_x;
		if (Math.abs(diff) < 0.05) {
			collided = true;
		};
		if ((d1_x < 0) && (d2_x >= 0)) {
			collided = false;
		};
		if ((d1_x > 0) && (d2_x <= 0)) {
			collided = false;
		};
		if ((d1_y < 0) && (d2_y >= 0)) {
			collided = false;
		};
		if ((d1_y > 0) && (d2_y <= 0)) {
			collided = false;
		};
		if (Math.abs(d1_x) < Math.abs(d2_x)) {
			collided = false;
		};
		if (Math.abs(d1_y) < Math.abs(d2_y)) {
			collided = false;
		};

		// check the player
		var x_overlaps = (is_between(px, sq_x, sq_x + player_size) || is_between(px + poison_size, sq_x, sq_x + player_size));
		var y_overlaps = (is_between(py, sq_y, sq_y + player_size) || is_between(py + poison_size, sq_y, sq_y + player_size));
		if (x_overlaps && y_overlaps) {
			collided = true;
		};
	};

	return collided;
};


function is_between (x, from, to) {
	return (x > from) && (x < to);
};



function next_level () {
	level++;

	generate_food (6 + 1 * level);

	generate_poison (6 + 2 * level);

	food_left = 0;

	time_left = 60;
};




// *** Drawing stuff

function draw_player (x, y) {
	if (player_is_colliding) {
		ctx.strokeStyle = '#ff1010';	// red for the lines
		ctx.lineWidth = 10;
	}
	else {
		ctx.strokeStyle = '#ffffff';	// white for the lines
		ctx.lineWidth = 4;
	};
	ctx.lineJoin="round";

	ctx.beginPath();
	ctx.moveTo(ori_x, ori_y);
	ctx.lineTo(x, y);
	ctx.lineTo(x+player_size, y);
	ctx.lineTo(x+player_size, y+player_size);
	ctx.lineTo(x, y+player_size);
	ctx.lineTo(x, y);
	ctx.stroke();

};



function draw_food (x, y) {
	ctx.fillStyle= "#00ff00";	// green for food
	ctx.fillRect(x, y, food_size, food_size);
};



function draw_poison (x, y) {
	ctx.fillStyle= "#ff0080";	// green for food
	ctx.beginPath();
	ctx.arc(x, y, poison_size*0.7, 0, Math.PI*2, true); 
	ctx.closePath();
	ctx.fill();

};

function draw_poison_old (x, y) {
	ctx.fillStyle= "#ff0080";	// green for food
	ctx.fillRect(x, y, poison_size, poison_size);
};



function draw_square (x, y) {
	draw_shape (x, y, [
		[0, -20, -20],
		[1,   0, -40],
		[1,  40,   0],
		[1,   0,  40],
		[1, -40,   0],

		[0,  10, -10],
		[1,   0, -20],
		[1,  20,   0],
		[1,   0,  20],
		[1, -20,   0]
	], (x/500));
};


function draw_random_star (x, y) {

	if (Math.random() > 0.5) {
		draw_shape (x, y, [
				[1, 0, 1],
			],
			x/5);
	}
	else {
		draw_shape (x, y, [
			[1, 1, 0],
		],
		x/5);
	};
};


function draw_shape (x, y, lines, scaling_factor) {
	if (scaling_factor === undefined) {
		scaling_factor = 1;
	};
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#ffffff';	// white for the lines
	ctx.beginPath();
	ctx.moveTo(x, y);
	for (var i = 0; i < lines.length; i++) {
		x += lines[i][1]*scaling_factor;
		y += lines[i][2]*scaling_factor;
		if (lines[i][0] === 0) {
			ctx.moveTo(x, y);
		}
		else {
			ctx.lineTo(x, y);
		};
	};
	ctx.stroke();
};







// ***
// *** Keyboard and mouse handling
// ***

function keyPressed (e) {
	var keychar = "";
	if(window.event) { // Internet Explorer
		keynum = e.keyCode
	}
	else if(e.which) {// Netscape/Firefox/Opera
		keynum = e.which
	}
	processKey(keynum, true);
};

function keyReleased (e) {
	var keychar = "";
	if(window.event) { // Internet Explorer
		keynum = e.keyCode
	}
	else if(e.which) {// Netscape/Firefox/Opera
		keynum = e.which
	}
	processKey(keynum, false);
};


function processKey (keynum, pressed) {
	switch (keynum) {
		case 65: // A
		case 37:	keyLeft		= pressed;	break;

		case 68: // D
		case 39:	keyRight	= pressed;	break;

		case 87: // W
		case 38:	keyUp		= pressed;	break;

		case 83: // S
		case 40:	keyDown		= pressed;	break;

		case 32: // Space
		case 17:	keyFire		= pressed;	break;
		case 49:	keyStart1	= pressed;	break;
		case 50:	keyStart2	= pressed;	break;
		case 53:	keyCoin1	= pressed;	break;
		case 54:	keyCoin2	= pressed;	break;
		case 55:	keyCoin3	= pressed;	break;
		case 80:	
				alert("Game paused. Confirm to continue.");
				break;
	};
};



function mouseMoved (evt) {
	var rect = canvas.getBoundingClientRect();
	mouse_x = (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
	mouse_y = (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
	mouse_has_moved = true;

	return {
		x: mouse_x,
		y: mouse_y
	};
};

function clickMade () {
	in_game_over_mode = false;
};







// ***
// *** The main program
// ***


init_game();


setInterval(periodic_task, 20);	// 50 Hz clock


setInterval(timer_task, 1000);	// 1 Hz clock

// Bye

















// *** Various



function play_sound(sound_object) {
	if (sound_object.readyState > 0) {
		sound_object.pause();
		sound_object.currentTime = 0;
		sound_object.play();
	};
};

function play_sound_loop(sound_object) {
	if (sound_object.readyState > 0) {
		sound_object.play();
	};
};

function stop_sound_loop(sound_object) {
	if (sound_object.readyState > 0) {
		sound_object.pause();
		sound_object.currentTime = 0;
	};
};


function hex (x) { return "0x"+x.toString(16); };
function hexw (n) {
	var x = mem[n] | (mem[n+1]<<8);
	return "0x"+x.toString(16);
};


function sleep(ms) {
	var unixtime_ms = new Date().getTime();
	var unixtime_ms_go_on = unixtime_ms + ms;
	while(new Date().getTime() < unixtime_ms_go_on) {};	// I know, that it's bad
};



