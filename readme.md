## Complete Javascript

Execution ContextEverything in javascript happens in execution context, execution context can be imagined as a big box having 2 component:

1. Memory component - Variable Environment
2. Code - Thread of execution

### Single Threaded and Synchronous i.e. one command at a time

<br>

### What happens when we run a Javascript program ?

1. Execution context is created, memory is allocated to variables and functions, where function contains all the code and variables are initialized by a special keyword called “undefined“
2. When function is called/invoked again a new execution context is created and memory is allocated save as above
3. This process will continue till an another/same function is called within the function

<img src="functionexecution.png" height="300"/>
