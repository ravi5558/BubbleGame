// make bubble 
function makeBubble() {
    let clutter = "";


    for (let i = 1; i <= 102; i++) {
        let rn = Math.floor(Math.random() * 30);
        clutter += `<div class="bubble"> ${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

// timer 
let timer = 60;
function runtimer() {
    let timerint = setInterval (function () {
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer ;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over</h1>`;
        }
    },1000);
}
runtimer ();


let hitrn = 0 ;
function getNewhit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
getNewhit();

let score = 0;
function increseScore (){
    score += 10;
    document.querySelector("#scoreval").textContent = score ;
}

document.querySelector("#pbtm").addEventListener("click" , function(dets){
    let clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increseScore();
        makeBubble();
        getNewhit();
    }
})