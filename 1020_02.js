const a=12;
const b=5;


const sum=a+b;
const iseven=!(a%2);
console.log(iseven);

function calcSum(x,y){
    const result=x+y;
    console.log(result);
    
}

calcSum(3,5)
calcSum(a,b)

createIcecream('choco','almond');
createIcecream('vanilla','peanut');

function createIcecream(topping1,topping2) {
    const icecream=topping1+' '+topping2+' icecream';
    console.log(icecream);
    
}