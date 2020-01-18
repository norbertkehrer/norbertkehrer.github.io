article( // #105
    31, 8, 2017,
    `Floating Point Library for the Mailuefterl Computer and More Original Mailuefterl Programs`,
    `
            	Almost all original software for the Austrian pioneering computer Mailuefterl seems to be lost now.
            	This is really a pity. I found some pieces of original Mailuefterl code in the diploma thesis of the late
            	<a href="https://de.wikipedia.org/wiki/Peter_Lucas_(Informatiker)" target="_blank">Peter Lucas</a>, one
            	of the members of the Mailuefterl team. Peter wrote about computer programming, which was
            	a completely new field of knowledge back in 1959. He shows structured ways of programming using several
            	instructive examples like a sine function implemented via Taylor series, or square root calculation with Newton's
            	method, or matrix multiplication, etc. In the appendix of his diploma thesis Peter Lucas added the code listings
            	of these examples in Mailuefterl assembly language. Unfortunately, the programs use a floating point library,
            	which was also written by Peter Lucas as part of his diploma thesis, but for which the code listing was not
            	included. So, in order to be able to run Peter's example programs in my Mailuefterl emulator, I had to rewrite
            	the floating point operations from scratch on my own. I implemented addition, subtraction, multiplication, division,
            	and printing of floating point numbers. My code is certainly not as elegant as Peter's original, but it seems to
            	work, and so Peter Lucas' original programs from 1959 can be tried out still today. I also could find and correct some bugs
            	in my emulator during this interesting exercise.
            	<p>
            
            	You can try Peter's programs and my floating point routines directly in your internet browser
            	here:
            	<ul>
            		<li>
            		<a href="mailuefterl/mailuefterl.html" target="_blank">Start the Mailuefterl Emulator</a>
            	</ul>
            	The exact reference of the diploma thesis (in German) is:<br>
            	Lucas P.: "Zur Programmierung elektronischer Rechenmaschinen",
            	Staatspruefungsarbeit am Institut fuer Nachrichtentechnik II der
            	Technischen Hochschule Wien, Vienna, October 1959.
            	The  title translates to "On the programming of electronic calculating machines".
            	<p>
            	Here is a screenshot with a little demo program using Peter's sine function:
            	<p>
            	<img src="media/mailuefterl_sinus.jpg" alt="Norbert Kehrer's Mailuefterl Emulator"><p>
            
            
            
    `);
