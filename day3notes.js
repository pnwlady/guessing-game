
/*var john = 3; //declared and assigned

or //declaring 3 different ways

var john;
var paul;
var ringo;
var george;

or

var john, paul, ringo, george;

or

var john,
    paul,
    ringo,
    george;

and //assigning for all 3 types

john = 'Yoko'; //string
paul = 3;  //number
ringo = null; //null
george = true;  //boolean

//How to incorporate a perethesis
var scott = 'Scott\'s favorite saying is "woo"';
console.log(scott);

$staple //illegal
_staple //illegal
var 2staples = 12; //illegal because starts w/ number
var staples2 = 2; //legal

var stapler-2 = 2; //illegal '-' will be seen as a minus symbol
var var = true;  //illegal cannot use key words

keywords/reserve words:
break, case, class, catch, const, continue, debugger, default, delete,
do, else, export, extends, finally, for, function, if, import, in, instanceof,
let, new, return, super, switch, this, throw, try, typeof, var, void, while,
yield, null, true, false, enum, await, implements, static, private, package,
protected, interface, public,
abstract, float, short, boolean, byte, goto, synchronize, char, int,
long, double, transient, volatile, native, final,

arrays

var beatles = [ john, paul, george, ringo ];
var theBeatles = [ 'john', 'paul', 'george', 'ringo' ];

var seattleTeams = ['Mariners', 'Seahawks', "Sounder", 'Storm'];

seattleTeams.push('Reign');
5
console.log(seattleTeams);

seattleTeams[0]; //'Mariners'
seattleTeams[1]; //'Seahawks'
seattleTeams.push('Huskies');
6
seattleTeams[5]; //'Huskies'

Operators
assignment =
arithmetic + 0 * / % (% modulus; modulo; remainder)
string 'Hi' + 'Heidi';
comparison < >
logical && || !
(5 > 3) && (2 < 4); //evaluates to true

=== strict equals //cares about variable type
== loose equals //doesn't care about type, if its a similiar value it's good
<= lesser than or equal to
>= greater than or equal to
=> //means something completely different
! not
!= not equal to
&& and
|| or

concantenation
var firstName = 'Heidi';
var lastName = 'Laursen';
var fullName = firstName + lastName;
console.log(fullName);

if...else statements //if can stand on it's own (no 'else')

if (condition = true) {
  do this code;
  and this coode;//code block/logical expression
}

or you can add an else

if (condition = true) {
  do this code;
  and this code; //code block/logical expression
} else {
  do this code; //code block/logical expression
}

*/
var question1 = prompt('Was it easy to get to CF today?');

if (question1.toUpperCase() === 'YES') {
  alert('Lucky you');
} else {
  alert('Sucks to be you');
}

console.log('Question 1 response: ' + question1.toUpperCase());


