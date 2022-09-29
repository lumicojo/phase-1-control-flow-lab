function scuberGreetingForFeet(distance) {
  
  if (distance <= 400) {
    return 'This one is on me!'

  } else if (distance > 400 && distance < 2000) {
    return 'That will be twenty bucks.'

  } else if (distance > 2000 && distance < 2500) {
    return 'I will gladly take your thirty bucks.'

  } else  {
     return 'No can do.'
  }

}
   

function ternaryCheckCity(city) {
  const answer = city == "NYC" ? "Ok, sounds good." : "No go."
  return answer // Write your code here!

}

/*function switchOnCharmFromTip(tip){
  switch(tip) {
    case "generous": 
    return "Thank you so much.";
      //break;
    case "notGenerous":
     // break;
      return"Thank you";
    case "anything else": 
      break;
      default :
      return "Bye."
     
  }  // Write your code here!
*/  


function switchOnCharmFromTip(tip){
  if (tip ='generos') 
    console.log("Thank you so much.")

  if (tip = 'not generos')
    console.log("Thank you")

     else ("anything else")
}    