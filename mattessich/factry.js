
// *************************************************************************
// *   Simulation of the Firm through a Budget Computer Program            *
// *   By Richard Mattessich.                                              *
// *   In collaboration with Paul A. Zitlau and Thomas C. Schneider.       *
// *   Published in 1964.                                                  *
// *************************************************************************
// *   Translation to JavaScript by Norbert Kehrer in August 2021.         *
// *************************************************************************

function factry() {
  const fos = fob;
  const tfos = tfob;
  // ********************************************************************
  // Initialize summation of variables
  // ********************************************************************
  const k1 = kp;
  const k2 = kp + 1;
  const k3 = kp + ks;
  for (let mo = 1; mo <= 13; mo++) {
    ffo[mo] = 0.0;
    fo[mo] = 0.0;
    tfo[mo] = 0.0;
    vfo[mo] = 0.0;
    for (let l = 1; l <= ll; l++) {
      foc[l][mo] = 0.0;
    };
    for (let k = 1; k <= kk; k++) {
      tfob[k][mo] = 0.0;
      if (k <= kp) {
        dvo[k][mo] = 0.0;
      };
    };
  };
  tff = 0.0;
  ttv = 0.0;
  for (let k = 1; k <= kp; k++) {
    tvr[k] = 0.0;
  };
  for (let l = 1; l <= ll; l++) {
    tvf[l] = 0.0;
    for (let k = 1; k <= kk; k++) {
      fos[k][l][13] = 0.0;
    };
  };
  // ********************************************************************
  // Begin calculation of budget
  // ********************************************************************
  for (let l = 1; l <= ll; l++) {
    for (let k = 1; k <= kk; k++) {
      dff[k][l] = fpf[l] * ffr[k][l];
      dfo[k] = dfo[k] + dff[k][l];
    };
    for (let k = 1; k <= kp; k++) {
      tvr[k] = tvr[k] + vfr[k][l];
      for (let mo = 1; mo <= 12; mo++) {
        dvf[k][l][mo] = vfr[k][l] * tdlc[k][mo];
      };
    };
    for (let k = 1; k <= kk; k++) {
      for (let mo = 1; mo <= 12; mo++) {
        if (k <= kp) {
          fob[k][l][mo] = (dff[k][l] / 12.0) + dvf[k][l][mo];
        }
        else {
          fos[k][l][mo] = dff[k][l] / 12.0;
        };
      };
    };
    for (let mo = 1; mo <= 12; mo++) {
      for (let k = 1; k <= kk; k++) {
        if (k <= kp) {
          foc[l][mo] = foc[l][mo] + fob[k][l][mo];
        }
        else {
          foc[l][mo] = foc[l][mo] + fos[k][l][mo];
        };
      };
    };
  };
  for (let mo = 1; mo <= 12; mo++) {
    for (let k = 1; k <= kk; k++) {
      for (let l = 1; l <= ll; l++) {
        if (k <= kp) {
          tfob[k][mo] = tfob[k][mo] + fob[k][l][mo];
        }
        else {
          tfos[k][mo] = tfos[k][mo] + fos[k][l][mo];
        };
      };
    };
  };
  const zzz = kp;
  let kis = 0;
  for (let k = 1; k <= kk; k++) {
    for (let mo = 1; mo <= 12; mo++) {
      fop[k][mo] = 0.0;
      for (let ki = k2; ki <= k3; ki++) {
        kis = ki - kp;
        fop[k][mo] = fop[k][mo] + fok[k][kis][mo] * tfos[ki][mo];
      };
    };
  };
  let iterating_needed = true; // Label 21 in the book, a while loop implemented with GOTO
  while (iterating_needed) {
    for (let ki = k2; ki <= k3; ki++) {
      kis = ki - kp;
      for (let mo = 1; mo <= 12; mo++) {
        for (let k = 1; k <= kk; k++) {
          fop[k][mo] = fop[k][mo] + fop[ki][mo] * fok[k][kis][mo];
        };
        fop[ki][mo] = 0.0;
      };
    };
    iterating_needed = false;
    for (let ki = k2; ki <= k3; ki++) {
      for (let mo = 1; mo <= 12; mo++) {
        if (tfos[ki][mo] === 0.0 || fop[ki][mo] === 0.0) {
          continue;
        }
        else if ((fop[ki][mo] / tfos[ki][mo]) >= 0.001) {
          iterating_needed = true;
          break;
        };
      };
    };
  };
  for (let k = 1; k <= kp; k++) {
    for (let mo = 1; mo <= 12; mo++) {
      for (let ki = k2; ki <= k3; ki++) {
        fop[k][mo] = fop[k][mo] + (fop[ki][mo] / zzz);
      };
    };
  };
  for (let k = 1; k <= kp; k++) {
    for (let mo = 1; mo <= 12; mo++) {
      tfoa[k][mo] = tfob[k][mo] + fop[k][mo];
    };
  };
  for (let l = 1; l <= ll; l++) {
    tff = tff + fpf[l];
    for (let mo = 1; mo <= 12; mo++) {
      for (let k = 1; k <= kp; k++) {
        tvf[l] = tvf[l] + dvf[k][l][mo];
        dvo[k][mo] = dvo[k][mo] + dvf[k][l][mo];
      };
    };
  };
  for (let l = 1; l <= ll; l++) {
    ttv = ttv + tvf[l];
    for (let k = 1; k <= kk; k++) {
      ffo[1] = ffo[1] + dff[k][l] / 12;
    };
  };
  for (let mo = 1; mo <= 12; mo++) {
    ffo[mo] = ffo[1];
    for (let l = 1; l <= ll; l++) {
      fo[mo] = fo[mo] + foc[l][mo];
    };
    for (let k = 1; k <= kp; k++) {
      tfo[mo] = tfo[mo] + tfoa[k][mo];
      vfo[mo] = vfo[mo] + dvo[k][mo];
      tfoa[k][13] = tfoa[k][13] + tfoa[k][mo];
      for (let l = 1; l <= ll; l++) {
        dvf[k][l][13] = dvf[k][l][13] + dvf[k][l][mo];
      };
      dvo[k][13] = dvo[k][13] + dvo[k][mo];
    };
    ffo[13] = ffo[13] + ffo[mo];
    vfo[13] = vfo[13] + vfo[mo];
    fo[13] = fo[13] + fo[mo];
  };
  for (let k = 1; k <= kk; k++) {
    for (let l = 1; l <= ll; l++) {
      for (let mo = 1; mo <= 12; mo++) {
        fob[k][l][13] = fob[k][l][13] + fob[k][l][mo];
        tfos[k][13] = tfos[k][13] + fos[k][l][mo];
      };
    };
  };
  // ********************************************************************
  // Write out the budget
  // ********************************************************************
  write(`${fh(1)}${fx(10)} LL=${fi(2, ll)} FACTORY OVERHEAD COST ITEMS`); // 100
  write(`${fh(0)}${fx(10)} KK=${fi(2, kk)} NUMBER OF DEPARTMENTS`);
  write(`${fh(0)}${fx(10)}FFR(K,L)=FIXED FACTORY OVERHEAD RATES`); // 101
  write(`${fh(0)}${fx(10)}     1        2        3        4        5         6        7        8        9        10       11       12`); // 102
  for (let k = 1; k <= kk; k++) {
    write_no_cr(`${fh(0)}${fx(5)}${fi(2, k)}${fx(3)}`); // 107
    for (let l = 1; l <= 12; l++) {
      write_no_cr(`${ff(9, 4, ffr[k][l])}`);
    };
    write("");
  };
  write(`${fh(0)}${fx(10)}FPF(L)=FIXED PART OF FACTORY OVERHEAD`); // 104
  write_no_cr(`${fh(0)}${fx(10)}`); // 105
  for (let l = 1; l <= 12; l++) {
    write_no_cr(`${ff(9, 4, fpf[l])}`);
  };
  write("");
  write(`${fh(1)}${fx(10)}VFR(K,L)=VARIABLE FACTORY OVERHEAD RATES`); // 106
  write(`${fh(0)}${fx(10)}     1        2        3        4        5         6        7        8        9        10       11       12`); // 102
  for (let k = 1; k <= kp; k++) {
    write_no_cr(`${fh(0)}${fx(5)}${fi(2, k)}${fx(3)}`); // 107
    for (let l = 1; l <= 12; l++) {
      write_no_cr(`${ff(9, 4, vfr[k][l])}`);
    };
    write("");
  };
  for (let mo = 1; mo <= 12; mo++) {
    write(`${fh(1)}${fx(47)}FACTORY OVERHEAD BUDGET`); // 108
    write(`${fx(44)}FOR THE MONTH OR PERIOD MO=${fi(4, mo)}`);
    write(`${fh(0)}    COST          FACTORY                   FACTORY OVERHEADS BEFORE PRORATION OF SERVICE DEPARTMENTS`); // 109
    write(`${fh(0)}    ITEM         OVERHEAD               PRODUCING DEPARTMENTS K=1,...,4               SERVICE DEPARTMENTS K=K2=K3=5,..6`);
    write(`${fh(0)}     L       COSTS FOC(L,MO) FOB(1,L,MO)   FOB(2,L,MO)   FOB(3,L,MO)   FOB(4,L,MO)       FOS(5,L,MO)      FOS(6,L,MO)`);
    for (let l = 1; l <= ll; l++) {
      write(`${fh(0)}${fi(6, l)}${ff(21, 5, foc[l][mo])}${ff(14, 5, fob[1][l][mo])}${ff(14, 5, fob[2][l][mo])}${ff(14, 5, fob[3][l][mo])}${ff(14, 5, fob[4][l][mo])}${ff(19, 6, fos[k2][l][mo])}${ff(17, 6, fos[k3][l][mo])}`); // 110
    };
    write(`${fh(0)}   TOTAL ${ff(18, 5, fo[mo])}`); // 111
    write(`    FO(MO)`);
    write(`${fh(0)}${fx(17)}SUB-TOTALS${ff(14, 5, tfob[1][mo])}${ff(14, 5, tfob[2][mo])}${ff(14, 5, tfob[3][mo])}${ff(14, 5, tfob[4][mo])}${ff(19, 6, tfos[k2][mo])}${ff(17, 6, tfos[k3][mo])}`);
    write(`   TFOB(K,MO) AND TFOS(K,MO)`);
    write(`${fh(0)}   PRORATION FOP(K,MO)`); // 112
    write(`   K= 1,...4         ${ff(20, 5, fop[1][mo])}${ff(14, 5, fop[2][mo])}${ff(14, 5, fop[3][mo])}${ff(14, 5, fop[4][mo])}`);
    write(`${fh(0)}${fx(25)}FACTORY OVERHEADS AFTER PRORATION OF SERVICE DEPARTMENTS TFOA(K,MO)`); // 113
    write(`${fh(0)}${fx(36)}K= 1          K= 2          K= 3          K= 4`);
    write(`${fh(0)}   TOTALS  ${ff(30, 5, tfoa[1][mo])}${ff(14, 5, tfoa[2][mo])}${ff(14, 5, tfoa[3][mo])}${ff(14, 5, tfoa[4][mo])}`); // 114
    write(`   TFOA(K,MO)`);
  };
  write(`${fh(1)}${fx(39)}BUDGET OF VARIABLE FACTORY OVERHEAD COSTS`); // 115
  write(`${fx(39)}(BEFORE PRORATION OF SERVICE DEPARTMENTS)`);
  write(`${fh(0)}DEPARTMENT${fx(30)}DEPARTMENTAL VARIABLE OVERHEADS PER MONTH DVO(K,MO)`); // 116
  write(`   K           JAN.    FEB.    MARCH    APR.    MAY    JUNE    JULY    AUG.    SEPT.    OCT.    NOV.   DEC.   PERIOD`);
  for (let k = 1; k <= kp; k++) {
    write_no_cr(`${fh(0)}${fi(4, k)}${ff(16, 3, dvo[k][1])}`); // 117
    for (let mo = 2; mo <= 13; mo++) {
      write_no_cr(`${ff(8, 3, dvo[k][mo])}`);
    };
    write("");
  };
  write_no_cr(`${fh(0)}TOTALS${ff(14, 3, vfo[1])}`); // 118
  for (let mo = 2; mo <= 13; mo++) {
    write_no_cr(`${ff(8, 3, vfo[mo])}`);
  };
  write("");
  write("VFO(MO)");
  write(`${fh(1)}${fx(33)}DEPARTMENTAL FIXED AND VARIABLE FACTORY OVERHEAD COSTS`); // 119
  write(`${fh(0)}${fx(30)}FACTORY             PRODUCING DEPARTMENTS K=1,...,4`); 
  write(`${fx(30)}OVERHEADS`); 
  write(`${fx(45)}K = 1       K = 2       K = 3       K = 4`); 
  write(`${fh(0)}${fx(30)}FIXED    ${ff(12, 4, dfo[1])}${ff(12, 4, dfo[2])}${ff(12, 4, dfo[3])}${ff(12, 4, dfo[4])}`);  // 120
  write(`${fx(30)}DFO(K,13)`);  
  write(`${fh(0)}${fx(30)}VARIABLE ${ff(12, 4, dvo[1][13])}${ff(12, 4, dvo[2][13])}${ff(12, 4, dvo[3][13])}${ff(12, 4, dvo[4][13])}`);  
  write(`${fx(30)}DVO(K,13)`);  
};





