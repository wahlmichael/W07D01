console.log('130-LoopsArraysAndConcatenation.js working')

function arrayConcatenator(array, index){
    let output = '';
    for(let i = index; i < array.length; i++){
        let temp = array[i] + ' '
        output += temp;
    }
    return output;
}

console.log(arrayConcatenator(['prime', 'nalgene', 'apple', 'pen', 'shirt', 'envelope'], 2));