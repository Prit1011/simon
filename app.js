let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }

});

    function gameFlash(btn){
        btn.classList.add("flash");
        setTimeout( function(){
            btn.classList.remove("flash");
        }, 250);
    };

    function userflash(btn){
        btn.classList.add("userflash");
        setTimeout( function(){
            btn.classList.remove("userflash");
        }, 250);
    };

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let ranInx = Math.floor(Math.random()*btns.length);
    let ranColor = btns[ranInx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    // console.log(ranInx);
    // console.log(ranColor);
    // console.log(ranBtn);
    gameSeq.push(ranColor)
    console.log(gameSeq);
    gameFlash(ranBtn);
}

function checkAns(idx){
    // console.log("curren level:", level);
   
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
          setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPrss(){
    // console.log(this);
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPrss);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}
