
var question1 = prompt('Did Heidi grow up in Alaska?');
var question1 = question1.toLowerCase();
console.log('Question 1 response: ' + question1);
if (question1 == 'no') {
  alert('You have chosen wisely.');
} else {
  alert('She wishes.');
}

var question2 = prompt('Did Heidi vote for Bush?');
var question2 = question2.toLowerCase();
console.log('Question 2 response: ' + question2);
if (question2 == 'no') {
  alert('You\'re smarter than the average Bush.');
} else {
  alert('Ouch!');
}

var question3 = prompt('Does Heidi have a rabbit?');
var question3 = question3.toLowerCase();
console.log('Question 3 response: ' + question3);
if (question3.toLowerCase() == 'no') {
  alert('You\'re right, she had one named Randall.');
} else {
  alert('Not right now... but it\'s only a matter of time.');
}

/*
alert('Your answer to Question 1 was ' + question1 + '.');
alert('Your answer to Question 2 was ' + question2 + '.');
alert('Your answer to Question 3 was ' + question3 + '.');
*/
