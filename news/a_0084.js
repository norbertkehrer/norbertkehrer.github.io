article( // #84
    6, 6, 2014,
    `Asteroids in JavaScript by Static Binary Translation`,
    `
            	I wanted to learn something about making games in JavaScript based on HTML5 and its
            	Canvas element and tried to redo a Java project of mine from almost ten years ago in JavaScript now.
            	<p>
            	I translated Atari's great vector arcade game Asteroids to JavaScript.
            	Asteroids was originally written by Ed Logg of Atari Inc. in 1979, and 
            	my JavaScript version was created by applying the method of static binary translation to Ed's code.
            	That means, that the program code originally written in the machine language of the 6502 CPU
            	of the Asteroids machine was converted in a one-to-one manner to JavaScript.
            	The translation was automatized by a Java program, which generates semantically equivalent
            	JavaScript code for each 6502 instruction and applies some optimization techniques
            	to the generated program (e.g., removal of redundant flag calculations). The outcome is
            	an exact simulation of the original, first Asteroids game.
            	<p>
            	The graphics interface and the emulation of the Asteroids arcade machine's vector generator hardware
            	were directly coded in JavaScript and rely on HTML5 and the Canvas element.
            	So you should have a quite recent browser version supporting these features to be able to play the game.
            	<p>
            	<a href="ast_js/AsteroidsJS.html" target="_blank">Click here to try this Asteroids version now.</a>.
            	<p>
            	Here is an example screenshot:
            	<p>
            	<img src="media/asteroids_js.jpg" alt="Norbert Kehrer's Asteroids in JavaScript">
            	<p>
            
            
            
            
    `);
