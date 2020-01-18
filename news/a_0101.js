article( // #101
    18, 4, 2016,
    `BTX-Server to connect your old Videotex terminal to the PC`,
    `
            
            	In Austria and Germany there was in the 1980s a Videotex system called "BTX" or
            	"Bildschirmtext" (German for "screen text").
            	I wrote a little server in JavaScript, which lets you connect your old Videotex
            	decoders to a PC. With that, you can call up old Videotex pages stored as files on your
            	PC and view them on the decoder.
            
            	<p>
            	Here is the server in action showing an old German BTX page on my Mupid, a cool
            	Austrian Videotex decoder from the eighties:
            	<p>
            	<img src="media/Mupid_BTX_2016.jpg" alt="Norbert Kehrer's Mupid with a BTX page">
            
            	<p>
            	And here is the BTX server software as a zip file for download: <a href="btx_server/btx_server.zip">btx_server.zip</a>
            
            	<p>
            	Installation and usage instructions are included in the zip file.
            	The software is still at a very early stage and still buggy, but you can call up a BTX
            	page via *page# like back the old days. So, there is more to come ...
            
            	<p>
            	If you are a lucky Mupid owner, try out my Forth interpreter for that decoder (actually a FIG Forth port). 
            	Start the BTX server, change to the forth directory with "cd forth", press the blue "K"
            	and then "A" on the Mupid, and then call up the BTX page with "*mupidforth#". After some loading you have the
            	old interactive programming language Forth available for your own Mupid experiments.
            
            
            
            
            
    `);
