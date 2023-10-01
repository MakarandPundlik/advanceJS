//what are promises ?

const mynum = Promise.resolve(5);

console.log(mynum, typeof mynum); //will always return an object

const mynum2 = function () {
  return new Promise((resolve, reject) => {
    resolve(10);
  });
};

console.log(mynum2(), typeof mynum2()); //will always return an object

const mynum3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 90);
});

console.log(mynum3, typeof mynum3);

Promise.all([mynum, mynum2, mynum3]).then((values) => {
  console.log(values);
});
