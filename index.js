

//create a object to keep count of how many orders there are of each flavor
// create a loop to go through the array and add to object 
//create a function that will keep the object updated

const UserInput = prompt(`Enter flavors:`);       // prompt a user to enter a list of comma-separated froyo flavors

const flavors = UserInput.split(',');             // store the result in an array named flavors 

const orderHistory = {
  flavors : []
};


