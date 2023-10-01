#### Async Await

#### Time, Tide and Javascript does not wait for anyone.

1. Async function always returns a promise whether it is typescript or a javascript
2. If promise is not written explicitly then function automatically wraps a return value into a promise.
3. If promise is returned explicitly then it doesnt get wrapped into another promise
4. Async Await combo is used to handle promises
5. keyword await is to be used in front of a promise only
6. Await can only be used inside async function
7. Major difference between .then and await keyword is await waits for the promise to get resolved, on the other hand JS engine pushes .then onto the callback queue and execute lines which are not a part of .then block.
8. e.g., a promise1 takes 10 seconds to resolve, promise2 takes 5. Now these promises are been called into a same function total execution time comes around 10 seconds implying nodeJs internally runs promises onto a thread(actually a queue, but lets call it a thread for abstraction)
