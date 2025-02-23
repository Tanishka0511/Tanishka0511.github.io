console.log("hello");
const arr = [{
    "name": "khushi",
    "city": "baraut",
    "email": "abc@gmail.com",
    "id":"1"
},
{
    "name": "tanii",
    "city": "delhi",
    "email": "def@gmail.com",
    "id":"12"

},
{
    "name": "tanishka",
    "city": "ghaziabad",
    "email": "ghi@gmail.com",
    "id":"13"

}, {
    "name": "khus",
    "city": "delhi",
    "email": "jkl@gmail.com",
    "id":"14"

}
];





const root = document.querySelector('#parent');
const selectElement=document.getElementsByTagName('select')[0];

const showOption=()=>{
    selectElement.innerHTML="";
     
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.innerText = "Select one option";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    selectElement.appendChild(defaultOption);


    const citiesObj={}
    arr.forEach((elem)=>(citiesObj[elem.city]=true));
    const cities=Object.keys(citiesObj);
    cities.forEach((city)=>{
        const newOption=document.createElement("option");
        newOption.value=city;
        newOption.innerText=city;
        selectElement.appendChild(newOption);
    })
}
const showCards = (newdata) => {
    // showOption();
    root.innerHTML=""
    newdata.forEach((ele,idx) => {
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `<h4>${ele.name}</h4>
        <h6>${ele.email}</h6> <p class="txt">${ele.city}</p>
        <button class="edit" >Edit</button> <button class="delete" onClick="deleteCard(event,'${ele.id}')">Delete</button>`
        root.appendChild(card);
    })

}

const deleteCard = (e,id) => {
    // e.target.parentElement.remove();
    // console.log(e,id);
    // arr.splice(idx,1)
    // showCards(arr)
    const index=arr.findIndex((elem)=>elem.id==id);
    if(index!==-1){
        arr.splice(index,1);
        showCards(arr);
        showOption();
    }
    // arr.splice(index,1);
    // showCards(arr);

}
const handleSelect = (e) => {
    const selectedCity = e.target.value;
    if (!selectedCity) return; // Prevent filtering when default option is selected
    const newData = arr.filter((elem) => elem.city === selectedCity);
    showCards(newData);
};




const handleformSubmitted=(e)=>{
    e.preventDefault();
    // console.log(e);
    // console.log(e.target.email.value);
    // console.log(e.target[0].value);
    // console.log(e.target.fullname.value);
    // console.log(e.target[1].value);
    // console.log(e.target.city.value);
    // console.log(e.target[2].value);

    const isidexist=arr.some((elem)=>{
        return elem.id === e.target.id.value;
    })
    if(isidexist){
        alert("id already exist");
        return;
    }

    const isemailexist=arr.some((elem)=>{
        return elem.email===e.target.email.value;
    })
    if(isemailexist){
        alert("email already exist");
    }


   


    //add the data
    arr.push({
        "email":e.target.email.value,
        "city":e.target.city.value,
        "name":e.target.fullname.value,
        "id":e.target.id.value
    })

    showCards(arr)
    showOption()

    
   
}
showOption()
showCards(arr)




