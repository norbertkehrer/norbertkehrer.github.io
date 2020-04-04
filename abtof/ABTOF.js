// *********************************************************************************
// *  A Behavioral Theory of the Firm                                              *
// *********************************************************************************
// *  Simulation of two firms in a duopoly market.                                 *
// *********************************************************************************
// *  Theory and original program by Richard M. Cyert and James G. March in 1962.  *
// *  Ported to JavaScript by Norbert Kehrer in 2020.                              *
// *********************************************************************************


// ******************************************
// *  "Emulation " Environment
// ******************************************

let PC = 0;								// Program Counter

let program_is_running = false;			// Flag for halting

let record_to_be_read_next = 0;			// next record to be read by the READ command

let stack = [];							// Stack for loops


// Stack frame for loops

function stack_frame(loop_pc, an_array, an_index, step_width, end_val) {
	this.pc = loop_pc;
	this.index_array = an_array;
	this.index_index = an_index;
	this.step = step_width;
	this.end_value = end_val;
};


let queue = [];							// Queue for formatted output

function enqueue(x) {
	queue.push(x);
};

function dequeue() {
	return queue.shift();
};


// n IS HIGHEST STATEMENT NUMBER (highest statement declaration)

function is_highest_statement_number(n) {
	// declares the highest statement number for the 20-GATE compiler.	
};


// ABCONS (absolute constants declaration)

function abcons(n) {
	// declares number of absolute constants for the 20-GATE compiler.	
};


// DIMENSION (array declaration)

function dimension(n) {
	let a = [];
	for (let i = 0; i <= n; i++) {
		a[i] = 0;
	};
	return a;
};


// Start of a loop

function do_loop(loop_pc, an_array, an_index, start_value, step, end_value) {
	an_array[an_index] = start_value;
	stack.push(new stack_frame(loop_pc, an_array, an_index, step, end_value));
};


// End of a loop

function end_loop() {
	let frame = stack.pop();

	let new_index = frame.index_array[frame.index_index] + frame.step;

	frame.index_array[frame.index_index] = new_index;

	if (new_index <= frame.end_value) {
		stack.push(frame);
		PC = frame.pc;
		return true;
	}
	else
		return false;
};



// GO TO not yet considered harmful back in 1962

function go_to(line_number) {
	PC = line_number;
};


// DATA in the punch card to be read by READ

let data_retrieval_function = {};

function get_data_value(array_name, index, default_value) {
	data_function_name = array_name + "/" + index;
	if (data_retrieval_function.hasOwnProperty(data_function_name)) {
		const data_function = data_retrieval_function[data_function_name];
		if (typeof data_function === "function") {
			return data_function();
		};
	};
	return default_value;
};

function data(array_name, arr, index, data_arr) {
	for (let i = 0; i < data_arr.length; i++) {
		arr[index + i] = get_data_value(array_name, index + i, data_arr[i]);
	};
};


// HALT command

function halt() {
	program_is_running = false;
};



// Subroutine LIST.

function list(argument) {
	// ???
};


// Subroutine RAND.

let rand_seed = 1966;

function seeded_random(max) {
	rand_seed = (rand_seed * 9301 + 49297) % 233280;
	const rnd = rand_seed / 233280;
	return rnd * max;
};

function rand(seed_array, seed_index, max) {
	rand_seed = seed_array[seed_index];
	const r = seeded_random(max);
	seed_array[seed_index] = rand_seed;
	return r;
};


// Exponentiation function

function pow(x, y) {
	return Math.pow(x, y);
};


// Function for conversion to fixed number

function fixed(x) {
	return Math.floor(x);
};


// Functions for formatted printing

let print_column = 0;


function f_t(s) {						// Text
	print_column += s.length;
	return s;
};


function f_s(n) {						// Spaces
	let s = "";
	for (let ii = 0; ii < n; ii++)
		s += " ";
	print_column += n;
	return s;
};


function f_e() {						// New line
	print_column = 0;
	return "\n";
};


function f_d(n, before, after) {		// Decimal number n=number, before=digits before dot, after=digits after dot
	const s = n.toFixed(after);
	let total_length = before + after + 1;
	if (after === 0)
		total_length--;
	let missing_spaces = total_length - s.length;
	if (missing_spaces > 0)
		return f_s(missing_spaces) + f_t(s);
	else
		return f_t(s);
};


function f_m(n, before, after) {		// Amount n=number, before=digits before dot, after=digits after dot
	const s = "$" + n.toFixed(after);
	let total_length = before + after + 1 + 1;
	if (after === 0)
		total_length--;
	let missing_spaces = total_length - s.length;
	if (missing_spaces > 0)
		return f_s(missing_spaces) + f_t(s);
	else
		return f_t(s);
};


function f_r(n) {					// Position to row n
	if (n > print_column)
		return f_s(n - print_column);
	else
		return "";
};


// Printer functions

let print_out_text = "";


function clear_print_out(s) {
	print_out_text = "";
};

function print_out(s) {
	print_out_text += s;
};


function println(s) {
	print_out_text += s + "<br>";
};


function format_array_el(name, index, value) {
	let s = (name + index + "    ").substring(0, 3) + "    ";
	s += (value + "                                  ").substring(0, 32);
	return s;
};

function print_array(name, arr, from, to) {
	for (let i = from; i <= to; i += 2) {
		let s = "    ";
		s += format_array_el(name, i, arr[i]);
		if (i < to) {
			s += "    ";
			s += format_array_el(name, i + 1, arr[i + 1]);
		};
		println(s);
	};
};

function no_detailed_print() {
	return (!document.getElementById("detailed_printout").checked);
};


// ******************************************
// * Statistics
// ******************************************

let statistics = {};
let statistics_variables = [];
let statistics_everything = [];
let statistics_regression = [];


function init_statistics() {
	statistics_variables = [
		// per firm
		[c, 58, "goal_sales", "Sales Goal"],
		[c, 55, "perf_sales", "Sales Performance"],
		[c, 68, "goal_market_share", "Market Share Goal"],
		[c, 65, "perf_market_share", "Market Share Performance"],
		[c, 78, "goal_profit", "Profit Goal"],
		[c, 75, "perf_profit", "Profit Performance"],
		[c, 0, "price", "Price"],
		[c, 30, "output", "Output"],
		[c, 10, "org_slack", "Organizational Slack"],
		[c, 62, "sales_slack", "Sales Slack"],
		[c, 40, "inventory", "Inventory"],
		[c, 20, "cost_level", "Cost Level"],
		[c, 16, "promotion", "Promotion"],
		[c, 42, "excess_level", "Excess Level"],
		[c, 44, "runout_level", "Runout Level"],
		[c, 28, "lower_prod_limit", "Lower Production Limit"],
		[c, 26, "upper_prod_limit", "Upper Production Limit"],
		// general - but stored per firm (I was lazy)
		[z, 0, "gnp", "Gross National Product"],
		[z, 2, "demand", "Demand"]
	];
};


function update_statistics(firm) {
	for (let i = 0; i < statistics_variables.length; i++) {
		const prog_var = statistics_variables[i][0];
		const prog_index = statistics_variables[i][1];
		const stat_var = statistics_variables[i][2];
		if (!statistics.hasOwnProperty(stat_var)) {
			statistics[stat_var] = [[], []];
		};
		statistics[stat_var][firm - 1].push(prog_var[prog_index]);
	};
};


function update_run_statistics(program_run) {
	// fill statistics table for regression analysis
	let stat = [];
	for (let i = 0; i < 51; i++) {
		stat.push(x[i]);
	};
	statistics_regression.push(stat);
	// fill statistics table for all data
	for (let period = 0; period < 50; period++) {
		stat = [program_run, period + 1];
		for (let firm = 0; firm < 2; firm++) {
			for (let i = 0; i < statistics_variables.length; i++) {
				const stat_var = statistics_variables[i][2];
				stat.push(statistics[stat_var][firm][period]);
			};
		};
		statistics_everything.push(stat);
	};
};


function clear_statistics() {
	statistics = {};
};


function clear_run_statistics() {
	statistics_everything = [];
	statistics_regression = [];
};




// ******************************************
// * Graph
// ******************************************

const graph_width = 700;
const graph_height = 500;

let variable_selected_for_graph = "";

function build_graph_lines(variable) {
	// calculate maximum and minimum
	let max = statistics[variable][0][0];
	let min = max;
	for (let firm = 0; firm < 2; firm++) {
		for (let period = 0; period < 50; period++) {
			const value = statistics[variable][firm][period];
			max = Math.max(max, value);
			min = Math.min(min, value);
		};
	};
	let add_to_value = 0;
	let spread = max;
	if (min < 0) {
		add_to_value = -min;
		spread = max - min;
	};
	// generate points of the line (should be only positive numbers)
	for (let firm = 0; firm < 2; firm++) {
		let s = "";
		for (let period = 0; period < 50; period++) {
			const step_width = graph_width / 50;
			const value = graph_height - (statistics[variable][firm][period] + add_to_value) * graph_height / spread;
			s += (step_width * period) + "," + value + " ";
		};
		document.getElementById("line" + firm).setAttribute("points", s);
	};
	const min_output = (Math.abs(min) < 10 ? Math.floor(min * 100) / 100 : Math.floor(min));
	const max_output = (Math.abs(max) < 10 ? Math.floor(max * 100) / 100 : Math.floor(max));
	document.getElementById("graph_lower_limit").innerHTML = (min >= 0 ? "0" : min_output);
	document.getElementById("graph_upper_limit").innerHTML = max_output;
};


function select_variable_for_graph(event) {
	variable_selected_for_graph = event.target.value;
	build_graph_lines(variable_selected_for_graph);
};


function init_graph() {
	// Selection of variable for graph
	const graph_select = document.getElementById("graph_var");
	graph_select.addEventListener("change", select_variable_for_graph, false);

	for (let i = 0; i < statistics_variables.length; i++) {
		const stat_var_name = statistics_variables[i][2];
		const stat_var_descr = statistics_variables[i][3];
		let opt = document.createElement("option");
		opt.value = stat_var_name;
		opt.innerHTML = stat_var_descr;
		graph_select.appendChild(opt);
	};

	// Graph
	const colors = ["#ff0000", "#0000ff"];

	// Create svg element
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", graph_width);
	svg.setAttribute("height", graph_height);
	svg.setAttribute("style", "border-left: 2px solid black; border-bottom: 2px solid black;");
	let line = [];
	for (let i = 0; i < 2; i++) {
		line[i] = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
		line[i].setAttribute("id", "line" + i);
		line[i].setAttribute("stroke", colors[i]);
		line[i].setAttribute("stroke-width", 3);
		line[i].setAttribute("fill", "none");
		svg.appendChild(line[i]);
	};

	// Attach the svg to a element on page
	document.getElementById("graph").appendChild(svg);

	// Draw graph for first variable of statistics initially
	variable_selected_for_graph = statistics_variables[0][2];

};




// ******************************************
// * Data table
// ******************************************

function generate_text_from_data_table(data_table, separator, decimal_point) {
	const crlf = "\r\n";
	let text = "";
	for (let i = 0; i < data_table.length; i++) {
		const stat = data_table[i];
		for (let j = 0; j < stat.length; j++) {
			text += (stat[j] + "").replace(".", decimal_point);
			if (j !== (stat.length - 1)) {
				text += separator;
			};
		};
		text += crlf;
	};
	return text;
};


function build_all_data(separator, decimal_point) {
	const crlf = "\r\n";

	// headline
	let text = "Program Run" + separator + "Period" + separator;
	for (let firm = 0; firm < 2; firm++) {
		for (let i = 0; i < statistics_variables.length; i++) {
			const var_name = statistics_variables[i][3];
			text += ("Firm " + (firm + 1) + " " + var_name);
			if (i !== (statistics_variables.length - 1) || (firm === 0)) {
				text += separator;
			};
		};
	};
	text += crlf;

	// data
	text += generate_text_from_data_table(statistics_everything, separator, decimal_point);

	return text;
};


function build_regression_data(separator, decimal_point) {
	const crlf = "\r\n";

	const data_description = [
		"X0",
		"alpha_1",
		"alpha_2",
		"alpha_3",
		"alpha_4",
		"alpha_5",
		"alpha_6",
		"alpha_8",
		"alpha_9",
		"alpha_10",
		"alpha_11",
		"a_1",
		"c_1",
		"X13",
		"eta",
		"gamma_1",
		"gamma_2",
		"gamma_3",
		"gamma_4",
		"gamma_6",
		"beta_1",
		"beta_2",
		"beta_3",
		"beta_4",
		"beta_5",
		"Delta",
		"pi",
		"variable firm mean price periods 46-50",
		"variable firm mean inventory periods 46-50",
		"variable firm mean market share periods 46-50",
		"variable firm mean profit periods 46-50",
		"variable firm mean price periods 41-50",
		"variable firm mean inventory periods 41-50",
		"variable firm mean market share periods 41-50",
		"variable firm mean profit periods 41-50",
		"variable firm mean price periods 26-50",
		"variable firm mean inventory periods 26-50",
		"variable firm mean market share periods 26-50",
		"variable firm mean profit periods 26-50",
		"fixed firm mean price periods 46-50",
		"fixed firm mean inventory periods 46-50",
		"fixed firm mean market share periods 46-50",
		"fixed firm mean profit periods 46-50",
		"fixed firm mean price periods 41-50",
		"fixed firm mean inventory periods 41-50",
		"fixed firm mean market share periods 41-50",
		"fixed firm mean profit periods 41-50",
		"fixed firm mean price periods 26-50",
		"fixed firm mean inventory periods 26-50",
		"fixed firm mean market share periods 26-50",
		"fixed firm mean profit periods 26-50",
	];

	// headline
	let text = "";
	for (let i = 0; i < 51; i++) {
		text += ("X" + i + " (" + data_description[i] + ")");
		if (i !== 50) {
			text += separator;
		};
	};
	text += crlf;

	// data
	text += generate_text_from_data_table(statistics_regression, separator, decimal_point);
	return text;
};



function download_data(data_generator, filename, separator, decimal_point) {
	const text = data_generator(separator, decimal_point);
	const element = document.createElement("a");
	element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
	element.setAttribute("download", filename + ".csv");

	element.style.display = "none";
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
};




// ******************************************
// * Main Program
// ******************************************

let number_of_simulation_runs = 1;


function set_type_of_background_info(info_type) {
	switch (info_type) {
		case "short":
			document.getElementById("background_info_short").style.display = "block";
			document.getElementById("background_info_long").style.display = "none";
			break;
		case "long":
			document.getElementById("background_info_short").style.display = "none";
			document.getElementById("background_info_long").style.display = "block";
			break;
	};
};


function run_program_button() {
	const nr_of_runs = Math.floor(document.getElementById("nr_of_runs").value);
	const format_dot = document.getElementById("format_dot").checked;
	const format_comma = document.getElementById("format_comma").checked;
	const download_regression_data = document.getElementById("download_regression_data").checked;
	const download_all_data = document.getElementById("download_all_data").checked;

	const [csv_separator, csv_decimal_point] = (format_dot ? [",", "."] : [";", ","]);

	number_of_simulation_runs = (nr_of_runs > 0) ? nr_of_runs : 1;
	run_simulation();
	if (download_regression_data) {
		download_data(build_regression_data, "abtof_regression", csv_separator, csv_decimal_point);
	};
	if (download_all_data) {
		download_data(build_all_data, "abtof_all", csv_separator, csv_decimal_point);
	};
};


function run_simulation() {
	clear_statistics();
	clear_run_statistics();
	clear_print_out();
	print_out("<pre>");
	run();
	print_out("</pre>");
	document.getElementById("print_out").innerHTML = print_out_text;
	build_graph_lines(variable_selected_for_graph);
};


function main() {
	data_retrieval_function["i/9"] = function () { return 0; };								// I9  ... Start value for counter for simulation runs
	data_retrieval_function["i/10"] = function () { return number_of_simulation_runs; };	// I10 ... Upper limit for counter for simulation runs
	init_statistics();
	init_graph();
	run_simulation();
};



