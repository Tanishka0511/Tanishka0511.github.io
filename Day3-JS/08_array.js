const a=["fruits","hello",24];
console.log(a);
console.log(a.length);

//add in array
a.push("world");
console.log(a);

//how to access
console.log(a[3]);

//update
a[0]="hii"
console.log(a)
//incorrect way to update or add
a[7]="wrong"
console.log(a);    //adding holes in array

//incorrect syntax for deleletion
delete a[0];
console.log(a)