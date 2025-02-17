// ************1.FUNCTION DECLARATION*****************
print("Tanni")
function print(a){
    console.log("Hello",a);
    
}

function print(a){
    console.log("Hi",a);
    
}
print("Khushi")

//problem in above function->  we can call function before declaration and two function with same name and parameter (second function override first function)




//***********2.FUNCTION ASSIGNMENT**************  -->solve above problem

const view =function printText(a){
    console.log("hii",a);
    
}
view("khushi")
// printText("tanni")   //not defined



//***********3.anonymous FUNCTION ASSIGNMENT**************

const viiew =function (a){
    console.log("hii",a);
    
}
viiew("khushi")



//***********4.arrow FUNCTION ASSIGNMENT************** -->ES6 syntax
const  view2=(a)=>{
    console.log("hii",a);
}

view2("khushi")



// SOME EXAMPLES:

// 1. function to calculate sum and return its mod 10 value using type 1,2,3,4

// 1.
 function sum(a,b){
    return ((a+b)%10);
 }
console.log(sum(9,10));


//2.
const sumMod =function sum1(a,b){
    return((a+b))%10;
}
console.log(sumMod(19,20));

//3.
const sumMod1 =function (a,b){
    return((a+b))%10;
}
console.log(sumMod1(19,20));

//4.
const sumMod2 =(a,b)=>{
    return((a+b))%10;
}
console.log(sumMod2(19,20));

//4. second way    -->remove braces and return
const sumMod3 =(a,b)=>((a+b))%10;
console.log(sumMod3(19,20));










