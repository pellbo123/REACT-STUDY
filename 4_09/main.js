// 기본적인 함수 선언과 호출
function funName() {
    console.log("함수 실행")
}

funName();

// return 아래의 함수는 실행 X (return은 함수의 끝을 의미)
function returnFunc() {
    return 123;
    console.log("함수가 실행 됨");
}
const a = returnFunc();
console.log(a);

//함수를 만드는 목적
//1. 코드의 재사용
//2. 코드를 깔끔하게 보이게

function sum(a, b) {
    return a+b;
}

const number = sum(1, 2);
const number2 = sum(3, 4);
const number3 = sum(5, 6);

console.log(number, number2, number3);

// 기명 함수
function hello() {
    console.log("hello");
}
hello();

// 익명 함수
const world = function () {
    console.log("hihihi");
}

world();

// 함수의 재사용 예시
function handler() {
    console.log("clicked!");
}

document.body.addEventListener('click', handler);

handler();
handler();
document.body.addEventListener('click', function() {

})

//메소드
//객체 데이터
const object1 = {
    name : "kh",
    age : 17,
    getName : function() {
        return this.name;
        // retunr object1.name
    }
}

const hisName = object1.getName();
console.log(hisName);
console.log(object1.getName());

// 조건문 1.if문 2.switch문 

//if문은 조건이 참일때 (조건 앞에 "!"를 넣으면 반전시킬 수 있다. (거짓이 출력되는식))
const isShow = true;
const checked = false;

// let 변수는 조건문 내에서만 사용 가능
if (isShow) {
    console.log("Show!");
    let ABC = "A";
    console.log(ABC);
} else {
    console.log("Hide?");
}


if (checked) {
    console.log("Checked!");
}

// 스위치

// switch (dondition) {
//     case value1:
//         state1;
//         break;
//     case value2:
//         state2;
//         break;
//     default:
//         state3
// }

function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "alpha"
            break;
        case 2:
            answer = "bravo"
            break;
    }
    return answer;
}

console.log(caseInSwitch(3));

function switchOfStatus(val) {
    let answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;

        case "b":
            answer = "banana";
            break;
        default:
            answer = "stuff";
    }
    return answer;
}

console.log(switchOfStatus("c"));


function size(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "LOW";
            break;
    }
}

console.log(size(3));


// switch를 사용하는것이 효과적인 경우
// 옵션이 많은 경우에 if else 대신 switch

function chainToSwitch(val) {
    let answer = "";
    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 7) {
        answer = "byebye";
    }
    return answer
}

function chainToSwitch2(val) {
    let answer = "";
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 7:
            answer = "byebye";
            break;
    } 
    return answer
}


// 반복문
// for, for in, for of, forEach, while, do while ...

for (let i=0; i<10; i++) {
    console.log(i); //0123456789
}

//for in문
//object 사용할 수 있는 반복문
//배열에도 사용가능, 다만 권장하지 않음
const obj = {
    name : "이름",
    age : "나이"
}

for(const key in obj) {
    console.log(key);
    console.log(obj.name, obj.age);
    console.log(`key값: ${key}`);
    console.log(`value값: ${obj[key]}`);
}

//for of문
//반복 가능한 객체(Array, Map, Set, String, TypedArray, Arguments)
//보통은 Array를 사용한다.
const array = ['1번', '2번', '3번'];

for(const element of array) {
    console.log(element);
    console.log(array);
}


//forEach문
//for of랑 비슷함
//차이점: 콜백(=>)함수 씀 

array.forEach((element)=>{
    console.log(element);
})


//while문

// while (condition) {
//     //condition이 참이면 실행
// }

// do {
//     //거짓이더라도 무조건 실행
// } while(condition)





















