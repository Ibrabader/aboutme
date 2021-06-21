'use strict';


let TheName = prompt('Can i get to know you first?, whats your name?')

alert ( 'Welcome  '+ TheName + ' hope your ready to get to know me');

let cat = prompt ( 'Do you think that i am a cat person?')
switch (cat.toLowerCase()){
    case 'yes': 
    alert('THIS IS CORRECT !!!')
    break;
  case 'no' : 
  alert(' NO! i do love cats')
  break;
  default: 
alert ( ' okay, to the next question')
}

let travel = prompt ( 'Do you think that i am a traveller?')
switch (travel.toLowerCase()){
    case 'yes': 
    alert('Indeed i am')
    break;
  case 'no' : 
  alert(' Not correct, i am, now you know well ' + TheName )
  break;
  default: 
alert ( ' okay you dont wanna say, to the next question')
}

let gitar = prompt ( 'Do you think that i paly gitar?')
switch (gitar.toLowerCase()){
    case 'yes': 
    alert('Thanks for beliveing in me '+ TheName + ' but i dont' )
    break;
  case 'no' : 
  alert(' Yes i have no idea about how to, but sure i like it' )
  break;
  default: 
alert ( ' okay you dont wanna guess,its NO by theway')
}

let clr = prompt ( 'Is your favourite colour yellow?  ')
switch (clr.toLowerCase()){
    case 'yes': 
    alert(  'wrong, no i hate it' )
    break;
  case 'no' : 
  alert(' Correct answer' )
  break;
  default: 
alert ( ' okay you dont wanna guess,its NO by theway')
}
let uo = prompt ( 'Do you thinks that i support RealMadrid?  ')
switch (uo.toLowerCase()){
    case 'yes': 
    alert(  'HALA MADRID' )
    break;
  case 'no' : 
  alert(' WRONG! i do support real Madrid ' )
  break;
  default: 
alert ( ' okay you dont wanna guess,its NO by theway')
}
alert ('Thank you '+TheName+', hope you enjoyed it here') 
