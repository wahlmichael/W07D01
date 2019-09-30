console.log('150-LoopsArrayOfObject working');

let total = 0;

function experienceAdder(array){
    for(let i = 0; i < array.length; i++){
        value = array[i].yearsOfExperience;
        total += value;
    }
    return total;
}

console.log(experienceAdder([
    { name: "Tony", yearsOfExperience: 10 }, 
    { name: "Carla", yearsOfExperience: 4 },
    { name: "Kris", yearsOfExperience: 14 }
]));