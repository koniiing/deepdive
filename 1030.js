// Morning Mission - 나머지수 구하기

function getRest(num1, num2) {
    let result =num1%num2;
    return result;
}

//console.log(getRest(3,2))
// 3에서 2를 나눈 나머지값 구하기
//const numbers=[1,2,3,4,5,6,7,8,9,10]

// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         //console.log(numbers[i]);
        
//     }
// }



function getSomeEven(number) {
        let sum=0;

    for(let i=1;i<=number;i++){
        if(i%2==0){
            sum = sum+i;
        }
    }
    return sum;
}
// console.log(getSomeEven(10));
// console.log(getSomeEven(7));
//console.log(getSomeEven(20));


//퀴즈 1 ) 두 수의 차이 구하기
function getDiff(num1,num2) {
    const diff=Math.abs(num1-num2);
    return diff
    
}
console.log(getDiff(10,5));
console.log(getDiff(3,10));

//퀴즈 2 ) 만 나이 구하기
function getAge(year) {
    const age=new Date().getFullYear()-year
    return age;
}
console.log(getAge(2002));

//퀴즈 3 ) 몫 구하기
function getQuotient(x,y){
    if(x<y){
        let z=x;
        x=y;
        y=z;
    }
    const result=Math.floor(x/y);
    return result
}
console.log(getQuotient(15,7));
console.log(getQuotient(7,15));


//퀴즈 4 ) 배열의 평균값 구하기
const numbers=[3,5,10,2,6,7,9]
// function getAverage(array) {
//     const sum=array.reduce((acc,cur)=>acc+cur,0);
//     return sum/array.length;
// }

function getAverage(array) {
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum/array.length;
}
console.log(getAverage(numbers));

