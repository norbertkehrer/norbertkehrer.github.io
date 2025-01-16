article( // #130
  16, 1, 2025,
  "Centipede Emulator for the Commodore 64",
  `     
      After a really very long time, I had time for some Retro programming at last.
      So, I wrote an emulator of Atari's classic arcade game "Centipede" from 1981
		  running on the also classic Commodore 64 home computer.

      <p>
      
      The original arcade machine was based on a 6502 CPU
      and Atari's proprietary POKEY sound chip. The "emulation" of the arcade machine's
      CPU is done directly by the (6502-compatible) 6510 processor of the C64, which just
      runs the original game program on the C64. The specific video and sound hardware of the
      arcade machine is simulated on the C64 by specific routines in Assembly language.
      In this way,
			the original game play is exactly reproduced. There are some major
			trade-offs in graphics, though, which had to be made due to the lower graphics resolution and
			lower sprite and color capabilities of the C64 compared to the expensive arcade machine.

		<p>

			The program can be downloaded as a C64 "prg" file here: <a href="centipede_c64/centipede.prg">centipede.prg</a>

		<p>

			You can use this file with a C64 emulator or put it on a floppy disk and play it on the real machine.

		<p>

			Here is a video of the emulator in action:

		<p>

				<iframe width="560" height="315" src="https://www.youtube.com/embed/ocAY6csEbMQ?si=SIv3nCTEgMLObOwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

		<p>

    		<p>

			I also made some screenshots of the C64 version:

		<p>
		<table>
			<tr>
				<td align="center">
					<img src="centipede_c64/centipede1.png" alt="Norbert Kehrer's C64 Centipede Emulator">
				</td>
				<td align="center">
					<img src="centipede_c64/centipede2.png" alt="Norbert Kehrer's C64 Centipede Emulator">
				</td>
			</tr>
			<tr>
				<td align="center">
					<img src="centipede_c64/centipede3.png" alt="Norbert Kehrer's C64 Centipede Emulator">
				</td>
				<td align="center">
					<img src="centipede_c64/centipede4.png" alt="Norbert Kehrer's C64 Centipede Emulator">
				</td>
			</tr>
			<tr>
				<td align="center">
					<img src="centipede_c64/centipede5.png" alt="Norbert Kehrer's C64 Centipede Emulator">
				</td>
				<td align="center">
					<img src="centipede_c64/centipede6.png" alt="Norbert Kehrer's C64 Centipede Emulator">
				</td>
			</tr>
		</table>

          
  `);

