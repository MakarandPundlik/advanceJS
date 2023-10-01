const myfunc = async () => {
  return "This is promise wrapped implicitly";
};

console.log(typeof myfunc());
const result = myfunc();
result.then((str) => console.log(str, typeof str));

const myanotherfunction = async () => {
  return new Promise((resolve, reject) => {
    resolve("This is promise retuened explicitly");
  });
};

console.log(myanotherfunction());
const anotherresult = myanotherfunction();
anotherresult.then((str) => console.log(str, typeof str));

const p = new Promise((resolve, reject) => {
  resolve("this is my promise string");
});

const getData = async () => {
  p.then((str) => {
    console.log(str);
  });
};

getData();

const handlePromise = async () => {
  const val = await p;
  console.log(val);
};

handlePromise();
