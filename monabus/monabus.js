
// *************************************************************************
// *   M O N A B U S , A BUSINESS SIMULATION EXERCISE RY W. L. BROWN JR.   *
// *     FOR THE IBM 1620, 40K OR LARGER, CARD ORIENTED SYSTEM DATE 3-66   *
// *************************************************************************
// *   Translation to JavaScript by Norbert Kehrer in April 2020.          *
// *************************************************************************


// *** Number of firms is variable (in the orignal it is fixed with three firms)

let NR_OF_FIRMS = 3;


// *****************************************************************
// *   The Industry and its parameters and methods
// *****************************************************************

function Industry(industry, nr_of_firms) {

  let EX = 2.25; // Economic index
  let BPQ = 0; // Price-quality index
  let BMK = 0; // Marketing index
  let BSD = 0; // Styling and design index
  let ASP = 0; // Average potential sales
  let ZTM = 0; // Total market determination
  let TIS = 0; // Total industry sales

  let firms = [];


  // *** Constructor

  // Create the firms
  for (let i = 0; i < nr_of_firms; i++) {
    firms.push(Firm(industry, i));
  };

  // *** end of constructor


  function read_economic_index() {
    // Get user input
    EX = input("ex"); // Economic index
    // Print out the entered value
    print(`Economic Index for Next Period: ${EX}`);
    print("======================================================================================");
  };


  function sum(arr, variable) {
    return arr.reduce((acc, curr) => curr[variable]() + acc, 0);
  };

  function average(arr, variable) {
    return (sum(arr, variable) / arr.length) || 0;
  };


  function calculate_industry_data_1() {
    // INDUSTRY PRICE-QUALITY INDEX = BPQ
    BPQ = average(firms, "APQ");
    // INDUSTRY MARKETING INDEX = RMK
    BMK = average(firms, "AMK");
    // INDUSTRY STYLING AND DESIGN INDEX = BSD 
    BSD = average(firms, "ASD");
    // INDUSTRY AVERAGE POTENTIAL SALES PER FIRM = ASP
    ASP = (22000 * EX * (9 - BPQ) * (7 - BPQ) * (BMK + 10000) * (BSD + 50000)) / ((BMK + 100000) * (BSD + 200000)); // ist hier ein Tippfehler ??????????????????
  };

  function calculate_industry_data_2() {
    // TOTAL MARKET DETERMINATION FACTOR = ZTM
    ZTM = (ASP * 3) / sum(firms, "ZMS");
  };


  function calculate_industry_data_3() {
    // TOTAL INDUSTRY SALES = TIS
    TIS = sum(firms, "AS");
  };


  function for_all_firms(func, parameter) {
    for (let i = 0; i < firms.length; i++) {
      firms[i][func](parameter);
    };
  };


  function simulate_period(p) {
    if (p !== "first") {
      read_economic_index();
      for_all_firms("read_decision");
    };
    for_all_firms("simulate_1", EX);
    calculate_industry_data_1();
    for_all_firms("simulate_2", EX);
    calculate_industry_data_2();
    for_all_firms("simulate_3", ZTM);
    calculate_industry_data_3();
    for_all_firms("simulate_4", TIS);
  };


  function simulate_next_period() {
    simulate_period("next");
  };


  function simulate_first_period() {
    simulate_period("first");
  };


  // *** Interface to the outside 
  return {
    "simulate_first_period": simulate_first_period,
    "simulate_next_period": simulate_next_period,
  };



};



// *****************************************************************
// *   The Firm and its parameters and methods
// *****************************************************************

function Firm(industry, firm) {
  // This is the preset for the first history at the start of the game
  let HAPQ = 3.25; // Price/quality
  let HAMK = 230000; // Marketing
  let HASD = 165000; // Styling and design
  let HINV = 150000; // Inventory
  let HCAP = 450000; // Capacity
  let HCASH = 2500000;  // Cash
  let HDEBT = 0;  // Debt
  let HIUV = 3.00;  // Inventory unit value
  let IND = industry;
  let IFIRM = firm;
  let IQTR = 0;
  // This is the preset for the first decisions of the firms
  let XPR = 6.25; // Price
  let XQT = 3.00; // Quality
  let XMK = 230000;  // Marketing
  let XSD = 165000;  // Styling and Design
  let XPV = 430000;  // Production Volume 
  let XIP = 225000;  // Investment in Plant
  let XDP = 0;  // Debt Payment
  let APQ = 0;
  let DUMA = 0;
  let DUMB = 0;
  let AMK = 0;
  let ASD = 0;
  let ZMS = 0;
  let PSF = 0;
  let AST = 0;
  let AS = 0;
  let AINV = 0;
  let CAP = 0;
  let SREV = 0;
  let FCPU = 0;
  let TMNC = 0;
  let AIUV = 0;
  let CIV = 0;
  let EIV = 0;
  let BICC = 0;
  let DEXP = 0;
  let ADEXP = 0;
  let DBEXP = 0;
  let TEXP = 0;
  let PBIT = 0;
  let TNP = 0;
  let CEXP = 0;
  let TDIS = 0;
  let ACASH = 0;
  let CASH = 0;
  let PNET = 0;
  let TXDA = 0;
  let TXDB = 0;
  let DEBT = 0;
  let OEQT = 0;


  function save_history() {
    HAPQ = APQ; // Price/quality
    HAMK = AMK; // Marketing
    HASD = ASD; // Styling and design
    HINV = AINV; // Inventory
    HCAP = CAP; // Capacity
    HCASH = CASH;  // Cash
    HDEBT = DEBT;  // Debt
    HIUV = AIUV;  // Inventory unit value
  };


  function read_decision() {
    XPR = input("xpr_" + IFIRM); // Price
    XQT = input("xqt_" + IFIRM); // Quality
    XMK = input("xmk_" + IFIRM);  // Marketing
    XSD = input("xsd_" + IFIRM);  // Styling and Design
    XPV = input("xpv_" + IFIRM);  // Production Volume 
    XIP = input("xip_" + IFIRM);  // Investment in Plant
    XDP = input("xdp_" + IFIRM);  // Debt Payment 
  };


  function not_more_than(n, limit) {
    return (n > limit) ? limit : n;
  };

  function not_less_than(n, limit) {
    return (n < limit) ? limit : n;
  };


  function simulate_1() {
    // PRICE-QUALITY INDEX = APQ(I) 
    XPR = not_more_than(XPR, 9.99);
    XQT = not_less_than(XQT, 3);

    DUMA = XPR - XQT;
    DUMA = not_less_than(DUMA, 0.05);  // I think, here was a bug in Walter's program, which I corrected: "IF(DUMA(A))..." was used instead of "IF(DUMA(A)-.05)..."
    DUMB = (DUMA + HAPQ) / 2;
    APQ = Math.max(DUMA, DUMB);

    // MARKETING INDEX = AMK(I) 
    AMK = (0.7 * XMK) + (0.3 * HAMK);
    AMK = not_more_than(AMK, 399000);

    //STYLING AND DESIGN INDEX = ASD(I) 
    ASD = (0.3 * XSD) + (0.7 * HASD);
    ASD = not_more_than(ASD, 399000);
  };


  function simulate_2(EX) {
    // FIRM MARKET SHARE WEIGHTING FACTOR = ZMS(I) 
    ZMS = ((30 * EX * Math.pow(7 - APQ, 2)) * (AMK + 100000) * (ASD + 100000)) / Math.pow(500000, 2);
  };


  function simulate_3(ZTM) {
    // POTENTIAL SALES PER FIRM = PSF(I)
    PSF = ZMS * ZTM;
    // AVAILABLE STOCK PER FIRM = AST(I)
    XPV = not_more_than(XPV, HCAP);
    AST = HINV + XPV;
    // ACTUAL SALES PER FIRM = AS(I)
    AS = Math.min(AST, PSF);
  };


  function simulate_4(TIS) {
    // ACCOUNTING FOR EACH FIRM 
    // ENDING INVENTORY = AINV(I) 
    AINV = AST - AS;
    // CAPACITY NEXT QUARTER = CAP(I) 
    CAP = (0.975 * HCAP) + (0.05 * XIP);
    // SALES REVENUE = SREV(I) 
    SREV = XPR * AS;
    // MANUFACTURING COST PER UNIT = FCPU(I) 
    FCPU = XQT - ((ASD + 1000) / (ASD + 500000));
    // TOTAL MANUFACTURING COSTS = TMNC(I) 
    TMNC = FCPU * XPV;
    // INVENTORY UNIT VALUE = AIUV(I) 
    AIUV = (HIUV + FCPU) / 2;
    // CHANGE IN INVENTORY VALUE = CIV(I) 
    CIV = AIUV * (HINV - AINV);
    // INVENTORY VALUE = EIV(I) 
    EIV = AIUV * AINV;
    // INVENTORY CARRYING CHARGE = BICC(I) 
    BICC = EIV * 0.06;
    // DEPRECIATION EXPENSE = DEXP(I) 
    DEXP = HCAP * 0.5;
    // ADMINISTRATION AND SELLING EXPENSE = ADEXP(I) 
    ADEXP = 400000 + (0.2 * HCAP) + (0.04 * SREV);
    // DEBT EXPENSE = DEXP(I) 
    DBEXP = HDEBT * 0.06;
    // TOTAL EXPENSES = TEXP(I) 
    TEXP = TMNC + BICC + DEXP + ADEXP + DBEXP + XMK + XSD + CIV;
    // PROFIT BEFORE TAXES = PBIT(I) 
    PBIT = SREV - TEXP;
    // NET PROFIT = TNP(I) 
    TNP = PBIT * 0.5;
    // CASH EXPENSES = CEXP(I) 
    CEXP = TEXP - (CIV + DEXP);
    // TOTAL DISBURSMENTS = TDIS(I) 
    TDIS = CEXP + TNP + XIP + XDP;
    // ADDITION TO CASH = ACASH(I) 
    ACASH = SREV - TDIS;
    // NET CASH = CASH(I) 
    CASH = HCASH + ACASH;
    // PLANT VALUE = PNET(I) 
    PNET = CAP * 20;
    // DEBT DETERMINATION 
    TXDA = TMNC + XMK + XSD + XIP + XDP - HCASH;
    TXDA = not_less_than(TXDA, 0);
    if (CASH < 0) {
      TXDB = -CASH;
      CASH = 0;
    }
    else {
      TXDB = 0;
    };
    DEBT = HDEBT + TXDA + TXDB - XDP;
    // OWNERS EQUITY = OEQT(I) 
    OEQT = CASH + EIV + PNET - DEBT;
    // PRINT RESULTS
    print("MONABUS");
    print("");
    print(`INDUSTRY NUMBER  ${fi(1, IND)}    FIRM NUMBER  ${fi(1, IFIRM + 1)}    PERIOD  ${fi(2, IQTR)}`);
    print("");
    print("");
    print(`INDUSTRY SALES                ${fi(16, TIS)}`);
    print(`POTENTIAL FIRM SALES          ${fi(16, PSF)}`);
    print(`ACTUAL FIRM SALES             ${fi(16, AS)}`);
    print(`ENDING INVENTORY              ${fi(16, AINV)}`);
    print(`INVENTORY UNIT VALUE         \$    ${ff(10, 2, AIUV)}`);
    print(`CAPACITY NEXT QUARTER         ${fi(16, CAP)}`);
    print(`PRICE                        \$    ${ff(10, 2, XPR)}`);
    print(`QUALITY                      \$    ${ff(10, 2, XQT)}`);
    print(`MARKETING                    \$ ${ff(16, 0, XMK)}`);
    print(`STYLING AND DESIGN           \$ ${ff(16, 0, XSD)}`);
    print(`PRODUCTION VOLUME             ${fi(16, XPV)}`);
    print(`INVESTMENT IN PLANT          \$ ${ff(16, 0, XIP)}`);
    print(`DEBT PAYMENT                 \$ ${ff(16, 0, XDP)}`);
    print("");
    print("");
    print("PROFIT AND LOSS");
    print("");
    print("");
    print(`SALES                                                                \$ ${ff(16, 0, SREV)}`);
    print("EXPENSES");
    print(`  MANUFACTURING COSTS        \$ ${ff(16, 0, TMNC)}`);
    print(`  ADM. AND SELLING           \$ ${ff(16, 0, ADEXP)}`);
    print(`  MARKETING                  \$ ${ff(16, 0, XMK)}`);
    print(`  STYLING AND DESIGN         \$ ${ff(16, 0, XSD)}`);
    print(`  DEPRECIATION               \$ ${ff(16, 0, DEXP)}`);
    print(`  REDUCTION IN INV. VALUE    \$ ${ff(16, 0, CIV)}`);
    print(`  INV. CARRYING CHARGE       \$ ${ff(16, 0, BICC)}`);
    print(`  INTEREST ON DEBT           \$ ${ff(16, 0, DBEXP)}`);
    print(`TOTAL                                                                \$ ${ff(16, 0, TEXP)}`);
    print("");
    print("");
    print(`PROFIT BEFORE TAXES                                                  \$ ${ff(16, 0, PBIT)}`);
    print(`NET PROFIT                                                           \$ ${ff(16, 0, TNP)}`);
    print("");
    print("");
    print("BALANCE SHEET");
    print("");
    print("");
    print(`CASH                                             \$ ${ff(16, 0, CASH)}`);
    print(`INVENTORY                                        \$ ${ff(16, 0, EIV)}`);
    print(`NET PLANT                                        \$ ${ff(16, 0, PNET)}`);
    print("");
    print(`DEBT                                             \$ ${ff(16, 0, DEBT)}`);
    print(`OWNER'S EQUITY                                   \$ ${ff(16, 0, OEQT)}                  -`);
    print("");
    print("======================================================================================");
    print("");
    // HISTORICAL DATA FOR NEXT PERIOD 
    IQTR++;
    save_history();
  };

  // *** Interface to the outside 
  return {
    "APQ": () => APQ,
    "AMK": () => AMK,
    "ASD": () => ASD,
    "ZMS": () => ZMS,
    "AS": () => AS,

    "read_decision": read_decision,
    "simulate_1": simulate_1,
    "simulate_2": simulate_2,
    "simulate_3": simulate_3,
    "simulate_4": simulate_4,
  };
};






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




// *** Printer output

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


function print(s) {
  println(s);
};



// *** Data entry forms

function append_text_node(parent, s) {
  const p = document.createElement("P");
  const t = document.createTextNode(s);
  p.appendChild(t);
  parent.appendChild(p);
};


function append_field(parent, firm, description, field_id, value) {
  // Description
  let row = parent.insertRow(-1);
  let c1 = row.insertCell(0);
  let t = document.createTextNode(description);
  c1.appendChild(t);
  // Input field
  let c2 = row.insertCell(1);
  let f = document.createElement("INPUT");
  f.setAttribute("type", "number");
  f.setAttribute("id", "input_" + field_id + "_" + firm);
  f.setAttribute("value", value);
  c2.appendChild(f);
};


function create_decision_form(industry, quarter, firm) {
  const form = document.createElement("DIV");
  form.classList.add("form");

  append_text_node(form, "MONABUS DECISION CARD FORM");
  append_text_node(form, `Industry ${industry}, Firm ${firm + 1}, Quarter ${quarter}`);

  const table = document.createElement("TABLE");
  form.appendChild(document.createElement("DIV").appendChild(table));

  append_field(table, firm, "Price", "xpr", 6.25);
  append_field(table, firm, "Quality", "xqt", 3);
  append_field(table, firm, "Marketing", "xmk", 230000);
  append_field(table, firm, "Styling and Design", "xsd", 165000);
  append_field(table, firm, "Production Volume", "xpv", 430000);
  append_field(table, firm, "Investment in Plant", "xip", 225000);
  append_field(table, firm, "Debt Payment", "xdp", 0);

  return form;
};


function create_decision_forms(industry, quarter, nr_of_firms) {
  for (let firm = 0; firm < nr_of_firms; firm++) {
    const form = create_decision_form(industry, quarter, firm);
    document.getElementById("forms").appendChild(form);
  };
};


function input(field) {
  return parseFloat(document.getElementById("input_" + field).value);
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



// *** Main

let industry = {};

function simulate_next_period() {
  print_out("<pre>");
  industry.simulate_next_period();
  print_out("</pre>");
  document.getElementById("print_out").innerHTML = print_out_text;
};



function main() {
  // Create the industry
  industry = Industry(1, 3);

  // Simulate first period
  clear_print_out();
  print_out("<pre>");
  industry.simulate_first_period();
  print_out("</pre>");
  document.getElementById("print_out").innerHTML = print_out_text;

  // Create the input forms
  create_decision_forms(1, 1, NR_OF_FIRMS);
};








