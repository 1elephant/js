// // pop up on webpage 
// alert("welcome to my webpage");
// // allows to take user input
// let str=prompt("enter your name");
// // gives user option for cancel and ok and returns false ,true respectively 
// confirm("Do you want to continue or not");
alert("FITNESS TEST");
const form=document.querySelector("#form");
const ele=form.children;
let y=1;
form.addEventListener("submit",function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const result=document.querySelector("#result");
    const remark=document.querySelector("#remark");
    console.log(height);
    console.log(weight);
    const bmi=(weight/((height*height)/10000)).toFixed(2);

    if(height===""||height<0||isNaN(height)){
        result.innerHTML=`<span>please give a valid height</span>`;
        y=0;
    }
    else if(weight===""||weight<0||isNaN(weight)){
        result.innerHTML=`<span>please give a valid weight</span>`;
        y=0;
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span> BMI: ${bmi}</span>`;
    }
    if(y==1){
    if(bmi<18.6){
        remark.innerHTML=`<span>under weight</span>`   
    }
    else if(bmi<24.9){
        remark.innerHTML=`<span>normal range</span>`
    }
    else{
        remark.innerHTML=`<span>over weight</span>`
    }
    }
})