

var question = ["Was Heidi Born in Alaska", "Did Heidi vote for Bush?", "Does Heidi have a rabbit?"];
var answer = ['yes', 'y', 'no', 'n']


var answersCorrect = 0;

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");

var imageOne = document.getElementById("moose");
var imageTwo = document.getElementById("bush");
var imageThree = document.getElementById("rabbit");


function ques1() {
  var question1 = prompt(question[0]);
  var question1 = question1.toLowerCase();
  console.log('Question 1 response: ' + question1);
  if (question1 === answer[2] || question1 === answer[3]) {
    imageOne.classList.remove('hidden');
    one.className = 'correct';
    one.innerHTML = 'You have chosen wisely.';
    answersCorrect++;
    console.log(answersCorrect);
  } else {
    one.className = 'incorrect';
    one.innerHTML = 'She wishes.';
  }  
}
 ques1();

function ques2() {
  var question2 = prompt(question[1]);
  var question2 = question2.toLowerCase();
  console.log('Question 2 response: ' + question2);
  if (question2 === answer[2] || question2 === answer[3]) {
    imageTwo.classList.remove('hidden');
    two.className = 'correct';
    two.innerHTML = 'You\'re smarter than the average Bush.';
    answersCorrect++;
    console.log(answersCorrect);
  } else {
    two.className = 'incorrect';
    two.innerHTML = 'Ouch!';
  }  
}

window.setTimeout(ques2, 1000);

function ques3() {
  var question3 = prompt(question[2]);
  var question3 = question3.toLowerCase();
  console.log('Question 3 response: ' + question3);
  if (question3 === answer[2] || question3 === answer[3]) {
    imageThree.classList.remove('hidden');
    three.className = 'correct';
    three.innerHTML = 'You\'re right, she had one named Randall.';
    answersCorrect++;
    console.log(answersCorrect);
  } else {
    three.className = 'incorrect';
    three.innerHTML = 'Not right now... but it\'s only a matter of time.';
    }  
  }

window.setTimeout(ques3, 1000);

function summary()  {
  alert('You got ' + answersCorrect + ' out of 3 correct. Thanks for playing!');
}

window.setTimeout(summary, 2000);