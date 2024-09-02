//첫 번쨰 문제
//if, else, promtp를 사용해서 프롬프트로 입력받은 이산이 오전인지 오후인지 구분하는 코드

// let i = prompt("시간을 입력");

// if (12<i) {
//     console.log("오후", i-12, "시")
// } else if (i == 12) {
//     console.log("오후", i, "시")
// } else {
//     console.log("오전", i, "시")
// }


// 모범 답안
// let time = prompt("시간을 입력하세요.");

// if (time < 12) {
//     alert("오전입니다.")
// } else {
//     alert("오후입니다.")
// }





//두 번쨰 문제
// 현재 환율을 기반으로 사용자에게 숫자를 입력받아서
// 달러에서 원화로 환율을 변환하는 프로그램을 제작하세요.
// 1달러 = 1300원

// var money = prompt("금액을 입력");

// function Exchange() {
//     i = money * 1300
//     alert(`${i}원`);
// }

// Exchange();


// 모범 답안
// let exchange = prompt("달러를 입력하세요.");
// won = exchange * 1300;
// alert(`${won}원`);





//코드를 보고 결과 예측
// console.log(2 + 2 - 2 * 2 / 2 * 2);

//정답: 0


//자료형 숫자 불린
// let A = "aaa";
// console.log(typeof(A));

// 문자열인지 숫자인지 불린인지 판별


//"+" 문자열 연산, 숫자 연산
// let a = "가나다"+"라마바사";
// console.log(a);
// //a 가나다라마바사
// let num = 123+456;
// console.log(num);
// //num 123456





//세 번째 문제
// 중첩 조건문을 사용
// 중첩 조건문이란 조건문 안에 조건문이 들어가는 코드
// 학점은 4.5를 만접으로 한다.
// 4.5 = A+
// 4.0 = A
// 3.5 = B+
// 3.0 = B0
//학점을 입력 받아서 특정 범위 안에 있는 학점의 경우에는
//칭호를 붙여주자
//학점이 1.0~2.0 = 플랑크톤
// 2.0~3.0 = 돌고래
// 3.0~4.0 = 인간
// 4.0~4.4 = 교수님
// 4.5 = 신


// i = prompt();

// if (i >= 0) {
//     if (i >= 1.0 && i < 2.0) {
//         alert("플랑크톤");
//     }
//     if (i >= 2.0 && i < 3.0) {
//         alert("돌고래");
//     }
//     if (i >= 3.0 && i < 4.0) {
//         alert("인간");
//     }
//     if (i >= 4.0 && i <= 4.4) {
//         alert("교수님");
//     }
//     if (i >= 4.5) {
//         alert("신");
//     }
// }


//모범답안
// let score = Number(prompt('학점을 입력하세요.',"학점"));
// if (score == 4.5) {
//     alert("신");
// } else if (4.0 <= score && score < 4.5) {
//     alert("교수님");
// } else if (3.0 <= score && score < 4.0) {
//     alert ("인간");
// } else if (2.0 <= score && score < 3.0) {
//     alert ("돌고래");
// } else if (1.0 <= score && score < 2.0) {
//     alert ("플랑크톤");
// }

// let score = Number(prompt('학점을 입력하세요.',"학점"));
// if (score == 4.5) {
//     alert("신");
// } else if (4.0 <= score) {
//     alert("교수님");
// } else if (3.0 <= score) {
//     alert("인간");
// } else if (2.0 <= score) {
//     alert("돌고래");
// } else if (1.0 <= score) {
//     alert("플랑크톤");
// } else {
//     alert('4.5보다 크거나 1.0보다 작음');
// }


//반복문을 사용하는 이유
// 컴퓨터 반복 작업을 시키는건 간단 합니다.
// 똑같은 코드를 반복하고 싶은 만큼 작성을 하면 됩니다.
// 가독성을 위해서 이 과정을 짧게 축약해서 사용한 것이
// 오늘날의 반복문 입니다.

//반복문의 구조
for (let i = 0; i < 10; i++) {
    console.log(`${i}번 반복`);
}