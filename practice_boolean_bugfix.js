// 以下のは、全部false処理される
console.log(
  Boolean(0),
  Boolean(""),
  Boolean(null),
  Boolean(undefined),
  Boolean(NaN)
);

// ただし、Number(null) -> 0
// Number(undefined) -> NaN
// Boolean(0) -> false
// Boolean('0') -> true
// Boolean('') -> false
// Boolean(' ') -> true
console.log(Number(null), Number(undefined));
console.log(Number(null), Number(33));
console.log(
    Boolean(''),
    Boolean(' ')
);
