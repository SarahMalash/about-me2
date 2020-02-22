'use strict';
var score = 0
var yourName = prompt("please enter your name:");
alert(`HELLO HELLO ${yourName} LET US PLAY A LITTLE GISSING NAME`);

function q1() {
    var question1 = prompt("do you think i am a hard worker?")

    switch (question1.toLowerCase()) {
        case 'yes':
        case 'y':
            alert("YOU ARE RIGHT!!!");
           
            score++

            break;
        case 'no':
        case 'n':
            alert("SORYY, YOU ARE WRONG MY FRIEND IM A ROCK!!!! ");
            
            break;
        default:
            alert("Please Try Again, it is a yes or no qusetion ");
            
            break;
    }
}
q1();


function q2() {
    var question2 = prompt("do you think i love food?");

    switch (question2.toLowerCase()) {
        case 'yes':
        case 'y':
            alert("YOU ARE RIGHT!!!");
            
            score++
            break;
        case 'no':
        case 'n':
            alert("SORYY, YOU ARE WRONG MY FRIEND SO VERY WRONG!!!!! ");
            
            break;
        default:
            alert("Please Try Again, it is a yes or no qusetion ");
           
            break;
    }
}
q2();

function q3() {
    var question3 = prompt("do you think i am a family person?");

    switch (question3.toLowerCase()) {
        case 'yes':
        case 'y':
            alert("YOU ARE RIGHT!!!");
           
            score++
            break;
        case 'no':
        case 'n':
            alert("SORYY YOU ARE WRONG MY FRIEND I LOVE MY FAMILY!! ");
            
            break;
        default:
            alert("Please Try Again, it is a yes or no qusetion ");
           
            break;
    }
}
q3();
function q4() {
    var question4 = prompt("do you think i am a pet owner?");

    switch (question4.toLowerCase()) {
        case 'yes':
        case 'y':
            alert("SORYY YOU ARE WRONG MY FRIEND ALTHOGH I LOVE ANIMALS!! ");
            

            break;
        case 'no':
        case 'n':

            alert("YOU ARE RIGHT!!!");
           
            score++
            break;
        default:
            alert("Please Try Again, it is a yes or no qusetion ");
           
            break;
    }
}
q4();

function q5() {
    var question5 = prompt("do you think i can drive?");

    switch (question5.toLowerCase()) {
        case 'yes':
        case 'y':
            alert("YOU ARE RIGHT!!!");
            
            score++
            break;
        case 'no':
        case 'n':
            alert("SORYY YOU ARE WRONG MY FRIEND IM A GREAT DRIVER!! ");
            
            break;
        default:
            alert("Please Try Again, it is a yes or no qusetion ");
            
            break;
    }
}
q5();

function q6() {
    for (var i = 0; i <= 4; i++) {
        var question6 = prompt("can you guess my age?");
        if (i == 4) {

            alert("sorry you are have only 4 attempts, the correct answer is 25!");
            break;
        }

        if (question6 == 25) {
            alert("THAT IS CORRECT!! WHAT ARE YOU A spiritual mediator!");
          
            score++
            break;
        }
        else if (question6 < 25) {

            alert("you are too low but thank you thoug!! try again");
            
        }
        else if (question6 > 25) {
            alert("you are too high come on i am not that old!!");
            

        }

    }
}
q6();

function q7() {
    var carsArray = ["audi", "bmw", "kia", "tesla", "bently", "ford"];
    for (var car = 0; car <= 6; car++) {
        if (car == 6) {
            alert("you are out of attempts!! the right answers are: audi, bmw, kia, bently and ford ");
            break;
        }
        
        var question7 = prompt("can you guess what is my draem car? Ex audi");
        question7 = question7.toLocaleLowerCase();
         for(var car1 =0 ; car1<= carsArray.length; car1++ ){
        if (question7 === carsArray[car1]) {
            alert("you are right this is one of my dream cars");
            
            score++
            break;

        }
     
    }
    if (question7 === carsArray[car1]) {
        break;
    }
    }
}
q7();
alert(`THANK YOU ${yourName} I HOPE YOU ENJOYED OUR GAME AND YOUR SCORE IS ${score} OUT OF 7`);


