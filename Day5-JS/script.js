console.log(document)
console.dir(document)   //represents DOM

console.dir(window)   //represents BOM
//document is given by windows.so window.document -> document

//write generic text in html
// document.write("hello");          not correct way

//finding/searching element
    // 1.document.getElementById  --> returns either null or element
    const ele=document.getElementById("text-1");
    console.dir(ele);
    ele.style.color="blue";
    
    // 2.document.getElementsByClassName  --> HTML collection(iterable)
    const elem=document.getElementsByClassName("class1");
    console.log(elem)

    // 3.document.getElementsByTagName -->iterable [] (HTML collection(iterable))
    const eleme=document.getElementsByTagName("div");
    console.log(eleme)


    // 4.document.querySelector
    const elemen=document.querySelector(".class1")
    console.log(elemen)

    // 5.document.querySelectorAll
    const elementt=document.querySelectorAll(".class1")
    console.log(elementt)



    //node vs element