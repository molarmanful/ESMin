# ESMin
ESMin is a stack-based code-golfing language based on ES6. It aims to change the syntax rather than alias functions/methods.

Included is a parser, written in ES6. Language documentation will be added to the wiki; in the meantime, you can look at `interpreter.js` for an idea of the syntax.
# Quick Examples
```
ô“Hello, world!”
```
Outputs `Hello, world!`.

```
î⬮
```
Outputs the stack, which contains the input.

```
ô(ℹ⬮)
```
Outputs the source code. NOTE: This is **not** a true quine!