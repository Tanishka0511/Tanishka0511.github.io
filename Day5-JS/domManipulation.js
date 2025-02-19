document.children[0].children[1].children[0].style.color="red";
document.children[0].children[1].children[1].style.backgroundColor="beige";
// document.children[0].children[1].children[1].children[0].style.backgroundColor="pink";
// document.children[0].children[1].children[1].children[1].style.backgroundColor="pink";
// document.children[0].children[1].children[1].children[2].style.backgroundColor="pink";
// document.children[0].children[1].children[1].children[3].style.backgroundColor="pink";

const outerDiv=document.querySelector('div');
outerDiv.style.backgroundColor="beige"

//inner div

const innerDiv=Array.from(document.querySelectorAll('div div'))
console.log(innerDiv);
innerDiv.forEach((ele)=>{
ele.style.backgroundColor="pink"
})

const mappings={Invitation:"You are invited for event",
    Reminder:"You are reminded for task",
    Notice:" You have a notice from college",
    Message:"You have 7 messages."
}

innerDiv.forEach((ele)=>{
    if(ele.children[0].innerText=='Invitation'){
        ele.children[1].innerText=mappings['Invitation']
    }
    if(ele.children[0].innerText=='Reminder'){
        ele.children[1].innerText=mappings['Reminder']
    }
    if(ele.children[0].innerText=='Notice'){
        ele.children[1].innerText=mappings['Notice']
    }
    if(ele.children[0].innerText=='Message'){
        ele.children[1].innerText=mappings['Message']
    }
})


// const newElement=document.createElement("div");
// const rootElement=document.querySelector('div');
// newElement.innerText="Hello from DOM"
// rootElement.appendChild(newElement);

// const newElementt=document.createElement("div");
// const rootElementt=document.querySelector('body');
// newElementt.innerText="Hello from DOM"
// rootElementt.appendChild(newElementt);

const newElementt=document.createElement("div");
const rootElementt=document.querySelector('body');
rootElementt.appendChild(newElementt);
Object.entries(mappings).forEach((ele)=>{
    const newChildDiv=document.createElement("div");
    // newChildDiv.innerText="hello from dom"
    // newChildDiv.innerHTML=`<h4>Hello</h4>
    // <p>Hi!</p>` 
    newChildDiv.style.border="1px solid blue"
    newChildDiv.innerHTML=`<h4 style="color:red">${ele[0]}</h4>
    <p style="color:violet">${ele[1]}</p>` 
    newElementt.appendChild(newChildDiv)

})



