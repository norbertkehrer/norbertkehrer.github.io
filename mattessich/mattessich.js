
// *************************************************************************
// *   Simulation of the Firm through a Budget Computer Program            *
// *   By Richard Mattessich.                                              *
// *   In collaboration with Paul A. Zitlau and Thomas C. Schneider.       *
// *   Published in 1964.                                                  *
// *************************************************************************
// *   Translation to JavaScript by Norbert Kehrer in August 2021.         *
// *************************************************************************


// *** Functions for formatted printing

function add_thousands_separators(s) {
  let num_parts = s.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
};


function fi(width, n) {
  let s = "                                       " + n.toFixed(0);
  s = add_thousands_separators(s);
  return s.substring(s.length - width);
};


function ff(width, decimals, n) {
  let s = "                                       " + n.toFixed(decimals);
  if (decimals === 0) {
    s += " ";
  };
  s = add_thousands_separators(s);
  return s.substring(s.length - width);
};


function fx(width) {
  return " ".repeat(width);
};


function fh(n) {
  switch (n) {
    case 0:
      return "<br>";
    case 1:
      return "<br><br>" + "*".repeat(120) + "<br><br>";
  };
};




// *** Printer output

let print_out_text = "";


function clear_print_out() {
  print_out_text = "";
};


function print_out(s) {
  print_out_text += s;
};


function println(s) {
  print_out_text += s + "<br>";
};


function write(s) {
  println(s);
};

function write_no_cr(s) {
  print_out(s);
};




// *** Background information

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



// *** Input parameters

function set_type_of_inputs(info_type) {
  switch (info_type) {
    case "short":
      document.getElementById("inputs_short").style.display = "block";
      document.getElementById("inputs_long").style.display = "none";
      break;
    case "long":
      document.getElementById("inputs_short").style.display = "none";
      document.getElementById("inputs_long").style.display = "block";
      break;
  };
};









// *** Main

function main() {
  clear_print_out();
  print_out("<pre>");

  // Main budget simulation program

  // * Call for data to be read into program
  datain();
  // * Call for sales budget to be prepared
  sales();
  // * Call for production budget to prepare production plan
  prod(1);
  // * Call for materials budget to be prepared
  mater();
  // * Call for labor budget to be prepared
  labor();
  // * Call for factory overhead budget to be prepared
  factry();
  // * Call for operating expense budget to be prepared
  operat();
  // * Call for production budget to be prepared
  prod(2);
  // * Call for cash budget to be prepared
  casbud();
  // * Call for income statement to be prepared
  instat();
  // * Call for position statement to be prepared
  postat();
  // * Call computer to terminate program

  print_out("</pre>");
  document.getElementById("print_out").innerHTML = print_out_text;
};


function reCalculate() {
  clearData();
  readInputs();
  main();
};


function run() {
  clearData();
  setExampleData();
  createInputForm();
  main();
};








