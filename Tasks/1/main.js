//1

const city = 'Ivanovo';
    console.log(city);

const сountry = 'Russia';
    console.log(сountry);

let population = '408952';
    console.log(population);

let stadium = true;
if (stadium = true) {
    console.log('Yes');
}

//2

const width = 70;
const height = 40;
const s = (width)*(height);
    console.log('S='+s+'cm');

//3

const time = 2;
const speedOfFirst = 95;
const speedOfSecond = 114;
const speed = (speedOfFirst)+(speedOfSecond);
const distance = ((speed)*2);
    console.log(distance);

//4

const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber<20) {
    console.log('randomNumber меньше 20');
} else if (randomNumber>50) {
    console.log('randomNumber больше 50');
} else {
    console.log('randomNumber больше 20, и меньше 50');
}

//5

switch(randomNumber) {
    case 'randomNumber<20' :
        console.log('randomNumber меньше 20');
        break;
    case 'randomNumber>50' :
        console.log('randomNumber больше 50');
        break;   
    default :
        console.log('randomNumber больше 20, и меньше 50');
}
    


