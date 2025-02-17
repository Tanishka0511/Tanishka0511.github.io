const obj={
    "name":"Khushi",
    "city":"baraut"
};
console.log(obj)

// repeated key will override the old value

//----------------------------------
// how to acess the value
const username=obj.name;
console.log(username)

//-----------------------------------
//add key value pair
obj.country="India";
console.log(obj);

//------------------------------------------------------------
//when you try to acces the key which is not present
console.log(obj.address);  

//-----------------------------------
//access a value dynamically
const key ="city"
console.log(obj[key]);

//---------------------
//update a value
obj.city="ghaziabad"
console.log(obj);   //check console 

//---------------------
//delete
delete obj.country;
console.log(obj);



//primitive->immutable(address change)
//non primitive ->mutable(same address)  