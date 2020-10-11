The Virtual Machine Architecture of Infernal Runner

In 1991, the famous game "Another World" was published for the Commodore Amiga. It achieved cult status mainly for its visionary art style. But also technically it was quite interesting, as it was based on a game-specific bytecode language executed by a virtual machine interpreter.

Eric Chahi, the author of "Another World", six years earlier had written the game "Infernal Runner" on the Amstrad CPC. The game, published by the French company Loriciels, was rated fairly mediocre by the press, was rather simple, and also still had some bugs. Nonetheless, the game is cool from a software-architectural point-of-view. Like "Another World", it is largely not written as a conventional Z80 program, but in a specifically designed bytecode language. This language is interpreted by a virtual machine supporting "parallel" execution of up to 255 tasks by a simple multitasking scheduler. This nice concurrency feature enabled a very elegant design of the various enemies and animated game levels.

The talk will cover the essentials of this bytecode language, the virtual machine interpreter, and the process scheduler. Some code examples from the game will be shown, as well as a port of the virtual machine to JavaScript to make the game playable in the web browser. The talk tries to also give you some insights into the reverse-engineering process and how much fun this was.

