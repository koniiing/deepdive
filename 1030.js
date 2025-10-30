// Morning Mission - 나머지수 구하기

function getRest(num1, num2) {
    let result =num1%num2;
    return result;
}

//console.log(getRest(3,2))
// 3에서 2를 나눈 나머지값 구하기
const numbers=[1,2,3,4,5,6,7,8,9,10]

for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        //console.log(numbers[i]);
        
    }
}



function getSomeEven(number) {
        let sum=0;

    for(let i=1;i<=number;i++){
        if(i%2==0){
            sum = sum+i;
        }
    }
    return sum;
}
console.log(getSomeEven(10));
console.log(getSomeEven(7));
//console.log(getSomeEven(20));
