//삼항연산자
//조건식? 참일 때: 거짓일 때
const a=5;
// const result=a%2;
const result=(a%2)===0 ? '짝수':'홀수';
console.log(result);

const b=7;
const result2=b>10?'크다':'작다';
console.log(b+'는 10보다'+ result2);

function overTen(number){
    const isOver=
    number>10?`${number}:은 10보다 크다`:`${number}:은 10보다 작다`;
    console.log(isOver);
    
}
overTen(13);

const id="ghost";
const pw=1264;
function checkLogin(id,pw) {
    const result=pw==1234?`${id}님 로그인 성공`:`${id}님 로그인 실패`
    console.log(result);
    
}
checkLogin(id,pw);


function isAdult(name, age){
    const result=
   age>=20?`${name}님은 성인`
:`${name}님은 미성년자`+'입니다.'
console.log(result);

}

isAdult('honggildong',10);
//-----------------------------------------------------------------------

//01 - 사각형의 너비를 구하는 함수를 만드세요(가로, 세로 길이 입력받기)
function getRectArea(width,height) {
    const size=
    '사각형의 크기는'+ width*height+'입니다.';
    console.log(size);
    
    
}
getRectArea(3,10);


//02 - 학생의 성적표를 받아서, 평균을 구하는 함수를 만드세요.(국어,영어,수학)
function getAverage(language,english,math) {
    const result=(language+english+math)/3;
    console.log(`당신의 평균점수는 ${result}입니다. (${language}+${english}+${math})/3`);
    
    
}
getAverage(90,100,95);

//03 - 반지름을 입력받아 원의 넓이를 구하는 함수를 만드세요
function getCircleArea(r){
    const area=r*r*3.14;
    console.log(`반지름이 ${r}인 원의 넓이는 ${area} 입니다.`);
}
getCircleArea(4)


//04 - 원래가격과 할인율을 입력하면, 최종 판매가격을 구하는 함수를 만드세요
function calcDiscount(price,discount) {
    const sale=price*(1-(discount/100));
    console.log(`원래가격 ${price}원에서 ${discount}%할인되어, 최종가격은 ${sale}원 입니다.`);  
}
calcDiscount(200000,10);

//05 - 두수를 입력받아, 나눈 나머지값을 구하는 함수를 만드세요
function getReminder(x,y) {
    const remain=x%y;
    console.log(`${x}를 ${y}로 나눈 나머지는 ${remain} 입니다.`);
    
}
getReminder(10,4);

// ---------------------------------------------------------------------------------------------------
//06 - 사각형의 둘레를 구하는 함수를 만드세요
function getRectPerimeter(width,height){
    const perimeter=`가로 ${width}cm, 세로 ${height}cm인 사각형의 둘레는`+ 2*(width+height)+'cm 입니다.'
    console.log(perimeter);
    
}
getRectPerimeter(15,4);

//07 - 시험점수를 입력받아 60점 이상은 합격, 아니면 불합격 여부를 판단하는 함수를 만드세요
function checkPass(score) {
    const result= score<60?'불합격':'합격';
    console.log(`${score} 점은 ${result} 입니다.`);
    
}
checkPass(58);
checkPass(68);

//08 - 이벤트 참여가능여부를 판단하는 함수(20세 이상이며, 서울에 거주하는 사람대상 판별)
function canJoinEvent(age,region) {
    const availability= age>=20 && region=='서울'?'가능':'불가능'
    console.log(`${age}세, ${region} 거주자인 당신은 이벤트 참여가 ${availability} 합니다. `);
    
}
canJoinEvent(24, '서울');
canJoinEvent(12, '대구');

//09 - 영화관람여부를 판단하는 함수를 만들어보세요
function canWatchMovie(age,withParent) {
    const availability=age>=15 && withParent=='o'? '관람 가능':'관람 불가능';
    console.log(`나이 ${age}세, 보호자동반(${withParent})는 ${availability} 입니다.`);
    
}
canWatchMovie(16,'o');
canWatchMovie(16,'x');
canWatchMovie(10,'o');

//10 - 요일을 입력받아, 주말여부를 판별하는 함수를 만들어보세요
function isWeekend(day) {
    const result=day=='토'|| day=='일'?'주말':'평일';
    console.log(`입력하신 ${day}요일은 ${result}입니다.`);
    
}
isWeekend('토');
isWeekend('일');
isWeekend('월');