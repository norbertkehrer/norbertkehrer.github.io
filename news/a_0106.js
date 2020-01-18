article( // #106
    28, 1, 2018,
    `Teletext Reader for the Commodore 64`,
    `
            	At a Commodore meeting in Vienna a visitor said, that it would be nice to read teletext pages on a Commodore 64.
            	I thought so too, and wrote a teletext reader, but probably based on a different concept, than originally imagined
            	by that C64 fan. <a href="https://en.wikipedia.org/wiki/Teletext" target="_blank">Teletext</a> is made up of
            	(almost pure) text pages with 24 lines and 40 columns, and it is broadcast by many TV stations via the television signal
            	in the so-called vertical blanking interval lines. The contents offered in these pages are mainly news, weather,
            	TV schedules, etc.
            	<p>
            	To read the teletext pages on a Commodore 64 you would have to build some hardware to extract the data from
            	the TV signal and feed it into the C64. This would also be a really interesting Retro project in itself, but for
            	my simple reader I used an alternative method. Many TV stations offer their teletext contents also on their
            	web sites for reading them in the browser. So, I wrote a C program to download all the teletext pages of a specific
            	TV station (at the moment only the Austrian Broadcasting Corporation, ORF) to your Windows PC and convert them
            	into files readable by my C64 teletext reader program. Each teletext page will then become one file for the C64.
            	You can then copy all these files and the reader program to an SD card and take your time to read them on
            	the Commodore. The pages are identified by 3-digit numbers, which you can enter in the C64 reader and select
            	the page with the "Return" key. The function keys offer some simple navigation functions, like going back to
            	the last page, etc.
            	<p>
            	I have to admit, that I have no SD card interface for my Commodore 64, so I could only test it in the emulator.
            	I am hoping for your feedback, if this really works on real hardware. Please send me an <a href="email.html">email</a>.
            	At the moment, I have only a downloader for the ORF, but the next step would be to add more TV stations, e.g., the
            	German ARD and ZDF teletext offerings.
            	<p>
            	The program can be downloaded as a zip file here: <a href="teletext_c64/teletext.zip">teletext.zip</a>.
            	<p>
            	The archive contains a Windows program you just run on the Windows command line. It will then download and convert
            	all the "ORF eins" teletext pages to a C64 readable format and store them as files (more than 4,000!) in a directory
            	called "pages". This takes about 5 to 10 minutes. Then the teletext reader program for the Commodore 64 is copied
            	to this "pages" directory also, and you are ready to take this whole directory over to your Commodore 64, e.g. on an
            	SD card.
            	<p>
            
            	Below you see some screenshots of the result:
            	<p>
            
            	<table align="center" >
            	<tr><td align="center">
            	<img src="teletext_c64/teletext1.png" alt="Norbert Kehrer's Commodore 64 Teletext Reader"></td>
            	<td align="center">
            	<img src="teletext_c64/teletext2.png" alt="Norbert Kehrer's Commodore 64 Teletext Reader">
            	</td></tr>
            	<tr><td align="center">
            	<img src="teletext_c64/teletext3.png" alt="Norbert Kehrer's Commodore 64 Teletext Reader"></td>
            	<td align="center">
            	<img src="teletext_c64/teletext4.png" alt="Norbert Kehrer's Commodore 64 Teletext Reader">
            	<tr><td align="center">
            	<img src="teletext_c64/teletext5.png" alt="Norbert Kehrer's Commodore 64 Teletext Reader"></td>
            	<td align="center">
            	<img src="teletext_c64/teletext6.png" alt="Norbert Kehrer's Commodore 64 Teletext Reader">
            	<tr><td align="center">
            	<img src="teletext_c64/teletext7.png" alt="Norbert Kehrer's Commodore 64 Teletext Reader"></td>
            	<td align="center">
            	<img src="teletext_c64/teletext8.png" alt="Norbert Kehrer's Commodore 64 Teletext Reader">
            	</table>
            
            
            
            
    `);
