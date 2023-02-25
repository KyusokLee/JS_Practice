// var は、関数スコープであり、宣言する前に使用することが可能
// また、一度定義したものを改めて定義することが可能 -> よくない!
// varは宣言するとたんに初期される (undefined)になるし、重複定義があったも、errorを起こさないから、現在は使わない

var practiceName;
console.log(practiceName); // undefined
practiceName = 'mike'; // practiceNameがHoistingされる

var age = 30;
console.log(age);
var age = 41;
console.log(age);

// // Temporal Dead Zone
// console.log(practiceName2);
// // Temporal Dead Zone
const practiceName2 = 'lee';
console.log(practiceName2);
// const,letもHoistingされるが、Temporal Dead Zoneに影響される
// そのため、宣言及び割り当てる前には、使うことは不可！

let age2 = 30;
function showAge() {
    // TDZ発生
    console.log(age2);
    age2 = 41;
    console.log(age2);
    // 全域にもage2はあるが、この関数内部のscopeで定義した同じ名前のage2がHoistingを起こし、23行目がerrorになる
    //let age2 = 20;
}

showAge();
console.log(age2);