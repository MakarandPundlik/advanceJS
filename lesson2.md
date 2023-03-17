# Hoisting in JS

## index1.js

1. Looks like any other languages in the world
2. expected behaviour is, value of X and Namaste Javascript will be logged on the console

## index2.js

1. variable is logged before initializing it, but wait.... we just studied the Execution Contex concept. According to the concept we have studied, before actual execution begins value of "x" is stored in a memory block as undefined.
2. However, for a function, entire code is stored agains it in a memory block
   e.g. getName: {...}

## index3.js

1. x is never defined hence console will give Reference error unlike index2.js, Not defined is not equal to undefined, refere execution context.
2. function output will be printed on console , this is known as Function Hoisting in Javascript

## index4.js

1. ReferenceError: Cannot access 'getName' before initialization, hoisting is not possible in case of Arrow functions
2. getName is trated as any other variable in JS
