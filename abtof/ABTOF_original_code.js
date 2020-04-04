// *********************************************************************************
// *  A Behavioral Theory of the Firm                                              *
// *********************************************************************************
// *  Simulation of two firms in a duopoly market.                                 *
// *********************************************************************************
// *  Theory and original program by Richard M. Cyert and James G. March in 1962.  *
// *  Ported to JavaScript by Norbert Kehrer in 2020.                              *
// *********************************************************************************


// *****************************************************************************************
// * 20-GATE Program (Generalized Algebraic Translator Extended on the Bendix G-20 computer)
// *****************************************************************************************

// Page 183:

// OPERATOR-012 23 JUN 63   12:40:26 R350.004 GATE 010 060   J G MARCH GSIA
//       R M CYERT - J G MARCH     GSIA

//       BEHAVIORAL THEORY OF THE FIRM
//       GEMPO DUOPOLY MODEL
//       TREATMENT A
//            FIRM I VARIABLE, FIRM II FIXED
//            TIME ZERO GNP = 1
//            GNP NORMALLY DISTIBUTED
//               MU = 1, SIGMA = .1
//            H1...H(K15) = GNP

//       RUN INPUT
//            J0 = RANDOM START
//            K15 = TIME PERIODS PER TRIAL (K15<101)
//            I9 = INITIAL TRIAL (-1) THIS RUN
//            I10 = FINAL TRIAL THIS RUN

//       MAXIMUM RUNNING TIME
//            3 MIN COMPILATION AND DATA
//            1/2 MIN EACH 50-PERIOD TRIAL W/O DETAILED PRNT
//            5 MIN EACH 50-PERIOD TRIAL WITH DETAILED PRNT

//       MAXIMUM PRINTED OUTPUT
//            10 PAGES COMPILATION AND DATA
//            1 PAGE EACH 50-PERIOD TRIAL W/O DETAILED PRNT
//            43 PAGES EACH 50-PERIOD TRIAL W/DETAILED PRNT

//       MODIFICATION INSERTS
//            PRINT (1) PROVIDES DETAILED PRINTOUT
//            MSL (2) MAKES MSL UNITS = REVENUE SHARE
//            SAL (1) MAKES SAL UNITS = REVENUE
//            SAL MODIFICATION CANNOT BE USED W/O MSL MOD

//       FORMAT
//       85 IS HIGHEST STATEMENT NUMBER
//       500 ABCONS

is_highest_statement_number(85);
abcons(500);

let i = dimension(20);
let j = dimension(100);
let k = dimension(300);
let c = dimension(2175);
let d = dimension(85);
let g = dimension(50);
let h = dimension(100);
let x = dimension(58);
let y = dimension(200);
let z = dimension(35);


function run() {
	program_is_running = true;
	PC = 1;
	record_to_be_read_next = 0;
	do {

		switch (PC) {

			case 1: 															// CLEAR MEMORY
				do_loop(1001, i, 0, 0, 1, 2175);
			case 1001:
				c[i[0]] = 0;
				if (i[0] < 201)
					y[i[0]] = 0;
				if (i[0] < 51)
					g[i[0]] = 0;
				if (i[0] < 301)
					k[i[0]] = 0;
				if (i[0] < 36)
					z[i[0]] = 0;
				if (i[0] < 86)
					d[i[0]] = 0;
				if (i[0] < 101)
					j[i[0]] = 0;
				if (i[0] < 59)
					x[i[0]] = 0;
				if (i[0] < 101)
					h[i[0]] = 0;
			case 2:
				if (end_loop()) break;
				list(1);
				read();
				do_loop(1002, i, 0, 0, 1, 40);
			case 1002:
				if (i[0] < 26)
					c[i[0] + 750] = k[i[0]];									// INDU SFE DAT
				if (i[0] < 36)
					c[i[0] + 800] = z[i[0]];									// INDU SFE DAT

				// Page 184:

				c[i[0] + 850] = g[i[0]];										// INDU SFE DAT
			case 24:
				if (end_loop()) break;
				i[1] = 1;
			case 19:
				read();
				do_loop(1003, i, 0, 0, 1, 149);
			case 1003:
				c[300 + i[0] + 150 * i[1]] = c[i[0]];							// FIRM SFE DAT
				if (i[0] < 61)
					if (i[0] > 25)
						k[140 + i[0] + 35 * i[1]] = k[i[0]];					// FIRM SFE DAT
			case 3:
				if (end_loop()) break;
				if (i[1] < k[5]) {
					i[1] = i[1] + 1;
					go_to(19);
					break;
				};
				go_to(63);
				break;

			// START INDUSTRY CALCULATIONS

			case 4:
				k[3] = k[3] + 1;												// TIME
				k[1] = k[1] + 1;
				k[0] = k[0] + 1;
				if (k[1] === k[2]) {
					z[1] = z[0];
					k[1] = 0;
					z[0] = h[k[0]];												// INPUT GNP
				}
				do_loop(1004, k, 19, 0, 1, 7);
			case 1004:
				z[18 + k[19]] = 0;
			case 5:
				if (end_loop()) break;
				do_loop(1005, k, 6, 0, 20, (k[5] - 1) * 20);
			case 1005:
				z[18] = z[18] + g[4 + k[6]];									// S/SEP
				z[19] = z[19] + g[k[6]];										// S/PCL
				z[20] = z[20] + g[1 + k[6]];									// S/PEX
				z[21] = z[21] + g[2 + k[6]];									// S/SAL
				z[22] = z[22] + g[4 + k[6]] * g[2 + k[6]];						// S/SEP,SAL
				z[23] = z[23] + g[k[6]] * g[2 + k[6]];							// S/PCL,SAL
				z[24] = z[24] + g[1 + k[6]] * g[2 + k[6]];						// S/PEX,SAL
			case 6:
				if (end_loop()) break;
				do_loop(1006, k, 6, 0, 20, (k[5] - 1) * 20);
			case 1006:
				g[5 + k[6]] = g[14 + k[6]] * (g[4 + k[6]] / z[18]) +
					(1 - g[14 + k[6]]) * g[5 + k[6]];							// RSEP
				g[6 + k[6]] = g[15 + k[6]] * (g[k[6]] / z[19]) +
					(1 - g[15 + k[6]]) * g[6 + k[6]];							// RPCL
				g[7 + k[6]] = g[16 + k[6]] * (g[1 + k[6]] / z[20]) +
					(1 - g[16 + k[6]]) * g[7 + k[6]];							// RPEX
			case 7:
				if (end_loop()) break;
				z[17] = z[16]; z[3] = z[2]; z[9] = z[8]; z[7] = z[6]; z[5] = z[4];
				z[8] = z[24] / z[21]; z[6] = z[23] / z[21]; z[4] = z[22] / z[21]; 			// WSEP PCL PEX
				z[2] = z[10] * pow(z[0], z[11]) * pow(z[4], z[12]) *
					pow(z[6], z[13]) * pow(z[8], z[14]);									// DEM
				z[16] = (1 - z[15]) * z[16] + z[15] * (z[0] / z[1]) * z[16];						// EXC
				do_loop(1007, k, 6, 0, 20, (k[5] - 1) * 20);
			case 1007:
				g[3 + k[6]] = g[10 + k[6]] * g[3 + k[6]] + (1 - g[10 + k[6]]) * g[3 + k[6]] * g[11 + k[6]] *
					g[5 + k[6]] - g[12 + k[6]] * g[6 + k[6]] + g[13 + k[6]] * g[7 + k[6]];		// MSL
				z[25] = z[25] + g[3 + k[6]];												// S/MSL-I
			case 8:
				if (end_loop()) break;
				do_loop(1008, k, 6, 0, 20, (k[5] - 1) * 20);
			case 1008:
				g[3 + k[6]] = g[3 + k[6]] / z[25];								// MSL
			case 9:
				if (end_loop()) break;
				z[29] = g[0] * pow(10, 10);
				do_loop(1009, k, 6, 0, 20, (k[5] - 1) * 20);
			case 1009:
				if (g[3 + k[6]] < z[28]) {										// CHECK MSL
					go_to(10);
					break;
				};
				if (g[k[6]] < z[29]) {											// TEST PCL
					z[27] = g[k[6]] / g[9 + k[6]];								// COMPUTE MC/F
					z[26] = g[k[6]] / g[8 + k[6]];								// COMPUTE MC/R
					z[29] = g[k[6]];
					go_to(10);
					break;
				};
			case 10:
				if (end_loop()) break;
				// LOCATION OF MSL MODIFICATION NUMBER 1
				// START MSL MODIFICATION INSERT   1 OF 2
				z[35] = 0;
				do_loop(1010, k, 6, 0, 20, (k[5] - 1) * 20);
			case 1010:

				// Page 185:

				g[18 + k[6]] = z[2] * g[3 + k[6]];
				g[17 + k[6]] = g[k[6]] * g[18 + k[6]];
				z[35] = z[35] + g[17 + k[6]];
			case 31:
				if (end_loop()) break;
				do_loop(1011, k, 6, 0, 20, (k[5] - 1) * 20);
			case 1011:
				g[17 + k[6]] = g[17 + k[6]] / z[35];
			case 32:
				if (end_loop()) break;
				// END MSL MODIFICATION INSERT

				// FIRM COMPUTATIONS

				k[7] = 0;
				do_loop(1012, k, 6, 0, 20, (k[5] - 1) * 20);
			case 1012:
				k[7] = k[7] + 1;
				do_loop(1013, i, 0, 0, 1, 149);
			case 1013:
				c[i[0]] = c[i[0] + 150 * k[7]];									// FIRM OPL DAT
				if (i[0] < 61) {
					if (i[0] > 25) {
						k[i[0]] = k[i[0] + 35 * k[7]];
					};
				};																// FIRM OPL DAT
			case 23:
				if (end_loop()) break;
				c[84] = z[26] / (c[0] / c[1]);									// RMCPC
				c[85] = z[27] / (c[0] / c[5]);									// FMCPC
				k[36] = k[36] + 1; k[34] = k[34] + 1; k[32] = k[32] + 1;		// TIMING
				c[51] = g[2 + k[6]];											// UPDATE SAL
				c[61] = c[60]; c[60] = g[3 + k[6]];								// UPDATE MSL
				c[50] = c[60] * z[2];											// SAL
				// LOCATION OF MSL MODIFICATION NUMBER 2
				// START MSL MODIFICATION INSERT   2 OF 2
				c[60] = g[17 + k[6]];
				// END MSL MODIFICATION INSERT
				if (c[50] > c[125] * c[51]) {									// TEST SAL
					c[50] = c[125] * c[51];
				};
				g[2 + k[6]] = c[50];
				// LOCATION OF SAL MODIFICATION NUMBER 1
				// START SAL MODIFICATION INSERT   1 OF 1
				c[50] = c[0] * c[50];
				// END SAL MODIFICATION INSERT

				// INVENTORY-OUTPUT DECISIONS

				c[41] = c[40];													// UPDATE INL
				c[40] = c[40] + c[30] - g[2 + k[6]];							// INL
				c[43] = c[42];													// UPDATE EXL
				c[42] = c[103] * c[42] + (1 - c[103]) * c[51];					// EXL
				c[45] = c[44];													// UPDATE RUL
				c[44] = c[105] * c[44] + (1 - c[105]) * c[51];					// RUL
				if (c[44] > c[42]) {											// TEST RUL
					c[44] = c[42];
				};
				if (c[40] < c[44]) {											// LOW INL
					c[46] = c[40] + c[104] * (c[44] - c[40]);					// INPRO
					go_to(11);
					break;
				};
				if (c[40] > c[42]) {											// HIGH INL
					c[46] = c[40] - c[102] * (c[40] - c[42]);					// INPRO
					go_to(11);
					break;
				};
				c[46] = c[101] * c[40] + c[40];									// INPRO
			case 11:
				if (c[46] > c[48]) {											// TEST INPRO
					c[46] = c[48];
				};
				c[53] = c[52];													// UPDATE SFL
				c[52] = c[111] * c[52] + (1 - c[111]) * g[2 + k[6]];			// SFL
				c[25] = c[46] - c[40] + c[52];									// PROPRO
				if (k[40] === 0) {												// IF Z=0
					c[10] = c[10] + c[112];										// SLK INCR
					go_to(12);
					break;
				};


				// Page 186:

				if (k[40] === -1) {
					c[28] = c[109] * c[28];										// LPRLIM
					c[62] = c[62] + c[113];										// SEP INCR
					c[10] = c[10] - c[110] * (c[10] - 1);						// SLK DECR
					go_to(17);
					break;
				};
				if (k[40] === 1) {
					c[26] = c[108] * c[26];										// UPRLIM
					c[62] = c[62] - c[123] * (c[62] - 1);						// SEP DECR
					c[10] = c[10] - c[110] * (c[10] - 1);						// SLK DECR
					go_to(16);
					break;
				};
			case 16:
				if (!(c[26] < c[24])) {
					c[26] = c[24];												// TEST UPRLIM
					go_to(17);
					break;
				};
			case 12:
				if (k[41] < k[43]) {
					go_to(14);													// TEST Z1
					break;
				};
				c[26] = c[30];
				do_loop(1014, k, 8, 1, 1, k[12]);								// MAXPRL
			case 1014:
				if (c[30 + k[8]] > c[26]) {
					c[26] = c[30 + k[8]];
				};
			case 13:
				if (end_loop()) break;
			case 14:
				if (k[42] < k[43]) {
					go_to(17);													// TEST Z2
					break;
				};
				c[28] = c[30];
				do_loop(1015, k, 8, 1, 1, k[12]);								// MINPR
			case 1015:
				if (c[30 + k[8]] < c[28]) {
					c[28] = c[30 + k[8]];
				};
			case 15:
				if (end_loop()) break;
				go_to(17);
				break;
			case 17:
				do_loop(1016, k, 8, k[12], -1, 1);
			case 1016:
			case 18:
				c[30 + k[8]] = c[30 + k[8] - 1];								// UPDATE PRL
				if (end_loop()) break;
				if (!(c[25] < c[28])) {
					if (!(c[25] > c[26])) {
						k[42] = k[42] + 1;
						k[41] = k[41] + 1;
						k[40] = 0;
						c[30] = c[25];											// PRL=PROPRO
						go_to(20);
						break;
					};
				};
				if (c[25] > c[26]) {
					k[42] = k[42] + 1;
					k[41] = 0;
					k[40] = 1;
					c[30] = c[26];												// PRL=UPRLIM
					go_to(20);
					break;
				};
				k[42] = 0;
				k[41] = k[41] + 1;
				k[40] = -1;
				c[30] = c[28];													// PRL=LPRLIM
			case 20:
				k[31] = 0;														// L/ CODE

				// SALES GOAL REVISION

				if (k[32] !== k[33]) {											// TEST L/ SAT
					go_to(21);
					break;
				};
				k[31] = k[31] + 1; k[32] = 0;
				if (!(c[55] < c[58])) {
					c[121] = c[121] + c[120] * (1 - c[121]);
					c[58] = (1 - c[121]) * c[58] + c[121] * c[55];				// SAG INCR
					go_to(21);
					break;
				};
				c[121] = c[121] - c[120] * c[121];
				c[58] = c[121] * c[58] + (1 - c[121]) * c[55];					// SAG DECR

			// SALES STRATEGY DECISIONS

			case 21:
				if (k[34] !== k[35]) {											// TEST L/MST
					go_to(25);
					break;
				};
				k[31] = k[31] + 2; k[34] = 0;
				if (c[65] < c[68]) {
					c[122] = c[122] - c[120] * c[122];
					c[10] = c[10] - c[110] * (c[10] - 1);						// SLK DECR
					c[68] = c[122] * c[68] + (1 - c[122]) * c[65];				// MSG DECR
					c[62] = c[62] + c[113];
					go_to(22);
					break;
				};
				k[44] = 0;
				c[122] = c[122] + c[120] * (1 - c[122]);
				c[68] = (1 - c[122]) * c[68] + c[122] * c[65];					// MSG INCR


				// Page 187:

				if (!(c[55] < c[58])) {
					c[62] = c[62] - c[123] * (c[62] - 1);						// DECR SFP
					c[17] = c[16];
					c[16] = c[16] * c[126];
					c[10] = c[10] + c[112];										// TEST SAG
					go_to(25);
					break;
				};
				c[17] = c[16];
				c[16] = c[16] + c[124] * (1 - c[16]);							// SPP
				go_to(25);
				break;
			case 22:
				if (!(c[55] < c[58])) {
					k[44] = 0;													// TEST SAG
					go_to(25);
					break;
				};
				if (c[84] < 1) {
					k[44] = 2;													// TEST RMCPC
					go_to(25);
					break;
				};
				k[44] = 1;
				go_to(25);
				break;

			// PROFIT GOAL REVISION

			case 25:
				c[5] = c[4];
				c[4] = c[3];
				c[3] = c[2];
				c[2] = c[1];
				c[1] = c[0];
				if (k[36] !== k[37]) {
					go_to(33);
					break;
				};
				k[36] = 0; k[31] = k[31] + 4;
				if (c[75] < c[78]) {
					c[131] = c[131] * (1 - c[120]);
					c[78] = (1 - c[132]) * c[78] + c[132] * c[75];				// PFG INCR
					k[29] = k[29] + 1;
					go_to(26);
					break;
				};
				c[131] = c[131] + c[120] * (1 - c[131]);
				c[78] = (1 - c[131]) * c[78] + c[131] * c[75];					// PFG DECR

				// MAIN SEARCH ROUTINE REVISION

				if (k[29] === 0) {
					go_to(27);													// S=0
					break;
				};
				if (k[29] === 5) {
					c[132] = c[132] + c[120] * (1 - c[132]);
					k[29] = 0;
					go_to(27);													// S=5
					break;
				};
				if (!(k[29] < 1)) {
					c[132] = c[132] * (1 - c[120]);
					k[29] = 0;
					go_to(27);
					break;
				};
			case 26:
				if (c[78] < 0) {
					c[78] = 0;
				};
				if (k[29] === 5) {
					k[45] = 0;
					go_to(27);													// PFG SEARCH
					break;
				};
				if (k[29] === 1) {
					k[45] = k[46];
					go_to(27);													// READY SR
					break;
				};
				if (!(k[29] < 6)) {												// S=OTHER
					k[29] = 1;
					k[45] = k[46];												// S=6
					go_to(27);
					break;
				};
				k[50] = k[46];													// REORDER SR
				k[46] = k[47];
				k[47] = k[48];
				k[48] = k[49];
				k[49] = k[50];
				k[45] = k[46];

			// PRICING DECISION

			case 27:
				if (z[16] > z[17]) {											// EXC CHECK
					c[0] = (z[16] / z[17]) * c[0];								// PCL/EXC
				};
				if (k[30] !== 1) {												// TEST W
					go_to(33);
					break;
				};
				k[30] = 0;														// W=0
				if (c[75] > c[76]) {											// TEST PFT
					go_to(29);
					break;
				};
				if (c[135] > 1) {												// TEST B/5
					go_to(30);
					break;
				};
			case 28:
				if ((c[135] + c[136]) < c[137]) {								// MIN B/5
					c[135] = c[135] + c[136];
					go_to(33);
					break;
				};
				if (!((c[135] + c[136]) < c[138])) {
					c[135] = c[137];
					go_to(33);
					break;
				};
			case 29:
				if (c[135] > 1) {
					go_to(28);
					break;
				};


			// Page 188:


			case 30:
				if ((c[135] - c[136]) > c[138]) {								// MAX B/5
					c[135] = c[135] - c[136];
					go_to(33);
					break;
				};
				if (!((c[135] - c[136]) > c[138])) {
					c[135] = c[138];
					go_to(33);
					break;
				};
			case 33:
				k[39] = 0;
				if (!(k[26] > k[27])) {											// TEST 0/1
					go_to(38);
					break;
				};
				if (c[85] === 1) {
					go_to(38);
					break;
				};
				if (c[85] > 1) {												// TEST FMCPC
					go_to(36);
					break;
				};
				if (c[65] < c[68]) {											// TEST MSG
					go_to(37);
					break;
				};
				if (!(c[55] < c[58])) {											// TEST SAG
					go_to(38);
					break;
				};
			case 35:
				c[0] = (1 - c[133] * (1 - c[85])) * c[0];						// PCL/10
				k[39] = k[39] + 10; k[26] = 0;
				go_to(38);
				break;
			case 36:
				if (!(c[65] < c[68])) {											// TEST MSG
					go_to(37);
					break;
				};
				if (!(c[75] < c[78])) {											// TEST PFG
					go_to(38);
					break;
				};
				go_to(35);
				break;
			case 37:
				k[39] = k[39] + 20;
				k[26] = 0;
				c[0] = c[0] * c[85];											// PCL/20
				go_to(38);
				break;
			case 38:
				if (!(c[75] < c[78])) {											// TEST PFG
					c[62] = c[62] - c[123] * (1 - c[62]);
					c[10] = c[10] + c[112];
					go_to(42);
					break;
				};
				if (k[44] !== 0) {												// TEST B
					go_to(41);
					break;
				};
				if (z[16] < z[17]) {											// TEST EXC
					go_to(40);
					break;
				};
				if (!(k[26] > k[28])) {											// TEST D/2
					go_to(44);
					break;
				};
				c[0] = c[135] * c[0];											// PCL/4
				k[30] = 1;
				k[39] = k[39] + 4;
			case 40:
				k[38] = 0;
				k[26] = k[26] + 1;
				go_to(54);
				break;
			case 41:
				if (k[44] === 1) {												// B=1
					go_to(44);
					break;
				};
				if (!(k[26] > k[27])) {											// TEST 0/1
					go_to(44);													// B=2
					break;
				};
				c[0] = c[84] * c[0];											// PCL/3
				k[39] = k[39] + 3;
				k[26] = 0;
				go_to(44);
				break;
			case 42:
				if (!(k[26] > k[27])) {											// TEST 0/1
					go_to(43);
					break;
				};
				if (k[44] === 2) {
					c[0] = c[84] * c[0];										// PCL/2
					k[39] = k[39] + 2;
					k[26] = 0;
					go_to(43);
					break;
				};
				if (k[44] === 1) {
					c[0] = c[0] - c[134] * c[0];								// PCL/1
					k[39] = k[39] + 1;
					k[26] = 0;
					go_to(43);
					break;
				};
			case 43:
				k[38] = 0;
				k[26] = k[26] + 1;
				go_to(54);
				break;

			// MAIN SEARCH ROUTINE

			case 44:
				k[38] = k[38] + 1;												// FIRE SEARCH
				go_to(45 + k[45]);
				break;
			case 45: 															// PFG SEARCH
				c[78] = (1 - c[132]) * c[78] + c[132] * c[75];
				if (c[78] < 0) {
					c[78] = 0;
				};
				go_to(54);
				break;


			// Page 189:


			case 46: 															// SLK SEARCH
				c[10] = c[10] + (1 - c[10]) * c[110];
				go_to(54);
				break;
			case 47: 															// EXL SEARCH
				c[42] = c[42] * c[106];
				go_to(54);
				break;
			case 48: 															// SER SEARCH
				c[62] = c[62] + c[113];
				go_to(54);
				break;
			case 49: 															// SPP SEARCH
				c[17] = c[16];
				c[16] = c[16] + c[124] * (1 - c[16]);
				go_to(54);
				break;
			case 50: 															// SPP SEARCH
				c[17] = c[16];
				c[16] = c[16] * c[126];
				go_to(54);
				break;

			// COST/PRICE CHECK AND SEARCH

			case 54:
				if (k[53] === 0) {
					c[21] = c[20];
				};
				if (c[40] > 0) {												// COL
					c[20] = z[16] * c[10] * c[22] + c[23] * (c[40] / g[2 + k[6]]) + c[16];	// UPDATE COL
				};
				if (!(c[40] > 0)) {
					c[20] = z[16] * c[10] * c[22] + c[16];						// COL
				};
				if (k[53] === 1) {
					go_to(53);
					break;
				};
				if (!((c[0] - c[20]) < ((c[78] / k[37]) / (c[58] / k[33])))) {	// CK COL/PCL
					go_to(51);
					break;
				};
				if (k[51] === 0) {												// CK PAST EXP
					go_to(60 + k[52]);
					break;
				};
				if (k[52] === 1) {
					k[52] = 0;
					go_to(60);
					break;
				};
				k[52] = 1;
				go_to(61);
				break;
			case 60:
				k[53] = 1;
				k[51] = 1;
				c[10] = c[10] + (1 - c[10]) * c[110];							//CUT SLK
				c[17] = c[16];
				c[16] = c[16] * c[126];											// CUT SPP
				go_to(54);
				break;
			case 61:
				k[53] = 1;
				k[51] = 1;
				c[0] = c[0] * (1 - c[133]) + c[133] *
					(c[20] + ((c[78] / k[37]) / (c[58] / k[33])));				// RAISE CPL
				go_to(54);
				break;

			// BOOK-KEEPING

			case 51:
				k[51] = 0;
			case 53:
				k[53] = 0;
				c[73] = c[72];
				c[72] = c[71];
				c[71] = c[70];													// UPDATE PFL
				c[70] = g[2 + k[6]] * (c[0] - c[20]);							// PFL
				c[74] = c[74] + c[70];											// CUM PFT
				if (k[36] === (k[37] - 1)) {
					c[79] = c[78];
					c[77] = c[76];
					c[76] = c[75];
					c[75] = c[74];												// UPDATE PFG
					c[74] = 0;													// UPDATE PFT
				};
				c[54] = c[54] + c[50];											// CUM SAT
				if (k[32] === (k[33] - 1)) {
					c[59] = c[58];
					c[57] = c[56];
					c[56] = c[55];
					c[55] = c[54];												// UPDATE SAG
					c[54] = 0;													// UPDATE SAT
				};
				c[86] = c[86] + c[50];											// CUM MST/SAT
				c[64] = c[64] + c[60] * c[50];
				if (k[34] === (k[35] - 1)) {
					c[69] = c[68];
					c[67] = c[66];
					c[66] = c[65];
					c[65] = c[64] / c[86];										// UPDATE MSG
					c[86] = 0;
					c[64] = 0;													// UPDATE MST
				};
				c[11] = c[10];
				c[63] = c[62];
				c[19] = c[18];
				c[18] = c[16] * g[2 + k[6]] * c[0];								// COMPUTE PEX
				g[k[6]] = c[0];													// LOAD MEMORY
				g[1 + k[6]] = c[18];
				g[4 + k[6]] = c[62];
				g[5 + k[6]] = c[81];
				g[6 + k[6]] = c[82];
				g[7 + k[6]] = c[83];
				g[8 + k[6]] = c[1];


				// Page 190:


				g[9 + k[6]] = c[5];
				k[59] = k[59] + 1;
				k[57] = k[57] + 1;
				k[55] = k[55] + 1;
			case 55:
				do_loop(1017, i, 6, 0, 1, 2);
			case 1017:
				c[87 + i[6]] = c[87 + i[6]] + c[0];								// CUM PCL
				c[90 + i[6]] = c[90 + i[6]] + c[40];							// CUM INL
				c[93 + i[6]] = c[93 + i[6]] + c[60];							// CUM MSL
				c[96 + i[6]] = c[96 + i[6]] + c[70];							// CUM PFL
			case 56:
				if (end_loop()) break;
				do_loop(1018, i, 7, 0, 3, 9);
			case 1018:
				if (k[55] === k[56]) {
					c[87 + i[7]] = c[87 + i[7]] / k[56];
				};
				if (k[57] === k[58]) {
					c[88 + i[7]] = c[88 + i[7]] / k[58];
				};
				if (k[59] === k[60]) {
					c[89 + i[7]] = c[89 + i[7]] / k[60];
				};
			case 57:
				if (end_loop()) break;
				if (k[6] === 20) {
					k[6] = 12;
				};
				if (k[55] === k[56]) {
					x[k[18] + k[6] + 4] = c[96];								// LOAD K55/DEP
					x[k[18] + k[6] + 3] = c[93];
					x[k[18] + k[6] + 2] = c[90];
					x[k[18] + k[6] + 1] = c[87];
					c[96] = 0;
					c[93] = 0;
					c[87] = 0;
					k[55] = 0;
				};
				if (k[57] === k[58]) {
					x[k[18] + k[6] + 8] = c[97];								// LOAD K57/DEP
					x[k[18] + k[6] + 7] = c[94];
					x[k[18] + k[6] + 6] = c[91];
					x[k[18] + k[6] + 5] = c[88];
					c[97] = 0;
					c[94] = 0;
					c[91] = 0;
					c[88] = 0;
					k[57] = 0;
				};
				if (k[59] === k[60]) {
					x[k[18] + k[6] + 12] = c[98];								// LOAD K59/DEP
					x[k[18] + k[6] + 11] = c[95];
					x[k[18] + k[6] + 10] = c[92];
					x[k[18] + k[6] + 9] = c[89];
					c[98] = 0;
					c[95] = 0;
					c[92] = 0;
					c[89] = 0;
					k[59] = 0;
				};
				if (k[6] === 12) {
					k[6] = 20;
				};
				do_loop(1019, i, 0, 0, 1, 149);
			case 1019:
				c[i[0] + 150 * k[7]] = c[i[0]];									// FIRM S-S DAT
				if (i[0] < 61) {
					if (i[0] > 25) {
						k[i[0] + 35 * k[7]] = k[i[0]];							// FIRM S-S DAT
					};
				};
			case 58:
				if (end_loop()) break;
				if (no_detailed_print()) { go_to(59); break; };	// This line is not part of the original program. It was added by Norbert to have a condensed printout based on a parameter (instead of source code change like in the original).
				// LOCATION OF PRINT MODIFICATION NUMBER 1
				// START PRINT MODIFICATION INSERT 1 OF 1
				if (k[7] === 2) {
					go_to(62);
					break;
				};
				print_out(
					f_t("PERIOD") + f_s(6) + f_d(k[0], 3, 0) + f_e() + f_e() + f_e() + f_r(6) +
					f_t("INDUSTRY  DATA") + f_e() + f_e() + f_r(11) + "GNP" + f_s(6) + f_d(z[0], 1, 2) +
					f_s(10) + f_t("DEMAND") + f_s(6) + f_d(z[2], 8, 0) + f_e() + f_e() + f_e()
				);
				print_out(
					f_r(6) + f_t("FIRM  1  DATA") + f_e() + f_e() + f_r(11) + f_t("FEEDBACK") + f_r(31) +
					f_t("GOALS") + f_r(51) + f_t("PERFORMANCE") + f_e() + f_e() + f_r(11) + f_t("SALES") +
					f_r(28) + f_d(c[58], 8, 0) + f_r(54) + f_d(c[55], 8, 0) + f_e() + f_r(11) +
					f_t("MARKET SHARE") + f_r(32) + f_d(c[68], 0, 2) + f_r(58) + f_d(c[65], 0, 2) + f_e() + f_r(11) +
					f_t("PROFIT")
				);
				print_out(
					f_r(27) + f_m(c[78], 8, 0) + f_r(53) + f_m(c[75], 8, 0) + f_e() + f_e() + f_r(11) +
					f_t("DECISION") + f_r(41) + f_t("SLACK") + f_e() + f_e() + f_r(11) +
					f_t("PRICE") + f_r(25) + f_m(c[0], 2, 2) + f_r(41) + f_t("ORG SLACK") + f_r(57) + f_d(c[10], 2, 2) + f_e() + f_r(11) +
					f_t("OUTPUT") + f_r(23) + f_d(c[30], 8, 0) + f_r(41) + f_t("SALES SLACK") + f_r(56) + f_d(c[62], 2, 1) + f_e()
				);
				print_out(
					f_r(11) + f_t("INVENTORY") + f_r(23) + f_d(c[40], 8, 0) + f_r(41) + f_t("COST LEVEL") + f_r(55) + f_m(c[20], 2, 2) + f_e() + f_r(11) +
					f_t("PROMOTION 0/0") + f_r(27) + f_d(c[16], 0, 2) + f_e() + f_e() + f_r(11) +
					f_t("MISCELLANEOUS") + f_e() + f_e() + f_r(11) +
					f_t("EXCESS LEVEL") + f_r(32) + f_d(c[42], 8, 0)
				);
				print_out(
					f_r(46) + f_t("RUNOUT LEVEL") + f_r(64) + f_d(c[44], 8, 0) + f_e() + f_r(11) +
					f_t("LOWER PROD LIMIT") + f_r(32) + f_d(c[28], 8, 0) + f_r(46) +
					f_t("UPPER PROD LIMIT") + f_r(64) + f_d(c[26], 8, 0) + f_e() + f_e() + f_e()
				);
				go_to(59);
				break;
			case 62:


				// Page 191:


				print_out(
					f_r(6) + f_t("FIRM  2  DATA") + f_e() + f_e() + f_r(11) + f_t("FEEDBACK") + f_r(31) +
					f_t("GOALS") + f_r(51) + f_t("PERFORMANCE") + f_e() + f_e() + f_r(11) + f_t("SALES") +
					f_r(28) + f_d(c[58], 8, 0) + f_r(54) + f_d(c[55], 8, 0) + f_e() + f_r(11) +
					f_t("MARKET SHARE") + f_r(32) + f_d(c[68], 0, 2) + f_r(58) + f_d(c[65], 0, 2) + f_e() + f_r(11) +
					f_t("PROFIT")
				);
				print_out(
					f_r(27) + f_m(c[78], 8, 0) + f_r(53) + f_m(c[75], 8, 0) + f_e() + f_e() + f_r(11) +
					f_t("DECISION") + f_r(41) + f_t("SLACK") + f_e() + f_e() + f_r(11) +
					f_t("PRICE") + f_r(25) + f_m(c[0], 2, 2) + f_r(41) + f_t("ORG SLACK") + f_r(57) + f_d(c[10], 2, 2) + f_e() + f_r(11) +
					f_t("OUTPUT") + f_r(23) + f_d(c[30], 8, 0) + f_r(41) + f_t("SALES SLACK") + f_r(56) + f_d(c[62], 2, 1) + f_e()
				);
				print_out(
					f_r(11) + f_t("INVENTORY") + f_r(23) + f_d(c[40], 8, 0) + f_r(41) + f_t("COST LEVEL") + f_r(55) + f_m(c[20], 2, 2) + f_e() + f_r(11) +
					f_t("PROMOTION 0/0") + f_r(27) + f_d(c[16], 0, 2) + f_e() + f_e() + f_r(11) +
					f_t("MISCELLANEOUS") + f_e() + f_e() + f_r(11) +
					f_t("EXCESS LEVEL") + f_r(32) + f_d(c[42], 8, 0)
				);
				print_out(
					f_r(46) + f_t("RUNOUT LEVEL") + f_r(64) + f_d(c[44], 8, 0) + f_e() + f_r(11) +
					f_t("LOWER PROD LIMIT") + f_r(32) + f_d(c[28], 8, 0) + f_r(46) +
					f_t("UPPER PROD LIMIT") + f_r(64) + f_d(c[26], 8, 0) + f_e() + f_e() + f_e()
				);
			// END PRINT MODIFICATION INSERT 1 OF 1
			case 59:
				update_statistics(k[7]);	// This line is not part of the original program. It was added by Norbert for building the data for additional statistics.
				if (end_loop()) break;
				if (k[3] < k[15]) {
					go_to(4);
					break;
				};

				println("INDEPENDENT VARIABLES");							// FINAL OUTPUT
				print_array("X", x, 0, k[18]);
				println("DEPENDENT VARIABLES");
				print_array("X", x, k[18] + 1, k[18] + 24);
				update_run_statistics(i[9]);	// This line is not part of the original program. It was added by Norbert for building the data for additional statistics.
				if (i[9] === i[10]) {
					halt();
					break;
				};

			// PARAMETER SAMPLE GENERATION ROUTINE

			case 63:
				do_loop(1020, i, 0, 0, 1, 299);
			case 1020:
				c[i[0] + 150] = c[i[0] + 450];								// FIRM S-S DAT
				if (i[0] < 70) {
					k[i[0] + 61] = k[i[0] + 201];							// FIRM S-S DAT
				};
			case 64:
				if (end_loop()) break;
				do_loop(1021, i, 0, 1, 1, k[18]);							// RAND DAT GEN
			case 1021:
				if (j[50 + i[0]] === 1) {
					go_to(70);
					break;
				};
				d[0] = rand(j, 0, (y[100 + i[0]] - y[50 + i[0]]) * 1000.0 + 1);
				d[0] = y[50 + i[0]] + d[0] / 1000.0;
				go_to(73);
				break;
			case 70:
				h[0] = rand(j, 0, 100);
				h[0] = h[0] + 1;
				if (h[0] > 50) {
					go_to(71);
					break;
				};
				i[1] = -1;
				go_to(72);
				break;
			case 71:
				i[1] = 1;
				h[0] = 101 - h[0];
			case 72:
				d[0] = (y[100 + i[0]] + y[50 + i[0]]) / 2 + ((y[100 + i[0]] - y[50 + i[0]]) / 6) *
					y[fixed(h[0])] * i[1];
			case 73:
				x[i[0]] = d[0];
				if (j[i[0]] < 2000) {
					c[j[i[0]] - 1000 + 150] = d[0];							// FIRM GEN DAT
					go_to(75);
					break;
				};
				if (j[i[0]] < 3000) {
					k[j[i[0]] - 2000 + 35] = fixed(d[0]);					// FIRM GEN DAT
					go_to(75);
					break;
				};
				z[j[i[0]] - 3000] = d[0];									// FIRM GEN DAT
			case 75:
				if (end_loop()) break;
				do_loop(1022, i, 0, 0, 1, 40);
			case 1022:
				if (i[0] < 26) {
					k[i[0]] = fixed(c[i[0] + 750]);							// INDU OPL DAT
				};
				if (i[0] < 36) {
					z[i[0]] = c[i[0] + 800];								// INDU OPL DAT
				};
				g[i[0]] = c[i[0] + 850];									// INDU OPL DAT
			case 74:
				if (end_loop()) break;
				i[9] = i[9] + 1;
				clear_statistics();		// This line is not part of the original program. It was added by Norbert for clearing the statistics data again after each simulation run.
				println("    I9     " + i[9] + "                     J0     " + j[0]);
				go_to(4);
				break;

			// PROGRAM END

			default:

				alert("GOTO to undefined line number " + PC);

				program_is_running = false;
		};


	} while (program_is_running);

};


// Cards with input data for READ command

function read() {
	switch (record_to_be_read_next) {
		case 0:

			// Page 193:

			data("g", g, 0, [1, 100, 1000, .5, 1.5, 1.5, 1, 100, 1, 1, .5, .5, .5, .5, .5, .5, .5]);
			data("g", g, 20, [1, 100, 1000, .5, 1.5, 1.5, 1, 100, 1, 1, .5, .5, .5, .5, .5, .5, .5]);
			data("h", h, 1, [1.0464, 1.0060, 1.1486, 1.1022, 1.1394, 1.0906, 1.1179, .8499, .9310]);
			data("h", h, 10, [1.1372, .9518, .8624, .8990, .9995, 1.1393, .8213, .9895, .8661, 1.1041]);
			data("h", h, 20, [1.0279, .8195, .8814, 1.0658, .9561, .8601, 1.0199, 1.0159, 1.2273]);
			data("h", h, 29, [1.0041, .8868, 1.0768, 1.0375, .9487, 1.0292, 1.1026, .8666, .9713]);
			data("h", h, 38, [1.0161, .8654, 1.1250, 1.0630, 1.0375, .8579, .9849, .9691]);
			data("h", h, 46, [1.0424, 1.0593, 1.0862, 1.0235, .9147, 1.0137, .7474, .9646, .9628]);
			data("h", h, 55, [.9445, .9487, .8945, .9512, 1.0756, 1.0225, 1.1678, .9850, 1.0598]);
			data("h", h, 64, [.9101, .8837, .9737, .9643, 1.1827, 1.0535, .7944, .7992, 1.1180, .8859]);
			data("h", h, 74, [1.0358, .9770, 1.0208, 1.027, 1.0606, .9693, .7902, 1.0079, .9342, .9656]);
			data("h", h, 84, [.9479, 1.2990, 1.1278, .9856, .9114, 1.0193, .9801, .9463, .8059, 1.0489]);
			data("h", h, 94, [.9757, 1.0531, .9556, .9342, .9115, .9372, 1.0402]);
			data("j", j, 1, [1101, 1102, 1103, 1104, 1105, 1106, 1108, 1109, 1110, 1111, 1112, 1113]);
			data("j", j, 13, [1114, 1120, 1121, 1122, 1123, 1124, 1126, 1131, 1132, 1133, 1134, 1135]);
			data("j", j, 25, [1136, 2043]);
			data("j", j, 52, [1]); data("j", j, 54, [1]);
			data("k", k, 2, [1]); data("k", k, 5, [2]);
			data("k", k, 11, [35, 5, 5]); data("k", k, 16, [28]); data("k", k, 18, [26]);
			data("k", k, 56, [5]); data("k", k, 58, [10]); data("k", k, 60, [25]);
			data("y", y, 1, [2.33, 2.05, 1.88, 1.75, 1.65, 1.56, 1.48, 1.41, 1.34]);
			data("y", y, 10, [1.28, 1.23, 1.18, 1.13, 1.08, 1.04, .99, .95, .92, .88]);
			data("y", y, 20, [.84, .81, .77, .74, .71, .67, .64, .61, .58, .55]);
			data("y", y, 30, [.52, .50, .47, .44, .41, .39, .36, .33, .31, .28]);
			data("y", y, 40, [.25, .23, .20, .18, .15, .13, .10, .08, .05, .02]);
			data("y", y, 50, [.00, .01, .01, .01, .01, .01, .01, 1.01, .60, .01]);
			data("y", y, 60, [.01, .01, .01, .01, .01, .10, .10, .01, .01, .80]);
			data("y", y, 70, [.10, .10, .01, .01, .81, .01, 1.0]);
			data("y", y, 101, [.20, .99, .50, .99, .50, .30, 1.40, .99, .20]);
			data("y", y, 110, [.99, .15, .15, .20, .30, .90, .90, .20, .20, .99]);
			data("y", y, 120, [.90, .90, .99, .20, 1.20, .09, 11]);
			data("z", z, 0, [1, 1]);
			data("z", z, 10, [150, 2, 3, 2, .3, .5, 1, 1]); data("z", z, 28, [.1]);
			data("z", j, 0, [803445]); data("i", i, 9, [52]); data("i", i, 10, [53]); data("k", k, 15, [50]);
			break;


		case 1:
			data("c", c, 0, [1, 1, 1, 1, 1, 1]); data("c", c, 10, [1.5]); data("c", c, 16, [.1]); data("c", c, 18, [100]); data("c", c, 22, [.4, .2, 100000000]);
			data("c", c, 26, [1000]); data("c", c, 28, [1000]); data("c", c, 30, [1000, 1000, 1000, 1000, 1000, 1000]);
			data("c", c, 40, [500]); data("c", c, 42, [500]); data("c", c, 44, [500]); data("c", c, 48, [500000]); data("c", c, 50, [1000]); data("c", c, 52, [1000]);
			data("c", c, 55, [3000]); data("c", c, 58, [3000]); data("c", c, 60, [.5]); data("c", c, 62, [1.5]); data("c", c, 65, [.5]); data("c", c, 68, [.5]); data("c", c, 75, [450]);
			data("c", c, 78, [450]); data("c", c, 81, [1.5, 1, 100]);
			data("c", c, 125, [3]); data("c", c, 137, [1.35, .65]); data("c", c, 140, [.5, .5, .5, .5, .5, .5, .5]);
			data("k", k, 26, [1, 2, 3, 1]); data("k", k, 33, [3]); data("k", k, 35, [3]); data("k", k, 37, [3]); data("k", k, 43, [6]); data("k", k, 46, [1, 2, 3, 4, 5]);
			break;

		case 2:
			data("c", c, 0, [1.001]);
			data("c", c, 1, [1, 1, 1, 1, 1]); data("c", c, 10, [1.5]); data("c", c, 16, [.1]); data("c", c, 18, [100]); data("c", c, 22, [.4, .2, 100000000]);
			data("c", c, 26, [1000]); data("c", c, 28, [1000]); data("c", c, 30, [1000, 1000, 1000, 1000, 1000, 1000]);
			data("c", c, 40, [500]); data("c", c, 42, [500]); data("c", c, 44, [500]); data("c", c, 48, [500000]); data("c", c, 50, [1000]); data("c", c, 52, [1000]);
			data("c", c, 55, [3000]); data("c", c, 58, [3000]); data("c", c, 60, [.5]); data("c", c, 62, [1.5]); data("c", c, 65, [.5]); data("c", c, 68, [.5]); data("c", c, 75, [450]);
			data("c", c, 78, [450]); data("c", c, 81, [1.5, 1, 100]);
			data("c", c, 101, [.1, .5, .25, .5, .25, .15]); data("c", c, 108, [1.2, .8, .1, .5, .08, .08, .1]);
			data("c", c, 120, [.15, .5, .5, .1, .1, 3, .9]); data("c", c, 131, [.5, .5, .5, .1, 1, .05]);
			data("c", c, 137, [1.35, .65]); data("c", c, 140, [.5, .5, .5, .5, .5, .5, .5]);
			data("k", k, 26, [1, 2, 3, 1]); data("k", k, 33, [3]); data("k", k, 35, [3]); data("k", k, 37, [3]); data("k", k, 43, [6]); data("k", k, 46, [1, 2, 3, 4, 5]);
			break;

		default:
			alert("Read attempt for input record #" + record_to_be_read_next + ". Record is missing.");
			break;

	};
	record_to_be_read_next++;	// next record can be read
};


// *****************************************************************************************
// * End of 20-GATE Program
// *****************************************************************************************



