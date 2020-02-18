'use strict';
var yourName = prompt("please enter your name:");
alert(`HELLO HELLO ${yourName} LET US PLAY A LITTLE GISSING NAME`);

var question1 = prompt("do you think i am a hard worker?")

switch (question1.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("YOU ARE RIGHT!!!");
        console.log("do you think i am a hard worker?", question1);

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
alert(`THANK YOU ${yourName} I HOPE YOU ENJOYED OUR GAME`);

