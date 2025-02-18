//forEach vs Map

const arr=[1,2,3,4,5];
// const newArr=[]



// --------------
// forEach
//---------------------
// arr.forEach((a)=>{
//     newArr.push(a*2);
// })

//-------------------------
//map
//----------------
const newArr=arr.map((a)=>{
    return a*2;
})
// console.log(newArr)

//REDUCE FUNCTION ->acc,ele,id,arr

//with default value 0
arr.reduce((a,e,i,arr)=>{
    console.log(a,e,i,arr);
},0)

//without default value
arr.reduce((a,e,i,arr)=>{
    console.log(a,e,i,arr);
})


//#use case: 1. sum 
const ans=arr.reduce((acc,ele)=>{
    return acc+ele;
},0)
console.log(ans);

// 
const ans1=arr.reduce((acc,ele)=>{
    return acc*ele;
})
console.log(ans1);


// map with reduce
const newArr1=arr.reduce((acc,ele)=>{
    acc.push(ele*2)
    return acc;
},[]);
console.log(newArr1)