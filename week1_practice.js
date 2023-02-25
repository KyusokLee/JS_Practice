// 1. 変数 let const とtypeの理解
let siteName = "google";
let siteName2 = "yahoo";
const siteName3 = "youtube";
siteName = "yahoo";
// 可能であれば、constは大文字で定義する方がいいようだ
const MAX_SIZE = 100;

let intNumA = 1;
let strNumA = "1";

// MARK: - s
// typeを含めた比較は ===
if (siteName === siteName2) {
  console.log("is same");
}

// sameが表示される
if (intNumA == strNumA) {
  console.log("is same");
}

if (intNumA !== strNumA) {
  console.log("type is different");
}

const name1 = "Lee";
const age = 27;
console.log(typeof age); // number型

// '' と "" と ``の違い
// ''と""は大きな差はない
// ただ、以下のような違いは存在
// 'I'\m a boy!'
// "I'm a boy!"
const message = "I'm a boy!";
const message2 = "I'm a boy!";
console.log(message);
console.log(message2);

// ``は、$と一緒に使って定義した値とともに表示したいとき使う
const message3 = `My name is ${name1}`;
console.log(message3);
const message4 = `number sum: ${31 + 1}`;
console.log(message4);

const myName = "Lee";
const y = myName / 2;
console.log(y);
// NaN : Not a Number

// 2. undefinedとnullの理解
// javaScriptでは、値がないことを表すものが２つある
// undefinedとnullがある
// undefinedは、値が割り当てられてないことを意味
// Javascriptでは、nullもObjectとして定義されるが、これはJavaScriptの初期の間違った設定らしい
let foo; // 値を代入したことない
let bar = undefined; // 値を代入した
console.log(foo); // undefined
console.log(bar); // undefined (??)
let obj1 = {}; // 属性を指定したない
let obj2 = {
  prop: undefined,
}; // 属性を指定した
console.log(obj1.prop); // undefined
console.log(obj2.prop); // undefined (??)

// 上記のような理由があり、値の不在を表したいときは、nullがよく使われるようだ
// コードを作成するとき、undefinedとnullのチェックをしなければならない
// 間数宣言式
function printIfNotNull(input) {
  if (input !== null && input !== undefined) {
    console.log("is not null!");
    console.log(input);
  } else {
    console.log("is null!");
  }
}

printIfNotNull();

// 間数表現式
const isEmpty = (value) => {
  if (value == null) {
    return true;
  }

  if (value.length) {
    return value.length === 0;
  }

  return Object.keys(value).length === 0;
};

console.log(isEmpty());
console.log(isEmpty(""));

// arrayもObjecta
const obj = ["sa", "mu", "ra", "i"];
//　keyがないときは、indexが返される
console.log(Object.keys(obj));
