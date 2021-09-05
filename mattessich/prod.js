
// *************************************************************************
// *   Simulation of the Firm through a Budget Computer Program            *
// *   By Richard Mattessich.                                              *
// *   In collaboration with Paul A. Zitlau and Thomas C. Schneider.       *
// *   Published in 1964.                                                  *
// *************************************************************************
// *   Translation to JavaScript by Norbert Kehrer in August 2021.         *
// *************************************************************************

function prod(ical) {
  switch (ical) {
    case 1:
      // Compute production schedule ***
      // ********************************************************************
      // Initialize summation of variables
      // ********************************************************************
      for (let mo = 1; mo <= 13; mo++) {
        tei[mo] = 0.0;
        tpq[mo] = 0.0;
        tbi[mo] = 0.0;
        for (let i = 1; i <= n; i++) {
          apq[i][mo] = 0.0;
        };
      };
      tpc[13] = 0.0;
      // ********************************************************************
      // Begin calculation of budget
      // ********************************************************************
      for (let i = 1; i <= n; i++) {
        pq[i][13] = ei[i][12] + sq[i][13] - bi[i][1];
        tpq[13] = tpq[13] + pq[i][13];
        for (let mo = 1; mo <= 12; mo++) {
          pq[i][mo] = pq[i][13] * pk[i][mo];
        };
      };
      for (let i = 1; i <= n; i++) {
        for (let mo = 1; mo <= 12; mo++) {
          const nm = mo + 1;
          bi[i][nm] = bi[i][mo] + pq[i][mo] - sq[i][mo];
          if (bi[i][nm] >= pmi[i] && apq[i][13] === 0) {
            apq[i][mo] = pq[i][mo];
          }
          else if (bi[i][nm] >= pmi[i] && apq[i][13] > 0) {
            const dum = bi[i][nm] - pmi[i];
            if ((apq[i][13] - dum) >= 0) {
              apq[i][mo] = pq[i][mo] - dum;
              apq[i][13] = apq[i][13] - dum;
              bi[i][nm] = pmi[i];
            }
            else {
              apq[i][mo] = pq[i][mo] - apq[i][13];
              bi[i][nm] = bi[i][nm] - apq[i][13];
              apq[i][13] = 0.0;
            };
          }
          else {
            apq[i][mo] = pq[i][mo] - (bi[i][nm] - pmi[i]);
            apq[i][13] = -(bi[i][nm] - pmi[i]) + apq[i][13];
            bi[i][nm] = pmi[i];
          };
        };
      };
      for (let i = 1; i <= n; i++) {
        apq[i][13] = pq[i][13];
        for (let mo = 1; mo <= 12; mo++) {
          tpq[mo] = tpq[mo] + apq[i][mo];
          pkn[i][mo] = apq[i][mo] / apq[i][13];
        };
        pkn[i][13] = 1.0;
      };
      for (let i = 1; i <= n; i++) {
        for (let mo = 1; mo <= 12; mo++) {
          const nm = mo + 1;
          ei[i][mo] = bi[i][nm];
        };
      };
      for (let mo = 1; mo <= 13; mo++) {
        for (let i = 1; i <= n; i++) {
          tbi[mo] = tbi[mo] + bi[i][mo];
        };
      };
      for (let mo = 1; mo <= 12; mo++) {
        const nm = mo + 1;
        tei[mo] = tbi[nm];
      };
      break;
    // Determine product unit cost ***
    // Price out production
    case 2:
      // ********************************************************************
      // Initialize summation of variables
      // ********************************************************************
      for (let mo = 1; mo <= 13; mo++) {
        tpc[mo] = 0.0;
      };
      for (let i = 1; i <= n; i++) {
        pc[i][13] = 0.0;
        for (let mo = 1; mo <= 12; mo++) {
          pc[i][mo] = 0.0;
        };
      };
      // ********************************************************************
      // Continue calculation of budget
      // ********************************************************************
      for (let mo = 1; mo <= 12; mo++) {
        for (let i = 1; i <= n; i++) {
          for (let k = 1; k <= kp; k++) {
            pc[i][mo] = pc[i][mo] + dlc[i][k][mo];
          };
          for (let j = 1; j <= jj; j++) {
            pc[i][mo] = pc[i][mo] + rmr[i][j][mo] * ucm[j][mo];
          };
          for (let k = 1; k <= kp; k++) {
            if (tdlc[k][mo] < (tdlc[k][13] / 36.0)) {
              pc[i][mo] = pc[i][mo] + tfoa[k][mo] * dlc[i][k][13] / tdlc[k][13];
            }
            else {
              pc[i][mo] = pc[i][mo] + tfoa[k][mo] * dlc[i][k][mo] / tdlc[k][mo];
            };
          };
          pc[i][13] = pc[i][13] + pc[i][mo];
        };
      };
      for (let i = 1; i <= n; i++) {
        for (let mo = 1; mo <= 12; mo++) {
          const lm = mo - 1;
          if (mo === 1) {
            puc[i][mo] = (pc[i][mo] + puco[i] * bi[i][mo]) / (apq[i][mo] + bi[i][mo]);
          }
          else {
            puc[i][mo] = (pc[i][mo] + puc[i][lm] * bi[i][mo]) / (apq[i][mo] + bi[i][mo]);
          };
        };
      };
      for (let i = 1; i <= n; i++) {
        puc[i][13] = pc[i][13] / apq[i][13];
      };
      for (let mo = 1; mo <= 12; mo++) {
        tpc[mo] = tcm[mo] + tlc[mo] + fo[mo];
        tpc[13] = tpc[13] + tpc[mo];
      };
      // ********************************************************************
      // Write out the budget
      // ********************************************************************
      write(`${fh(1)}${fx(37)}PRODUCTION COEFFICIENTS - PK(I,MO)`); // 122
      write("");
      write(`${fh(0)}  PRODUCTS   JAN.    FEB.    MARCH   APR.    MAY     JUNE    JULY    AUG.    SEPT.   OCT.     NOV.     DEC.   PERIOD`); // 121
      write(`${fh(0)}    I        (I,1)   (I,2)   (I,3)   (I,4)   (I,5)   (I,6)   (I,7)   (I,8)   (I,9)  (I,10)  (I,11)  (I,12)  (I,13)`);
      for (let i = 1; i <= n; i++) {
        write_no_cr(`${fh(0)} ${fi(4, i)}${fx(5)}`); // 101
        for (let mo = 1; mo <= 13; mo++) {
          write_no_cr(`${ff(8, 4, pk[i][mo])}`);
        };
        write("");
      };
      write(`${fh(1)}${fx(35)}NEW PRODUCTION COEFFICIENTS - PKN(I,MO)`); // 120
      write("");
      write(`${fh(0)}  PRODUCTS   JAN.    FEB.    MARCH   APR.    MAY     JUNE    JULY    AUG.    SEPT.   OCT.     NOV.     DEC.   PERIOD`); // 121
      write(`${fh(0)}    I        (I,1)   (I,2)   (I,3)   (I,4)   (I,5)   (I,6)   (I,7)   (I,8)   (I,9)  (I,10)  (I,11)  (I,12)  (I,13)`);
      for (let i = 1; i <= n; i++) {
        write_no_cr(`${fh(0)} ${fi(4, i)}${fx(5)}`); // 101
        for (let mo = 1; mo <= 13; mo++) {
          write_no_cr(`${ff(8, 4, pkn[i][mo])}`);
        };
        write("");
      };
      write(`${fh(1)}${fx(51)}PLANNED - PQ(I,MO)`); // 123
      write(`${fh(0)}${fx(44)}MONTHLY PRODUCTION QUANTITIES`); // 108
      write(`${fx(48)}IN EQUIVALENT UNITS`);
      write(`O PRODUCTS  PERIOD     JAN.    FEB.     MAR.    APR.   MAY     JUNE    JULY    AUG.    SEP.     OCT.     NOV.     DEC.`); // 109 <-- There is a bug in the original, the colleagues wrote "118HO" instead of "118H0". This was intentionally left in to keep it as original as possible ;-)
      write(`${fh(0)}    I       (I,13)   (I,1)   (I,2)   (I,3)   (I,4)   (I,5)   (I,6)   (I,7)   (I,8)   (I,9)   (I,10)   (I,11)   (I,12)`);
      for (let i = 1; i <= n; i++) {
        write_no_cr(`${fh(0)} ${fi(4, i)}    ${ff(9, 3, pq[i][13])}`); // 110
        for (let mo = 1; mo <= 9; mo++) {
          write_no_cr(`${ff(8, 2, pq[i][mo])}`);
        };
        for (let mo = 10; mo <= 12; mo++) {
          write_no_cr(`${ff(9, 2, pq[i][mo])}`);
        };
        write("");
      };
      write(`${fh(1)}${fx(51)}ADJUSTED - APQ(I,MO)`); // 124
      write(`${fh(0)}${fx(44)}MONTHLY PRODUCTION QUANTITIES`); // 108
      write(`${fx(48)}IN EQUIVALENT UNITS`);
      write(`O PRODUCTS  PERIOD     JAN.    FEB.     MAR.    APR.   MAY     JUNE    JULY    AUG.    SEP.     OCT.     NOV.     DEC.`); // 109 <-- There is a bug in the original, the colleagues wrote "118HO" instead of "118H0". This was intentionally left in to keep it as original as possible ;-)
      write(`${fh(0)}    I       (I,13)   (I,1)   (I,2)   (I,3)   (I,4)   (I,5)   (I,6)   (I,7)   (I,8)   (I,9)   (I,10)   (I,11)   (I,12)`);
      for (let i = 1; i <= n; i++) {
        write_no_cr(`${fh(0)} ${fi(4, i)}    ${ff(9, 3, apq[i][13])}`); // 110
        for (let mo = 1; mo <= 9; mo++) {
          write_no_cr(`${ff(8, 2, apq[i][mo])}`);
        };
        for (let mo = 10; mo <= 12; mo++) {
          write_no_cr(`${ff(9, 2, apq[i][mo])}`);
        };
        write("");
      };
      write_no_cr(`${fh(0)} TOTALS  ${ff(9, 3, tpq[13])}`); // 111
      for (let mo = 1; mo <= 9; mo++) {
        write_no_cr(`${ff(8, 2, tpq[mo])}`);
      };
      for (let mo = 10; mo <= 12; mo++) {
        write_no_cr(`${ff(9, 2, tpq[mo])}`);
      };
      write("");
      write(`${fh(1)}${fx(42)}PERIOD PRODUCTION AND MANUFACTURING`); // 104
      write(`${fx(56)}BUDGET`);
      write(`${fh(0)}${fx(35)}PRODUCTS    PRODUCTION    PRODUCTION    PRODUCTION`); // 105
      write(`${fx(48)}QUANTITY     UNIT COST     COST (TOTAL)`);
      write(`${fx(48)}IN UNITS     IN DOLLARS    IN DOLLARS`);
      write(`${fx(38)}I${fx(8)}APQ(I,13)     PUC(I,13)      PC(I,13)`);
      for (let i = 1; i <= n; i++) {
        write(`${fh(0)}${fx(35)}${fi(4, i)}${ff(16, 3, apq[i][13])}${ff(13, 3, puc[i][13])}${ff(16, 3, pc[i][13])}`); // 106
      };
      write(`${fh(0)}${fx(35)}TOTALS   ${ff(11, 3, tpq[13])}${fx(13)}${ff(16, 3, tpc[13])}`); // 107
      write(`${fh(1)}${fx(38)}FINISHED AND PARTLY FINISHED GOODS INVENTORY`); // 112
      write(`${fx(50)}IN EQUIVALENT UNITS`);
      write(` PRODUCTS   JAN.    FEB.    MARCH   APR.    MAY     JUNE    JULY    AUG.    SEPT.   OCT.     NOV.     DEC.1    DEC.31`); // 113
      write(`${fh(0)}    I      BI(I,1) BI(I,2) BI(I,3) BI(I,4) BI(I,5) BI(I,6) BI(I,7) BI(I,8) BI(I,9) BI(I,10) BI(I,11) BI(I,12) EI(I,12)`);
      for (let i = 1; i <= n; i++) {
        write_no_cr(`${fh(0)} ${fi(4, i)}     `); // 114
        for (let mo = 1; mo <= 9; mo++) {
          write_no_cr(`${ff(8, 2, bi[i][mo])}`);
        };
        for (let mo = 10; mo <= 12; mo++) {
          write_no_cr(`${ff(9, 2, bi[i][mo])}`);
        };
        write(`${ff(9, 2, ei[i][12])}`);
      };
      write_no_cr(`${fh(0)} TOTALS   `); // 115
      for (let mo = 1; mo <= 9; mo++) {
        write_no_cr(`${ff(8, 2, tbi[mo])}`);
      };
      for (let mo = 10; mo <= 12; mo++) {
        write_no_cr(`${ff(9, 2, tbi[mo])}`);
      };
      write(`${ff(9, 2, tei[12])}`);
      break;
  };
};





