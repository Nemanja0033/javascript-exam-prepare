function myFirstFunction (a,b){
    return a * b;
}

function sayHello(name){    //function name (arguments)
    return alert('Hello' + ' ' + name); //program logic
}

//sayHello("Nemanja") //caling a function


function emptyFunction(){
    console.log('im an empty function')
}


function withManyParameters(...arguments){
    console.log(arguments)
}


const arrowFunction = () => { // arrow function 
    alert('this is a arrow function')
}

function calculator() {
    let num1 = parseFloat(prompt('Enter a number'));
    let num2 = parseFloat(prompt('Enter a number'));
    let operator = prompt('+ / * -');
    let result;

    if(operator == '+'){
        result = num1 + num2
    }
    else if(operator == '-'){
        result = num1 - num2
    }
    else if(operator == '/'){
        result = num1 / num2
    }
    else if(operator == '*'){
        result = num1 * num2
    }
    else{
        result = alert('invalid operator')
    }

    alert(result)
}