const handleTextChange=(e)=>{
    // console.log(e);
    console.log(e.target.value)         //finally changed value 
}

const handleKeyDown=(e)=>{
    console.log("key down:",e.target.value)          //previous value
}

const handleKeyUp=(e)=>{
    console.log("key up:",e.target.value)             //update value
} 