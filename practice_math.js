// 10進数を 2進数 or 16進数に
let num = 10;
console.log(num.toString());
console.log(num.toString(2));

let num2 = 255;
console.log(num2.toString(16));

// ceil: 少数点の値を無視して、切り上げる
let num3 = 5.1;
let num4 = 5.7;

console.log(Math.ceil(num3));
console.log(Math.ceil(num4));

// floor: 切り捨て
// round: 四捨五入   --> Swiftと全く同じ
// 少数点桁数の指定
let userRate = 30.1234;
// 文字列を返すので、Numberに変換
console.log(
  userRate.toFixed(2),
  userRate.toFixed(0),
  userRate.toFixed(6),
  typeof userRate.toFixed(2),
  typeof Number(userRate.toFixed(2))
);

// isNaN(): Numberでないことだけをtrueに返す
// x == NaN : false,
// x === NaN : false,
// NaN == NaN : false  を返すので、isNaN()を用いた方がdebugしやすい

let x = Number('x');
console.log(isNaN(x));

// parseInt(): Number型で読める部分まではNumberに変換し、読めない部分は変換せずに捨てる
let margin = '10px';
console.log(
    parseInt(margin),
    Number(margin)
);

let redColor = 'f3';
console.log(parseInt(redColor));

console.log(parseInt(redColor, 16)); // 243 (16進数に変換)

// Math.random() -> 0 ~ 1の間のrandomな数字 0.012123とかも入ってる
// そのため、1~100の任意の整数だけを取りたいなら
// 100まで取りたいから * 100
// 1 を足す理由は 0からじゃなく1から取りたいから
console.log(Math.floor(Math.random() * 100 + 1));

let numArray = [1, 4, 1, 5, -1, 10, 10, 9, 5.5];
console.log(
  Math.max(numArray),
  Math.min(numArray)
);
// 配列を入れるとNaN
// 配列の最大値と最小値はreduceで解決した方がいいようだ
console.log(
    Math.max.apply(null, numArray),
    Math.min.apply(null, numArray)
  );
  // しかし、配列の要素が多すぎると性能がよくない -> 一つ一つの要素を全て回るから
  // 要素が多いときは、 -> loop文で制御すること

  // indexOf(): その要素が格納されているindexを返す
  // Math.maxの応用
  // 文字列の一番長い文字列を返す
  function findLongestWord(arr) {
    let arrMap = arr.map(x => x.length);
    // spreadは ES6以降の文法
    let maxNumber = Math.max(...arrMap);
    let result = arrMap.indexOf(maxNumber);

    return arr[result];
  }

  function sortByWordLength(arr) {
    const sortByLengthArr = arr.sort((a, b) => a.length - b.length);

    return sortByLengthArr;
  }
  let array = ["PHP", "Exercises", "Backend"];
  console.log(findLongestWord(array));
  console.log(sortByWordLength(array));