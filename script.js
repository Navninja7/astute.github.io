let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let main = document.getElementById("main"); 
let t1 = `<span style="color:lightgreen;">PHD</span> <span style="font-family:'Roboto Slab'; font-weight:400">GUIDANCE</span>`
let t2 = `<span style="color:lightgreen;">JOURNAL</span> <span style="font-family:'Roboto Slab'; font-weight:400">PUBLICATIONS</span>`
let changeText = document.getElementById("div1h1");
console.log(changeText.getBoundingClientRect().bottom);
setInterval(() => fun() ,200);
function fun(){
    if(changeText.getBoundingClientRect().top > 0){    
         if(changeText.innerHTML== t1){
                 changeText.style.opacity=0;
             changeText.style.backgroundColor="rgba(23,23,23,0.3)";    
             main.style.color="#fff";
            main.style.backgroundColor="transparent";
        setTimeout(()=>{
            changeText.style.opacity=1;
            changeText.innerHTML = "Welcome to Astute Services!";
                       },250);
            }
    }
else if(changeText.getBoundingClientRect().bottom < div2.getBoundingClientRect().bottom){
    setTimeout(()=>{
                main.style.backgroundColor="rgba(255,255,255,0.7)";
                main.style.color="black";
                           },250);
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
    else if(changeText.getBoundingClientRect().bottom >= div2.getBoundingClientRect().bottom){
        if(changeText.innerHTML!=t2){
            changeText.style.backgroundColor="rgba(23,23,23,0)";
        setTimeout(()=>{
            changeText.innerHTML = t2;
            changeText.style.backgroundColor="rgba(23,23,23,1)";
                       },125);
            }
    }
}