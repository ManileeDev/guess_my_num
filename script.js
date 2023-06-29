
document.getElementById("value").value = 23;

let random = Math.floor(Math.random()*5)+1;


let sum = document.getElementById("sumary");
let guess = document.getElementById("guess");
let scoreCard = document.getElementById("score");

let highScoreCard = document.getElementById("highscore")

let chechButton = document.getElementById("check");

let playAgain =  document.getElementById("again");

let score = 20;
let highScore = 0;


playAgain.addEventListener("click",()=>{
    score = 20;
    scoreCard.innerText = score;
    sum.innerText = "Start guess...";
})




chechButton.addEventListener("click",()=>{
    let num = document.getElementById("value").value;
    if(score > 0)
    {
        guess.innerText= "?";
    
    if(num == random)
    {
        sum.innerText="Correct Number";
        guess.innerText = random;
        if(highScore < score)
        {
            highScore = score;
            highScoreCard.innerText = highScore;
        }
        score--;
        scoreCard.innerText = score;
        
        
    }
    else if(num >= random){
        sum.innerText="Too High";
        score--;
        scoreCard.innerText = score;
    }
    else{
        sum.innerText="Too Low";
        score--;
        scoreCard.innerText = score;
    }

    }
    else 
    {
        sum.innerText = "Game Over"
    }
    
})