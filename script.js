let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div3b = document.getElementById("div3b");
let div5 = document.getElementById("div5");
let div6 = document.getElementById("div6");
let div7 = document.getElementById("div7");
let main = document.getElementById("main"); 
let t0 = `<span style="color:lightgreen;">Hello, </span><span style="font-family:'Roboto Slab'; font-weight:400">young leader!</span>`;
let t1 = `<span style="color:lightgreen;">Welcome </span><span style="font-family:'Roboto Slab'; font-weight:400"> to Astute Services</span>`;
let t2 = `<span style="color:lightgreen;">PhD</span> <span style="font-family:'Roboto Slab'; font-weight:400">Guidance</span>`;
let t3 = `<span style="color:lightgreen;">Journal </span><span style="font-family:'Roboto Slab'; font-weight:400">Submission</span>`;
let t4 = `<span style="color:lightgreen;">Plagiarism-free</span> <span style="font-family:'Roboto Slab'; font-weight:400"> Writing</span>`;
let t5 = `<span style="color:lightgreen;">Our </span> <span style="font-family:'Roboto Slab'; font-weight:400">Aim</span>`;
let t6 = `<span style="color:lightgreen;">Our </span> <span style="font-family:'Roboto Slab'; font-weight:400">Mission</span>`

let changeText = document.getElementById("div1h1");
console.log(changeText.getBoundingClientRect().bottom);
setInterval(() => fun() ,200);
function fun(){
    //WELCOME MESSAGE
    if(changeText.getBoundingClientRect().top > 0){    
         if(changeText.innerHTML!= t0){
                 changeText.style.opacity=0;
             changeText.style.backgroundColor="rgba(23,23,23,0.3)";    
             main.style.color="#fff";
            main.style.backgroundColor="transparent";
        setTimeout(()=>{
            changeText.style.opacity=1;
            changeText.innerHTML = t0;
                       },250);
            }
    }
    else{
        
    setTimeout(()=>{
                main.style.backgroundColor="rgba(255,255,255,0.7)";
                main.style.color="black";
                           },250);
    //WELCOME TO ASTUTE SERVICES
if(changeText.getBoundingClientRect().bottom < div2.getBoundingClientRect().bottom){
    
        if(changeText.innerHTML!=t1){
            a=1;
            changeText.style.backgroundColor = "rgba(23,23,23,1)";
            changeText.style.opacity=0;
        setTimeout(()=>{
            changeText.innerHTML = t1;
            changeText.style.opacity=1;
                       },125);
            
            }
    }
    //PHD GUIDANCE
    else if(changeText.getBoundingClientRect().bottom < div3.getBoundingClientRect().bottom){
        if(changeText.innerHTML!=t2){
            changeText.style.backgroundColor="rgba(23,23,23,0)";
        setTimeout(()=>{
            changeText.innerHTML = t2;
            changeText.style.backgroundColor="rgba(23,23,23,1)";
                       },125);
            }
    }
   //JOURNAL SUBMISSION  
      else if(changeText.getBoundingClientRect().bottom < div3b.getBoundingClientRect().bottom){
        if(changeText.innerHTML!=t3){
            changeText.style.backgroundColor="rgba(23,23,23,0)";
        setTimeout(()=>{
            changeText.innerHTML = t3;
            changeText.style.backgroundColor="rgba(23,23,23,1)";
                       },125);
            }
    }
    //PLAGIARISM-FREE WRITING
    else if(changeText.getBoundingClientRect().bottom < div5.getBoundingClientRect().bottom){
        if(changeText.innerHTML!=t4){
            changeText.style.backgroundColor="rgba(23,23,23,0)";
        setTimeout(()=>{
            changeText.innerHTML = t4;
            changeText.style.backgroundColor="rgba(23,23,23,1)";
                       },125);
            }
    }
//OUR AIM    
      else if(changeText.getBoundingClientRect().bottom < div6.getBoundingClientRect().bottom){
        if(changeText.innerHTML!=t5){
            changeText.style.backgroundColor="rgba(23,23,23,0)";
        setTimeout(()=>{
            changeText.innerHTML = t5;
            changeText.style.backgroundColor="rgba(23,23,23,1)";
                       },125);
            }
    }
    
    //OUR MISSION   
      else if(changeText.getBoundingClientRect().bottom < div7.getBoundingClientRect().bottom){
        if(changeText.innerHTML!=t6){
            changeText.style.backgroundColor="rgba(23,23,23,0)";
        setTimeout(()=>{
            changeText.innerHTML = t6;
            changeText.style.backgroundColor="rgba(23,23,23,1)";
                       },125);
            }
    }
    }
}
