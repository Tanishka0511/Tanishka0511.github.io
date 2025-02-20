const arr = [{
    "name": "khushi",
    "city": "baraut",
    "email": "abc@gmail.com"
},
{
    "name": "tanii",
    "city": "meerut",
    "email": "def@gmail.com"

},

{
    "name": "tanishka",
    "city": "ghaziabad",
    "email": "ghi@gmail.com"

}, {
    "name": "khus",
    "city": "delhi",
    "email": "jkl@gmail.com"

}
]



const root=document.querySelector('#parent');
arr.forEach((ele)=>{
    const newCard=document.createElement("div");

    //capturing
    // newCard.addEventListener("click",()=>{
    //     newCard.style.backgroundColor=(`rgb(${randc(255)},${randc(255)},${randc(255)} )`);
    // },true)

    //bubbling
    newCard.addEventListener("click",()=>{
        newCard.style.backgroundColor=(`rgb(${randc(255)},${randc(255)},${randc(255)} )`);
    },)
    newCard.className="card"
    newCard.innerHTML=`<h4>${ele.name}</h4>
    <h6>${ele.email}</h6> <p class="txt">${ele.city}</p>
    <button class="edit">Edit</button> <button class="delete">Delete</button>` 

    root.appendChild(newCard)

   
})



const handleBgChange=()=>{
    document.body.style.backgroundColor=(`rgb(${randc(255)},${randc(255)},${randc(255)} )`);

}

const randc=(num)=>{
    return Math.floor((num)*Math.random())
}

const textElements=document.querySelectorAll(".txt");
textElements[0].addEventListener("click",(e)=>{
    textElements[0].style.backgroundColor=(`rgb(${randc(255)},${randc(255)},${randc(255)} )`);
    e.stopPropagation();
})




//homework part

// const deletebtn1=document.querySelectorAll('.delete');
// deletebtn1[0].addEventListener("click",(e)=>{
//     e.stopPropagation();
//     ele=document.querySelectorAll('.card');
//     ele[0].remove()
// })
// const deletebtn2=document.querySelectorAll('.delete');
// deletebtn2[1].addEventListener("click",(e)=>{
//     e.stopPropagation();
//     ele=document.querySelectorAll('.card');
//     ele[1].remove()
// })
// const deletebtn3=document.querySelectorAll('.delete');
// deletebtn3[2].addEventListener("click",(e)=>{
//     e.stopPropagation();
//     ele=document.querySelectorAll('.card');
//     ele[2].remove()
// })
// const deletebtn4=document.querySelectorAll('.delete');
// deletebtn4[3].addEventListener("click",(e)=>{
//     e.stopPropagation();
//     ele=document.querySelectorAll('.card');
//     ele[3].remove()
// })



// const editBtn1=document.querySelectorAll(".edit");
// editBtn1[0].addEventListener("click",(e)=>{
//     const ele=document.querySelectorAll('.txt');
//     ele[0].innerText="edit success"
//     ele[0].style.color="red"
//     e.stopPropagation();
// })
// const editBtn2=document.querySelectorAll(".edit");
// editBtn2[1].addEventListener("click",(e)=>{
//     const ele=document.querySelectorAll('.txt');
//     ele[1].innerText="edit success"
//     ele[1].style.color="red"
//     e.stopPropagation();
// })
// const editBtn3=document.querySelectorAll(".edit");
// editBtn3[2].addEventListener("click",(e)=>{
//     const ele=document.querySelectorAll('.txt');
//     ele[2].innerText="edit success"
//     ele[2].style.color="red"
//     e.stopPropagation();
// })
// const editBtn4=document.querySelectorAll(".edit");
// editBtn4[3].addEventListener("click",(e)=>{
//     const ele=document.querySelectorAll('.txt');
//     ele[3].innerText="edit success"
//     ele[3].style.color="red"
//     e.stopPropagation();
// })





const deletebtn = document.querySelectorAll('.delete');
deletebtn.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const cards = document.querySelectorAll('.card');
        if (cards[i]) {
            cards[i].remove();
        }
    });
});

const editBtn = document.querySelectorAll(".edit");
editBtn.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const textElements = document.querySelectorAll('.txt');
        if (textElements[i]) {
            textElements[i].innerText = "edit success";
            textElements[i].style.color = "red";
        }
    });
});






