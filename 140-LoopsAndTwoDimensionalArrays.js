console.log('140-LoopsAndTwoDimensionalArrays.js working');

let sum = 0;

function arraySumFinder(array){
    for(let i = 0; i < array.length; i++){
        for(let n = 0; n < array[i].length; n++){
        let value = array[i][n];
        sum += value;
        }
    }
    return sum;
}

console.log(arraySumFinder([[1,2,3], [4,5], [6,7,8]]));