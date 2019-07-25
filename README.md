# pivot
Enable anyone in the world to learn how to program by removing the language barrier inherent to English based programming languages

To use this package add instal pivot by running:

    npm install pivotify -D

After this make sure to add into your package.json a call to the pivot tool and the following parameters:

--hl: Human language to translate from. This is the native language that you used to program your code.

--i: The input root folder of your program files.

--o: The output root folder where you want the executable version of your code to be created. 

Here is an example command to run pivot:

    npx pivot --hl spanish --i test/spanish --o dist/spanish

As part of this Hackathon project we have only made a couple of javascript keywords and statements translatable. Here is a list of what keywords you can currently use in your code:

* alert() function
* console.log() function
* for statements
* if/elseif/else statements
* throw statement
* try/catch/finally statements
* while statements
* function keyword
* let keyword
* null keyword
* return keyword
* true keyword
* var keyword

We are looking to crowd-source the language mappings available in pivot so please help us achieve this by contributing to this project! (see details of how you can help in the DEVELOPMENT.md documentation)

