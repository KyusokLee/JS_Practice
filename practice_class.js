// __proto__への直接なアクセスは控えた方がいいらしい
// __proto__は隠れているObjectのpropertyである


class Human {
  constructor(name) {
    this.name = name;
  }
  sleep() {
    console.log(`${this.name} 寝るね...zzz`);
  }
}
// 親Classの継承
class Adult extends Human {
  constructor(name) {
    super(name); // callを利用して、constructor借りることの代わりに、superを利用
  }
  buyDrinks() {
    console.log(`大人の ${this.name}はお酒を買うことができますよ!`);
  }
}

const jake = new Adult('Jake');
jake.buyDrinks();
jake.sleep();

// const car = {
//   wheels: 4,
//   drive() {
//     console.log('drive...!');
//   }
// };

const Bmw = function (color) {
  this.color = color;
}

// const x5 = new Bmw('red');
// const z4 = new Bmw('blue');

// // __proto__を用いて直接繋げた場合
// x5.__proto__ = car;
// z4.__proto__ = car;

// console.log(x5.wheels);
// z4.drive();

// // 上記よりも、下記の方を推奨
// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function () {
//   console.log('drive..!');
// };

// 下記のようにもっと簡単にまとめることができるが、.... constructorがfalseになってしまう
Bmw.prototype = {
  wheels: 4,
  drive() {
    console.log('drive..!');
  },
  navigation: 1,
  stop() {
    console.log('STOP!');
  }
};

const x5 = new Bmw('red');
const z4 = new Bmw('blue');

console.log(x5.wheels);
z4.drive();

// instanceOfでインスタンスの確認もできる
console.log(z4 instanceof Bmw);
console.log(z4.constructor === Bmw); // false;
// 直接 prototype の中にconstructorを指定すると、trueになる

// closureを用いた方法
const Bentz = function(color) {
  const c = color;
  this.getColor = function () {
    console.log(c);
  };
};

// getだけが可能となり、上書きができなくなる
const x6 = new Bentz('red');
x6.getColor();
x6.c = 'black';
x6.getColor();  // redのまま