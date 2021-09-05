
// *************************************************************************
// *   Simulation of the Firm through a Budget Computer Program            *
// *   By Richard Mattessich.                                              *
// *   In collaboration with Paul A. Zitlau and Thomas C. Schneider.       *
// *   Published in 1964.                                                  *
// *************************************************************************
// *   Translation to JavaScript by Norbert Kehrer in August 2021.         *
// *************************************************************************

// *** Common variables

// COMMON/AZ00/
let n = 0;  // number of products
let jj = 0; // number of materials used
let kk = 0; // number of departments
let kp = 0; // number of operating departments
let ks = 0; // number of service departments
let mm = 0; // number of operating expense items
let m1 = 0;
let m2 = 0;
let m3 = 0;
let m4 = 0;
let m5 = 0;
let ll = 0; // number of factory overhead cost items
let l1 = 0;
let l2 = 0;
let l3 = 0;
let l4 = 0;
let l5 = 0;
let j6 = 0;

// COMMON/AZ01/
let tpsq = 0;
let tsq = dimension(13);
let tsv = dimension(13);
let sv = dimension(10, 13);
let sq = dimension(10, 13);

// COMMON/AZ02/
let psq = dimension(10);
let si = dimension(10);
let sk = dimension(13);
let sp = dimension(10);

// COMMON/AZ03/
let pq = dimension(10, 13);
let ei = dimension(10, 13);
let bi = dimension(10, 13);
let tpq = dimension(13);
let apq = dimension(10, 13);

// COMMON/AZ04/
let tbi = dimension(13);
let tei = dimension(13);
let pc = dimension(10, 13);
let puc = dimension(10, 13);
let tpc = dimension(13);

// COMMON/AZ05/
let pk = dimension(10, 13);
let pmi = dimension(10);
let pkn = dimension(10, 13);
let puco = dimension(10);
let ucmo = dimension(3);

// COMMON/AZ06/
let rmr = dimension(10, 3, 13);
let tmr = dimension(3, 13);
let prm = dimension(3, 13);
let rmi = dimension(3, 13);
let aprm = dimension(3, 13);

// COMMON/AZ07/
let cmr = dimension(3, 13);
let tcm = dimension(13);
let tmi = dimension(13);
let tpm = dimension(13);
let tpv = dimension(13);
let vmi = dimension(13);

// COMMON/AZ08/
let ucm = dimension(3, 13);
let pmk = dimension(10, 13);
let pmc = dimension(3, 13);
let rmmi = dimension(3);
let pmcn = dimension(3, 13);

// COMMON/AZ09/
let dlc = dimension(10, 4, 13);
let tdlc = dimension(4, 13);
let tlc = dimension(13);
let tlcp = dimension(10);

// COMMON/AZ10/
let slh = dimension(10, 4, 13);
let slc = dimension(4);

// COMMON/AZ11/
let fpf = dimension(13);
let ffr = dimension(6, 13);
let vfr = dimension(4, 13);
let fok = dimension(6, 2, 13);
let fop = dimension(6, 13);

// COMMON/AZ12/
let dff = dimension(6, 13);
let dfo = dimension(6);
let tvr = dimension(4);
let dvf = dimension(4, 13, 13);
let fob = dimension(6, 13, 13);

// COMMON/AZ13/
let foc = dimension(13, 13);
let tfob = dimension(6, 13);
let tff = 0;
let tvf = dimension(13);
let dvo = dimension(4, 13);
let ffo = dimension(13);

// COMMON/AZ14/
let tfoa = dimension(4, 13);
let fo = dimension(13);
let tfo = dimension(13);
let vfo = dimension(13);
let ttv = 0;

// COMMON/AZ15/
let voe = dimension(5, 13);
let oe = dimension(5, 13);
let toe = dimension(13);
let tvoe = dimension(13);
let tpoe = dimension(5);
let tfoe = 0;

// COMMON/AZ16/
let oek = dimension(10, 5);
let foe = dimension(5);

// COMMON/AZ17/
let arc = dimension(13);
let cs = dimension(13);
let fof = dimension(10, 4, 13);
let pfk = dimension(4);
let pe = dimension(13);

// COMMON/AZ18/
let ac1 = 0;
let ac2 = 0;
let tsvn = 0;
let tsvd = 0;
let csc = 0;
let fpc = dimension(13, 3);
let focn = dimension(13);
let focd = dimension(13);

// COMMON/AZ19/
let vpe = dimension(13);
let rco = dimension(13);
let oli = dimension(13);
let sli = dimension(13);
let oco = dimension(13);
let ssm = dimension(13);

// COMMON/AZ20/
let tllx = dimension(13);
let pisx = dimension(13);
let rfr = dimension(13);
let slx = dimension(13);
let ssx = dimension(13);

// COMMON/AZ21/
let tll = dimension(13);
let oir = dimension(13);
let sl = dimension(13);
let slr = dimension(13);
let sir = dimension(13);

// COMMON/AZ22/
let pex = dimension(13);
let pix = dimension(13);
let emx = dimension(13);
let hlx = dimension(13);
let bfx = dimension(13);

// COMMON/AZ23/
let rfe = dimension(13);
let chb = dimension(13);
let casmin = 0;
let casmax = 0;
let ss = dimension(13);

// COMMON/AZ24/
let tco = dimension(13);
let tcr = dimension(13);
let cri = dimension(13);
let ssi = dimension(13);

// COMMON/AZ25/
let fme = dimension(13);
let tfi = dimension(13);
let cgs = dimension(13);
let gp = dimension(13);
let pbt = dimension(13);
let ct = dimension(13);
let pat = dimension(13);

// COMMON/AZ26/
let aex = dimension(13);
let aemx = dimension(13);
let ar = dimension(13);
let bf = dimension(13);
let aar = dimension(13);
let abf = dimension(13);
let vp = dimension(13);

// COMMON/AZ27/
let ae = dimension(13);
let aem = dimension(13);
let arn = dimension(13);
let bfn = dimension(13);
let emn = dimension(13);

// COMMON/AZ28/
let abfx = dimension(13);
let dd = dimension(13);
let em = dimension(13);
let hl = dimension(13);
let pi = dimension(13);
let pis = dimension(13);

// COMMON/AZ29/
let re = dimension(13);
let rex = dimension(13);
let sc = dimension(13);
let scx = dimension(13);
let oeq = dimension(13);
let per = dimension(13);
let ppe = dimension(13);

// COMMON/AZ30/
let tca = dimension(13);
let tfa = dimension(13);
let ta = dimension(13);
let tsl = dimension(13);
let te = dimension(13);

// COMMON/AZ31/
let ocr = dimension(13);

// COMMON/AZ32/
let rcr = dimension(13);

// COMMON/AZ33/
let prmd = dimension(3);


// *** Clear all the data (used before recalculation is made after inputs have been changed)

function clearData() {
  // COMMON/AZ00/
  n = 0;  // number of products
  jj = 0; // number of materials used
  kk = 0; // number of departments
  kp = 0; // number of operating departments
  ks = 0; // number of service departments
  mm = 0; // number of operating expense items
  m1 = 0;
  m2 = 0;
  m3 = 0;
  m4 = 0;
  m5 = 0;
  ll = 0; // number of factory overhead cost items
  l1 = 0;
  l2 = 0;
  l3 = 0;
  l4 = 0;
  l5 = 0;
  j6 = 0;

  // COMMON/AZ01/
  tpsq = 0;
  tsq = dimension(13);
  tsv = dimension(13);
  sv = dimension(10, 13);
  sq = dimension(10, 13);

  // COMMON/AZ02/
  psq = dimension(10);
  si = dimension(10);
  sk = dimension(13);
  sp = dimension(10);

  // COMMON/AZ03/
  pq = dimension(10, 13);
  ei = dimension(10, 13);
  bi = dimension(10, 13);
  tpq = dimension(13);
  apq = dimension(10, 13);

  // COMMON/AZ04/
  tbi = dimension(13);
  tei = dimension(13);
  pc = dimension(10, 13);
  puc = dimension(10, 13);
  tpc = dimension(13);

  // COMMON/AZ05/
  pk = dimension(10, 13);
  pmi = dimension(10);
  pkn = dimension(10, 13);
  puco = dimension(10);
  ucmo = dimension(3);

  // COMMON/AZ06/
  rmr = dimension(10, 3, 13);
  tmr = dimension(3, 13);
  prm = dimension(3, 13);
  rmi = dimension(3, 13);
  aprm = dimension(3, 13);

  // COMMON/AZ07/
  cmr = dimension(3, 13);
  tcm = dimension(13);
  tmi = dimension(13);
  tpm = dimension(13);
  tpv = dimension(13);
  vmi = dimension(13);

  // COMMON/AZ08/
  ucm = dimension(3, 13);
  pmk = dimension(10, 13);
  pmc = dimension(3, 13);
  rmmi = dimension(3);
  pmcn = dimension(3, 13);

  // COMMON/AZ09/
  dlc = dimension(10, 4, 13);
  tdlc = dimension(4, 13);
  tlc = dimension(13);
  tlcp = dimension(10);

  // COMMON/AZ10/
  slh = dimension(10, 4, 13);
  slc = dimension(4);

  // COMMON/AZ11/
  fpf = dimension(13);
  ffr = dimension(6, 13);
  vfr = dimension(4, 13);
  fok = dimension(6, 2, 13);
  fop = dimension(6, 13);

  // COMMON/AZ12/
  dff = dimension(6, 13);
  dfo = dimension(6);
  tvr = dimension(4);
  dvf = dimension(4, 13, 13);
  fob = dimension(6, 13, 13);

  // COMMON/AZ13/
  foc = dimension(13, 13);
  tfob = dimension(6, 13);
  tff = 0;
  tvf = dimension(13);
  dvo = dimension(4, 13);
  ffo = dimension(13);

  // COMMON/AZ14/
  tfoa = dimension(4, 13);
  fo = dimension(13);
  tfo = dimension(13);
  vfo = dimension(13);
  ttv = 0;

  // COMMON/AZ15/
  voe = dimension(5, 13);
  oe = dimension(5, 13);
  toe = dimension(13);
  tvoe = dimension(13);
  tpoe = dimension(5);
  tfoe = 0;

  // COMMON/AZ16/
  oek = dimension(10, 5);
  foe = dimension(5);

  // COMMON/AZ17/
  arc = dimension(13);
  cs = dimension(13);
  fof = dimension(10, 4, 13);
  pfk = dimension(4);
  pe = dimension(13);

  // COMMON/AZ18/
  ac1 = 0;
  ac2 = 0;
  tsvn = 0;
  tsvd = 0;
  csc = 0;
  fpc = dimension(13, 3);
  focn = dimension(13);
  focd = dimension(13);

  // COMMON/AZ19/
  vpe = dimension(13);
  rco = dimension(13);
  oli = dimension(13);
  sli = dimension(13);
  oco = dimension(13);
  ssm = dimension(13);

  // COMMON/AZ20/
  tllx = dimension(13);
  pisx = dimension(13);
  rfr = dimension(13);
  slx = dimension(13);
  ssx = dimension(13);

  // COMMON/AZ21/
  tll = dimension(13);
  oir = dimension(13);
  sl = dimension(13);
  slr = dimension(13);
  sir = dimension(13);

  // COMMON/AZ22/
  pex = dimension(13);
  pix = dimension(13);
  emx = dimension(13);
  hlx = dimension(13);
  bfx = dimension(13);

  // COMMON/AZ23/
  rfe = dimension(13);
  chb = dimension(13);
  casmin = 0;
  casmax = 0;
  ss = dimension(13);

  // COMMON/AZ24/
  tco = dimension(13);
  tcr = dimension(13);
  cri = dimension(13);
  ssi = dimension(13);

  // COMMON/AZ25/
  fme = dimension(13);
  tfi = dimension(13);
  cgs = dimension(13);
  gp = dimension(13);
  pbt = dimension(13);
  ct = dimension(13);
  pat = dimension(13);

  // COMMON/AZ26/
  aex = dimension(13);
  aemx = dimension(13);
  ar = dimension(13);
  bf = dimension(13);
  aar = dimension(13);
  abf = dimension(13);
  vp = dimension(13);

  // COMMON/AZ27/
  ae = dimension(13);
  aem = dimension(13);
  arn = dimension(13);
  bfn = dimension(13);
  emn = dimension(13);

  // COMMON/AZ28/
  abfx = dimension(13);
  dd = dimension(13);
  em = dimension(13);
  hl = dimension(13);
  pi = dimension(13);
  pis = dimension(13);

  // COMMON/AZ29/
  re = dimension(13);
  rex = dimension(13);
  sc = dimension(13);
  scx = dimension(13);
  oeq = dimension(13);
  per = dimension(13);
  ppe = dimension(13);

  // COMMON/AZ30/
  tca = dimension(13);
  tfa = dimension(13);
  ta = dimension(13);
  tsl = dimension(13);
  te = dimension(13);

  // COMMON/AZ31/
  ocr = dimension(13);

  // COMMON/AZ32/
  rcr = dimension(13);

  // COMMON/AZ33/
  prmd = dimension(3);

};











// *** Function for array declaration

function dimension(...dimensions) {
  let arr = [];
  let arr1 = [];
  let arr2 = [];
  switch (dimensions.length) {
    case 1:
      arr = [];
      for (let i = 0; i <= dimensions[0]; i++) {
        arr.push(0);
      };
      return arr;

    case 2:
      arr = [];
      for (let i = 0; i <= dimensions[0]; i++) {
        arr1 = [];
        for (let i = 0; i <= dimensions[1]; i++) {
          arr1.push(0);
        };
        arr.push(arr1);
      };
      return arr;

    case 3:
      arr = [];
      for (let i = 0; i <= dimensions[0]; i++) {
        arr1 = [];
        for (let i = 0; i <= dimensions[1]; i++) {
          arr2 = [];
          for (let i = 0; i <= dimensions[2]; i++) {
            arr2.push(0);
          };
          arr1.push(arr2);
        };
        arr.push(arr1);
      };
      return arr;

    default:
      return [];
  };
};





