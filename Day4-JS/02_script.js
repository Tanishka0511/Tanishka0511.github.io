//--------------------------------
//two separate functions 

const sum = (a, b) => {
    const ans = a + b;
    return ans;
};
const printPreety = (txt) => {
    console.log("----------");
    console.log(txt);
    console.log("-----------");

};


const ans = sum(49, 64);
printPreety(ans);


//-----------------------
//NORMAL FUNCTION


const sum1 = (a, b) => {
    const ans = a + b;
    return ans;
};
const printPreety1 = (txt) => {
    console.log("----------");
    console.log(txt);
    console.log("-----------");

};

printPreety(sum1(30, 40));

//-------------------------
//CALLBACK FUNCTION

const sum2 = (a, b, c) => {      //sum2 is a HIGHER ORDER FUNCTION -->which contain another function as pararmeter and return a function.
    const ans = a + b;
    // return ans;
    c(ans);
};
const printPreety2 = (txt) => {
    console.log("----------");
    console.log(txt);
    console.log("-----------");

};
sum2(30, 40, printPreety);      //printPreety is a callback function ->which passed as parameter for another function.


//----------------------------------
const getmetadata = () => {
    const name = prompt("Please enter your name");
    console.log("Hello", name);
    const numofSub = prompt("Please enter the number of subject");
    const num = parseInt(numofSub);
    return num;

}

const getSubjects = (num) => {
    const record = {};
    for (let i = 1; i <= num; i++) {
        const subjName = prompt(`Enter name of subject ${i}`);            //Template literals
        const subMarks = parseInt(prompt(`Enter marks for ${subjName}`));
        record[subjName] = subMarks;
    }
    // console.log(record);
    return record;
};

//forEach ->element,index,array
const getPercentage = (record) => {

    const marks = Object.values(record);
    //Object.keys
    //Object.entries
    //    console.log(marks);
    let totalMarks = 0;
    let totalSubject = 0;
    // const temp=(a)=>{
    //     totalMarks+=a;
    //     totalSubject++;
    // }
    // marks.forEach(temp);

    marks.forEach((a) => {
        totalMarks += a;
        totalSubject++;
    });
    // console.log(totalMarks, totalSubject);

    const percentage=totalMarks/totalSubject;
    return percentage;

}

const highestMarks=(record)=>{
    const marks =Object.entries(record);
    let maximum=0;
    let subj="";
    marks.forEach((a)=>{
       
        let subjName=a[0];
        let subscore=a[1];
         if(subscore>=maximum){
            maximum=subscore;
            subj=subjName;
        }

    })
    console.log(`maximum score is ${maximum} in subject ${subj}`);
};


const getGrades=(percentage)=>{
    const grades=[[60,'B'],[70,'B+'],[80,'A'],[90,'A+']];

    let grade="F";
    // grades.forEach((arr)=>{
    //     if(arr[0]<=percentage){
    //         grade=arr[1];
    //     }

    // });
    // console.log(`Grade is: ${grade}`)


    //FIND INDEX
    const idx=grades.findIndex((arr)=>{
        if(arr[0]>percentage){
            return true;
        }
        return false;

    })
    if(idx==-1) grade='A';
    else if(idx>0) grade=grade[idx-1][1];

    console.log(grade);
}


const num = getmetadata();
const record = getSubjects(num);
const percentage = getPercentage(record);
console.log(`Percentage is: ${percentage}`);
highestMarks(record);
getGrades(percentage)


