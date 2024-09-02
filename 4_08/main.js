//string
const myName = "kheumhwang"
const email ="a59114154@gmail.com"
const hello = `hello ${myName}??`

console.log(hello)
//numbers
const number = 10;
const number2 = 10.55;
//boolean
// const checked = true;
// const isShow = false;

// console.log(checked)

//undefined
let undef;
const obj = {abc:123};
console.log(undef);
console.log(obj.abc);
console.log(obj.xyz);

//null
//의도적으로 비어있음을 나타내는 데이터, 아무것도 없는상태
//지금은 아무것도 없지만 여기에는 곧 데이터가 들어갈 예정이니 메모리 공간을 확보해 놔라
let name = null;
console.log(name);
name = "hihi"
console.log(name);

//object
//Key-Value 관계 여러가지 데이터를 저장한다.
//Key는 고유해야 한다.
const user = {
    //Key: Value
    userName : "kh",
    age : 17,
    isValid : true
};

console.log(user.userName);
console.log(user.age);
console.log(user.isValid);

//Array 배열
//파이썬 리스트와 비슷, 데이터를 순차적으로 니열
const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); //Indexing

//var 재할당이 가능
// var aaa = "A";
// aaa = "B";
// console.log(aaa)


isShow = true;
// if (isShow) {
//     var bbb = "B";
//     console.log(bbb)
// }
// console.log(bbb);


//let if문 내에서만 사용, 재할당 가능
// if (isShow) {
//     let bbb = "C";
//     console.log(bbb)
// }
// console.log(bbb);

//const 상수, 재사용되지않는 값, 재할당 불가

// const a = 12;
// console.log(a);
// a = 999;




