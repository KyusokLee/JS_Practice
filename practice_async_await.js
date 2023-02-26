// 間数の前に、asyncを使うと 常にPromiseを返す

// async function getName() {
//   return 'mike';
// }

// console.log(getName());

// // Promiseを返すから、thenを使うことができる
// getName().then((name) => {
//   console.log(name);
// });

// async function getName2() {
//   return Promise.resolve('tom');
// }

// // async間数のreturnがそのままPromiseであれば、...?
// // nameでそのままを使う
// getName2().then((name) => {
//   console.log(name);
// });

// async function getName3() {
//   throw new Error('Error...');
// }

// getName3().catch((err) => {
//   console.log(err);
// });

function getName4(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 2000);
  });
}

function getName5(name) {
  return name;
}

// await
// awaitはasyncのなかでしか使えない
async function showName() {
  const result = await getName4('mike');
  console.log(result);
}

console.log('START!');
showName();

//Promiseで処理
const promise4 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('1番 注文完了!');
    }, 1000);
  });
};

const promise5 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('2番 注文完了!');
      //rej(new Error('error...'));
    }, 3000);
  });
};

const promise6 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('3番 注文完了!');
    }, 2000);
  });
};
// async awaitでは errorを try catchで処理
async function order() {
  try {
    const result1 = await promise4();
    const result2 = await promise5(result1);
    const result3 = await promise6(result2);
    console.log(result3);
  } catch (e) {
    console.log(e);
  }
  console.log('END!!');
}

order();

// Promise.allを用いた async await
// 並列に処理を行う
async function orderAll() {
  try {
    console.time('orderAll');
    const result = await Promise.all([promise4(), promise5(), promise6()]);
    console.log(result);
    console.timeEnd('orderAll');
  } catch (e) {
    console.log(e);
  }
  console.log('END!!');
}

orderAll();

//ES2021 
// Promise.any -> Promise.raceとは違ってPromiseで指定したcallbackの中の1つがfulfilledされたら、それを返す
const rejPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej('fail...');
  }, 1000);
});

const resPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res('success!');
  }, 2000);
});

Promise.race([rejPromise, resPromise])
  .then(() => console.log('SUCCESS!!!'))
  .catch((e) => console.log(e));
// Promise.any([rejPromise, resPromise])
//   .then(() => console.log('SUCCESS!!!!!!'))
//   .catch((e) => console.log(e));

// Promise.allSettled -> fulfilledとrejectedにとわずに全て終わったら終了させる
console.time('allSettle');
Promise.allSettled([rejPromise, resPromise])
  .then(() => {
    console.log('SUCCESS!!!!!!');
    console.timeEnd('allSettle');
  }).catch((e) => console.log(e));