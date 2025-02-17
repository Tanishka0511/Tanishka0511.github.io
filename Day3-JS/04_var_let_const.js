const temp=()=>{
    if(true){
        var username='raj';
    }
    console.log(username);

};
temp();
// console.log(username);   //error -->(var have function scope)




const sumMod=(a,b)=>{
    const ans=(a+b)%10;
    const printPreety=(txt)=>{
        console.log("----",txt,"----");

    }
    printPreety(ans);
    console.log("sum done")
}
sumMod(10,34);
console.log("end...")
