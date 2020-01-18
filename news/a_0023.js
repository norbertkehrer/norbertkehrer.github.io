article( // #23
    28, 10, 2000,
    `News`,
    `
                <ul>
                    <li>
            	I made the first really emulated sound for the Java Arcade Emulator. The Namco sound chip in
            	<ul>
            	<li><a href="JPacman.html" target = "_blank">Pacman</a>,
            	<li><a href="JMsPacman.html" target = "_blank">Ms. Pacman</a>, and
            	<li><a href="JPengo.html" target = "_blank">Pengo</a>
            	</ul>
            	has been emulated. This time this was not done by only playing pre-recorded samples of the game, but by 
            	constructing the sound for the Namco 3-voice sound generator in real-time. The result is terrible, when compared
            	to MAME (due to the limitations of standard Java). But maybe I can somehow improve the concept.<br>
            	Another problem is, that sound does not stop, after closing the browser window with the game. For the moment
            	you have to close the browser completely. I am working on this.<br>
            	Big thanks go to
            	Peter Futerko for the support with the sound routines.
            	I used his great ideas, although I had to apply a completely different technique at the end, because I did
            	not want to use the non-standard Java features of javax.sound.<br>
                    Now try these three classics with sound in the
            	<a href="jae.html">JAE</a> section!</li>
                </ul>
            
            
            
    `);
