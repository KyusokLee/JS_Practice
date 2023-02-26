// Destructuring Assignment: 分割代入
// 日本語では、分割代入 한국어로는, 구조분해할당

let [x, y] = [1, 2];
console.log(
  x,
  y
);

let str = "Mike-Lee-Tanaka"
let [user1, user2, user3] = str.split('-');
console.log(
  user1,
  user2,
  user3
);

// undefinedのときは、defaultの定義から値を設定する
let [a=3, b=4, c=5] = [1, 2];
console.log(
  a,
  b,
  c
);

// 分割代入をする利点: 配列の要素の入れ替えがもっと簡単になる
const arr = [1, 2];
console.log(arr);

let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

console.log(arr);

let num1 = 1;
let num2 = 2;

[num1, num2] = [num2, num1];
console.log(num1);

// Objectの分割代入
let user = {
  name: 'Mike',
  age: 30
};

//let { name, age } = user;
// 変数の名前も変えることが可能
let {name: userName, age: userAge} = user;
console.log(userName);
console.log(userAge);

// ただし、undefinedのときだけ、可能
// Objectのkeyに既にあるなら、その値を採択する
let {name, age, gender = 'male'} = user;
console.log(gender);