var highScore = 0;
function highScr(){
    if(score > highScore) highScore = score;
}

function makeBubble(){
    var cluster = "";
    for(var i=1; i<=147; i++){
        var rn = Math.floor(Math.random()*10);
        cluster += `<div class="bubble"> <h3>${rn}</h3> </div>`;
    }
    
    var bble = document.querySelector("#pbtm");
    bble.innerHTML = cluster;
}

var timer = 20;
function runTimer(){
    var timerInterval = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        }
        else{
            clearInterval(timerInterval);
            highScr();
            document.querySelector("#pbtm").innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center;">
            <h3>High Score ${highScore}<h3>
            <h1>GameOver</h1>
            <h2>Your Score ${score}</h2>
            </div>`;
        }
    }, 1000);
}

var hitno = -1;
function hitVar(){
    hitno = Math.floor(Math.random()*10);
    document.querySelector("#hitNum").innerHTML = hitno;
}

var score = 0;
function calScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent =  score;
}

document.querySelector("#pbtm").addEventListener("click", function(detls){
    var curNum = Number(detls.target.textContent);
    if(hitno === curNum){
        calScore();
        hitVar();
        makeBubble();
    }
})

document.querySelector("#reset").addEventListener("click", function(){
    timer = 20;
    score = 0;
    document.querySelector("#scoreVal").textContent =  score;
    makeBubble();
    runTimer();
    hitVar();
})

hitVar();

runTimer();

makeBubble();