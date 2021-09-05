
// *************************************************************************
// *   Simulation of the Firm through a Budget Computer Program            *
// *   By Richard Mattessich.                                              *
// *   In collaboration with Paul A. Zitlau and Thomas C. Schneider.       *
// *   Published in 1964.                                                  *
// *************************************************************************
// *   Translation to JavaScript by Norbert Kehrer in August 2021.         *
// *************************************************************************

function mater() {
  // ********************************************************************
  // Initialize summation of variables
  // ********************************************************************
  for (let mo = 1; mo <= 13; mo++) {
    tpv[mo] = 0.0;
    vmi[mo] = 0.0;
    tpm[mo] = 0.0;
    tcm[mo] = 0.0;
    tmi[mo] = 0.0;
    for (let j = 1; j <= jj; j++) {
      tmr[j][mo] = 0.0;
      aprm[j][mo] = 0.0;
      cmr[j][mo] = 0.0;
    };
  };
  // ********************************************************************
  // Begin calculation of budget
  // ********************************************************************
  for (let j = 1; j <= jj; j++) {
    for (let mo = 1; mo <= 12; mo++) {
      for (let i = 1; i <= n; i++) {
        // Compute raw materials required of each material for each
        // product in every month
        rmr[i][j][mo] = apq[i][mo] * pmk[i][j];
        // Compute total material required of each material by month
        tmr[j][mo] = tmr[j][mo] + rmr[i][j][mo];
      };
      // Compute year total material required for each material
      tmr[j][13] = tmr[j][13] + tmr[j][mo];
    };
  };
  for (let j = 1; j <= jj; j++) {
    for (let mo = 1; mo <= 12; mo++) {
      // Compute monthly purchase plan for each material
      prm[j][mo] = tmr[j][13] * pmc[j][mo];
    };
  };
  for (let j = 1; j <= jj; j++) {
    for (let mo = 2; mo <= 13; mo++) {
      const lm = mo - 1;
      // Compute planned month beginning inventory of each material
      rmi[j][mo] = rmi[j][lm] + prm[j][lm] - tmr[j][lm];
      // Test to see, if inventory above minimum level
      if (rmi[j][mo] <= rmmi[j]) {
        // Inventory less than or equal to minimum- raise actual purchases
        aprm[j][lm] = prm[j][lm] + rmmi[j] - rmi[j][mo];
        // Account for early purchases
        aprm[j][13] = aprm[j][13] + rmmi[j] - rmi[j][mo];
        // Set inventory level to minimum
        rmi[j][mo] = rmmi[j];
      } else {
        // Now test to see if purchases should be adjusted down to
        //    compensate for early purchases
        if (aprm[j][13] !== 0) {
          // Purchases should be adjusted down
          // Test to see if all can be corrected this month
          if (aprm[j][13] <= (rmi[j][mo] - rmmi[j])) {
            // It can be
            // Compute adjusted purchases
            aprm[j][lm] = prm[j][lm] - aprm[j][13];
            // Compute new inventory level
            rmi[j][mo] = rmi[j][mo] - aprm[j][13];
            // Reset accounting number
            aprm[j][13] = 0.0;
          }
          else {
            // It can not be adjusted all the way
            // Computed adjusted purchases
            aprm[j][lm] = prm[j][lm] - (rmi[j][mo] - rmmi[j]);
            // Adjust accounting figure
            aprm[j][13] = aprm[j][13] - (rmi[j][mo] - rmmi[j]);
            // Set inventory level to minimum
            rmi[j][mo] = rmmi[j];
          };
        }
        else {
          aprm[j][lm] = prm[j][lm];
        };
      };
    };
  };
  for (let j = 1; j <= jj; j++) {
    aprm[j][13] = 0.0;
    prm[j][13] = 0.0;
  };
  for (let j = 1; j <= jj; j++) {
    for (let mo = 1; mo <= 12; mo++) {
      // Compute adjusted annual purchases for each material
      aprm[j][13] = aprm[j][13] + aprm[j][mo];
      // Compute planned annual purchases for each material
      prm[j][13] = prm[j][13] + prm[j][mo];
    };
  };
  for (let j = 1; j <= jj; j++) {
    for (let mo = 1; mo <= 13; mo++) {
      // Compute new materials purchasing coefficients
      pmcn[j][mo] = aprm[j][mo] / aprm[j][13];
    };
  };
  for (let j = 1; j <= jj; j++) {
    for (let mo = 1; mo <= 12; mo++) {
      for (let i = 1; i <= n; i++) {
        // Compute cost of material required by product for each month
        cmr[j][mo] = cmr[j][mo] + rmr[i][j][mo] * ucm[j][mo];
      };
      // Compute monthly material cost
      tcm[mo] = tcm[mo] + cmr[j][mo];
      // Compute total monthly inventory
      tmi[mo] = tmi[mo] + rmi[j][mo];
      // Compute actual monthly purchases (units)
      tpm[mo] = tpm[mo] + aprm[j][mo];
      // Compute actual monthly cost of purchases
      tpv[mo] = aprm[j][mo] * ucm[j][mo] + tpv[mo];
    };
  };
  for (let j = 1; j <= jj; j++) {
    // Compute value of beginning inventory
    vmi[1] = vmi[1] + rmi[j][1] * ucmo[j];
    // Compute total material inventory at year end (units)
    tmi[13] = tmi[13] + rmi[j][13];
  };
  for (let mo = 1; mo <= 12; mo++) {
    const nm = mo + 1;
    // Compute value of material inventory
    vmi[nm] = vmi[mo] + tpv[mo] - tcm[mo];
  };
  for (let mo = 1; mo <= 12; mo++) {
    // Compute annual materials cost
    tpv[13] = tpv[13] + tpv[mo];
    // Compute annual materials purchases (units)
    tpm[13] = tpm[13] + tpm[mo];
    // Compute total cost of materials
    tcm[13] = tcm[13] + tcm[mo];
    for (let j = 1; j <= jj; j++) {
      // Compute annual cost of each material
      cmr[j][13] = cmr[j][13] + cmr[j][mo];
    };
  };
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= jj; j++) {
      for (let mo = 1; mo <= 12; mo++) {
        rmr[i][j][13] = rmr[i][j][13] + rmr[i][j][mo];
      };
    };
  };
  // ********************************************************************
  // Write out the budget
  // ********************************************************************
  write(`${fh(1)}${fx(10)} J=${fi(4, jj)}   DIRECT MATERIAL`); // 102
  write(`${fh(0)}${fx(10)}UCM(J,MO)=UNIT COST FOR MATERIALS`); // 103
  write(`${fh(0)}${fx(10)}    1        2        3        4        5        6        7        8       9       10       11       12`); // 104
  for (let j = 1; j <= jj; j++) {
    write_no_cr(`${fh(0)}${fx(5)}${fi(2, j)}${fx(3)}`); // 105
    for (let mo = 1; mo <= 12; mo++) {
      write_no_cr(`${ff(9, 4, ucm[j][mo])}`);
    };
    write("");
  };
  write(`${fh(1)}${fx(10)}PMK(I,J)=PURCHASES MATERIAL COEFFICIENTS`); // 106
  write(`${fh(0)}${fx(10)}    1        2        3        4        5        6        7        8        9       10`); // 107
  for (let j = 1; j <= jj; j++) {
    write_no_cr(`${fh(0)}${fx(5)}${fi(2, j)}${fx(3)}`); // 108
    for (let i = 1; i <= n; i++) {
      write_no_cr(`${ff(9, 4, pmk[i][j])}`);
    };
    write("");
  };
  write(`${fh(1)}${fx(10)}PMC(J,MO)=PURCHASES MONTHLY COEFFICIENTS`); // 109
  write(`${fh(0)}${fx(10)}    1        2        3        4        5        6        7        8       9       10       11       12`); // 104
  for (let j = 1; j <= jj; j++) {
    write_no_cr(`${fh(0)}${fx(10)}`); // 110
    for (let mo = 1; mo <= 12; mo++) {
      write_no_cr(`${ff(9, 4, pmc[j][mo])}`);
    };
    write("");
  };
  write(`${fh(0)}${fx(10)}PMCN(J,MO)=ADJUSTED PURCHASES MONTHLY COEFFICIENTS`); // 128
  write(`${fh(0)}${fx(10)}    1        2        3        4        5        6        7        8       9       10       11       12`); // 104
  for (let j = 1; j <= jj; j++) {
    write_no_cr(`${fh(0)}${fx(10)}`); // 110
    for (let mo = 1; mo <= 12; mo++) {
      write_no_cr(`${ff(9, 4, pmcn[j][mo])}`);
    };
    write("");
  };
  for (let j = 1; j <= jj; j++) {
    write(`${fh(1)}${fx(52)}MATERIALS BUDGET`); // 111
    write(`${fh(0)}${fx(43)}REQUIREMENT IN UNITS OF ITEM${fi(5, j)}`);
    write(`${fh(0)}PRODUCTS${fx(32)}RAW MATERIAL REQUIREMENT   RMR(I,J,MO)`); // 112
    write_no_cr(`${fh(0)}   I        JAN.    FEB.    MAR.    APR.    MAY     JUNE    JULY    AUG.    SEPT.   OCT.    NOV.    DEC.  PERIOD`);
    write(`${fh(0)}${fx(10)}  MO=1    MO=2    MO=3    MO=4    MO=5    MO=6    MO=7    MO=8    MO=9   MO=10   MO=11   MO=12   MO=13`);
    for (let i = 1; i <= n; i++) {
      write_no_cr(`${fh(0)}${fi(4, i)}${ff(12, 2, rmr[i][j][1])}`); // 113
      for (let mo = 2; mo <= 13; mo++) {
        write_no_cr(`${ff(8, 2, rmr[i][j][mo])}`);
      };
      write("");
    };
    write_no_cr(`${fh(0)} TOTALS `); // 114
    for (let mo = 1; mo <= 13; mo++) {
      write_no_cr(`${ff(8, 2, tmr[j][mo])}`);
    };
    write("");
    write(" TMR(J,MO)");
  };
  write(`${fh(1)}${fx(40)}PLANNED MATERIALS PURCHASE BUDGETS`); // 129
  write(`${fh(0)}${fx(41)}IN UNITS OF ITEM J`);
  write(`${fh(0)}MAT.ITEM${fx(33)}PURCHASES OF RAW MATERIAL PRM(J,MO)`); // 116
  write(`${fh(0)}   J        JAN.    FEB.    MAR.    APR.    MAY     JUNE    JULY    AUG.    SEPT.   OCT.    NOV.    DEC.  PERIOD`);
  write(`${fx(10)}  MO=1    MO=2    MO=3    MO=4    MO=5    MO=6    MO=7    MO=8    MO=9   MO=10   MO=11   MO=12   MO=13`);
  for (let j = 1; j <= jj; j++) {
    write_no_cr(`${fh(0)}${fi(4, j)}${ff(12, 2, prm[j][1])}`); // 117
    for (let mo = 2; mo <= 13; mo++) {
      write_no_cr(`${ff(8, 2, prm[j][mo])}`);
    };
    write("");
  };
  write(`${fh(1)}${fx(40)} ACTUAL MATERIALS PURCHASE BUDGETS`); // 130
  write(`${fh(0)}${fx(41)}IN UNITS OF ITEM J`);
  write(`${fh(0)}MAT.ITEM${fx(33)}PURCHASES OF RAW MATERIAL APRM(J,MO)`); // 131
  write(`${fh(0)}   J        JAN.    FEB.    MAR.    APR.    MAY     JUNE    JULY    AUG.    SEPT.   OCT.    NOV.    DEC.  PERIOD`);
  write(`${fx(10)}  MO=1    MO=2    MO=3    MO=4    MO=5    MO=6    MO=7    MO=8    MO=9   MO=10   MO=11   MO=12   MO=13`);
  for (let j = 1; j <= jj; j++) {
    write_no_cr(`${fh(0)}${fi(4, j)}${ff(12, 2, aprm[j][1])}`); // 117
    for (let mo = 2; mo <= 13; mo++) {
      write_no_cr(`${ff(8, 2, aprm[j][mo])}`);
    };
    write("");
  };
  write_no_cr(`${fh(0)} TOTALS `); // 118
  for (let mo = 1; mo <= 13; mo++) {
    write_no_cr(`${ff(8, 2, tpm[mo])}`);
  };
  write("");
  write(" TPM(MO)");
  write(`${fh(1)}${fx(46)}MATERIALS INVENTORY BUDGET`); // 120
  write(`${fh(0)}${fx(49)}IN UNITS OF ITEM J`);
  write(`${fh(0)}MAT.ITEM${fx(29)}RAW MATERIAL AT BEGINNING OF MONTH RMI(J,MO)`); // 121
  write(`${fh(0)}   J       JAN.1   FEB.1 MARCH 1  APRIL 1  MAY 1  JUNE 1  JULY 1   AUG.1  SEPT.1   OCT.1   NOV.1   DEC.1  DEC.31`);
  write(`${fx(11)}MO= 1   MO= 2   MO= 3   MO= 4   MO= 5   MO= 6   MO= 7   MO= 8   MO= 9   MO=10   MO=11   MO= 12  MO= 13`);
  for (let j = 1; j <= jj; j++) {
    write_no_cr(`${fh(0)}${fi(4, j)}${ff(12, 2, rmi[j][1])}`); // 122
    for (let mo = 2; mo <= 13; mo++) {
      write_no_cr(`${ff(8, 2, rmi[j][mo])}`);
    };
    write("");
  };
  write_no_cr(`${fh(0)} TOTALS `); // 123
  for (let mo = 1; mo <= 13; mo++) {
    write_no_cr(`${ff(8, 2, tmi[mo])}`);
  };
  write("");
  write(" TMI(MO)");
  write(`${fh(1)}${fx(51)}MATERIALS BUDGET`); // 124
  write(`${fh(0)}${fx(43)}MONTHLY REQUIREMENT IN DOLLARS`);
  write(`${fh(0)}MAT.ITEM${fx(33)}COST OF MATERIALS REQUIRED CMR(J,MO)`); // 125
  write(`${fh(0)}   J        JAN.    FEB.    MAR.    APR.    MAY     JUNE    JULY    AUG.    SEPT.   OCT.    NOV.    DEC.  PERIOD`);
  write(`${fx(10)}  MO=1    MO=2    MO=3    MO=4    MO=5    MO=6    MO=7    MO=8    MO=9   MO=10   MO=11   MO=12  MO=13`);
  for (let j = 1; j <= jj; j++) {
    write_no_cr(`${fh(0)}${fi(4, j)}${ff(12, 2, cmr[j][1])}`); // 126
    for (let mo = 2; mo <= 13; mo++) {
      write_no_cr(`${ff(8, 2, cmr[j][mo])}`);
    };
    write("");
  };
  write_no_cr(`${fh(0)} TOTALS `); // 127
  for (let mo = 1; mo <= 13; mo++) {
    write_no_cr(`${ff(8, 2, tcm[mo])}`);
  };
  write("");
  write(" TCM(MO)");

};





