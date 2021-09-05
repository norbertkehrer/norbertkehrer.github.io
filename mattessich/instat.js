
// *************************************************************************
// *   Simulation of the Firm through a Budget Computer Program            *
// *   By Richard Mattessich.                                              *
// *   In collaboration with Paul A. Zitlau and Thomas C. Schneider.       *
// *   Published in 1964.                                                  *
// *************************************************************************
// *   Translation to JavaScript by Norbert Kehrer in August 2021.         *
// *************************************************************************

function instat() {
  // ********************************************************************
  // Initialize summation of variables
  // ********************************************************************
  fme[13] = 0.0;
  cgs[13] = 0.0;
  gp[13] = 0.0;
  pbt[13] = 0.0;
  pat[13] = 0.0;
  rex[13] = 0.0;
  for (let mo = 1; mo <= 3; mo++) {
    tfi[mo] = 0.0;
  };
  // ********************************************************************
  // Begin calculation of budget
  // ********************************************************************
  for (let mo = 1; mo <= 12; mo++) {
    dd[mo] = dd[13] / 12.0;
    fme[mo] = oli[mo] + rfe[mo] - ssi[mo] - rfr[mo] + sli[mo] + aex[mo] + per[mo];
    fme[13] =  fme[13] + fme[mo];
  };
  for (let mo = 1; mo <= 13; mo++) {
    for (let i = 1; i <= n; i++) {
      const lm = mo - 1;
      if (mo <= 1) {
        tfi[mo] = tfi[mo] + puco[i] * bi[i][mo];
      }
      else {
        tfi[mo] = tfi[mo] + puc[i][lm] * bi[i][mo];
      };
    };
  };
  for (let mo = 1; mo <= 12; mo++) {
    const nm = mo + 1;
    cgs[mo] = tpc[mo] + tfi[mo] - tfi[nm];
    cgs[13] = cgs[13] + cgs[mo];
    gp[mo] = tsv[mo] - cgs[nm];
    gp[13] = gp[13] + gp[mo];
  };
  for (let mo = 1; mo <= 12; mo++) {
    pbt[mo] = gp[mo] - toe[mo] - fme[mo];
    pbt[13] = pbt[13] + pbt[mo];
  };
  ct[13] = 0.0;
  if (pbt[13] <= 25.0 && pbt[13] > 0.0) {
    ct[13] = 0.3 * pbt[13];
  };
  if (pbt[13] > 25.0) {
    ct[13] = 0.3 * 25 + 0.52 * (pbt[13] - 25.0);
  };
  for (let mo = 1; mo <= 12; mo++) {
    ct[mo] = ct[13] / 12.0;
    pat[mo] = pbt[mo] - ct[mo];
    rex[mo] = pat[mo] - dd[mo];
    rex[13] = rex[13] + rex[mo];
    pat[13] = pat[13] + pat[mo];
  };
  // ********************************************************************
  // Write out the budget
  // ********************************************************************
  write(`${fh(1)}${fx(40)}PROJECTED INCOME STATEMENT FOR BUDGET PERIOD MO = 13`); // 100
  write(`${fh(0)}${fx(18)}TOTAL SALES VOLUME ${fx(49)}TSV(13).     ${ff(12, 6, tsv[13])}`); // 101
  write(`${fh(0)}${fx(19)}COST OF GOODS SOLD .`);
  write(`${fh(0)}${fx(23)}TOTAL PURCHASES OF`);
  write(`${fx(23)}(DIRECT) MATERIAL${fx(20)}TPV(13) .   ${ff(10, 5, tpv[13])}`);
  write(`${fh(0)}${fx(23)}PLUS MATERIAL INVENTORY`);
  write(`${fx(23)}AT BEGINNING OF PERIOD${fx(15)}VMI(1)  .   ${ff(10, 5, vmi[1])}`);
  write(`${fh(0)}${fx(23)}MINUS TOTAL MATERIAL IN-`);
  write(`${fx(23)}VENTORY AT END OF PERIOD${fx(13)}VMI(13) .   ${ff(10, 5, vmi[13])}`);
  write(`${fh(0)}${fx(23)}TOTAL (DIRECT) MATERIAL COST${fx(9)}TCM(13) .${fx(16)}${ff(12, 5, tcm[13])}`);
  write(`${fh(0)}${fx(23)}PLUS TOTAL (DIRECT)LABOR COST${fx(8)}TLC(13) .${fx(16)}${ff(12, 5, tlc[13])}`);
  write(`${fh(0)}${fx(23)}PLUS FACTORY OVERHEADS${fx(16)}FO(13) .${fx(16)}${ff(12, 5, fo[13])}`);
  write(`${fh(0)}${fx(23)}TOTAL PRODUCTION COSTS ${fx(40)}${ff(12, 6, tpc[13])}`); // 102
  write(`${fh(0)}${fx(23)}PLUS TOTAL FINISHED (AND`);
  write(`${fx(23)}PARTLY FINISHED) GOODS`);
  write(`${fx(23)}INVENTORY AT BEG. OF PERIOD${fx(10)}TFI(1)  .${fx(16)}${ff(12, 5, tfi[1])}`);
  write(`${fh(0)}${fx(23)}MINUS TOTAL FINISHED (AND`);
  write(`${fx(23)}PARTLY FINISHED) GOODS`);
  write(`${fx(23)}INVENTORY AT END OF PERIOD${fx(11)}TFI(13) .${fx(16)}${ff(12, 5, tfi[13])}`);
  write(`${fh(0)}${fx(40)}COST OF GOODS SOLD  CGS(13) .${fx(30)}${ff(12, 6, cgs[13])}`);
  write(`${fh(0)}${fx(19)}GROSS PROFIT (TSV(13)- CGS(13))${fx(37)}GP(13).     ${ff(12, 6, gp[13])}`);
  write(`${fh(0)}${fx(19)}MINUS TOTAL`);
  write(`${fx(19)}OPERATING EXPENSES${fx(49)}TOE(13).     ${ff(12, 6, toe[13])}`);
  write(`${fh(0)}${fx(19)}MINUS FINANCIAL`);
  write(`${fx(19)}MISCEL.EXPENSES (NET)${fx(46)}FME(13).     ${ff(12, 6, fme[13])}`);
  write(`${fh(0)}${fx(19)}PROFIT BEFORE TAXES${fx(48)}PBT(13).     ${ff(12, 6, pbt[13])}`); // 103
  write(`${fh(0)}${fx(19)}MINUS CORPORATION TAXES${fx(45)}CT(13).     ${ff(12, 6, ct[13])}`);
  write(`${fh(0)}${fx(19)}PROFIT AFTER TAXES FOR BUDGET PERIOD${fx(31)}PAT(13).     ${ff(12, 6, pat[13])}`);
  write(`${fh(0)}${fx(19)}DIVIDENDS DECLARED ${fx(48)} DD(13).      ${ff(11, 6, dd[13])}`); // 104
  write(`${fh(0)}${fx(19)}CHANGES IN RETAINED EARNINGS${fx(39)}REX(13).${fx(6)}${ff(11, 6, rex[13])}`); // 105
};



