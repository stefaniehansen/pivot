 ### General Development
 We use yarn as a package manager. Install yarn globally using `npm i -g yarn` and then run the one-time setup script 
 `yarn link` to enable you to run pivot as a global command line utility. To run our test scripts through the transpiler, 
 use `yarn run test`.

### Creating a Language Map
Create a language map with a name formatted like `<programming language>-<human language>.json` in `./language-maps`. 
You may use `javascript-spanish.json` as a guide. The keys are javascript keywords and the values are translated keywords.
Currently, we only support Javascript transpilation.

### Contributing a Keyword Syntax Rule
We use [sweet.js](https://www.sweetjs.org/) to parse and transpile code. Take a look at their documentation to get a sense 
of how rules are structured. You will need to create and export a new syntax rule template in `./src/templates` named 
`<keyword>.pivot` using sweet.js syntax.* 

We will be using these templates to generate rules that are written in the desired human language. Therefore, we need to 
provide placeholder values for keywords that require a translation.  These placeholders are written in English and surrounded
by double hash marks, such as `##function##`. The placeholders will be replaced by keywords in a chosen language when a rule sheet 
for the language is generated (see **Generating a Rule Set**), so use them anywhere where you want a replacement to occur.

*Note: If you need to use a helper from [@sweet-js/helpers](https://github.com/sweet-js/sweet-core/blob/ef72806d02326229f3f124222e251e9aae6c8bc4/helpers.js), 
you will need to add the utility to the imports that `templatizer` adds to rule sets. You can see and edit these imports in 
`./src/utils/templatizer.js getImportStatement() to include any utility that you need.

### Generating a Rule Set
When you have added a language map or a keyword syntax rule, you will need to generate a new rule set for the language.  This is 
done for you by `./src/utils/templatizer.js`. Simply run `yarn run templatize` and you will see a new/overwritten rule set in `./rules`.
Please commit the new rule set and/or language map so that others can take advantage of it! 

### Testing the utility
Run `npm link` and then you'll be able to run the utility in your terminal.  Here's an example command: 
```
pivot --hl spanish --i test
```
