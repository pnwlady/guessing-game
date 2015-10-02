

var question = ["Was Heidi Born in Alaska", "Did Heidi vote for Bush?", "Does Heidi have a rabbit?"];
var answer = ['yes', 'y', 'no', 'n']


var answersCorrect = 0;

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");



function ques1() {
  var question1 = prompt(question[0]);
  var question1 = question1.toLowerCase();
  console.log('Question 1 response: ' + question1);
  if (question1 === answer[2] || question1 === answer[3]) {
    one.innerHTML = 'You have chosen wisely.';
    answersCorrect++;
    console.log(answersCorrect);
  } else {
    one.innerHTML = 'She wishes.';
  }  
}
 ques1();

function ques2() {
  var question2 = prompt(question[1]);
  var question2 = question2.toLowerCase();
  console.log('Question 2 response: ' + question2);
  if (question2 === answer[2] || question2 === answer[3]) {
    two.innerHTML = 'You\'re smarter than the average Bush.';
    answersCorrect++;
    console.log(answersCorrect);
  } else {
    two.innerHTML = 'Ouch!';
  }  
}

ques2();

function ques3() {
  var question3 = prompt(question[2]);
  var question3 = question3.toLowerCase();
  console.log('Question 3 response: ' + question3);
  if (question3 === answer[2] || question3 === answer[3]) {
    three.innerHTML = 'You\'re right, she had one named Randall.';
    answersCorrect++;
    console.log(answersCorrect);
  } else {
    three.innerHTML = 'Not right now... but it\'s only a matter of time.';
    }  
  }

ques3();

alert('You got ' + answersCorrect + ' out of 3 correct. Thanks for playing!')