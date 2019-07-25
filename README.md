# pivot
Enable anyone in the world to learn how to program by removing the language barrier inherent to English based programming languages.

### Usage

To use this package, install pivot by running:

    npm install pivotify -D

Use the pivot tool with the following parameters:

--hl: Human language to translate from. This is the native language that you used to program your code.

--i: The input root folder of your program files.

--o: The output root folder where you want the executable version of your code to be created (optional). 

You may choose to create an npm script or run pivot from the command line.  Here is an example command to run pivot:

    pivot --hl spanish --i src --o dist
    
### Limitations

As part of this Hackathon project, we have only made a few Javascript keywords and statements translatable. Here is a list of the keywords you can currently use in your code:

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

### Contribute

We are looking to crowd-source the language mappings and translatable keywords available in pivot so please help us achieve this by contributing to this project (see details of how you can help in the DEVELOPMENT.md documentation)!


#### TODO: 

* Localize README.md
* Add bidirectional translation support
* Support additional programming languages
* Accept localized human language names as inputs

