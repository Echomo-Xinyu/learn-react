const promise1 = Promise.resolve(5);

promise1.then((value) => {
  console.log(value)
})

// reject will execute the second function passed in
const promise2 = Promise.reject("wrong");

promise2.then((value) => {
  console.log(value)
}, (err) => {
  console.log('error', err)
})


const promise3 = Promise.resolve(5);

promise3.then((value) => {
  console.log(value);
  return value + 1;
  // behave same as:
  // return Promise.resolve(value + 1)

  // return Promise.reject("error");
  // throw new Error("uh oh");
}).then((value) => {
  console.log("second then", value)
})


const promise4 = new Promise((resolve, reject) => {
  resolve(5)
})
promise4.then((val) => {
  console.log(val)
})


function timeout(ms) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
    // above three lines can be simplified:
    // setTimeout(resolve, ms)
  });

  return promise;
}
timeout(1000).then(() => {console.log("hi")})

Promise.all([
  Promise.resolve(5), Promise.resolve(10)
]).then((results) => {
  console.log(results);
})

