
var x = 10;

var z = 10;

var sum = x + z;

var subtract = x - z;

var multipy = x * z;

var divide = x / z;

var moduo = x % z;

x++;
x--;



var check = x == z;
check = x === z;

check = x != z;

var y = 10 > 5

y = 20 < 10

y = 3 < '13'
console.log(y)

// teranary operator 

function cheeckAge(){
    let age = prompt('enter age!');
    var mesage = (age < 18) ? 'you cant enter!' : 'welcome!';
    alert(mesage);
}

let txt1 = 'Java';
let txt2 = 'Script';

console.log(txt1 + txt2) //concatenation