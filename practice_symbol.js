// Symbol: 唯一生を保証する
// new キーワードを使わない
// 唯一な識別子ってこと
const a = Symbol();
const b = Symbol();

console.log(
    a === b,
    a == b
)

// 説明を与えるのも可能
const id = Symbol('id');
const user = {
    name: 'Mike',
    age: 30,
    [id] : 'MyID'
};

const car = {
    name: 'BMW',
    country: 'Germany',
    sayCarName() {
        return this.name;
    }
};
// Symbol型のpropertは除外する
console.log(Object.keys(user));
// ただし、隠れているSymbol keyを見る方法はある
// Symbolだけを
console.log(Object.getOwnPropertySymbols(user));
// Symbolを含めた全keyを
console.log(Reflect.ownKeys(user));

// prototypeもkeyとして返す
for (let key in car) {
    console.log(key);
}

let carA = Object.assign({}, car);
console.log(carA.sayCarName());




// 全域Symbolは: Symbol.for()
// 一つのSymbolだけを保証される
// Symbol.forメソッドは、一つを生成した後、keyを通して同じSymbolを共有する
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');

console.log(id1 === id2);

// Symbolの応用
// 他の開発者が作っておいたObjectだと仮定
const country = {
  name: 'Japan',
  capital: 'Tokyo',
  continent: 'Asia'
};


// 私が作業するもの
// country.showName = function () {};
const showName = Symbol('show name');
country[showName] = function () {
  return this.name;
};
// Symbolは上書きしない

console.log(country[showName]());

// 他の開発者が作っておいたもの
// Symbolで作ったものが影響してないことがわかる
for (let key in country) {
  console.log(`${key} is ${country[key]}.`);
}