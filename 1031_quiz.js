const numbers=[149,180,192,170];
const height=167;

function tallerUser() {
    let count=0;
    //1. for문
    // for (let i = 0; i < numbers.length; i++) {
    //     if(numbers[i]>height){
    //         count+=1;
    //     }
    // }

    //2. for of문
    // for(let num of numbers){
    //     if(num>height) count+=1;
    // }

    //3. forEach
    numbers.forEach(num=>{
        if(num>height){
            count+=1;
        }
    })
    return `ghost보다 키가 큰 사람은 총 ${count}명 입니다.`;
    
    
}
    console.log(tallerUser());
