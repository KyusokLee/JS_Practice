let age = 'age';
const user = {
    name: 'mike',
    // computed property
    [age] : 30
}

const mike = user
console.log(mike.age); // 30が出力される

const student = {
    name: "Lee",
    age: 28,
    city: "Tokyo"
}

// entries: 配列型にする
const result = Object.entries(student);
console.log(result);

// Object.assign(): Objectの複製
const newUser = Object.assign({}, student);
console.log(newUser);
newUser.name = "kyulee";
console.log(newUser);
console.log(student);

// Objectの元は変更されない
// {}の方の初期値がstudentとmergeされる
const newUser2 = Object.assign({ gender: 'male' }, student);
console.log(newUser2);

// Object.fromEntries(): key/value配列をObjectに変更
const pracArr = [
    ['name', 'mike'],
    ['age', 30],
    ['gender', 'male']
];

// 配列をkey / valueのobjectとして返す
console.log(Object.fromEntries(pracArr));