
// *************************************************************************
// *   Simulation of the Firm through a Budget Computer Program            *
// *   By Richard Mattessich.                                              *
// *   In collaboration with Paul A. Zitlau and Thomas C. Schneider.       *
// *   Published in 1964.                                                  *
// *************************************************************************
// *   Translation to JavaScript by Norbert Kehrer in August 2021.         *
// *************************************************************************

function casbud() {
  // ********************************************************************
  // Initialize summation of variables
  // ********************************************************************
  rco[13] = 0.0;
  rcr[13] = 0.0;
  arc[13] = 0.0;
  cs[13] = 0.0;
  sli[13] = 0.0;
  oli[13] = 0.0;
  for (let mo = 1; mo <= 13; mo++) {
    pe[mo] = 0.0;
    vpe[mo] = 0.0;
    ssm[mo] = 0.0;
    cri[mo] = 0.0;
    tco[mo] = 0.0;
    tcr[mo] = 0.0;
    ocr[mo] = 0.0;
    oco[mo] = 0.0;
  };
  // ********************************************************************
  // Begin calculation of budget
  // ********************************************************************
  for (let mo = 1; mo <= 12; mo++) {
    const lm = mo - 1;
    const mbl = mo - 2;
    if (mo > 2) {
      arc[mo] = ac1 * tsv[lm] + ac2 * tsv[mbl];
    }
    else {
      if (mo === 2) {
        arc[2] = ac1 * tsv[1] + ac2 * tsvd;
      }
      else {
        arc[1] = ac1 * tsvd + ac2 * tsvn;
      };
    };
  };
  for (let mo = 1; mo <= 12; mo++) {
    arc[13] = arc[13] + arc[mo];
    cs[mo] = csc * tsv[mo];
    cs[13] = cs[13] + cs[mo];
  };
  for (let k = 1; k <= kp; k++) {
    pfk[k] = tfoa[k][13] / tdlc[k][13];
    for (let i = 1; i <= n; i++) {
      for (let mo = 1; mo <= 12; mo++) {
        fof[i][k][mo] = pfk[k] * dlc[i][k][mo];
      };
    };
  };
  for (let mo = 1; mo <= 12; mo++) {
    for (let k = 1; k <= kp; k++) {
      pe[mo] = pe[mo] + tdlc[k][mo];
    };
    for (let l = 1; l <= l1; l++) {
      pe[mo] = pe[mo] + fpc[l][1] * foc[l][mo];
    };
    for (let m = 1; m <= m1; m++) {
      pe[mo] = pe[mo] + oe[m][mo];
    };
    pe[13] = pe[13] + pe[mo];
  };
  for (let mo = 1; mo <= 12; mo++) {
    const lm = mo - 1;
    const mbl = mo - 2;
    for (let j = 1; j <= jj; j++) {
      if (lm > 0) {
        vpe[mo] = vpe[mo] + aprm[j][lm] * ucm[j][lm];
      }
      else {
        vpe[mo] = vpe[mo] + prmd[j] * ucmo[j];
      };
    };
    for (let l = l2; l <= l3; l++) {
      if (mo >= 3) {
        vpe[mo] = vpe[mo] + fpc[l][1] * foc[l][mo] + fpc[l][2] * foc[l][lm] + fpc[l][3] * foc[l][mbl];
      }
      else if (mo >= 2) {
        vpe[mo] = vpe[mo] + fpc[l][1] * foc[l][mo] + fpc[l][2] * foc[l][lm] + fpc[l][3] * focd[l];
      }
      else {
        vpe[mo] = vpe[mo] + fpc[l][1] * foc[l][mo] + fpc[l][2] * focd[l] + fpc[l][3] * focn[l];
      };
    };
    for (let m = m3; m <= m4; m++) {
      vpe[mo] = vpe[mo] + oe[m][mo];
    };
  };
  for (let mo = 1; mo <= 12; mo++) {
    rcr[mo] = slx[mo] + tllx[mo] + pisx[mo] + rfr[mo] + scx[mo];
    const nm = mo + 1;
    rcr[13] = rcr[13] + rcr[mo];
    tll[nm] = tll[mo] + tllx[mo];
    oli[mo] = oir[mo] * (tll[mo] + tll[nm]) / 2.0;
    oli[13] = oli[13] + oli[mo];
    sl[nm] = sl[mo] + slx[mo];
    sli[mo] = slr[mo] * sl[mo];
    sli[13] = sli[13] + sli[mo];
    rco[mo] = ssx[mo] + pex[mo] + pix[mo] + emx[mo] + hlx[mo] + bfx[mo] + oli[mo] + rfe[mo] + sli[mo];
    let done41 = false;
    while (!done41) {
      oco[mo] = rco[mo];
      if (ssm[mo] > 0.0) {
        oco[mo] = rco[mo] + ssm[mo];
      };
      ss[nm] = ss[mo] + ssx[mo] + ssm[mo];
      let done45 = false;
      while (!done45) {
        ssi[mo] = sir[mo] * (ss[mo] + ss[nm]) / 2.0;
        cri[6] = 0.0;
        cri[12] = 0.0;
        for (let imo = 1; imo <= mo; imo++) {
          if (imo <= 6) {
            cri[6] = cri[6] + ssi[imo];
          };
          if (imo > 6) {
            cri[12] = cri[12] + ssi[imo];
          };
        };
        ocr[mo] = cri[mo] + rcr[mo];
        if (ssm[mo] < 0.0) {
          ocr[mo] = ocr[mo] - ssm[mo];
        };
        tco[mo] = pe[mo] + vpe[mo] + oco[mo];
        tcr[mo] = cs[mo] + arc[mo] + ocr[mo];
        chb[nm] = chb[mo] + tcr[mo] - tco[mo];
        if (chb[nm] >= casmin && chb[nm] <= casmax) {
          done45 = true;
          done41 = true;
          break;
        };
        if (chb[nm] < casmin && ss[nm] === 0.0) {
          done45 = true;
          done41 = true;
          break;
        };
        if (chb[nm] >= casmin) {
          ssm[mo] = (chb[nm] - casmax) * (1.0 / (1.0 - sir[mo]));
          done45 = true;
          break;
        }
        else {
          ssm[mo] = (chb[nm] - casmin) * (1.0 / (1.0 - sir[mo]));
          if (Math.abs(ssm[mo]) <= ss[nm]) {
            done45 = true;
            break;
          }
          else {
            ssm[mo] = -ss[nm];
            ss[nm] = 0.0;
          };
        };
      };
    };
  };
  for (let mo = 1; mo <= 12; mo++) {
    vpe[13] = vpe[13] + vpe[mo];
    rco[13] = rco[13] + rco[mo];
    cri[13] = cri[13] + cri[mo];
    oco[13] = oco[13] + oco[mo];
    ocr[13] = ocr[13] + ocr[mo];
    tco[13] = tco[13] + tco[mo];
    tcr[13] = tcr[13] + tcr[mo];
  };
  // ********************************************************************
  // Write out the budget
  // ********************************************************************
  write(`${fh(1)}${fx(54)}CASH BUDGET`); // 100
  write(`${fh(0)}${fx(29)}JAN.   FEB.   MARCH   APR.   MAY   JUNE   JULY   AUG.   SEPT.   OCT.   NOV.   DEC.   PERIOD`);
  write(`${fh(0)}CASH ON HAND AND IN`); // 101
  write(`BANK (BEGINNING OF`);
  write_no_cr(`MONTH)  CHB(MO)      .${ff(13, 3, chb[1])}`);
  for (let mo = 2; mo <= 12; mo++) {
    write_no_cr(`${ff(7, 3, chb[mo])}`);
  };
  write(`${ff(8, 3, chb[1])}`);
  write_no_cr(`${fh(0)}CASH SALES CS(MO)    .${ff(13, 3, cs[1])}`); // 102
  for (let mo = 2; mo <= 12; mo++) {
    write_no_cr(`${ff(7, 3, cs[mo])}`);
  };
  write(`${ff(8, 3, cs[13])}`);
  write(`${fh(0)}ACCTS.RECEIVABLE`); 
  write_no_cr(`COLLECTION ARC(MO)   .${ff(13, 3, arc[1])}`); 
  for (let mo = 2; mo <= 12; mo++) {
    write_no_cr(`${ff(7, 3, arc[mo])}`);
  };
  write(`${ff(8, 3, arc[13])}`);
  write(`${fh(0)}OTHER CASH RECEIPTS`); 
  write_no_cr(`${fx(11)}OCR(MO)   .${ff(13, 3, ocr[1])}`); 
  for (let mo = 2; mo <= 12; mo++) {
    write_no_cr(`${ff(7, 3, ocr[mo])}`);
  };
  write(`${ff(8, 3, ocr[13])}`);
  write(`${fh(0)}TOTAL CASH RECEIPTS`); // 103
  write_no_cr(`${fx(11)}TCR(MO)   .${ff(13, 3, tcr[1])}`); 
  for (let mo = 2; mo <= 12; mo++) {
    write_no_cr(`${ff(7, 3, tcr[mo])}`);
  };
  write(`${ff(8, 3, tcr[13])}`);
  write(`${fh(0)}PAYROLL EXPENDITURES`);  //104
  write_no_cr(`${fx(12)}PE(MO)   .${ff(13, 3, pe[1])}`); 
  for (let mo = 2; mo <= 12; mo++) {
    write_no_cr(`${ff(7, 3, pe[mo])}`);
  };
  write(`${ff(8, 3, pe[13])}`);
  write(`${fh(0)}VOUCHERS PAYABLE`);
  write_no_cr(`EXPENDITURES VPE(MO) .${ff(13, 3, vpe[1])}`); 
  for (let mo = 2; mo <= 12; mo++) {
    write_no_cr(`${ff(7, 3, vpe[mo])}`);
  };
  write(`${ff(8, 3, vpe[13])}`);
  write(`${fh(0)}OTHER CASH OUTLAYS`); 
  write_no_cr(`${fx(13)}OCO(MO) .${ff(13, 3, oco[1])}`); 
  for (let mo = 2; mo <= 12; mo++) {
    write_no_cr(`${ff(7, 3, oco[mo])}`);
  };
  write(`${ff(8, 3, oco[13])}`);
  write(`${fh(0)}TOTAL CASH OUTLAYS`); // 105
  write_no_cr(`${fx(13)}TCO(MO) .${ff(13, 3, tco[1])}`); 
  for (let mo = 2; mo <= 12; mo++) {
    write_no_cr(`${ff(7, 3, tco[mo])}`);
  };
  write(`${ff(8, 3, tco[13])}`);
  write(`${fh(0)}CASH ON HAND AND IN`); // 106
  write(`BANK (END OF MONTH`); 
  write_no_cr(`${fx(13)}CHB(NM) .${ff(13, 3, chb[2])}`); 
  for (let mo = 3; mo <= 13; mo++) {
    write_no_cr(`${ff(7, 3, chb[mo])}`);
  };
  write(`${ff(8, 3, chb[13])}`);
  write(`(NEGATIVE ITEMS INDI-`); 
  write(`CATE BANK OVERDRAFT).`); 
};



