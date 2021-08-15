//1:

for(let i=10; i<=50; i=i+2) {
    console.log(i);
}

//2:

const person = {
    firstname : 'Ivan',
    secondname : 'Khishko',
    years : 21,
    pet : false
};
console.log(person);

//3:

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
];
const order = [3, 7, 0, 8, 11, 5, 9, 6, 4, 1, 12, 2, 10];
const strings = order.reduce((strings, number) => [...strings, array[number]], []);
const result = strings.join(' ');
console.log(result);

//4:

var fullName = function (firstName, lastName) {
    return `${firstName} ${lastName}`;
};
console.log(fullName("Ivan","Khishko"));

//5:

var num = 21;
while(num<67){
  num++;
  if(num%2) console.log(num);
}