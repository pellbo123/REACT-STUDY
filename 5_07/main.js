// 함수
// 자바스크립트에서는 함수를 만들 수 있는 방법이 많다.
// 언제 어떤 함수를 사용해야 하는지 이해하기 어렵다.
// 역설적으로 이 말은 아무 것이나 사용해도 된다.
// function (매개변수) {함수가 수행하는 내용}

// 함수 사용의 장점
// 반복되는 코드를 한번만 정의해놓고 반복해서 사용한다.
// 긴 프로그램을 모듈화로 나눠서 작성할 수 있다.
// 기능별(함수별) 로 수정이 가능하므로 유지보수가 쉽다.

// 익명 함수
const 함수 = function() {
    console.log("함수 내부 코드입니다....")
    console.log("함수 내부 코드입니다....")
    console.log("함수 내부 코드입니다....")
}
함수();
console.log(typeof(함수()));
console.log(함수());

// 선언적 함수
function 함수1() {
    console.log("함수 입니다.");
}
함수1();
// let a = prompt('string 문자열을 넣으면');
// console.log(a);

// 매개변수와 리턴값을 가지는 함수
function 함수2(매개변수) {
    console.log(매개변수);
    return 매개변수;
}


function f(x) {
    return x * x;
}
console.log(f(3));


// 함수 예시 최솟값을 구하는 함수
function min(array) {
    let output = array[0];
    for (const item of array){
        if (output > item) {
            output = item;
        }
    }
    return output
}

const testArray = [55,32,11,103,275,330,9];
console.log(`${testArray} 중에서`);
console.log(`최솟값은 = ${min(testArray)} 입니다.`);


// 만약에 min(55,22,33,1234) 이런식으로 널고 싶다면??
// 매개변수가 두개일수도 있고, 3개일수도 있고, 10개일수도 있다면??
// 어떻게 구현을 해야 할까요?

// 이런 경우에는 자바스크립트에서 나머지 매개변수 라는 문법을 사용합니다.

// function 함수 이름(...나머지 매개변수) {}
// 함수의 매개변수 앞에 마침표 3개를 입력하면 매개변수들이 배열로 돌아온다.


function sample(...items) {
    console.log(items);
}
sample(1,2);
sample(3,4,5,6,7);

// // 나머지 매개변수를 사용한 min 함수
function min(...items) {
    let output = items;
    for (const item of items){
        if (output > item){
            output = item
        }
    }
    return output
}
console.log(min(33,22,11,55,52));

// 나머지 매개변수와 일반 매개변수의 조합
// function 함수 이름(매개변수,매개변수,...나머지 매개변수) {}
// [주의!!] 나머지 매개변수는 항상 맨 마지막에

function sample2 (a,b,...c) {
    console.log(sample2(a,b,c));
}

// 실행결과 1 2 []
//         1 2 [3]


// typeof 연산자를 사용해서 자료형을 알 수가 있다.
// 배열의 경우에는 typeof 사용하면 object(객체) 라는 결과가 나온다
// 이 데이터가 배열인지 아닌지 구분을 하고 싶을 떄는 Array.isArray()를 사용한다.
//                                               [배열] [메소드]

console.log(Array.isArray(testArray));

// 전개 연산자
// 함수에 배열을 매개변수로 넣을 수 없고, 숫자만 넣을 수 있을때
// min(52, 273, 33, 22)
// 배열 자료형으로 읽어들였을 때 min 함수를 호출 하려면?
// const array = [1,2,3,4]
// min(array[0], array[1], array[2], array[3])

// 함수 이름(...배열)
function prt (...items) {
    console.log(items);
}

const array = [1,2,3,4];

console.log("전개 연산자를 사용하지 않을 경우");
prt(array);
console.log("전개 연산자를 사용할 경우");
prt(...array);

// 기본 매개변수
// 함수의 매개변수로 항상 값을 넣는 것이 귀찮아
// 매개변수에 기본 값을 지정하는것
// 함수이름(매개변수, 매개변수=기본값, 매개변수=기본값)
function earning(name, wage = 5000, hours = 40) {
    console.log(`${name} 님의 정보`);
    console.log(`${name} 님의 급여 ${wage}`);
    console.log(`${name} 님의 근로시간 ${hours}`);
}
earning('서정훈');
earning('서정훈', 10000);
earning('서정훈', 10000, 50);

// 비동기 프로그래밍
// C나 다른 언어의 경우에는 함수를 지정된 위치에서 만들어야 한다.
// 자바스크립트는 "함수도 하나의 자료"라는 개념을 가지고 있어 중간에 함수를 만든다.
// 이것이 비동기 프로그래밍의 기초 개념이다.

// 콜백 함수
// 자바스크립트는 함수도 하나의 자료형이므로 매개변수로 전달할수가 있다.
// 오직 자바스크립트에만 이 개념이 있다.
function callThreeTimes (callback) {
    for (let i=0; i<3; i++) {
        callback(i)
    }
}
function print1(i) {
    console.log(`${i}번째 함수 호출`);
}
callThreeTimes(print1);

// |
// v

function callThreeTimes2 () {
    function print2 (i) {
        console.log(`${i}번째 함수 호출`);
    }
    for (let i=0; i < 3; i++) {
        print2(i);   
    }
}
callThreeTimes2();

// 익명함수
function callThreeTimes3 (callback) {
    for (let i=0; i < 3; i++) {
        callback(i);   
    }
}
callThreeTimes3(function(i){
    console.log(`${i}번째 함수 호출`)
})

// 콜백 함수를 활용하는 가장 기초적인 함수 forEach()
// function (value(생략가능),index(생략가능),array) {}
const numbers = [11, 33, 232, 34, 9];

numbers.forEach(function (value, index, array) {
    console.log(`${index}번째 요소 : ${value}`);
})

// map() 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 만드는 함수

let numbers1 = [273,11,103,32,12];
numbers1 = numbers1.map(function(value, index, array) {
    return value * value
});

numbers1.forEach(console.log)

// filter() 메소드
// 배열이 가지고 있는 함수(Array 자료형의 내장 함수)
// filter() 메소드는 콜백 함수에서 리턴하는 값이 true 인 것들만 모아서 새로운 배열을 만드는것

const number2 = [0,1,2,3,4,5];
const evenNUmbers = number2.filter(function (value) {
    return value % 2 === 0;
});
console.log(`원래 배열${number2}`);
console.log(`짝수 배열${evenNUmbers}`);

// 화살표 함수
// 앞에서 살펴본 map filter 함수처럼 단순한 형태의 콜백 함수를 쉽게 입력하기 위해서
// 화살표 함수라는 생성 방법이 있다.
// 화살표 함수는 function 키워드 대신에 화살표(=>)를 사용한다.
// (매개변수) => {}
array.map((value) => value * value);

// 메소드 체이닝
// map filter forEach와 같은 함수를 연속적으로 사용하고 싶을 때
// 화살표 함수에서 응용해서 쓴다.

let numbers3 = [0,1,2,3,4,5,6,7,8,9];

numbers3
    .filter((value) => value % 2 === 0)
    .map((value) => value * value)
    .forEach((value) => {
        console.log(value);
    });


