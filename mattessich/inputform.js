
// *************************************************************************
// *   Simulation of the Firm through a Budget Computer Program            *
// *   By Richard Mattessich.                                              *
// *   In collaboration with Paul A. Zitlau and Thomas C. Schneider.       *
// *   Published in 1964.                                                  *
// *************************************************************************
// *   Translation to JavaScript by Norbert Kehrer in August 2021.         *
// *************************************************************************



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





let inputElements = {};


function elementId(variableSpec) {
  let name = variableSpec[0];
  if (variableSpec.length > 1) {
    for (let i=1; i < variableSpec.length; i++) {
      name += "[" + variableSpec[i] + "]";
    };
  };
  return name;
};


function createInputField(id, value) {
  let f = document.createElement("INPUT");
  f.setAttribute("type", "number");
  f.setAttribute("id", id);
  f.setAttribute("value", value);
  return f;
};


function appendInputField(parent, variable) {
  // Text
  const label = inputDefinition[variable][0];
  let t = document.createTextNode(label + " ");
  // Label
  const id = "input_" + variable;
  const l = document.createElement("LABEL");
  l.setAttribute("for", id);
  l.appendChild(t);
  // Input
  const value = eval(variable); // I know, that this is bad
  const i = createInputField(id, value);
  inputElements[elementId([variable])] = i;
  // Paragraph
  const p = document.createElement("P");
  p.appendChild(l);
  p.appendChild(i);
  parent.appendChild(p);
};


function appendInputVector(parent, variable) {
  // get input definition
  const [varName, legend, start, end] = inputDefinition[variable];
  // HTML paragraph with everything in it
  const paragraph = document.createElement("P");
  parent.appendChild(paragraph);
  paragraph.appendChild(document.createElement("BR"));
  // overall headline
  const headline = document.createElement("SPAN");
  headline.appendChild(document.createTextNode(varName + ":"));
  headline.style.textDecoration = "underline";
  paragraph.appendChild(headline);
  paragraph.appendChild(document.createElement("BR"));
  // table of inputs with headlines
  const table = document.createElement("TABLE");
  // legend for columns
  const rowEl1 = table.insertRow();
  const colEl1 = rowEl1.insertCell();
  colEl1.style.textAlign = "center";
  let t1 = document.createTextNode(legend);
  colEl1.appendChild(t1);
  // headlines for columns
  for (let col = start; col <= end; col++) {
    const colEl = rowEl1.insertCell();
    colEl.style.textAlign = "center";
    let t = document.createTextNode(col);
    colEl.appendChild(t);
  };
  // legend for values
  const rowEl2 = table.insertRow();
  const colEl2 = rowEl2.insertCell();
  colEl2.style.textAlign = "center";
  let t2 = document.createTextNode("VALUE");
  colEl2.appendChild(t2);
  // input data
  for (let col = start; col <= end; col++) {
    const colEl = rowEl2.insertCell();
    colEl.style.textAlign = "center";
    const value = eval(variable + "[" + col + "]"); // I know, that this is bad
    const inputEl = createInputField("test", value);
    inputElements[elementId([variable, col])] = inputEl;
    colEl.appendChild(inputEl);
  };
  paragraph.appendChild(table);
};




function appendInputTable(parent, variable) {
  // get input definition
  const [varName, rowLegend, rowsStart, rowsEnd, colLegend, colsStart, colsEnd] = inputDefinition[variable];
  // HTML paragraph with everything in it
  const paragraph = document.createElement("P");
  parent.appendChild(paragraph);
  paragraph.appendChild(document.createElement("BR"));
  // overall headline
  const headline = document.createElement("SPAN");
  headline.appendChild(document.createTextNode(varName + ":"));
  headline.style.textDecoration = "underline";
  paragraph.appendChild(headline);
  paragraph.appendChild(document.createElement("BR"));
  // table of inputs with headlines
  const table = document.createElement("TABLE");
  // legend for columns
  const rowEl1 = table.insertRow();
  const colEl1a = rowEl1.insertCell();
  let t1a = document.createTextNode("");
  colEl1a.appendChild(t1a);
  const colEl1b = rowEl1.insertCell();
  colEl1b.colSpan = colsEnd - colsStart + 1;
  colEl1b.style.textAlign = "center";
  let t1b = document.createTextNode(colLegend);
  colEl1b.appendChild(t1b);
  // legend for rows
  const rowEl2 = table.insertRow();
  const colEl2 = rowEl2.insertCell();
  colEl2.style.textAlign = "center";
  let t2 = document.createTextNode(rowLegend);
  colEl2.appendChild(t2);
  // headlines for columns
  for (let col = colsStart; col <= colsEnd; col++) {
    const colEl = rowEl2.insertCell();
    colEl.style.textAlign = "center";
    let t = document.createTextNode(col);
    colEl.appendChild(t);
  };
  // input data
  for (let row = rowsStart; row <= rowsEnd; row++) {
    const rowEl = table.insertRow();
    const colEl = rowEl.insertCell();
    colEl.style.textAlign = "center";
    let t = document.createTextNode(row);
    colEl.appendChild(t);
    for (let col = colsStart; col <= colsEnd; col++) {
      const colEl = rowEl.insertCell();
      colEl.style.textAlign = "center";
      let value = 0;
      let varSpec = [variable, row, col];
      switch (variable) {
        case "slh":
          value = eval("slh[" + row + "]" + "[" + col + "][13]"); // I know, that this is bad
          varSpec = ["slh", row, col, 13];
          break;
        case "fok_1":
          value = eval("fok[" + row + "][1]" + "[" + col + "]"); // I know, that this is bad
          varSpec = ["fok", row, 1, col];
          break;
        case "fok_2":
          value = eval("fok[" + row + "][2]" + "[" + col + "]"); // I know, that this is bad
          varSpec = ["fok", row, 2, col];
          break;
        default:
          value = eval(variable + "[" + row + "]" + "[" + col + "]"); // I know, that this is bad
          break;
      };
      const inputEl = createInputField("test", value);
      inputElements[elementId(varSpec)] = inputEl;
      colEl.appendChild(inputEl);
    };
  };
  paragraph.appendChild(table);
};




function appendInput(parent, variable) {
  const def = inputDefinition[variable];
  if (def !== undefined) {
    switch (def.length) {
       case 1:
         appendInputField(parent, variable);
         break;
       case 4:
         appendInputVector(parent, variable);
         break;
       case 7:
         appendInputTable(parent, variable);
         break;
    };
  };
};


const inputDefinition = {
  "n": ["NUMBER OF PRODUCTS"],
  "jj": ["NUMBER OF MATERIALS USED"],
  "kk": ["NUMBER OF DEPARTMENTS"],
  "kp": ["NUMBER OF OPERATING DEPARTMENTS"],
  "ks": ["NUMBER OF SERVICE DEPARTMENTS"],
  "mm": ["NUMBER OF OPERATING EXPENSE ITEMS"],
  "m1": ["NUMBER OF OPERATING EXPENSE ITEMS REFERRING TO INDIRECT LABOR"],
  "m2": ["INDEX OF THE FIRST OPERATING EXPENSE ITEM REFERRING TO CASH EXPENDITURE"],
  "m3": ["INDEX OF THE LAST OPERATING EXPENSE ITEM REFERRING TO CASH EXPENDITURE"],
  "m4": ["INDEX OF THE FIRST OPERATING EXPENSE ITEM REFERRING TO DEPRECIATION"],
  "m5": ["INDEX OF THE LAST OPERATING EXPENSE ITEM REFERRING TO DEPRECIATION"],
  "ll": ["NUMBER OF FACTORY OVERHEAD COST ITEMS"],
  "l1": ["NUMBER OF FACTORY OVERHEAD COST ITEMS REFERRING TO INDIRECT LABOR"],
  "l2": ["INDEX OF THE FIRST FACTORY OVERHEAD COST ITEM REFERRING TO CASH EXPENDITURE"],
  "l3": ["INDEX OF THE LAST FACTORY OVERHEAD COST ITEM REFERRING TO CASH EXPENDITURE"],
  "l4": ["INDEX OF THE FIRST FACTORY OVERHEAD COST ITEM REFERRING TO NON-BUILDINGS DEPRECIATION"],
  "l5": ["INDEX OF THE LAST FACTORY OVERHEAD COST ITEM REFERRING TO NON-BUILDINGS DEPRECIATION"],
  "l6": ["INDEX OF THE FACTORY OVERHEAD COST ITEM REFERRING TO DEPRECIATION FOR BUILDINGS AND FIXTURES"],
  "psq": ["PLANNED SALES QUANTITY", "PRODUCT", 1, 10],
  "sk": ["SALES COEFFICIENT", "MONTH", 1, 13],
  "sp": ["SALES PRICE", "PRODUCT", 1, 10],
  "si": ["SALES INDEX", "PRODUCT", 1, 10],
  "pk": ["PRODUCT COEFFICIENT", "PRODUCT", 1, 10, "MONTH", 1, 13],
  "ei": ["ENDING INVENTORY OF FINISHED AND PARTLY FINISHED GOODS (EQUIV. UNITS)", "PRODUCT", 1, 10, "MONTH", 12, 12],
  "bi": ["BEGINNING INVENTORY OF FINISHED AND PARTLY FINISHED GOODS (EQUIV. UNITS)", "PRODUCT", 1, 10, "MONTH", 1, 1],
  "ucm": ["UNIT COST OF MATERIAL ($)", "MATERIAL", 1, 3, "MONTH", 1, 12],
  "pmk": ["PURCHASES - MATERIAL COEFFICIENT", "PRODUCT", 1, 10, "MATERIAL", 1, 3],
  "pmc": ["PURCHASES - MONTHLY COEFFICIENT", "MATERIAL", 1, 3, "MONTH", 1, 13],
  "slh": ["STANDARD LABOR HOURS IN MONTH 13", "PRODUCT", 1, 10, "DEPARTMENT", 1, 4],  // Special treatment needed - tensor
  "slc": ["STANDARD LABOR COST ($)", "DEPARTMENT", 1, 4],
  "oek": ["OPERATING EXPENSE COEFFICIENT", "PRODUCT", 1, 10, "OPERATING EXPENSE ITEM", 1, 5],
  "foe": ["FIXED OPERATING EXPENSES ($)", "OPERATING EXPENSE ITEM", 1, 5],
  "ffr": ["FIXED FACTORY OVERHEAD RATE ($)", "DEPARTMENT", 1, 6, "FACTORY OVERHEAD COST ITEM", 1, 12],
  "fpf": ["FIXED PART OF FACTORY OVERHEADS ($)", "FACTORY OVERHEAD COST ITEM", 1, 12],
  "vfr": ["VARIABLE OVERHEAD RATE", "DEPARTMENT", 1, 4, "FACTORY OVERHEAD COST ITEM", 1, 12],

  "fok_1": ["FACTORY OVERHEAD COEFFICIENT FOR SERVICE DEPARTMENT 1", "DEPARTMENT", 1, 6, "MONTH", 1, 12],  // Special treatment needed - tensor
  "fok_2": ["FACTORY OVERHEAD COEFFICIENT FOR SERVICE DEPARTMENT 2", "DEPARTMENT", 1, 6, "MONTH", 1, 12],  // Special treatment needed - tensor

  "rmmi": ["RAW MATERIAL MINIMUM INVENTORY LEVEL (UNITS)", "MATERIAL", 1, 3],
  "pmi": ["PRODUCT MINIMUM INVENTORY LEVEL (EQUIV. UNITS)", "PRODUCT", 1, 10],
  "tsvn": ["TOTAL SALES VOLUME OF (PAST) NOVEMBER ($)"],
  "tsvd": ["TOTAL SALES VOLUME OF (PAST) DECEMBER ($)"],
  "chb": ["CASH ON HAND AND IN BANK AT THE BEGINNING OF MONTH ($)", "MONTH", 1, 1],
  "csc": ["CASH SALES COEFFICIENT"],
  "ac1": ["ACCOUNTS RECEIVABLE COLLECTION COEFFICIENT--FOR SALES OF LAST MONTH"],
  "ac2": ["ACCOUNTS RECEIVABLE COLLECTION COEFFICIENT--FOR SALES PAST 1 MONTH"],
  "ar": ["ACCOUNTS RECEIVABLE", "MONTH", 1, 1],
  "re": ["RETAINED EARNINGS", "MONTH", 1, 1],
  "prmd": ["PURCHASES OF RAW MATERIAL OF (PAST) DECEMBER (UNITS)", "MATERIAL", 1, 3],
  "focn": ["FACTORY OVERHEAD COSTS OF (PAST) NOVEMBER ($)", "FACTORY OVERHEAD COST ITEM", 4, 9],
  "focd": ["FACTORY OVERHEAD COSTS OF (PAST) DECEMBER ($)", "FACTORY OVERHEAD COST ITEM", 4, 9],
  "rfr": ["REMAINING FINANCIAL (AND OTHER) REVENUES ($)", "MONTH", 1, 13],
  "fpc": ["FACTORY OVERHEAD PAYMENTS COEFFICIENT", "FACTORY OVERHEAD COST ITEM", 1, 12, "MATERIAL", 1, 3],
  "rfe": ["REMAINING FINANCIAL (AND OTHER) EXPENSES ($)", "MONTH", 1, 13],
  "sir": ["SHORT-TERM SECURITIES' INTEREST RATE", "MONTH", 1, 12],
  "slr": ["SHORT-TERM LOANS' INTEREST RATE", "MONTH", 1, 12],
  "oir": ["ORDINARY LONG-TERM LIABILITIES' INTEREST RATE", "MONTH", 1, 12],
  "pex": ["PREPAID EXPENSES' CHARGES ($)", "MONTH", 1, 12],
  "pix": ["PARTICIPATIONS AND INVESTMENTS--CHANGES ($)", "MONTH", 1, 12],
  "emx": ["EQUIPMENT AND MACHINERY'S CHANGES ($)", "MONTH", 1, 12],
  "hlx": ["HOLDINGS OF LAND'S CHANGES ($)", "MONTH", 1, 12],
  "bfx": ["BUILDINGS AND FIXTURES' CHANGES ($))", "MONTH", 1, 12],
  "abfx": ["ALLOWANCE FOR BUILDINGS AND FIXTURES' SPECIAL CHANGES ($)", "MONTH", 1, 12],
  "slx": ["SHORT-TERM LOANS' CHANGES ($)", "MONTH", 1, 12],
  "aex": ["ACCRUED EXPENSES--CHANGES ($)", "MONTH", 1, 12],
  "tllx": ["TOTAL LONG-TERM LIABILITIES' CHANGES ($)", "MONTH", 1, 12],
  "scx": ["STOCK CAPITAL CHANGES ($)", "MONTH", 1, 12],
  "pisx": ["PAID-IN SURPLUS' CHANGES ($)", "MONTH", 1, 12],
  "pi": ["PARTICIPATIONS AND INVESTMENTS ($)", "MONTH", 1, 1],
  "ppe": ["PREPAID EXPENSES ($)", "MONTH", 1, 1],
  "vmi": ["VALUE OF (DIRECT) MATERIAL INVENTORY ($)", "MONTH", 1, 1],
  "ss": ["SHORT-TERM SECURITIES ($)", "MONTH", 1, 1],
  "aar": ["ALLOWANCE FOR ACCOUNTS RECEIVABLE ($)", "MONTH", 1, 1],
  "em": ["EQUIPMENT AND MACHINERY ($)", "MONTH", 1, 1],
  "aem": ["ALLOWANCE FOR EQUIPMENT AND MACHINERY DEPRECIATION ($)", "MONTH", 1, 1],
  "hl": ["HOLDINGS OF LAND ($)", "MONTH", 1, 1],
  "bf": ["BUILDINGS AND FIXTURES ($)", "MONTH", 1, 1],
  "abf": ["ALLOWANCE FOR BUILDINGS AND FIXTURES ($)", "MONTH", 1, 1],
  "vp": ["VOUCHERS PAYABLE ($)", "MONTH", 1, 1],
  "sl": ["SHORT-TERM LOANS ($)", "MONTH", 1, 1],
  "ae": ["ACCRUED EXPENSES ($)", "MONTH", 1, 1],
  "tll": ["TOTAL LONG-TERM LIABILITIES ($)", "MONTH", 1, 1],
  "sc": ["STOCK CAPITAL ($)", "MONTH", 1, 1],
  "pis": ["PAID-IN SURPLUS ($)", "MONTH", 1, 1],
  "casmax": ["CASH MAXIMUM LEVEL ALLOWED ($)"],
  "casmin": ["CASH MINIMUM LEVEL DESIRED ($)"],
  "aemx": ["ALLOWANCE FOR EQUIPMENT AND MACHINERY--CHANGES ($)", "MONTH", 1, 12],
  "dd": ["DIVIDENDS TO BE DECLARED ($)", "MONTH", 13, 13],
  "per": ["PREPAID EXPENSE REVERSAL ($)", "MONTH", 1, 12],
  "rmi": ["RAW MATERIAL INVENTORY (UNITS)", "MATERIAL", 1, 3, "MONTH", 1, 1],
  "ssx": ["SHORT-TERM SECURITIES' SPECIAL CHANGES ($)", "MONTH", 1, 12],
  "puco": ["PRODUCT UNIT COST AT BEGINNING OF BUDGET PERIOD", "PRODUCT", 1, 10],
  "ucmo": ["UNIT COST OF MATERIAL OF BEGINNING INVENTORY ($)", "MATERIAL", 1, 3]
};






let theInputs;

function createInputForm() {
  inputArea = document.getElementById("inputs");

  datain();

  Object.keys(inputDefinition).forEach((variable) => {
    appendInput(inputArea, variable);
  });
};



function readInputs() {
  Object.keys(inputElements).forEach((name, index) => {
    const inputElement = inputElements[name];
    eval(name + " = " + parseFloat(inputElement.value));   // I know, that it is very bad
  });
};











