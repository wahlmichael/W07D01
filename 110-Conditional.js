console.log('110-Conditional.js working')

function sizeChecker(num1, num2){
    if(num1 > num2){
        return 'The first number was bigger!'
    }else if(num2 > num1){
        return 'The second numer was bigger!'
    }else{
        return 'The numbers are the same!'
    }
}

console.log(sizeChecker(6, 2));
console.log(sizeChecker(-2, 6));
console.log(sizeChecker(6, 6));