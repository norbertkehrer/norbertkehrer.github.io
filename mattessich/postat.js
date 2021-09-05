
// *************************************************************************
// *   Simulation of the Firm through a Budget Computer Program            *
// *   By Richard Mattessich.                                              *
// *   In collaboration with Paul A. Zitlau and Thomas C. Schneider.       *
// *   Published in 1964.                                                  *
// *************************************************************************
// *   Translation to JavaScript by Norbert Kehrer in August 2021.         *
// *************************************************************************

function postat() {
  let arx = dimension(13);
  const pex = arx;
  // ********************************************************************
  // Initialize summation of variables
  // ********************************************************************
  aemx[13] = 0.0;
  aex[13] = 0.0;
  abfx[13] = 0.0;
  arx[13] = 0.0;
  bfx[13] = 0.0;
  emx[13] = 0.0;
  hlx[13] = 0.0;
  pex[13] = 0.0;
  pix[13] = 0.0;
  pisx[13] = 0.0;
  rex[13] = 0.0;
  scx[13] = 0.0;
  slx[13] = 0.0;
  ssx[13] = 0.0;
  per[13] = 0.0;
  // ********************************************************************
  // Begin calculation of budget
  // ********************************************************************
  for (let mo = 1; mo <= 12; mo++) {
    const nm = mo + 1;
    ae[nm] = ae[mo] + aex[mo];
    aem[nm] = aem[mo] - aemx[mo];
    for (let l = l4; l <= l5; l++) {
      aem[nm] = aem[nm] + foc[l][mo];
    };
    aex[13] = aex[13] + aex[mo];
    aemx[13] = aemx[13] + aemx[mo];
    ar[nm] = ar[mo] + tsv[mo] - cs[mo] - arc[mo] - arx[mo];
    aar[nm] = aar[mo] + oe[m5][mo] - arx[mo];
    abf[nm] = abf[mo] + foc[l6][mo] + oe[mm][mo] - abfx[mo];
    abfx[13] = abfx[13] + abfx[mo];
    arn[mo] = ar[mo] - aar[mo];
    arn[nm] = ar[nm] - aar[nm];
    arx[13] = arx[13] + arx[mo];
    pex[13] = pex[13] + pex[mo];
    bf[nm] = bf[mo] + bfx[mo] - abfx[mo];
    bfn[mo] = bf[mo] - abf[mo];
    bfn[nm] = bf[nm] - abf[nm];
    bfx[13] = bfx[13] + bfx[mo];
    dd[mo] = dd[13] / 12.0;
    em[nm] = em[mo] + emx[mo] - aemx[mo];
    emn[mo] = em[mo] - aem[mo];
    emn[nm] = em[nm] - aem[nm];
    emx[13] = emx[13] + emx[mo];
    hl[nm] = hl[mo] + hlx[mo];
    pi[nm] = pi[mo] + pix[mo];
    hlx[13] = hlx[13] + hlx[mo];
    pix[13] = pix[13] + pix[mo];
    pis[nm] = pis[mo] + pisx[mo];
    pisx[13] = pisx[13] + pisx[mo];
    re[nm] = re[mo] + rex[mo];
    sc[nm] = sc[mo] + scx[mo];
    scx[13] = scx[13] + scx[mo];
    slx[13] = slx[13] + slx[mo];
    ssx[13] = ssx[13] + ssx[mo];
    oeq[mo] = sc[mo] + pis[mo] + re[mo];
    if (mo === 12) {
      oeq[13] = sc[13] + pis[13] + re[13];
    };
    per[13] = per[13] + per[mo];
    ppe[nm] = ppe[mo] + pex[mo] - per[mo];
    vp[nm] = vp[mo] - vpe[mo] + tpv[mo] + oe[m4][mo] + dd[mo] + ct[mo];
    for (let l = l2; l <= l3; l++) {
      vp[nm] = vp[nm] + foc[l][mo];
    };
  };
  for (let mo = 1; mo <= 13; mo++) {
    tca[mo] = chb[mo] + ss[mo] + arn[mo] + vmi[mo] + tfi[mo] + ppe[mo];
    tfa[mo] = pi[mo] + emn[mo] + hl[mo] + bfn[mo];
    ta[mo] = tca[mo] + tfa[mo];
    tsl[mo] = vp[mo] + sl[mo] + ae[mo];
    te[mo] = tsl[mo] + tll[mo] + oeq[mo];
  };
  if (Math.abs(ta[13] - te[13]) <= 0.1) {
    re[13] = re[13] + (ta[13] - te[13]);
    oeq[13] = oeq[13] + (ta[13] - te[13]);
    te[13] = ta[13];
  };
  // ********************************************************************
  // Write out the budget
  // ********************************************************************
  for (let mo = 1; mo <= 13; mo += 12) {
    write(`${fh(1)}${fx(37)}BALANCE SHEET AT BEGINNING OF PERIOD MO = ${fi(3, mo)}`); // 100
    write(`${fx(9)}ASSETS${fx(76)}EQUITIES`);
    write(`${fh(0)}  CASH ON HAND`); // 101
    write(`  AND IN BANK  CHB(MO).   ${ff(9, 5, chb[mo])}${fx(26)}VOUCHERS`);
    write(`${fx(61)}PAYABLE       VP(MO).     ${ff(10, 5, vp[mo])}`);
    write(`  SHORT TERM`);
    write(`  SECURITIES    SS(MO).   ${ff(9, 5, ss[mo])}${fx(26)}SHORT TERM`);
    write(`${fx(61)}LOANS         SL(MO).     ${ff(10, 5, sl[mo])}`);
    write(`  ACCOUNTS`);
    write(`  RECEIVABLE    AR(MO).   ${ff(9, 5, ar[mo])}${fx(26)}ACCRUED`);
    write(`${fx(61)}EXPENSES      AE(MO).     ${ff(10, 5, ae[mo])}`);
    write(`  MINUS ALLOWANCES FOR`);
    write(`  ACCTS.REC.   AAR(MO).   ${ff(9, 5, aar[mo])}${fx(26)}TOTAL SHORT`);
    write(`${fx(61)}TERM LIABILITIES   TSL(MO) .          ${ff(10, 5, tsl[mo])}`);
    write(`  ACCTS.REC.NET`);
    write(`  OF ALLOW.    ARN(MO).${fx(13)}${ff(9, 5, arn[mo])}`);
    write(`  TOTAL MATERIAL`);
    write(`  INVENTORY    VMI(MO).${fx(13)}${ff(9, 5, vmi[mo])}`);
    write(`${fh(0)}  TOTAL FINISHED (AND`);
    write(`  PARTLY FINISHED)`); // 102
    write(`  GOODS INVENT.TFI(MO).${fx(13)}${ff(9, 5, tfi[mo])}`);
    write(`${fh(0)}  PREPAID EXP. PPE(MO).${fx(13)}${ff(9, 5, ppe[mo])}`);
    write(`  TOTAL CURRENT ASSETS    TCA(MO).${fx(11)}${ff(10, 5, tca[mo])}${fx(5)}TOTAL LONG TERM LIABILITIES TLL(MO).  ${ff(9, 5, tll[mo])}`);
    write(`${fh(0)}  PARTICIPATIONS AND`); // 103
    write(`  INVESTMENTS   PI(MO).${fx(13)}${ff(9, 5, pi[mo])}`);
    write(`${fh(0)}  EQUIPMENT AND`);
    write(`  MACHINERY     EM(MO).   ${ff(9, 5, em[mo])}`);
    write(`${fh(0)}  ALLOWANCE FOR EQUIP.`);
    write(`  AND MACH.    AEM(MO).   ${ff(9, 5, aem[mo])}`);
    write(`${fh(0)}  EQUIP. AND MACH. NET`);
    write(`  OF ALLOW.    EMN(MO).${fx(13)}${ff(9, 5, emn[mo])}`);
    write(`${fh(0)}  HOLDINGS OF`);
    write(`  LAND          HL(MO).${fx(13)}${ff(9, 5, hl[mo])}`);
    write(`${fh(0)}  BUILDINGS AND${fx(46)}STOCK`);
    write(`  FIXTURES      BF(MO).   ${ff(9, 5, bf[mo])}${fx(26)}CAPITAL      SC(MO). ${fx(7)}${ff(9, 5, sc[mo])}`);
    write(`${fh(0)}  ALLOWANCES FOR${fx(45)}PAID-IN`);
    write(`  BLDGS.-FIXTS.ABF(MO).   ${ff(9, 5, abf[mo])}${fx(26)}SURPLUS      PIS(MO).${fx(7)}${ff(9, 5, pis[mo])}`);
    write(`${fh(0)}  BLDGS.-FIXTS.NET${fx(43)}RETAINED`);
    write(`  OF ALLOW.    BFN(MO).${fx(13)}${ff(9, 5, bfn[mo])}${fx(16)}EARNINGS      RE(MO).${fx(7)}${ff(9, 5, re[mo])}`);
    write(`  TOTAL FIXED ASSETS      TFA(MO) .${fx(11)}${ff(10, 5, tfa[mo])}${fx(5)}OWNERS EQUITY     OEQ(MO) .${fx(11)}${ff(10, 5, oeq[mo])}`); // 104
    write(`  TOTAL ASSETS            TA(MO)  .${fx(10)}${ff(11, 5, ta[mo])}${fx(5)}TOTAL EQUITIES     TE(MO) .${fx(10)}${ff(11, 5, te[mo])}`);
    write(`${fh(0)}   NOTE THAT THE BALANCE SHEET IS STATED AS OF THE   B E G I N N I N G   OF MONTH  MO ,`);
    write(`  HENCE MO =13 REFERS TO THE BALANCE SHEET AT THE E N D   OF THE BUDGET PERIOD.`);
  };
  // Credits
  write(`${fh(1)}ORIGINAL FORTRAN PROGRAM BY RICHARD MATTESSICH IN COLLABORATION WITH PAUL A. ZITLAU AND THOMAS C. SCHNEIDER IN 1964.`);
  write(`PORTED TO JAVASCRIPT BY NORBERT KEHRER IN AUGUST AND SEPTEMBER 2021.`);
  write(`${fh(1)}`);
};



