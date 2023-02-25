// 間数のparameterにdefault値を与えることができる

function sayHello(name = 'friend') {
    let message = `Hello, ${name}`;
    console.log(message);
}

sayHello();
sayHello('Lee');

// 間数に関するClean Code
// 1. 一つの間数は一つに作業に集中させるようにコードを作成
// つまり、 一つの間数は一つの仕事だけを処理するようにコードを作成
// 2.　一眼でわかりやすい名前にすること (naming)!
// showError(), getName(), createUserData(), checkLogin()など..

// 間数表現式とArrow 間数に関して
// 間数宣言式は、どこでも呼び出し可能 -> Swiftと似てる!
// つまり、定義した前でも、後でも呼び出し可能! JavaScriptのHoistingの原理に基づく
checkUserName('lee');

function checkUserName(name) {
    if (name) {
        console.log(`${name}様はユーザです！`);
    } else {
        console.log('is not user');
    }
}
checkUserName('Kyulee');
checkUserName();

// 一方で、間数表現式は、その間数が定義された後からやっと呼び出しが可能となる
const checkUserAge = function(age) {
    console.log(`age: ${age}`);
};

checkUserAge(38);

// arrow 間数
const add = (num1, num2) => {
    const result = num1 + num2;
    return result;
};

console.log(add(1, 3));