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