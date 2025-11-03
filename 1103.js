//공배수 구하기
function getNum(num,x) {
    if(num%x==0){
        console.log(`${num}는 ${x}의 공배수`);
        
    }
    else{
        console.log(`${num}는 ${x}의 공배수아님`);
        
    }
}
getNum(60,3);
getNum(60,7);