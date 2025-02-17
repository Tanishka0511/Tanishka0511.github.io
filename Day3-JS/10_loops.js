const arr =["hello",2,"hii",3,4,5,6,7]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
    
}
for(let i in arr){
    //keys
    console.log(i)
}
for(let i of arr){
    //values :: only works iterables
    console.log(i)
}