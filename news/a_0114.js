article( // #114
    15, 12, 2018,
    `Flashx20 &mdash; Floppy and Screen for the Epson HX-20`,
    `
            	The Epson HX-20 was a nice handheld computer back in the 1980ies. It has a small LCD screen and a micro cassette 
            	drive built in, and it offers an interesting way to connect it with peripheral devices. The serial port at the
            	back of the computer can talk to external hardware using an Epson-specific protocol for data exchange.
            	<p>
            	I happen to own an HX-20, and so I wrote the the program "flashx20" (for <u>FL</u>oppy <u>A</u>nd <u>S</u>creen for the <u>HX-20</u>). With flashx20 a normal
            	Windows PC or notebook computer can be connected to the HX-20, and the PC simulates
            	<ul>
            		<li>
            			an external display controller, and
            		</li>
            		<li>
            			two external dual floppy disk drives (like e.g. the Epson TF-20).
            		</li>
            	</ul>
                The small built-in LCD screen of the HX-20 supports a resolution of only 4 x 20 characters in text mode or 32 x 120 pixels
            	in graphics mode. This makes it cumbersome to edit large BASIC programs or text. Like a real display controller, flash20
            	interprets the commands from the HX-20 and displays the corresponding text on the "big" screen of the PC. At the moment,
            	flashx20 can only display text and has no graphics support yet.
                <p>
                Similarly, it is possible to connect up to four real floppy disk drives to the serial port of the Epson HX-20. There was
                e.g. Epson's dual disk drive called TF-20, which supported loading and saving of programs and data on floppy disks. When
                the TF-20 was connected during the boot-up of the HX-20, a special BASIC extension called "Disk BASIC" was loaded into
                the HX-20 and provided additional commands to work with floppy disks, e.g. the command "FILES" to display the disk directory.
                For the communication between the external floppy drive and the HX-20 a special protocol was used. Like in the real drives,
                the flashx20 program on the PC interprets this protocol and stores and loads programs and data from the HX-20 on the PC's
                hard disk.
                <p>
            	I made a zip file containing my "flashx20" program for Windows computers, some BASIC examples to load via the PC, and a
            	pdf manual. You can download it here:
                <ul>
                    <li>
                        <a href="flashx20/flashx20.zip">flashx20.zip</a>
                    </li>
            	</ul>
            	I am still working on a Raspberry Pi version and on the graphics support.
            	<p>
            	Here are some example screenshots:
            	<p>
                <img src="flashx20/flashx20_1.png" alt="Norbert Kehrer's flashx20">
            	<p>
                <img src="flashx20/flashx20_2.png" alt="Norbert Kehrer's flashx20">
                <p>
                <img src="flashx20/flashx20_3.png" alt="Norbert Kehrer's flashx20">
                <p>
                <img src="flashx20/flashx20_4.png" alt="Norbert Kehrer's flashx20">
                                    
            
            
            
    `);
