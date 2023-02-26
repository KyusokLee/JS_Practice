const mike = {
  name: 'mike'
};

const tom = {
  name: 'tom'
};

function showThisName() {
  console.log(this.name);
}

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(mike, 1999, 'singer');
console.log(mike);

// applyは引数を配列型として扱う

// bind: 間数のthisの値を永久に変更できる
console.log(mike);
const updateMike = update.bind(mike);
updateMike(1980, 'police');
console.log(mike);

const user = {
  name: 'mike',
  showName() {
    console.log((`hello! ${this.name}!`));
  }
};

user.showName();
let fn = user.showName;
fn(); // undefined

fn.call(user); // hello! mike!

let boundFn = fn.bind(user);
boundFn();
console.log(mike);
