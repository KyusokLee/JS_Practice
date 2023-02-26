let desc = 'Hi guys. Nice to meet you!';
console.log(
  desc.indexOf('to'),
  desc.indexOf('man') // 要素がない場合は、-1を返す
);

// これは正常に動作しない -> Hiがindex 0から始まるけど、if (0)は falseであるため
// if 0 : true , if -1 : false!!
// if (desc.indexOf('Hi')) {
//     console.log('Hiが含まれている文字列です!');
// }
if (desc.indexOf('Hi') > -1) {
    console.log('Hiが含まれている文字列です!');
}

// trim(): 空学を消す
let desc2 = '  coding     ';
console.log(
  desc2,
  desc2.trim()
);

// slice(n, m): nがstart index, mがend index -> nとmの間の文字列を返す
// m がないときは、最後のindexまで
// 負数は、後ろから引いたindexまで
let pracStr = 'abcdefg';
console.log(
  pracStr.slice(2),
  pracStr.slice(0, 5),
  pracStr.slice(2, -2)
);

// subString(n, m): nとmの間の文字列を返す, 負数は0として認識する
console.log(
  pracStr.substring(2, 5),
  pracStr.substring(5, 2)
);

// repeat(n): 文字列をn回繰り返す
// includes('ss'): ssを含む文字列ならtrue 