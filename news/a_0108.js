article( // #108
    4, 2, 2018,
    `Teletext Reader for the Commodore 64 - Update of File Naming and Page Format`,
    `
            	Thanks again to the feedback and testing of the colleagues at <a href="https://www.forum64.de" target="_blank">Forum 64</a>.
            	Obviously, the SD2IEC version did not work with the file names with the ".prg" at the end. So, I went back to having only
            	one version of the C64 reader. The program is now called "0teletext.prg", and it should work with the 1541 Ultimate
            	and with SD2IEC (I hope).
            	<p>
            	I adapted the teletext mass download program, though, to have a second parameter to decide if the file naming should be for
            	the 1541 Ultimate (with .prg) or for SD2IEC (without .prg). You can start the page mass download now with the first parameter being
            	"orf1", "orf2", "orfiii", or "orfsportplus", respectively. The
            	second parameter to be passed is now "1541u" or "sd2iec" to control the format of the generated C64 file names.
            	<p>
            	The updated program can be downloaded as a zip file here: <a href="teletext_c64/teletext.zip">teletext.zip</a>.
            	<p>
            	If the new version does not work on your machine, I left the old version as a fallback here:
            	<a href="teletext_c64/teletext_old.zip">teletext_old.zip</a>.
            	<p>
            	In case, you want to write your own page downloader for you favorite TV station's teletext, here is the format
            	of the pages expected by the C64 reader program. You might also find it interesting to generate text from other sources, of course.
            	I would be happy to hear from your efforts. Please just drop me an <a href="email.html">email</a>.
            	The format of the files you have to generate is the following:
            	<p>
            	<pre>
                    Position (hex)    Contents
                    -------------------------------------------------------------------------
                    $0000-$0001       Load address (low byte/high byte). Always has to be
                                      0x00/0x40 (i.e. address $4000).
            
                    $0002-$03c1       40 x 24 bytes for the text of the page (ASCII and
                                      special characters).
            
                    $03c2             Separator. Always has to be 0x00.
            
                    $03c3-$0782       40 x 24 bytes for color and width/height information
                                      for each character of the teletext page. The 8 bits
                                      of each byte are interpreted as "hfffwbbb", with:
                                      h   ... Double height indicator (0=normal, 1=double)
                                      fff ... Text color in C64 color code format (0-7)
                                      w   ... Double width indicator (0=normal, 1=double)
                                      bbb ... Background color in C64 color code format (0-7)
                    -------------------------------------------------------------------------
            	</pre>
            
            
    `);
