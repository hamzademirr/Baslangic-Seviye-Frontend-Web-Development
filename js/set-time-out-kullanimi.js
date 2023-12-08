let a = 0;
a = 2;

setTimeout(() => {
  a = 1;
}, 1000);

console.log(a);

// setTimeout(() => {
//   console.log(a);
// }, 1000);
