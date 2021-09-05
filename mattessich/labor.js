
// *************************************************************************
// *   Simulation of the Firm through a Budget Computer Program            *
// *   By Richard Mattessich.                                              *
// *   In collaboration with Paul A. Zitlau and Thomas C. Schneider.       *
// *   Published in 1964.                                                  *
// *************************************************************************
// *   Translation to JavaScript by Norbert Kehrer in August 2021.         *
// *************************************************************************

function labor() {
  // ********************************************************************
  // Initialize summation of variables
  // ********************************************************************
  for (let mo = 1; mo <= 13; mo++) {
    tlc[mo] = 0.0;
    for (let k = 1; k <= kp; k++) {
      tdlc[k][mo] = 0.0;
    };
  };
  // ********************************************************************
  // Begin calculation of budget
  // ********************************************************************
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= kp; k++) {
      for (let mo = 1; mo <= 12; mo++) {
        // Calculate standard labor hours for each product in each
        // department for every month
        slh[i][k][mo] = slh[i][k][13] * pkn[i][mo];
        // Calculate direct labor cost for each product in each
        // department for every month
        dlc[i][k][mo] = slh[i][k][mo] * slc[k];
        // Calculate total direct labor cost in each department
        //  for every month
        tdlc[k][mo] = tdlc[k][mo] + dlc[i][k][mo];
      };
    };
  };
  for (let k = 1; k <= kp; k++) {
    for (let mo = 1; mo <= 12; mo++) {
      // Calculate year total direct labor cost for each department
      tdlc[k][13] = tdlc[k][13] + tdlc[k][mo];
      // Calculate monthly  total labor cost
      tlc[mo] = tlc[mo] + tdlc[k][mo];
    };
  };
  for (let mo = 1; mo <= 12; mo++) {
    // Calculate years total labor cost
    tlc[13] = tlc[13] + tlc[mo];
  };
  for (let i = 1; i <= n; i++) {
    tlcp[i] = 0.0;
    for (let k = 1; k <= kp; k++) {
      dlc[i][k][13] = 0.0;
      for (let mo = 1; mo <= 12; mo++) {
        // Calculate years labor cost for each product in each department
        dlc[i][k][13] = dlc[i][k][13] + dlc[i][k][mo];
      };
      // Calculate years labor cost for each product
      tlcp[i] = tlcp[i] + dlc[i][k][13];
    };
  };
  // ********************************************************************
  // Write out the budget
  // ********************************************************************
  write(`${fh(1)}${fx(10)} KP=${fi(3, kp)}`); // 101
  write(`${fh(0)}${fx(10)}SLH(I,K,13)=STANDARD LABOR HOURS`); // 102
  write(`${fh(0)}${fx(10)}    1        2        3        4        5        6        7        8         9      10`); // 103
  for (let k = 1; k <= kp; k++) {
    write_no_cr(`${fh(0)}${fx(5)}${fi(2, k)}${fx(3)}`); // 104
    for (let i = 1; i <= n; i++) {
      write_no_cr(`${ff(9, 4, slh[i][k][13])}`);
    };
    write("");
  };
  write(`${fh(0)}${fx(10)}SLC(K)=STANDARD LABOR COST`); // 105
  write_no_cr(`${fh(0)}${fx(10)}`); // 106
  for (let k = 1; k <= kp; k++) {
    write_no_cr(`${ff(9, 4, slc[k])}`);
  };
  write("");
  for (let k = 1; k <= kp; k++) {
    write(`${fh(1)}${fx(48)}(DIRECT) LABOR BUDGET`); // 110
    write(`${fh(0)}${fx(48)}IN DOLLARS PER MONTH`);
    write(`${fh(0)}${fx(48)}FOR DEPARTMENT${fi(4, k)}`);
    write(`${fh(0)}PRODUCTS      DIRECT DEPARTMENTAL LABOR COST DLC(I,K,MO),   K=${fi(4, k)}     STANDARD LABOR COST SLC(K)=SLC(${fi(4, k)})=${ff(7, 3, slc[k])}`); // 111
    write(`${fh(0)}   I          JAN.    FEB.   MARCH    APR.    MAY    JUNE    JULY     AUG.   SEPT.    OCT.    NOV.    DEC.  PERIOD`);
    write(`${fx(13)}MO= 1   MO= 2   MO= 3   MO= 4   MO= 5   MO= 6   MO= 7   MO= 8   MO= 9   MO= 10  MO= 11  MO= 12  MO= 13`);
    for (let i = 1; i <= n; i++) {
      write_no_cr(`${fh(0)}${fi(4, i)}${ff(15, 2, dlc[i][k][1])}`); // 112
      for (let mo = 2; mo <= 13; mo++) {
        write_no_cr(`${ff(8, 2, dlc[i][k][mo])}`);
      };
      write("");
    };
    write(`${fh(0)} TOTALS `); // 113
    write_no_cr(`TDLC(K,MO),`);
    for (let mo = 1; mo <= 13; mo++) {
      write_no_cr(`${ff(8, 2, tdlc[k][mo])}`);
    };
  };
  write(`${fh(1)}${fx(45)}TOTAL (DIRECT) LABOR BUDGET`); // 114
  write(`${fh(0)}PRODUCTS${fx(29)}DIRECT DEPARTMENTAL LABOR COST  DLC(I,K,13)${fx(15)}TOTAL DIRECT LABOR`); // 115
  write(`${fx(96)}COST PER PRODUCT`);
  write(`   I${fx(17)}K= 1${fx(17)}K= 2${fx(17)}K= 3${fx(17)}K= 4${fx(16)}TLCP(I)`);
  for (let i = 1; i <= n; i++) {
    write_no_cr(`${fh(0)}${fi(4, i)}`); // 116
    for (let k = 1; k <= kp; k++) {
      write_no_cr(`${ff(21, 3, dlc[i][k][13])}`);
    };
    write(`${ff(21, 3, tlcp[i])}`);
  };
  write(`${fh(0)} TOTALS${fx(93)}TLC `); // 117
  write_no_cr(`TDLC(K,13)${ff(15, 3, tdlc[1][13])}`);
  for (let k = 2; k <= kp; k++) {
    write_no_cr(`${ff(21, 3, tdlc[k][13])}`);
  };
  write(`${ff(21, 3, tlc[13])}`);
};





