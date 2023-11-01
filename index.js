
// Could not figure out how to add a function  to the loop, bigger picture is unclear for me. 


//create a function that will keep the object updated

const UserInput = prompt(`Enter flavors:`);       // prompt a user to enter a list of comma-separated froyo flavors

const flavors = UserInput.split(',');             // store the result in an array named flavors 

const orderHistory = {};                          //create a object to keep count of how many orders there are of each flavor
 
for(i = 0; i <flavors.length; i++){               // create a loop to go through the array and add to object 
  const flavor = flavors[i];
  if(orderHistory[flavor]) {
    orderHistory[flavor] += 1;
  }else {
    orderHistory[flavor] = 1;
  };
};
return;



