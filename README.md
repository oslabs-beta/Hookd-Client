##Hookd

Hookd.dev is a web app for transforming React Class Components to Functional components utlizing Hooks.

Simply copy the code for your React Class Component into the Code field and hit the "transform" button. 
Our algorithm will parse through your file, and find relevant use cases for useState, useContext, and useEffect. 

Our program will modify the Abstract Syntax Tree accordingly, and generate the code for a transformed component for you to utilize at your convenience!

The useContext logic parses through the AST looking for indicators that Context API functions have been utlized, it then generates useContext cases based upon the values assiciated with those indicators.  JSX context.consumer tags will be removed in the next update.  

Hookd is also available as a Command Line Interface tool, downloadable from NPM: @reactionaries/hookd-cli
https://www.npmjs.com/package/@reactionaries/hookd-cli

In addittion to the CLI, Hookd is also available as a a module, donload from NPM: @reactionaries/hookd
https://www.npmjs.com/package/@reactionaries/hookd

