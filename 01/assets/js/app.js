const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a)
console.log(typeof b)

const add = Number(a)+b
const minus = a-b
const multiply = a*b
const divide = a/b

console.log(add, minus, multiply.toFixed(2),divide,)

const arr  = [add, minus, multiply, divide]


arr.forEach(function(num){
if ( arr < 20){
    console.log(num + ' jest wieksze od 20')
} else {
    console.log( num + ' nie jest wieksze od 20')
}
})