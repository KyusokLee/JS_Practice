// Constructor（コンストラクター)関数:
// 新しくオブジェクトを作成するための雛形となる関数です。

// 頭文字は大文字にするのが慣習
// ES5
function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);   
    }
}

let user1 = new User('mike', 30);
let user2 = new User('jane', 31);
console.log(user1);
console.log(user2);
user1.sayName();

// メリット: いちいちObject literalを生成するより、簡単で可読性よくobjectの生成が可能

// ES6 -> construtor関数をclass文法で使うことが可能となった
class UserA {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showUserInfo() {
        console.log('..');
    }
}

let user3 = new UserA('lee', 30);
user3.showUserInfo();