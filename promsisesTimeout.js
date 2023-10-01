const p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This waited for 10 seconds");
    }, 10000);
  });
};

const p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This waited for 5 seconds");
    }, 5000);
  });
};

const p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This waited for 9 seconds");
    }, 9000);
  });
};

const p4 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This waited for 4 seconds");
    }, 4000);
  });
};

async function getData1() {
  const start = Date.now();
  console.log("Before promise p1");
  const val1 = await p1;
  console.log(val1);
  console.log(`After promise took ${total}ms`);
}
// getData1();

async function getData2() {
  const start = Date.now();
  console.log("Before promise p1");
  const val1 = await p1;
  console.log(val1);
  const val2 = await p2;
  console.log(val2);
  const total = Date.now() - start;
  console.log(`After promise took ${total}ms`);
}
// getData2();

async function getData3() {
  const start = Date.now();
  console.log("Before promise p1");

  const val2 = await p2;
  console.log(val2);

  const val1 = await p1;
  console.log(val1);

  const total = Date.now() - start;
  console.log(`After promise took p1 p2 ${total}ms`);
}
// getData3();

async function getData4() {
  const start = Date.now();
  console.log("Before promise p3");

  const val2 = await p4;
  console.log(val2);

  const val1 = await p3;
  console.log(val1);

  const total = Date.now() - start;
  console.log(`After promise took p3 p4 ${total}ms`);
}
// getData4();

async function getDataPromiseAll() {
  const start = Date.now();
  const arr = await Promise.all([p1(), p2(), p3(), p4()]);
  const total = Date.now() - start;
  console.log(`After promise took p1 p2 p3 p4 ${total}ms`);
}
getDataPromiseAll();

async function getDataNormal() {
  const start = Date.now();
  await p1();
  await p2();
  await p2();
  await p4();
  const total = Date.now() - start;
  console.log(
    `After promise took p1 p2 p3 p4 ${total}ms - without promise.all`
  );
}
// getDataNormal();
