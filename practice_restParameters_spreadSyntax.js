// Rest Parameters (残余引数)
// ES6では、この残余引数を推奨している
// 間数のparameter(argument)は、基本array Objectとして渡される
// ただし、Arrayの内装メソッド (filter, forEachなど)がないので、実質Arrayとして扱うことができなかった
// 残余引数として定義すると、forEachなどができる

function showName(...names) {
  console.log(names);
}

showName();
showName('Mike');
showName('Mike', 'Tom');

function add(...numbers) {
  let result = 0;
  numbers.forEach((num) => (result += num));
  console.log(result);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// user Objectを返すConstructor 間数
// 残余引数は一番最後に記入する
function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User('Lee', 27, 'Swift', 'JavaScript', 'Python');
const user2 = new User('Mike', 21, 'html', 'css', 'React');

console.log(user1);
console.log(user2);

// spread Syntax
let arr1 = [1, 2, 3];
let result = [0, ...arr1, 4, 5, 6];
console.log(result);

let user3 = {
  name: 'Mike',
  age: 30
};

let user4 = {...user3};
user4.name = 'James';
console.log(
  user3.name,
  user4.name
);