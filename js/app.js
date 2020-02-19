'use strict';
var score = 0
var yourName = prompt("please enter your name:");
alert(`HELLO HELLO ${yourName} LET US PLAY A LITTLE GISSING NAME`);

var question1 = prompt("do you think i am a hard worker?")

switch (question1.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("YOU ARE RIGHT!!!");
        console.log("do you think i am a hard worker?", question1);
        score++

        break;
    case 'no':
    case 'n':
        alert("SORYY, YOU ARE WRONG MY FRIEND IM A ROCK!!!! ");
        console.log("do you think i am a hard worker?", question1);
        break;
    default:
        alert("Please Try Again, it is a yes or no qusetion ");
        console.log("do you think i am a hard worker?", question1);
        break;
}


var question2 = prompt("do you think i love food?");

switch (question2.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("YOU ARE RIGHT!!!");
        console.log("do you think i love food?", question2);
        score++
        break;
    case 'no':
    case 'n':
        alert("SORYY, YOU ARE WRONG MY FRIEND SO VERY WRONG!!!!! ");
        console.log("do you think i love food?", question2);
        break;
    default:
        alert("Please Try Again, it is a yes or no qusetion ");
        console.log("do you think i love food?", question2);
        break;
}
var question3 = prompt("do you think i am a family person?");

switch (question3.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("YOU ARE RIGHT!!!");
        console.log("do you think i am a family person?", question3);
        score++
        break;
    case 'no':
    case 'n':
        alert("SORYY YOU ARE WRONG MY FRIEND I LOVE MY FAMILY!! ");
        console.log("do you think i am a family person?", question3);
        break;
    default:
        alert("Please Try Again, it is a yes or no qusetion ");
        console.log("do you think i am a family person?", question3);
        break;
}
var question4 = prompt("do you think i am a pet owner?");

switch (question4.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("SORYY YOU ARE WRONG MY FRIEND ALTHOGH I LOVE ANIMALS!! ");
        console.log("do you think i am a pet owner?", question4);

        break;
    case 'no':
    case 'n':

        alert("YOU ARE RIGHT!!!");
        console.log("do you think i am a pet owner?", question4);
        score++
        break;
    default:
        alert("Please Try Again, it is a yes or no qusetion ");
        console.log("do you think i am a pet owner?", question4);
        break;
}
var question5 = prompt("do you think i can drive?");

switch (question5.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("YOU ARE RIGHT!!!");
        console.log("do you think i can drive?", question5);
        score++
        break;
    case 'no':
    case 'n':
        alert("SORYY YOU ARE WRONG MY FRIEND IM A GREAT DRIVER!! ");
        console.log("do you think i can drive?", question5);
        break;
    default:
        alert("Please Try Again, it is a yes or no qusetion ");
        console.log("do you think i can drive?", question5);
        break;
}


for (var i = 0; i <= 4; i++) {
    var question6 = prompt("can you guess my age?");
    if (i == 4) {

        alert("sorry you are have only 4 attempts, the correct answer is 25!");
        break;
    }

    if (question6 === 25) {
        alert("THAT IS CORRECT!! WHAT ARE YOU A spiritual mediator!");
        console.log("can you guess my age?", question6)
        score++
        break;
    }
    else if (question6 < 25) {

        alert("you are too low but thank you thoug!! try again");
        console.log("can you guess my age?", question6)
    }
    else if (question6 > 25) {
        alert("you are too high come on i am not that old!!");
        console.log("can you guess my age?", question6);

    }

}


var carsArray = ["audi", "bmw", "kia", "tesla", "bently", "ford"];
for (var car = 0; car <= 6; car++) {
    if (car == 6) {
        alert("you are out of attempts!! the right answers are: audi, bmw, kia, bently and ford ");
        break;
    }
    //console.log(countryArray[car]);
    var question7 = prompt("can you guess what is my draem car? Ex audi");
     question7 = question7.toLocaleLowerCase();
    if (question7 === carsArray[car]) {
        alert("you are right this is one of my dream cars");
        console.log("can you guess what is my draem car?", question7);
        score++
        break;

    }
}
alert(`THANK YOU ${yourName} I HOPE YOU ENJOYED OUR GAME AND YOUR SCORE IS ${score} OUT OF 7`);


