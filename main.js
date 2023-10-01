const x = () => {
  const a = 10;
  const y = () => {
    console.log(a);
  };
  y();
};
x();

const z = () => {
  const b = 120;
  const w = () => {
    console.log(b);
  };
  return w;
};
const func = z();
console.log(func.toString());
func();

const m = () => {
  let c = 456;
  const n = () => {
    console.log(c);
  };
  c = 500;
  return n;
};
const func2 = m();
func2();

const parent1 = () => {
  const ab = 1000;
  const child1 = () => {
    const cd = 2000;
    const grandChild1 = () => {
      console.log(ab, cd);
    };
    grandChild1();
  };
  child1();
};
parent1();
