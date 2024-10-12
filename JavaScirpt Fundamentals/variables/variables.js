  // 1. DECLARING AND INITIALIZING VARIABLES


       // var x; declaration

        //x = 5; initialization

        //var x = 5; declared and initialized variable

        //x = 10;

        //console.log(x);

        //varaibles can handle value change after initialization

        //let y = 5 

        //const z = 10

        // 2. VARIABLES NAME RULES


        //var myVariable = 10; valid named variable with camelCase method

        //var my_variable = 10;  also valid name used in javascirpt early days

       //var $myvariable = 10 valid name

       //var myVariable2 = 10  valid name (cannot start wiht number)

        // variables indetifier can have word, number , $, _

        //const MYVARIABLE = 5;  const are used to have an upperCase names

        //JavaSciprt is case-sensitive programming language 

        //exmp

       // console.log(myVariable);
       //console.log(MYVARIABLE);

       // 3. DEFAULT VALUE OF VARIABLE

      // let x; 
      //console.log(x); //undefined

      // 4. SCOPE

      // var - only in function
      // let - any block
      // const any block

      //let x = 'global variable'

     // {
        //let y = 'block variable'
     // }

     // var x = "*global variable*";
 
        //{
       // var y = "*block variable*";
        //}
        
       // document.write(x);
       // document.write(y)

       /*var x = "*global variable*";
 
        function myFunction() {
        var y = "*function variable*";
        }
        
        document.write(x);
        document.write(y);*/

        // 5. HOISTING 

        // Raise variables to the beginning of the document

        /*console.log(x)
        var x;*/

        /*console.log(x); //undefined
        var x = "variable value";*/  //hoisting can only raise a varaible declaration but not a value

        /*let x = 'outer scope';
        {
        console.log(x);  // but let variables can hoist a value 
        }*/