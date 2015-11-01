# ESMin
ESMin is a stack-based code-golfing language based on ES6. It aims to change the syntax so that most ES6 char combinations can be written with one char.

Included is a parser, written in ES6 for Firefox. Language documentation will be added to the wiki; in the meantime, you can look at `interpreter.js` for an idea of the syntax.
# Quick Examples
```
ô“Hello, world!”
```
Outputs `Hello, world!`.

```
î
```
Outputs the stack, which contains the input.

```
ℹ⬮
```
Outputs the source code. NOTE: This is **not** a true quine!

```
↺x=0;x⧺<100;)ᵖx
```
Outputs all numbers 1-100.
```
ô[…ï].ć(⇏a^1).ø⬯⦆
```
Does binary negation.
```
ô[…ï].ù⬮.ø``⦆
```
Outputs inverse of input.