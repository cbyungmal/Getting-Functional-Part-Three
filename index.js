//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE




/*
1. Return all friends of a given customers name.
When returning the friends of the customer it
should be a string and NOT the friends array. 
*/

function friendsOfCustomer(name){
  //CODE BELOW HERE
for (var i = 0; i <= customers.length - 1; i++){
  if(name === customers[i].name){ 
    console.log(true);
  } else {
    console.log(false);
  }
}
  //CODE ABOVE HERE
};
console.log(friendsOfCustomers('Shelly Walton'))




/*
2. Return the phone number and address of a 
given customer when thier name is entered into the 
function.
*/

function contactInfo(name){
  //CODE BELOW HERE
for(var
  if(){
    
  }
  //CODE ABOVE HERE
}
console.log(contactInfo('Serena Odonell'))