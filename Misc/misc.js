const add = (a,b) => new Promise((res, rej) => res(a+b));

const sum = add(2,4);
console.log(sum.then(val => val));