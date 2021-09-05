article( // #129
  5, 9, 2021,
  "Simulation of the Firm through a Budget Computer Program in JavaScript",
  `
  In 1964, <a href="https://en.wikipedia.org/wiki/Richard_Mattessich" target="_blank">Richard Mattessich</a>
  published his seminal book "Accounting and Analytical Methods", which was followed
  by the companion volume "Simulation of the Firm through a Budget Computer Program" in the same year.
  Therein, the theoretical concept of a budet simulation was implemented as a program in FORTRAN IV.
  As early as in 1961, Mattessich had proposed to use computers for budget simulation and so pioneered
  computerized spreadsheets already sixty years ago. The FORTRAN program implements a mathematical model to
  derive the company financials for the budgeting period from hundreds of input parameters defining the
  planning assumptions of that firm (like the sales prices expected for next year, the planned production
  quantities, etc.). The model aimed to cover all company activities and not only specific budgeting aspects like
  sales or production budget as in previous other approaches. Consequently, the ouptut provided by the
  program not only consists of the budgets per functional area but also of a full balance sheet, income
  statement, and cash flow statement for the budgeting period.
  <p>
    The book luckily not only contains descriptions of the budgeting model and the
    computer program, but also the complete source code listing in FORTRAN IV as well as the full printout of a
    sample simulation run and the full set of input data used to generate it. The FORTRAN program itself was
    probably written by Paul A. Zitlau and Thomas C. Schneider, who were Richard Mattessich's collaborators at
    the University of California in Berkeley.
  <p>
    I got especially interested in this early computer program, because Richard Mattessich's great book
    "Accounting and Analytical Methods" was a very important theoretical foundation upon which I based my own
    <a href="https://katalog.wu.ac.at/primo-explore/fulldisplay?docid=WUW_alma2176478530003337&context=L&vid=WUW&lang=de_DE&search_scope=WU-Hochschulschriften&adaptor=Local%20Search%20Engine&tab=wuw_alles&query=any,contains,kehrer&offset=0"
      target="_blank">
      master's thesis</a> back in 1989.
    On top of that, Richard like me is from Austria, and - before he went to Berkeley - had received his PhD
    from the same alma mater as me (<a href="https://www.wu.ac.at/" target="_blank">Vienna University of
      Economics and Business</a>).
  <p>
    As all the source code was available and even sample input and output was provided, I decided to port this
    old program to JavaScript to preserve it in digital form and to play around with it in the browser on modern
    hardware. The FORTRAN code contains mainly calculations on elements of number arrays, so the port was
    quite straight-forward. I felt a little bit like in the eighties, when I typed in long program listings from
    computer magazines in order to get a new game for my Commodore 64. Only, that in this case it was a more
    "serious" program, and that I had to rewrite the code in JavaScript while typing it in. The result is a
    web page, on which you can enter the input parameters in the browser and click a button to get all the
    simulation results. Keep in mind: Back in 1964 the input parameters had to be punched - number by
    number - on punched cards (obeying the exact order foreseen by the program) and this input card deck was then
    fed into the IBM mainframe's card reader together with the card deck for the simulation program.
  <p>
    The source code of the original FORTRAN program is available from here:<br>
    Richard Mattessich, in collaboration with Paul A. Zitlau and Thomas C. Schneider: "Simulation of the Firm
    through a Budget Computer Program", Irwin, Homewood, Illinois, 1964.
  <p>
    The source code of my JavaScript program can be downloaded from GitHub:
    <a href="https://github.com/norbertkehrer/mattessich_1964"
      target="_blank">github.com/norbertkehrer/mattessich_1964</a>
  <p>

    You can try out the budget simulation with the original input data set published in Mattesich's book directly
    right here:
  <ul>
    <li>
      <a href="mattessich/mattessich.html" target="_blank">Simulation of the Firm through a Budget Computer Program</a>
    </li>
  </ul>

  <p>
    Here is a screen shot:
  </p>
  <p>
    <img src="mattessich/mattessich.png" alt="Norbert Kehrer's Simulation of the Firm through a Budget Computer Program">
  </p>

  <p>
    And these are the authors of the original FORTRAN program:
  </p>
  <p>
    <img src="mattessich/mattessich_zitlau_schneider.png" alt="Richard MAttessich, Paul A. Zitlau, and Thomas C. Schneider">
  </p>


          
  `);

