article( // #90
    3, 3, 2015,
    `Astro Fighter in JavaScript by Static Binary Translation`,
    `
            	I continued my experiments with static binary translation of 6502-based arcade games and 
            	translated the 1980 game Astro Fighter to JavaScript.
            	<p>
            	The arcade game Astro Fighter was originally written by Data East Corporation (DECO) in 1980.
            	It was one of the first arcade games I ever played, though the version
            	we had in our pub was called Astro Wars (a remake based on a Signetics 2650 CPU by
            	the Italian company Zaccaria).
            	<p>
            	The translation was automatized by a Prolog program, which generates semantically equivalent
            	JavaScript code for each 6502 instruction and applies some optimization techniques
            	to the generated program (e.g., removal of redundant flag calculations). The outcome is
            	an exact simulation of the original arcade game.
            	The graphics interface and the emulation of the Astro Fighter video hardware
            	were directly coded in JavaScript and rely on HTML5 and the Canvas element.
            	So you should have a quite recent browser version supporting these features to be able to play the game.
            	<p>
            	<a href="astrof_js/AstrofJS.html" target="_blank">Click here to try this Astro Fighter version now.</a>.
            	<p>
            	Here is an example screenshot:
            	<p>
            	<img src="media/astrof_js.jpg" alt="Norbert Kehrer's Astro Fighter in JavaScript">
            	<p>
            
            
            
    `);
