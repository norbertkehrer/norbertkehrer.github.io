article( // #117
    1, 1, 2019,
    `Flashx20, the Epson HX-20 Floppy and Screen Emulator, now with Big Files`,
    `
            	I fixed a disk I/O bug in flashx20, my little program to simulate external floppy disk drives
            	and an external	display controller for the Epson HX-20 handheld computer.
            	<p>
            	You can now from the HX-20 create and access files on the PC's hard disk of up to 8 Mbytes. The files
            	are usable in random access mode using Disk Basic or machine language. You can directly access records
            	of 128 bytes within such files by specifing their number (1-32767) in the GET or PUT command.
            	<p>
            	The new version can be downloaded as a zip file with examples and documentation here:
            	<ul>
            		<li>
            			<a href="flashx20/flashx20.zip">flashx20.zip</a>
            		</li>
            	</ul>
            	<p>
            	Here is an example in Epson Disk Basic showing the file access capabilities with an 8 Mbyte file
            	to give you an impression (also in the zip archive, to be loaded with LOAD "C:FILE8MB.ASC"):
            	<p>
            	<pre>
            		10 REM **************
            		20 REM Files with 8MB
            		30 REM January 2019
            		40 REM Norbert Kehrer
            		50 REM **************
            		60 OPEN "R", #1, "C:BIG.DAT": REM Open file in random access mode
            		70 FIELD #1, 128 AS B$: REM Define data buffer
            		80 LSET B$ = "NORBERT KEHRER": REM Put data into buffer
            		90 PUT #1, 1966: REM Write the buffer to the file at position (1966-1)*128
            		100 LSET B$ = "AUSTRIA": REM Put other data into buffer
            		110 PUT #1, 197: REM Write the buffer to the file at position (197-1)*128
            		120 LSET B$ = "THIS IS THE LAST RECORD OF A BIG FILE": REM Put other data into buffer
            		130 PUT #1, 32767: REM Write the buffer to the file at position (32767-1)*128
            		140 GET #1, 1966: REM Read back record at position (1966-1)*128
            		150 PRINT "I READ: ";B$: REM and print it
            		160 CLOSE #1: REM Close file
            		170 END			
            	</pre>
            	I am still working on a Raspberry Pi version.
            
            
            
    `);
