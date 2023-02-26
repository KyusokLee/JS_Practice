// closureはlexcial環境と関係がある
// 全域 Lexical 環境 -> makeAdder , add3
// makeAdder Lexical 環境 -> x : 3
// 匿名関数 Lexical 環境 -> y : 2 

function makeAdder(x) {
  return function(y) {
    return x + y;
  }
}

const add3 = makeAdder(3);
console.log(add3(2));

function makeCounter() {
  let num = 0; // 情報の秘匿化

  return function () {
    return num++;
  };
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

const sortDesc = function(arr) {
  return arr.sort(function(a, b) {
    return b - a;
  });
};
const arr = [1, 2, 3, 4, 5];
const result = sortDesc(arr);
console.log(result); // [5, 4, 3, 2, 1]
console.log(arr); // [5, 4, 3, 2, 1]

const sortDesc2 = function(arr) {
  return arr.slice().sort(function(a, b) { // slice関数で配列のコピー
    return b - a;
  });
};
const arr2 = [1, 2, 3, 4, 5];
const result2 = sortDesc2(arr2);
console.log(result2); // [5, 4, 3, 2, 1]
console.log(arr2); // [1, 2, 3, 4, 5] -> もとの配列を変えない