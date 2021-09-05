
// *************************************************************************
// *   Simulation of the Firm through a Budget Computer Program            *
// *   By Richard Mattessich.                                              *
// *   In collaboration with Paul A. Zitlau and Thomas C. Schneider.       *
// *   Published in 1964.                                                  *
// *************************************************************************
// *   Translation to JavaScript by Norbert Kehrer in August 2021.         *
// *************************************************************************

// Sales budget to be prepared

function sales() {

  // ********************************************************************
  // Initialize summation of variables
  // ********************************************************************
  tpsq = 0.0;
  for (let mo = 1; mo <= 13; mo++) {
    tsq[mo] = 0.0;
    tsv[mo] = 0.0;
  };
  for (let i = 1; i <= n; i++) {
    sv[i][13] = 0.0;
  };
  // ********************************************************************
  // Begin calculation of budget
  // ********************************************************************
  for (let i = 1; i <= n; i++) {
    // Calculate year total sales quantity (units) for each product
    sq[i][13] = psq[i] * si[i];
    // Calculate year total sales quantity (units)
    tpsq = tpsq + psq[i];
    for (let mo = 1; mo <= 12; mo++) {
      // Calculate month sales quantity (units) for each product
      sq[i][mo] = sq[i][13] * sk[mo];
      // Calculate month sales volume ($) for each product
      sv[i][mo] = sq[i][mo] * sp[i];
      // Calculate month total sales quantity (units)
      tsq[mo] = tsq[mo] + sq[i][mo];
      // Calculate month total sales volume ($)
      tsv[mo] = tsv[mo] + sv[i][mo];
    };
  };
  for (let mo = 1; mo <= 12; mo++) {
    // Calculate year total sales volume ($)
    tsv[13] = tsv[13] + tsv[mo];
    // Calculate year total sales quantity (units)
    tsq[13] = tsq[13] + tsq[mo];
    for (let i = 1; i <= n; i++) {
      // Calculate year total sales volume ($) for each product
      sv[i][13] = sv[i][13] + sv[i][mo];
    };
  };
  // ********************************************************************
  // Write out the budget
  // ********************************************************************
  write(`${fh(1)}${fx(20)}PERIOD SALES BUDGET`); // 104
  write(`PRODUCTS     PREVIOUS     SALES     SALES       SALES     SALES`);
  write(`${fx(13)}SALES        INDEX     QUANTITY    PRICE     VOLUME`);
  write(`${fh(0)}    I         PSQ(I)      SI(I)     SQ(I,13)    SP(I)     SV(I,13)`);
  for (let i = 1; i <= n; i++) {
    write(`${fh(0)}${fi(5, i)}${ff(16, 2, psq[i])}    ${ff(6, 3, si[i])}    ${ff(8, 2, sq[i][13])}     ${ff(6, 2, sp[i])}    ${ff(7, 2, sv[i][13])}`); // 105
  };
  write(`${fh(0)}    TOTALS    ${ff(8, 3, tpsq)}${fx(14)}${ff(8, 3, tsq[13])}${fx(15)}${ff(7, 3, tsv[13])}`); // 106
  write(`${fh(1)}${fx(48)}MONTHLY SALES VOLUMES`); // 107
  write(`${fx(55)}IN DOLLARS`);
  write(`  PRODUCTS  PERIOD   JAN.     FEB.   MARCH   APRIL    MAY     JUNE    JULY    AUG.    SEPT.   OCT.    NOV.    DEC.`); // 108
  write(`            SALES    SALES   SALES   SALES   SALES   SALES   SALES   SALES   SALES   SALES   SALES   SALES   SALES`);
  write(`      I    SV(I,13) SV(I,1) SV(I,2) SV(I,3) SV(I,4) SV(I,5) SV(I,6)SV(I,7) SV(I,8) SV(I,9)SV(I,10)SV(I,11)SV(I,12)`); // 109
  for (let i = 1; i <= n; i++) {
    write_no_cr(`${fh(0)}   ${fi(4, i)}  ${ff(9, 3, sv[i][13])}`); // 110
    for (let mo = 1; mo <= 12; mo++) {
      write_no_cr(`${ff(8, 3, sv[i][mo])}`);
    };
    write("");
  };
  write_no_cr(`${fh(0)}   TOTALS${ff(9, 3, tsv[13])}`); // 111
  for (let mo = 1; mo <= 12; mo++) {
    write_no_cr(`${ff(8, 3, tsv[mo])}`);
  };
  write("");
  write(`${fh(0)}   MONTHLY`); // 112
  write_no_cr(`   COEFF.${ff(9, 5, sk[13])}`);
  for (let mo = 1; mo <= 12; mo++) {
    write_no_cr(`${ff(8, 4, sk[mo])}`);
  };
  write("");
  write(`${fh(1)}${fx(46)}MONTHLY SALES QUANTITIES`); // 113
  write(`${fx(55)}IN UNITS`);
  write(`  PRODUCTS  PERIOD   JAN.     FEB.   MARCH   APRIL    MAY     JUNE    JULY    AUG.    SEPT.   OCT.    NOV.    DEC.`); // 114
  write(`            SALES    SALES   SALES   SALES   SALES   SALES   SALES   SALES   SALES   SALES   SALES   SALES   SALES`);
  write(`      I    SQ(I,13)  SQ(I,1) SQ(I,2) SQ(I,3) SQ(I,4)SQ(I,5) SQ(I,6) SQ(I,7) SQ(I,8) SQ(I,9)SQ(I,10)SQ(I,11)SQ(I,12)`); // 115
  for (let i = 1; i <= n; i++) {
    write_no_cr(`${fh(0)}   ${fi(4, i)}  ${ff(9, 3, sq[i][13])}`); // 116
    for (let mo = 1; mo <= 12; mo++) {
      write_no_cr(`${ff(8, 3, sq[i][mo])}`);
    };
    write("");
  };
  write_no_cr(`${fh(0)}   TOTALS${ff(9, 3, tsq[13])}`); // 117
  for (let mo = 1; mo <= 12; mo++) {
    write_no_cr(`${ff(8, 3, tsq[mo])}`);
  };
  write("");
};





