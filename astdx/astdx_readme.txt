****************************************************************************
*                                                                          *
*   AstDX 2.0 - the Atari Asteroids emulator with new graphics and sound   *
*                                                                          *
****************************************************************************
*                                                                          *
*   Norbert Kehrer, June 2000                                              *
*                                                                          *
*   http://web.utanet.at/nkehrer                                           *
*   For email visit: http://web.utanet.at/nkehrer/email.html               *
*                                                                          *
****************************************************************************


What is AstDX?

	AstDX is an emulator for Atari's Asteroids arcade machine with
	newly designed graphics and sound. It uses Atari's program ROMs
	from 1979, but instead of drawing vector graphics as in the
	original game, most game objects are replaced by animated sprites.

	In the original arcade machine the sound is made with special
	circuits for each sound effect. In the emulator this is done
	with digital samples (.wav files). I added also a background music
	track with 10 different songs in MIDI format.
	
	As with every emulator, to play AstDX you need a ROM set for Atari's
	Asteroids. You can use the same ROM set as for the MAME emulator.
	The ROMs are not included in this distribution ;-)

	AstDX runs under DOS.


Program Design

	AstDX is similar to the DXed games in EmuDX and PAC-X. But it is 
	harder to manipulate vector games in this way than to improve games based on
	raster graphics. Atari uses a chip, the digital vector generator (DVG),
	to draw the vectors onto the physical screen. The game's objects
	(rocks, characters, a.s.o.) are represented by subroutines for
	the DVG chip, which are stored in vector ROM.

	To make AstDX, I disassembled the vector ROM to find out, where the
	game objects' subroutines are located. Then, whenever the
	DVG interpreter	of AstDX reaches a call to such a subroutine, it draws
	a sprite instead of the vectors.

	The sound effects were rather easy, I used the sound routines of the
	Allegro game library and the MAME source code as a template.

	All this DX process reminds me a bit on the (now rather outdated) research
	on meta interpretation. There also more semantics is given to a program,
	or additional functions are performed during the interpretation
	of the program.	I think it should also be rather easy to make Asteroids
	a first person 3D shooting game using the old program from 1979!


What Is New in Version 2.0?

	AstDX 2.0 adds the following new features to AstDX 1.0:
	- better graphics (more colors, smoother animation)
	- now the player's ship is also replaced by a sprite (this was hard)
	- 10 different MIDI songs as background music


Installing AstDX 2.0

	1. Unzip the file "AstDX2.zip".
	2. Place the files for the Asteroids ROMs in the directory
	   "astdx2\roms\asteroid\". You need the following files:
	   "035127.02", "035143.02", "035144.02", "035145.02"
	   Best is, to use the MAME roms, but do not use zipped ROM files!


Playing AstDX

	Play AstDX by going to the AstDX directory and typing "astdx.exe" in
	the DOS command line. AstDX uses the following keys to play:

	1     ... start 1 player
	2     ... start 2 players (still buggy)
	3     ... insert coin in slot 1
	4     ... insert coin in slot 2
	5     ... insert coin in slot 3

	Left  ... rotate left
	Right ... rotate left
	Up    ... thrust
	Ctrl  ... fire
	Space ... hyperspace

	S     ... make a screen dump
	Esc   ... quit

	AstDX has no command line options and no configuration file (yet).


Making Your Own Asteroids Skin for AstDX

	You are strongly encouraged to design better graphics and sound for
	AstDX. This is very easy. Just replace my graphics and sound files
	with yours.

	Graphics and characters are stored as Windows bitmap (.bmp) files in
	the directory "graph\".

	The sound files are located in the directory "sound\". The sound
	effects	are represented by .wav files. As background music AstDX 2.0
	subsequently plays 10 different MIDI files called "sound\music1.mid"
	to "sound\music10.mid". Currently these are MIDI tracks of various
	songs by ABBA from the seventies and early eighties (sigh ;-).
	Change the files, if you think, some other kind of music, better
	represents the feeling of those good old days or is better suited
	for the game.

	Very important:
	When you have designed a new graphics and/or sound set for AstDX,
	send it to me (http://web.utanet.at/nkehrer/email.html).
	I will include the best	versions with full credits to you in the official
	distribution of AstDX. 
	

Known bugs

	- The 2 players mode is still buggy. The graphics do not work correctly.
	- The graphics and music are still rather ugly (except the character set,
	  thanks to Marianne Muehlparzer). Especially ugly are the player's ship
	  and the saucer - improvements are welcome!
	- The high score display at the top of the screen does not work yet
	- The thrust graphics of the player's ship are not yet emulated
	- Explosion of the player's ship is not yet emulated


Credits

	AstDX 2.0 is based on the work of many other people from the emulation scene.
	Thanks go to the following people and projects (in no particular order):

	- MAME project: I got all the info about Asteroids from their source codes.

	- Brad Oliver: MAME driver for Asteroids

	- Chris Pile: Description of DVG programming

	- Eric Smith: Atari DVG simulator

	- Marianne Muehlparzer: Design of the AstDX character set

	- DJ Delorie: Thanks for DJGPP, the public domain C compiler

	- Shawn Hargreaves: Thanks for the Allegro game programming library.
	                    I also used some of the graphics from his demo game
	                    for AstDX rocks.


Enjoy AstDX 2.0  - the next version will be called Ast3DX.

Norbert Kehrer

June 3, 2000

 ;-)
