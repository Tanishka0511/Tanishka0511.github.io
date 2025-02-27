// // console.log("start")
// // const handleInnerCall=()=>{
// //     console.log("step y")
// // }

// // const handleCall=()=>{
// //     console.log("step m");
// //     handleInnerCall();
// //     console.log("step n"); 
// // }
// // handleCall();
// // // document.querySelector("body").addEventListener('click',handleCall);
// // console.log("end")

// // ---------------
// // set timeout

// console.log("start")
// const handleInnerCall=()=>{
//     console.log("step y")
// }

// const handleCall=()=>{
//     console.log("step m");
//     handleInnerCall();
//     console.log("step n"); 
// }
// // setTimeout(handleCall,10000);
// setTimeout(handleCall,0);   //callback queue -->is anything pending , is call stack empty
// console.log("end");

// // -----
// console.log("e")
// const handleCalll=()=>{
//     console.log("H")
// }
// setTimeout(()=>{
//     console.log("n")
//     setTimeout(()=>{
//         console.log("a")
//     },0)
//     handleCalll();
//     console.log("b");
// },5000)
// console.log("c")

// -------------------
//promises :fetch()


// function showUI(data){
//     //showUI is a function responsible for creating a visualization
//     let data1=data.products
//     console.log("data",data1);
//     console.log(data1[0])

//     const {images,id}=data1[5];
//     console.log(images[0])
//     console.log(id)
//     const card=document.getElementById('card');
//     card.innerHTML=`<h3>${id}</h3>
//     <img src='${images[0]}' alt='avatar' height='300px' width='350px' >
//     `
// }

const root = document.querySelector('div');

const showUI = (list) => {
    list.forEach((obj) => {
        const newCard = document.createElement("div");
        newCard.className = "cardd";
        newCard.innerHTML = `
            <h3>${obj.id}</h3>
            <img src="${obj.images[0]}" alt="avatar" height="90%" width="90%"><p>${obj.description}</p>
        `;
        root.appendChild(newCard);
    });
};



const result=fetch('https://dummyjson.com/products');
result.then((a)=>{
    const pr =a.json();
    pr.then((data)=>{
        showUI(data.products);
    })
}).catch((b)=>{
    console.log("b",b);

})










