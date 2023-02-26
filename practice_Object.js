const user = {
    name: 'Lee',
    age: 27,
    country: 'Korea'
}

// 追加
user.hairColor = 'black';
user['hobby'] = 'coding';
console.log(user.name);
console.log(user.country);
console.log(user);

// 削除
delete user.age;
console.log(user);

function makeObject(name, age) {
    return {
        name: name,
        age: age,
        hobby: 'football'
    }
}
// 省略も可能
// function makeObject(name, age) {
//     return {
//         name,
//         age,
//         hobby: 'football'
//     }
// }

const lee = makeObject('Lee', 27);
console.log(lee);

console.log('age' in lee);
console.log('birthday' in lee);

// function isAdult(user) {
//     if (user.age < 20) {
//         return false;
//     }
//     return true;
// }

const Mike = {
    name: 'Mike',
    age: 30
};

const Jane = {
    name: 'Jane'
};

console.log(isAdult(Mike));
// Janeにはageがないのに、trueが出力される -> undefinedの場合は、trueが返されるから。。
console.log(isAdult(Jane));

// undefinedも処理した間数
function isAdult(user) {
    // userにageがないなら、false処理
    if (!('age' in user) || user.age < 20) {
        return false;
    }
    return true;
}

// for inは Swiftの文法と似てる!!
for (key in Mike) {
    console.log(Mike[key]);
    console.log(Object.keys(Mike));
    console.log(Object.values(Mike));
    // entriesはDictionary型で出力する ([key, value]の対)
    console.log("entries: " + Object.entries(Mike));
}

for (const [key, value] of Object.entries(Mike)) {
    console.log(`${key}: ${value}`);
}

// Method, thisに関して
// ObjectのPropertyに割り当てられた間数をmethod（メソッド）と呼ぶ
const superman = {
    name: 'clark',
    age: 33,
    fly() {
        console.log("flying!");
    }
};

let boy = {
    name: 'Mike',
    sayHello: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

let girl = {
    name: 'Jane',
    sayHello: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

boy.sayHello();
girl.sayHello();

// arrow 間数は、一般関数とは違って、自分だけのthisを持たない
// arrow関数内部でthisを使うと、そのthisは外部から値を持ってくる

let arrowBoy = {
    name: 'Mike',
    sayHello: () => {
        // 全域objectを持ってくる
        console.log(this)
    }
}
arrowBoy.sayHello();
// {}が出力される

let anotherBoy = {
    name: "Michael",
    showName: function() {
        console.log(anotherBoy.name);
    }
};

// thisを使ったアクセス
let thisBoy = {
    name: "Michael",
    showName: function() {
        console.log(this.name);
    }
}

let anotherMan = anotherBoy;
// anotherBoy = null;
// anotherMan.showName(); // -> nullにしたから、error!
anotherMan.name = "Tomas" // anotherBoyも変えてしまう
console.log(anotherBoy.name);

let thisMan = thisBoy;
thisBoy = null;
thisMan.showName(); // thisBoyはnullにしたが、thisManに格納しておいたため、thisManの値は残ってる

let student = {
    name: "Lee",
    sayThis: function() {
        console.log(this);
    }
};

// 正常にobjectを持ってくることが確認できる
student.sayThis();

let arrowStudent = {
    name: "Lee",
    sayThis: () => {
        console.log(this);
    }
};

// windowが表示される 
arrowStudent.sayThis();

// したがって、Object内のメソッド定義は、arrow関数を使わない方がいい

// ES6
let test = {
    city: "Tokyo",
    showTest() {
        console.log('this is test');
    }
}

test.showTest();

//ES6
let mine = 'Mine';
let it_record = 'ItRecord'
let fn = () => 'fn';

const obj = {mine, it_record, fn}
console.log(obj);

const chicken = {
    name : 'chicken',
    showChickenName() {
      console.log(this.name);
    }
}
  
const chick = {
    name : 'Chick',
    __proto__ : chicken
}
// // Propertyによる継承
chicken.showChickenName();
chick.showChickenName();

const chickenA = chicken;
chickenA.showChickenName();
const chickA = chick;
chickA.showChickenName();

// consoleを処理するメソッドなのに、またconsoleでくくると、undefinedが出力される