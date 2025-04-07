article( // #130
	7, 4, 2025,
	"An interface program between IBM 3151 terminals and IBM mainframes",
	`       
    IBM's 3151 ASCII Display Station from 1987 is an interesting device. It is a serial terminal with a
    monochrome (green or amber) CRT monitor. It supports several screen sizes and connection speeds and
    offers a quite big set up menu with all kind of configuration options. By the use of expansion cards,
    which plug into the backside of the terminal it can also emulate many classic terminals from other
    producers like the DEC VT100 or VT220.

    <p>
      What I found really surprising, is its support of the so-called block mode and for fields for output
      and input on the screen, which enable a host computer to define kind of a form on the screen, which
      the user can fill out. After pressing the "Send" key or a function key the input fields changed
      by the user are transferred back to the host in one go.

    <p>
      This looks very much like the way how 3270 terminals for the IBM mainframe computers work.
      Unfortunately, the commands, which the IBM 3151 understands in order to define the fields etc. are
      not the same as the ones of the IBM 3270 protocol, but they are very similar. Therefore, it is quite
      easy to translate the 3270 commands to semantically equivalent 3151 commands and vice versa. The
      IBM 3151 also speaks ASCII instead of the EBCDIC encoding used by the IBM mainframes. But this
      translation is also straightforward.
	 
	<p>
	  So, I wrote a little interface program in C that performs these transformations, allowing to connect
	  a real or emulated IBM mainframe (via telnet) to an IBM 3151 terminal (via an RS232 serial port connection).
	  With this program, the 3151 can be used as a terminal for the mainframe like a 3270-series terminal.
	  
	<p>
      You can find the interface program on github here: <a href="https://github.com/norbertkehrer/mainframe3151">IBM Mainframe to IBM
      3151 Interface</a>

    <p>
      Alternatively, you can download everything here: <a
        href="mainframe_3151/mainframe3151.zip">mainframe3151.zip</a>

    <p>
      The github repository and the zip file contain the source code and an executable file (mainframe3151.exe) for
      Windows.
      You can just use the exe file or build the program from the sources with the "make.bat" batch file.
      You need gcc and MinGW for this.

     <p>
		I also made a video about it:

	<p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/V14ac9cRi9Q?si=Z-rC-M0lxCqMsUQb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
	  
    <p>
        Have fun!
          
  `);

