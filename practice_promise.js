// // callback間数, async-await, promise全部 順次的な処理を行うため使う!
// // Promise((resolve: 成功, reject: 失敗) => {})
// const pr = new Promise((resolve, reject) => {
//   // ある仕事が終わったあと、処理される間数をcallback間数と呼ぶ
//   setTimeout(() => {
//     //resolve('Ok')
//     reject(new Error('error...'));
//   }, 3000);
// });

// // then: 成功時, catch: 失敗時, finally: 成功であろう失敗であろう処理が完了されたら実行されるとき
// pr.then(
//   function(result) {
//     // 成功のとき (resultには'Ok'が入る)
//     console.log(result + '行こうぜ！');
// }).catch(
//   // 失敗のとき
//   function(err) {
//     console.log(err + 'もう一度試してください!');
// }).finally(
//   function () {
//     console.log('--- 仕事終わり!! ---');
// });

// new Promise Constructorが返すPromise Objectは、
// state: pending(待機),
// result: undefined
// をpropertyとして持つ
// 最初はstateがpendingの状態であり、resolve(value)が実行されると、 -> state:fulfilled(修行), result: valueとなる
// 一方、reject(error)だったら、 state: rejected(拒否), result: errorになる

// // promiseを使わないCall back 間数
// const f1 = (callback) => {
//   setTimeout(function () {
//     console.log('1番 注文完了!');
//     callback();
//   }, 1000);
// };

// const f2 = (callback) => {
//   setTimeout(function () {
//     console.log('2番 注文完了!');
//     callback();
//   }, 3000);
// };

// const f3 = (callback) => {
//   setTimeout(function () {
//     console.log('3番 注文完了!');
//     callback();
//   }, 2000);
// };

// console.log('START!!!');

// // callback hell....になる。。
// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log('仕事終わり！');
//     });
//   });
// });

//Promiseで処理
const promise1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('1番 注文完了!');
    }, 1000);
  });
};

const promise2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('2番 注文完了!');
    }, 3000);
  });
};

const promise3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('3番 注文完了!');
    }, 2000);
  });
};

// // 使う側
// // Promise Chaining
// console.log('PROMISE START!');
// promise1()
//   .then((res) => promise2(res))
//   .then((res) => promise3(res))
//   .then((res) => console.log(res))
//   .catch(console.log)
//   .finally(() => {
//     console.log('FINISH!');
//   });

// Promise All!
// 配列で受け取れる
// 全部終わったとき、resが返される
// つまり、Promise.allは一斉に開始され、全部終わってから値が返される
console.time('x');
Promise.all([promise1(), promise2(), promise3()]).then((res) => {
  console.log(res)
  console.timeEnd('x');
});

// しかし、Promise.allで指定したcallback間数のなか、rejectが一個でもあったら、Uncaught Promise Errorになり、処理されない
// そのため、一つの情報でも間違った場合、ユーザが求めるページを表示させないときに使われる

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
      rej(new Error('xxx...'));
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

// Promise.race -> 一つでも早く終わったcallbackがあれば、処理を終わらせる
console.time('y');
Promise.race([promise4(), promise5(), promise6()]).then((res) => {
  console.log(res)
  console.timeEnd('y');
});

//2番はrejectされるのにも関わらず、1番が正常に処理されたので、yを終わらせる
// 容量が大きいimage loadingのときに使われる