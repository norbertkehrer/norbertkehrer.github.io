article( // #123
  4, 4, 2020,
  "A Behavioral Theory of the Firm in JavaScript",
  `
    Some years ago, I bought a cool book from 1963 at the fleamarket for just 2 Euros. It was written
    by Richard M. Cyert and James G. March from the Carnegie Institute of Technology, and it describes their
    seminal behavioral theory of the firm (see
    <a href="https://en.wikipedia.org/wiki/A_Behavioral_Theory_of_the_Firm" target="_blank">[ABTOF]</a>).
    The theory is a model of the decision processes and the formation of goals within companies.
    <p>
    The great thing is, that the book not only contains the verbal description of the
    theory, but also a real quantitative implementation in the form of a computer simulation program of a
    duopoly (two-firm) market. Even more great is, that the authors also included the complete source code
    listing of the program and a full sample printout of a program run in the book (which was actually the
    reason I bought it in the first place ;-).
    <p>
    The code is written in the ancient programming language 20-GATE (Generalized Algebraic Translator, Extended) for the
    <a href="https://en.wikipedia.org/wiki/Bendix_G-20" target="_blank">Bendix G-20</a> mainframe.
    In an attempt to have a "perfect" translation of the original 20-GATE program to a modern platform,
    I hand-translated the 20-GATE code, statement by statement, to a semantically equivalent
    JavaScript program. Special care was taken to have as much as possible a 1:1 relationship between the
    original and the translated code and to exactly reproduce the original control flow (with quite some GOTO
    statements :-).
    <p>
    To make the translation process a little bit clearer, you see in the following a code segment in
    20-GATE and its representation in JavaScript:
    <p>
    <img src="abtof/abtof_20_gate.png" alt="Norbert Kehrer's port of A Behavioral Theory of the Firm">
    <p>
    <img src="abtof/abtof_js.png" alt="Norbert Kehrer's port of A Behavioral Theory of the Firm">
    <p>
    The original program took a set of punched cards as its input data and produced a long printout of data for
    50 time periods. The JavaScript version also generates this printout, but I added also a simple line graph
    feature to view the development of a selected variable and the possibility to generate and download a "csv"
    file of all the output data, so that you can analyze it in a spreadsheet, statistics package, or in your own
    self-written programs.
    <p>
    You can try out my simulation here:
    <a href="abtof/ABTOF.html" target="_blank">Simulation of A Behavioral Theory of the Firm</a>.
    <p>
    You can read more about it on my
    <a href="abtof.html" target="_blank">A Behavioral Theory of the Firm</a> page.
    <p>
    I also published the source code of my JavaScript program on
    <a href="https://github.com/norbertkehrer/abtof" target="_blank">GitHub</a>.
    <p>
    And here are two screen shots:
    <p>
    <img src="abtof/abtof_screenshot_1.png" alt="Norbert Kehrer's port of A Behavioral Theory of the Firm">
    <p>
    <img src="abtof/abtof_screenshot_2.png" alt="Norbert Kehrer's port of A Behavioral Theory of the Firm">

      
          
  `);

