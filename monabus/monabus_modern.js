
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
  let economic_index = 2.25;
  let price_quality_index = 0;
  let marketing_index = 0;
  let styling_and_design_index = 0;
  let average_potential_sales = 0;
  let total_market_determination = 0;
  let total_industry_sales = 0;

  let firms = [];


  // *** Constructor: Create the firms
  for (let i = 0; i < nr_of_firms; i++) {
    firms.push(Firm(industry, i));
  };


  function read_economic_index() {
    // Get user input
    economic_index = input("ex");
  };


  function sum(arr, variable) {
    return arr.reduce((acc, curr) => curr[variable]() + acc, 0);
  };

  function average(arr, variable) {
    return (sum(arr, variable) / arr.length) || 0;
  };

  function calculate_market_determination() {
    price_quality_index = average(firms, "price_quality_index");
    marketing_index = average(firms, "marketing");
    styling_and_design_index = average(firms, "styling_and_design");
    average_potential_sales =
      (22000 * economic_index * (9 - price_quality_index) *
        (7 - price_quality_index) * (marketing_index + 10000) * (styling_and_design_index + 50000)) /
      ((marketing_index + 100000) * (styling_and_design_index + 200000));
    total_market_determination = (average_potential_sales * 3) / sum(firms, "market_share_weighting_factor");
  };


  function calculate_industry_sales() {
    total_industry_sales = sum(firms, "actual_sales");
  };


  function for_each_firm(func, parameter) {
    for (let i = 0; i < firms.length; i++) {
      firms[i][func](parameter);
    };
  };


  function simulate_period(p) {
    if (p !== "first") {
      read_economic_index();
      for_each_firm("read_decision");
    };
    for_each_firm("calculate_market_share", economic_index);
    calculate_market_determination();
    for_each_firm("calculate_sales", total_market_determination);
    calculate_industry_sales();
    for_each_firm("do_accounting_and_printing", total_industry_sales);
  };


  function simulate_next_period() {
    simulate_period("next");
  };


  function simulate_first_period() {
    simulate_period("first");
  };


  // Interface to the outside world
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
  let historic_price_quality_index = 3.25;
  let historic_marketing = 230000;
  let historic_styling_and_design = 165000;
  let historic_inventory = 150000;
  let historic_capacity = 450000;
  let historic_cash = 2500000;
  let historic_debt = 0;
  let historic_inventory_unit_value = 3.00;
  let industry_nr = industry;
  let firm_nr = firm;
  let quarter_nr = 0;
  // This is the preset for the first decisions of the firms
  let price = 6.25;
  let quality = 3.00;
  let marketing_decision = 230000;
  let styling_and_design_decision = 165000;
  let production_volume = 430000;
  let investment_in_plant = 225000;
  let debt_payment = 0;
  let price_quality_index = 0;
  let marketing = 0;
  let styling_and_design = 0;
  let market_share_weighting_factor = 0;
  let potential_sales = 0;
  let available_stock = 0;
  let actual_sales = 0;
  let inventory = 0;
  let capacity = 0;
  let sales_revenue = 0;
  let manufacturing_cost_per_unit = 0;
  let total_manufacturing_cost = 0;
  let inventory_unit_value = 0;
  let change_in_inventory_value = 0;
  let inventory_value = 0;
  let inventory_carrying_charge = 0;
  let depreciation_expense = 0;
  let administration_and_selling_expense = 0;
  let debt_expense = 0;
  let total_expenses = 0;
  let profit_before_tax = 0;
  let net_profit = 0;
  let cash_expenses = 0;
  let total_disbursements = 0;
  let addition_to_cash = 0;
  let cash = 0;
  let plant_value = 0;
  let cash_demand = 0;
  let negative_cash = 0;
  let debt = 0;
  let owners_equity = 0;


  function save_history() {
    historic_price_quality_index = price_quality_index;
    historic_marketing = marketing;
    historic_styling_and_design = styling_and_design;
    historic_inventory = inventory;
    historic_capacity = capacity;
    historic_cash = cash;
    historic_debt = debt;
    historic_inventory_unit_value = inventory_unit_value;
  };


  function read_decision() {
    price = input("price_" + firm_nr);
    quality = input("quality_" + firm_nr);
    marketing_decision = input("marketing_" + firm_nr);
    styling_and_design_decision = input("styling_and_design_" + firm_nr);
    production_volume = input("production_volume_" + firm_nr);
    investment_in_plant = input("investment_in_plant_" + firm_nr);
    debt_payment = input("debt_payment_" + firm_nr);
  };


  function not_more_than(n, limit) {
    return (n > limit) ? limit : n;
  };


  function not_less_than(n, limit) {
    return (n < limit) ? limit : n;
  };


  function calculate_market_share(economic_index) {
    price = not_more_than(price, 9.99);
    quality = not_less_than(quality, 3);

    let a = price - quality;
    a = not_less_than(a, 0.05);  // I think, here was a bug in Walter's program, which I corrected: "IF(a(A))..." was used instead of "IF(a(A)-.05)..."
    const b = (a + historic_price_quality_index) / 2;
    price_quality_index = Math.max(a, b);

    marketing = (0.7 * marketing_decision) + (0.3 * historic_marketing);
    marketing = not_more_than(marketing, 399000);

    styling_and_design = (0.3 * styling_and_design_decision) + (0.7 * historic_styling_and_design);
    styling_and_design = not_more_than(styling_and_design, 399000);

    market_share_weighting_factor = ((30 * economic_index * Math.pow(7 - price_quality_index, 2)) *
      (marketing + 100000) * (styling_and_design + 100000)) / Math.pow(500000, 2);
  };


  function calculate_sales(total_market_determination) {
    potential_sales = market_share_weighting_factor * total_market_determination;
    production_volume = not_more_than(production_volume, historic_capacity);
    available_stock = historic_inventory + production_volume;
    actual_sales = Math.min(available_stock, potential_sales);
  };


  function do_accounting_and_printing(total_industry_sales) {
    // Accounting
    inventory = available_stock - actual_sales;
    capacity = (0.975 * historic_capacity) + (0.05 * investment_in_plant);
    sales_revenue = price * actual_sales;
    manufacturing_cost_per_unit = quality - ((styling_and_design + 1000) / (styling_and_design + 500000));
    total_manufacturing_cost = manufacturing_cost_per_unit * production_volume;
    inventory_unit_value = (historic_inventory_unit_value + manufacturing_cost_per_unit) / 2;
    change_in_inventory_value = inventory_unit_value * (historic_inventory - inventory);
    inventory_value = inventory_unit_value * inventory;
    inventory_carrying_charge = inventory_value * 0.06;
    depreciation_expense = historic_capacity * 0.5;
    administration_and_selling_expense = 400000 + (0.2 * historic_capacity) + (0.04 * sales_revenue);
    debt_expense = historic_debt * 0.06;
    total_expenses = total_manufacturing_cost + inventory_carrying_charge + depreciation_expense +
      administration_and_selling_expense + debt_expense + marketing_decision + styling_and_design_decision + change_in_inventory_value;
    profit_before_tax = sales_revenue - total_expenses;
    net_profit = profit_before_tax * 0.5;
    cash_expenses = total_expenses - (change_in_inventory_value + depreciation_expense);
    total_disbursements = cash_expenses + net_profit + investment_in_plant + debt_payment;
    addition_to_cash = sales_revenue - total_disbursements;
    cash = historic_cash + addition_to_cash;
    plant_value = capacity * 20;
    // Debt determination
    cash_demand = total_manufacturing_cost + marketing_decision + styling_and_design_decision + investment_in_plant + debt_payment - historic_cash;
    cash_demand = not_less_than(cash_demand, 0);
    if (cash < 0) {
      negative_cash = -cash;
      cash = 0;
    }
    else {
      negative_cash = 0;
    };
    debt = historic_debt + cash_demand + negative_cash - debt_payment;
    owners_equity = cash + inventory_value + plant_value - debt;
    // Print decisions and results
    print_result(firm_nr, "decision_price", price);
    print_result(firm_nr, "decision_quality", quality);
    print_result(firm_nr, "decision_marketing", marketing_decision);
    print_result(firm_nr, "decision_styling_and_design", styling_and_design_decision);
    print_result(firm_nr, "decision_production_volume", production_volume);
    print_result(firm_nr, "decision_investment_in_plant", investment_in_plant);
    print_result(firm_nr, "decision_debt_payment", debt_payment);
    print_result(firm_nr, "total_industry_sales", total_industry_sales);
    print_result(firm_nr, "potential_sales", potential_sales);
    print_result(firm_nr, "actual_sales", actual_sales);
    print_result(firm_nr, "inventory", inventory);
    print_result(firm_nr, "inventory_unit_value", inventory_unit_value);
    print_result(firm_nr, "capacity", capacity);
    print_result(firm_nr, "sales_revenue", sales_revenue);
    print_result(firm_nr, "total_manufacturing_cost", total_manufacturing_cost);
    print_result(firm_nr, "administration_and_selling_expense", administration_and_selling_expense);
    print_result(firm_nr, "marketing_decision", marketing_decision);
    print_result(firm_nr, "styling_and_design_decision", styling_and_design_decision);
    print_result(firm_nr, "depreciation_expense", depreciation_expense);
    print_result(firm_nr, "change_in_inventory_value", change_in_inventory_value);
    print_result(firm_nr, "inventory_carrying_charge", inventory_carrying_charge);
    print_result(firm_nr, "debt_expense", debt_expense);
    print_result(firm_nr, "total_expenses", total_expenses);
    print_result(firm_nr, "profit_before_tax", profit_before_tax);
    print_result(firm_nr, "net_profit", net_profit);
    print_result(firm_nr, "cash", cash);
    print_result(firm_nr, "inventory_value", inventory_value);
    print_result(firm_nr, "plant_value", plant_value);
    print_result(firm_nr, "debt", debt);
    print_result(firm_nr, "owners_equity", owners_equity);
    print_industry_and_period(firm_nr, industry_nr, quarter_nr);
    // Historical data for next period 
    quarter_nr++;
    save_history();
  };

  // Interface to the outside world
  return {
    "price_quality_index": () => price_quality_index,
    "marketing": () => marketing,
    "styling_and_design": () => styling_and_design,
    "market_share_weighting_factor": () => market_share_weighting_factor,
    "actual_sales": () => actual_sales,
    "read_decision": read_decision,
    "calculate_market_share": calculate_market_share,
    "calculate_sales": calculate_sales,
    "do_accounting_and_printing": do_accounting_and_printing,
  };
};



// *****************************************************************
// *   All the input/output stuff for the browser
// *****************************************************************


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



// *** Input

function input(field) {
  return parseFloat(document.getElementById("input_" + field).value);
};



// *** Game table

let industry_indicator = {};
let period_counter = {};

function append_headline_rows(table, nr_of_firms, industry, quarter) {
  // Description
  let row = table.insertRow(-1);
  let c = row.insertCell(0);
  c.classList.add("gt_description");
  c.classList.add("gt_top_headline");
  let t = document.createTextNode("Industry " + industry);
  industry_indicator = t;
  c.appendChild(t);
  // Columns for firms
  for (let firm = 0; firm < nr_of_firms; firm++) {
    c = row.insertCell(-1);
    c.colSpan = 2;
    c.classList.add("gt_number");
    c.classList.add("gt_top_headline");
    t = document.createTextNode("Firm " + (firm + 1) + ":");
    c.appendChild(t);
  };
  // Second headline row
  row = table.insertRow(-1);
  c = row.insertCell(0);
  c.classList.add("gt_description");
  c.classList.add("gt_headline");
  t = document.createTextNode("Period " + quarter);
  period_counter = t;
  c.appendChild(t);
  // Columns for firms
  for (let firm = 0; firm < nr_of_firms; firm++) {
    c = row.insertCell(-1);
    c.classList.add("gt_number");
    c.classList.add("gt_headline");
    t = document.createTextNode("Actuals");
    c.appendChild(t);
    c = row.insertCell(-1);
    c.classList.add("gt_number");
    c.classList.add("gt_headline");
    t = document.createTextNode("Decision");
    c.appendChild(t);
  };
};


function append_decision_row(table, nr_of_firms, description, id, format, value) {
  // Description
  let row = table.insertRow(-1);
  let c = row.insertCell(0);
  c.classList.add("gt_description");
  let t = document.createTextNode(description);
  c.appendChild(t);
  // Columns for firms
  for (let firm = 0; firm < nr_of_firms; firm++) {
    // Value
    c = row.insertCell(-1);
    c.classList.add("gt_number");
    t = document.createTextNode(format_number(format, value));
    if (result_fields[firm] === undefined) {
      result_fields[firm] = {};
    };
    result_fields[firm]["decision_" + id] = { html_element: t, format: format };

    c.appendChild(t);
    // Input field
    c = row.insertCell(-1);
    c.classList.add("gt_number");
    let f = document.createElement("INPUT");
    f.setAttribute("type", "number");
    f.setAttribute("id", "input_" + id + "_" + firm);
    f.setAttribute("value", value);
    c.appendChild(f);
  };
};


function append_empty_row(table, nr_of_firms, description, row_type) {
  // Description
  if (description === "") {
    description = "\u00A0";
  };
  let row = table.insertRow(-1);
  let c = row.insertCell(0);
  c.classList.add("gt_description");
  if (row_type === "headline") {
    c.classList.add("gt_headline");
  };
  let t = document.createTextNode(description);
  c.appendChild(t);
  // Columns for firms
  for (let firm = 0; firm < nr_of_firms; firm++) {
    // Empty field
    c = row.insertCell(-1);
    c.classList.add("gt_number");
    t = document.createTextNode("");
    c.appendChild(t);
    // Empty field
    c = row.insertCell(-1);
    c.classList.add("gt_number");
    t = document.createTextNode("");
    c.appendChild(t);
  };
};



// *** Result printing

let result_fields = [];


function format_number(format, value) {
  switch (format) {
    case "quantity":
      return fi(16, value);
    case "amount":
      return fi(16, value);
    case "small_amount":
      return ff(12, 2, value);
    default:
      return "" + value;
  };
};


function print_result(firm, id, value) {
  const html_element = result_fields[firm][id].html_element;
  const format = result_fields[firm][id].format;
  html_element.nodeValue = format_number(format, value);
};


function append_result_row(table, nr_of_firms, description, id, format) {
  // Description
  let row = table.insertRow(-1);
  let c = row.insertCell(0);
  c.classList.add("gt_description");
  let t = document.createTextNode(description);
  c.appendChild(t);
  // Columns for firms
  for (let firm = 0; firm < nr_of_firms; firm++) {
    // Value
    c = row.insertCell(-1);
    c.classList.add("gt_number");
    t = document.createTextNode("");
    if (result_fields[firm] === undefined) {
      result_fields[firm] = {};
    };
    result_fields[firm][id] = { html_element: t, format: format };
    c.appendChild(t);
    // Empty field
    c = row.insertCell(-1);
    c.classList.add("gt_number");
    t = document.createTextNode("");
    c.appendChild(t);
  };
};


function print_industry_and_period(firm, industry, period) {
  industry_indicator.nodeValue = "Industry " + industry;
  period_counter.nodeValue = "Period " + period;
};



function create_game_table(industry, quarter, nr_of_firms) {
  const table = document.getElementById("game_table");
  append_headline_rows(table, nr_of_firms, industry, quarter);
  append_decision_row(table, nr_of_firms, "Price", "price", "small_amount", 6.25);
  append_decision_row(table, nr_of_firms, "Quality", "quality", "small_amount", 3);
  append_decision_row(table, nr_of_firms, "Marketing", "marketing", "amount", 230000);
  append_decision_row(table, nr_of_firms, "Styling and Design", "styling_and_design", "amount", 165000);
  append_decision_row(table, nr_of_firms, "Production Volume", "production_volume", "quantity", 430000);
  append_decision_row(table, nr_of_firms, "Investment in Plant", "investment_in_plant", "amount", 225000);
  append_decision_row(table, nr_of_firms, "Debt Payment", "debt_payment", "amount", 0);
  append_result_row(table, nr_of_firms, "Industry Sales", "total_industry_sales", "quantity");
  append_result_row(table, nr_of_firms, "Potential Firm Sales", "potential_sales", "quantity");
  append_result_row(table, nr_of_firms, "Actual Firm Sales", "actual_sales", "quantity");
  append_result_row(table, nr_of_firms, "Ending Inventory", "inventory", "quantity");
  append_result_row(table, nr_of_firms, "Inventory Unit Value", "inventory_unit_value", "small_amount");
  append_result_row(table, nr_of_firms, "Capacity Next Quarter", "capacity", "quantity");
  append_empty_row(table, nr_of_firms, "");
  append_empty_row(table, nr_of_firms, "");
  append_empty_row(table, nr_of_firms, "Profit and Loss", "headline");
  append_empty_row(table, nr_of_firms, "");
  append_result_row(table, nr_of_firms, "Sales", "sales_revenue", "amount");
  append_empty_row(table, nr_of_firms, "Expenses");
  append_result_row(table, nr_of_firms, "- Manufacturing Costs", "total_manufacturing_cost", "amount");
  append_result_row(table, nr_of_firms, "- Adm. and Selling", "administration_and_selling_expense", "amount");
  append_result_row(table, nr_of_firms, "- Marketing", "marketing_decision", "amount");
  append_result_row(table, nr_of_firms, "- Styling and Design", "styling_and_design_decision", "amount");
  append_result_row(table, nr_of_firms, "- Depreciation", "depreciation_expense", "amount");
  append_result_row(table, nr_of_firms, "- Reduction in Inv. Value", "change_in_inventory_value", "amount");
  append_result_row(table, nr_of_firms, "- Inv. Carrying Charge", "inventory_carrying_charge", "amount");
  append_result_row(table, nr_of_firms, "- Interest on Debt", "debt_expense", "amount");
  append_result_row(table, nr_of_firms, "Total", "total_expenses", "amount");
  append_empty_row(table, nr_of_firms, "");
  append_result_row(table, nr_of_firms, "Profit before Taxes", "profit_before_tax", "amount");
  append_result_row(table, nr_of_firms, "Net Profit", "net_profit", "amount");
  append_empty_row(table, nr_of_firms, "");
  append_empty_row(table, nr_of_firms, "");
  append_empty_row(table, nr_of_firms, "Balance Sheet", "headline");
  append_empty_row(table, nr_of_firms, "");
  append_result_row(table, nr_of_firms, "Cash", "cash", "amount");
  append_result_row(table, nr_of_firms, "Inventory", "inventory_value", "amount");
  append_result_row(table, nr_of_firms, "Net Plant", "plant_value", "amount");
  append_empty_row(table, nr_of_firms, "");
  append_result_row(table, nr_of_firms, "Debt", "debt", "amount");
  append_result_row(table, nr_of_firms, "Owner's Equity", "owners_equity", "amount");
};



// *** Main program

let industry = {};

function simulate_next_period() {
  industry.simulate_next_period();
};



function main() {
  // Create the table for input and output
  create_game_table(1, 1, NR_OF_FIRMS);

  // Create the industry
  industry = Industry(1, 3);

  // Simulate first period
  industry.simulate_first_period();
};







