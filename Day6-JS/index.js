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
    <h6>${ele.email}</h6> <p class="txt">${ele.city}</p>` 

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







