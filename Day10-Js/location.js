const root=document.querySelector("#locations")


root.addEventListener("click", (e) => {
    root.innerHTML = "";
    getSpecificLocationInfo(e.target.id);
});


const showLocation=(data)=>{
    root.innerHTML=""
    const {predictions}=data;
    predictions.forEach((element) => {
        const p=document.createElement('p')
        p.id = element.place_id;
        p.innerText=element.description
        root.appendChild(p)
        
    });
}
const getData=(text)=>{
    const pr=fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/autocomplete/json?input=${text}&language=en&region=en`,{
        method:"GET",
        headers:{
            'x-rapidapi-host': 'google-map-places.p.rapidapi.com',
            'x-rapidapi-key': '8f79a45548msh57b4ac296d979a0p1cde5djsn15e7748ec072'
        }

    })
    pr.then((res)=>{
        const pr2=res.json();
        pr2.then((data)=>{
            showLocation(data)
        })
    })
}

let id=null;
const handleSearch=((e)=>{
    if(id){
        clearTimeout(id);
    }
       id=setTimeout(()=>{
        getData(e.target.value)
       },1000) 
})



const getSpecificLocationInfo = (placeId) => {
    const pr = fetch(
        `https://google-map-places.p.rapidapi.com/maps/api/place/details/json?place_id=${placeId}&region=en&fields=all&language=en&reviews_no_translations=true`,
        {
            method: "GET",
            headers: {
                "x-rapidapi-host": "google-map-places.p.rapidapi.com",
                "x-rapidapi-key": "8f79a45548msh57b4ac296d979a0p1cde5djsn15e7748ec072",
            },
        }
    );
    pr.then((res) => {
        const pr2 = res.json();
        pr2.then((data) => {
            console.log(data);
            const { result } = data;
            const rootNew = document.getElementById("location-info");
            rootNew.innerHTML = `
                <h4>${result.name}</h4>
                <p>${result.formatted_address}</p>
                <img src='${result.icon}'>
                <a href='${result.url}' target="_blank">Open</a>
                ${result.photos.map((photoObj) => {
                    return photoObj.html_attributions[0];
                })}
            `;
        });
    });
};



// event delegation