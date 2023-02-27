let days = ['monday', 'tuesday', 'wednesday'];
// 配列もObjectではあるが、for in よりfor ofの方が効率的らしい
for (let day of days) {
    console.log(day);
}

for (let day in days) {
    console.log(day);
}

// for in -> Objectの繰り返しで！
// for of -> 配列の繰り返しで!
// forEachも配列でだけ可能
// for of を Objectで使うと、Uncaught TypeError: obj is not iterableが出力される
// 繰り返し不可ということ..

// for in を配列で使うと、?? -> 配列のindexが出てしまう、、、

// 配列の最後の方に格納 -> swiftのappend
days.push('friday');
console.log(days);
// 配列の最後の方を削除 -> swiftのpopLast, removeLastみたいな
days.pop();
console.log(days);

// 配列の先頭に入れる
days.unshift('sunday');
console.log(days);

// 配列の先頭の値を削除
days.shift();
console.log(days);

// forEach
let nameArray = ['Mike', 'Lee', 'Tanaka'];
nameArray.forEach((name, index) => {
  console.log(`nameArray[${index}] = ${name}`);
});

const arr = [1, 2, 3, 4, 5, 6];
const filterEvenNum = arr.filter((item) => {
  return item % 2 === 0;
});
console.log(filterEvenNum);
// reverse(): 逆順でsort
console.log(arr.reverse());

let userList = [
  { name: 'Mike', age: 30 },
  { name: 'Lee', age: 27 },
  { name: 'Tanaka', age: 14 }
];

let newUserList = userList.map((user, index) => {
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: user.age > 19
  });
});

console.log(newUserList);
console.log(userList);

// join, split
let strArr = ['おはよう', '私は', 'LEEだよ!'];
// join('s'): 配列の各要素の間にsを入れる 
let joinResult = strArr.join('-');
console.log(joinResult);

const userString = 'Mike Lee Tanaka';
const splitResult = userString.split(' ');
console.log(splitResult);

// isArray()の使い型: JSではArrayもObjectとして扱うので、より詳しい区分をしたいなら、isArray()
let pracUser = {
  name: 'Mike',
  age: 30
};

let pracUserList = ['Mike', 'Tom', 'Jane'];

console.log(
  typeof pracUser,
  typeof pracUserList
);

console.log(
  Array.isArray(pracUser),
  Array.isArray(pracUserList)
);

// 配列の全ての要素merge方法
let numArr = [1, 2, 3, 4, 5, 6];
const reduceResult = numArr.reduce((prev, cur) => {
  return prev + cur;
}, 0);
// 初期値は0に

let userList2 = [
  { name: 'Mike', age: 30 },
  { name: 'Lee', age: 27 },
  { name: 'Tanaka', age: 14 },
  { name: 'Susan', age: 21 },
  { name: 'Park', age: 10 }
];

// 初期値を空列にすることで、求めるデータtypeを持ってくることが可能
let reduceResult2 = userList2.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(reduceResult2);

let filterResult = userList2.filter((user) => {
  if (user.age > 19) {
    return user;
  }
});

let filterResult2 = userList2.filter(user => user.age > 19);

// 同じ!
console.log(filterResult);
console.log(filterResult2);

// user.nameとuser.ageの両方の条件を満たすObjectだけをfilterする
let filterResult3 = userList2.filter(user => user.age > 19 && user.name === 'Lee');
console.log(filterResult3);

// array.concat(): 配列の複製
let pracArray = [10, 20, 30, 41, 55];

// function getPracArray(array) {
//   let newArray = array;

//   // 降順
//   array.sort((a, b) => b - a);
//   console.log(newArray);
//   console.log(array);

//   // こうすると、newArrayも変わってしまう..
//   // 理由: newArrayがarrayを参照しているので、もとの配列も変わってしまう
// }

// getPracArray(pracArray);

function getNewPracArray(array) {
  // concatで複製
  // こうすると、もとのものだけを変えて、newArrayは変更前のものを保つ
  let newArray = array.concat();

  // 降順
  array.sort((a, b) => b - a);
  console.log(newArray);
  console.log(array);
}

getNewPracArray(pracArray);