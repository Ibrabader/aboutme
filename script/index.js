'use strict';
let TheName = prompt('Can i get to know you first?, whats your name?');
alert ( 'Welcome  '+ TheName + ' hope your ready to get to know me');
let score =0 ;
function catperson(){
let cat = prompt ( 'Do you think that i am a cat person?')
switch (cat.toLowerCase()){
    case 'yes':
        case 'y': 
        score++; 
    alert('THIS IS CORRECT !!!')
    break;
  case 'no' : 
  case 'n':
  alert(' NO! i do love cats')
  break;
  default: 
alert ( ' okay, to the next question')
}
}
function travel(){
let travel = prompt ( 'Do you think that i am a traveller?')
switch (travel.toLowerCase()){
    case 'yes': 
    case 'y': 
    score++; 
    alert('Indeed i am')
    break;
  case 'no' : 
  case 'n':
  alert(' Not correct, i am, now you know well ' + TheName )
  break;
  default: 
alert ( ' okay you dont wanna say, to the next question')
}
}
function gitar(){
let gitar = prompt ( 'Do you think that i paly gitar?')
switch (gitar.toLowerCase()){
    case 'yes': 
    case 'y': 
    alert('Thanks for beliveing in me '+ TheName + ' but i dont' )
    break;
  case 'no' : 
  case 'n':
    score++; 
  alert(' Yes i have no idea about how to, but sure i like it' )
  break;
  default: 
alert ( ' okay you dont wanna guess,its NO by theway')
}
}
function color(){
let clr = prompt ( 'Is your favourite colour yellow?  ')
switch (clr.toLowerCase()){
    case 'yes':
        case 'y': 
    alert(  'wrong, no i hate it' )
    break;
  case 'no' : 
  case 'n':
    score++; 
  alert(' Correct answer' )
  break;
  default: 
alert ( ' okay you dont wanna guess,its NO by theway')
}
}
function RealMadrid(){
let uo = prompt ( 'Do you thinks that i support RealMadrid?  ')
switch (uo.toLowerCase()){
    case 'yes': 
    case 'y': 
    score++; 
    alert(  'HALA MADRID' )
    break;
  case 'no' : 
  case 'n':
  alert(' WRONG! i do support real Madrid ' )
  break;
  default: 
alert ( ' okay you dont wanna guess,its NO by theway')
}
}
let bro;
let counter = 0; 
while ( counter < 4){
   bro = prompt ( ' How many seblings do you think i have ? ');
    if ( bro == 4 ) { 
        alert ( ' CORRECT ! ');
        score++;
        counter+10;
        break;
        }
        else if  (bro >= 8 ) {
        alert ( ' too high');
        }
        else if (bro <= 2 ){ 
        alert ( ' too low');}
       else {
        alert ( ' Try Again');
    }
    counter++;
       }
      if (counter== 4){
        alert (' You have finished all of your tries , the correct answer is 4 ');
        }
let maxtries = 6;
let fruit = ['apple',' banana'];
for ( let i=0;i<maxtries;i++){
let useranswer = prompt ( ' What is my favourite fruit ? ').toLowerCase();
    if (useranswer == fruit[1].toLowerCase() ) { 
    alert ( ' CORRECT ! ');
    score++; 
    break;
  }else if (useranswer == fruit[0].toLowerCase() ) { 
        alert ( ' CORRECT ! ')
        score++; 
        break;}
    else if(i<5){
    alert ( ' Try Again')
    continue;
}
else {
        alert (' You have finished all of your tries , the correct answers are  '+ fruit)
        break;
}
}
catperson();
travel();
gitar();
color();
RealMadrid();
alert ('Thank you '+TheName+', hope you enjoyed it here, your score is' + score + ' out of 7')