function Coupone(name) {
    var code = (Math.random() * 1572).toFixed(0); 
    this.name = name;
    this.getCode = function() {
       if(name){
        return name + ' ' + 'your code is' + ' ' + code;
       }
       else{
        return 'Please enter a name'
       }
    };
}

function displayCoupone() {
    var inputElement = document.getElementById('input');
    var name1 = inputElement.value; 
    var coupone1 = new Coupone(name1); 

    var outputElement = document.getElementById('output'); 
    outputElement.innerHTML = coupone1.getCode(); 
}



// JavaScript concepts that are used in this project: DOM, Objects, Closure, Functions