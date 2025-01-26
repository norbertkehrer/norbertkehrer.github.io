article( // #130
  26, 1, 2025,
  "Centipede Emulator for the Atari 800XL",
  `     
      After more than five years, I programmed something for the Atari 800XL again.
      I ported my "emulator" of Atari's classic arcade game "Centipede" from the C64 to the Atari 800XL.

      <p>
      
      The "emulation" of the arcade machine's CPU is done directly by the 6502 processor of the
      Atari home computer, which just runs the original game program. The arcade machine uses the POKEY chip
      for sound effects. As the Atari 800XL also has a POKEY built in, the original sound effects are directly
      played by this chip. The video hardware of the arcade machine is simulated on the Atari 800XL by
      specific routines in assembly language. In this way, the original game play is (more or less) exactly reproduced,
      with some major trade-offs, though, which had to be made due to the limited graphics capabilities of the Atari 800XL
      compared to the arcade machine.

		<p>

			The program can be downloaded as an Atari 800XL "atr" file here: <a href="centipede_a800/centipede.atr">centipede.atr</a> or 
            as an "xex" file here: <a href="centipede_a800/centiped.xex">centiped.xex</a>

		<p>

			You can use this file with an Atari 800XL emulator or put it on a floppy disk or SD card and play it on the real machine.

		<p>

			Here is a video of the emulator in action:

		<p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/81O9tI8lMpc?si=rVHSgwTMRD1IOKP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

		<p>

			I also made some screenshots of the Atari 800XL version:

		<p>
		<table>
			<tr>
				<td align="center">
					<img src="centipede_a800/centipede1.png" alt="Norbert Kehrer's Atari 800XL Centipede Emulator">
				</td>
				<td align="center">
					<img src="centipede_a800/centipede2.png" alt="Norbert Kehrer's Atari 800XL Centipede Emulator">
				</td>
			</tr>
			<tr>
				<td align="center">
					<img src="centipede_a800/centipede3.png" alt="Norbert Kehrer's Atari 800XL Centipede Emulator">
				</td>
				<td align="center">
					<img src="centipede_a800/centipede4.png" alt="Norbert Kehrer's Atari 800XL Centipede Emulator">
				</td>
			</tr>
			<tr>
				<td align="center">
					<img src="centipede_a800/centipede5.png" alt="Norbert Kehrer's Atari 800XL Centipede Emulator">
				</td>
				<td align="center">
					<img src="centipede_a800/centipede6.png" alt="Norbert Kehrer's Atari 800XL Centipede Emulator">
				</td>
			</tr>
		</table>

        <p>
        Have fun!
          
  `);

