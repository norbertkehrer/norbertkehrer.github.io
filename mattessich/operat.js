
// *************************************************************************
// *   Simulation of the Firm through a Budget Computer Program            *
// *   By Richard Mattessich.                                              *
// *   In collaboration with Paul A. Zitlau and Thomas C. Schneider.       *
// *   Published in 1964.                                                  *
// *************************************************************************
// *   Translation to JavaScript by Norbert Kehrer in August 2021.         *
// *************************************************************************

function operat() {
  // ********************************************************************
  // Initialize summation of variables
  // ********************************************************************
  for (let mo = 1; mo <= 13; mo++) {
    for (let m = 1; m <= mm; m++) {
      tpoe[m] = 0.0;
      voe[m][mo] = 0.0;
    };
    toe[mo] = 0.0;
    tvoe[mo] = 0.0;
  };
  // ********************************************************************
  // Begin calculation of budget
  // ********************************************************************
  for (let mo = 1; mo <= 12; mo++) {
    for (let m = 1; m <= mm; m++) {
      for (let i = 1; i <= n; i++) {
        voe[m][mo] = voe[m][mo] + sv[i][mo] * oek[i][m];
      };
      voe[m][13] = voe[m][13] + voe[m][mo];
      oe[m][mo] = voe[m][mo] + (foe[m] / 12.0);
      toe[mo] = toe[mo] + oe[m][mo];
      tvoe[mo] = tvoe[mo] + voe[m][mo];
      tpoe[m] = tpoe[m] + oe[m][mo];
    };
    tvoe[13] = tvoe[13] + tvoe[mo];
    toe[13] = toe[13] + toe[mo];
  };
  for (let m = 1; m <= mm; m++) {
    tfoe = tfoe + foe[m];
  };
  // ********************************************************************
  // Write out the budget
  // ********************************************************************
  write(`${fh(1)}${fx(44)}OPERATING EXPENSE COEFFICIENTS`); // 100
  write(`${fh(0)}${fx(11)}OEK(I,M)`); // 101
  write(` I${fx(8)}   1      2      3      4      5      6      7      8      9     10`); // 102
  write(` M`);
  for (let m = 1; m <= mm; m++) {
    write_no_cr(`  ${fi(1, m)}${fx(7)}`); // 103
    for (let i = 1; i <= n; i++) {
      write_no_cr(`${ff(7, 3, oek[i][m])}`);
    };
    write("");
  };
  write(`${fh(0)}${fx(10)}FIXED OPERATING EXPENSES   FOE(M)`); // 104
  write_no_cr(`${fh(0)}${fx(10)}`);
  for (let m = 1; m <= mm; m++) {
    write_no_cr(`${ff(10, 4, foe[m])}`);
  };
  write("");

  write(`${fh(1)}${fx(47)}OPERATING EXPENSE BUDGET`); // 105
  write(`${fh(0)}EXPENSE${fx(29)}VARIABLE OPERATING EXPENSES VOE(M,MO)${fx(31)}FIXED    TOTAL`);
  write(` ITEM${fx(98)}OPERAT.  OPERAT.`);
  write(`           JAN.   FEB.   MAR.   APR.   MAY   JUNE   JULY   AUG.   SEPT.   OCT    NOV.   DEC. PERIOD   EXPENSES EXPENSES`);
  write(`  M       MO= 1  MO= 2  MO= 3  MO= 4  MO= 5  MO= 6  MO= 7  MO= 8  MO= 9  MO=10  MO=11  MO=12  MO=13    FOE(M)    OE(M)`);
  for (let m = 1; m <= mm; m++) {
    write_no_cr(`${fh(0)}${fi(2, m)}${ff(13, 3, voe[m][1])}`); // 106
    for (let mo = 2; mo <= 13; mo++) {
      write_no_cr(`${ff(7, 3, voe[m][mo])}`);
    };
    write(`${ff(10, 3, foe[m])}${ff(10, 3, tpoe[m])}`);
  };
  write(`${fh(0)}TOTALS${fx(96)} TFOE     TOE`); // 107
  write_no_cr(`TVOE(MO)${ff(8, 3, tvoe[1])}`);
  for (let mo = 2; mo <= 13; mo++) {
    write_no_cr(`${ff(7, 3, tvoe[mo])}`);
  };
  write(`${ff(10, 3, tfoe)}${ff(10, 3, toe[13])}`);





};





