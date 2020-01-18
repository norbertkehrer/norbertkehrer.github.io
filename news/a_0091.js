article( // #91
    2, 4, 2015,
    `Centipede in JavaScript by Static Binary Translation`,
    `
            	I made another static binary translation of a 6502-based arcade game to JavaScript.
            	It is the great game Centipede, which was originally written by Atari back in 1980.
            	<p>
            	The translation was automatized by my Prolog program, which generates semantically equivalent
            	JavaScript code for each 6502 instruction and applies some optimization techniques
            	to the generated program (e.g., removal of redundant flag calculations). The outcome is
            	an exact simulation of the original arcade game.
            	The graphics interface and the emulation of the Centipede video hardware
            	were directly coded in JavaScript and rely on HTML5 and the Canvas element.
            	So you should have a quite recent browser version supporting these features to be able to play the game.
            	<p>
            	If you are interested in the technique I used for the automatic translation and the highly
            	interesting challenges I faced in this process, come and visit the great
            	<a href="http://www.vcfe.org" target="_blank">Vintage Computer Festival Europe (VCFE)</a>
            	in Munich fom May 1 to May 3, 2015. I will give a talk there on the project, and would be
            	happy to meet you, discuss it, and have fun.
            	<p>
            	<a href="centipede_js/CentipedeJS.html" target="_blank">Now, click here to try Centipede directly in your browser.</a>.
            	<p>
            	Here is an example screenshot:
            	<p>
            	<img src="media/centipede_js.jpg" alt="Norbert Kehrer's Centipede in JavaScript">
            	<p>
            
            
            
    `);
