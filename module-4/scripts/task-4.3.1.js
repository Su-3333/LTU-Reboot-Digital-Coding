// (Step 1)The Problem: 
/* 

1. Write the program that prints the numbers from 1 to 100 [x]
2. For numbers which are multiples of both three and five print 'fizzbuzz' instead of the number
3. For multiples of three print 'fizz' instead of the number
4. For multiples of five print 'buzz' instead of the number
5. For numbers that are not multiples of three, or five, or both, print the number as is.

MOD = Modulus % (divisable by # leaving a remainder)
*/

//(Step 2)
// FOR LOOP
// set number to 1
// break when number reaches 100
// increment number by 1

// IF number MOD 3 === 0 and number MOD 5 === 0
    // print 'fizzbuzz'

// ELSEIF number MOD 3 === 0
    // print 'fizz'
// ELSEIF number MOD 5 === 0
    // print 'buzz'

// ELSE 
    // print number as is

function fizzBuzz(){

    for (let number = 1; number<=100; number++ ){

        if (number % 3 === 0 && number % 5 === 0){
            console.log('fizzbuzz');

        }else if( number % 3 === 0){
            console.log('fizz');
        }else if(number % 5 === 0){
            console.log ('buzz');
        }else{
            console.log (number);
        }
    }
}

fizzBuzz();


