const choices=['paper','scissors','rock'];
const buttons = document.querySelectorAll(".choice");
const scoreEl = document.querySelector("#score");
const main = document.querySelector("main");
const selection = document.querySelector(".selection");
const reset = document.querySelector("#reset");
const result = document.querySelector(".result");
const userSelection = document.querySelector(".user-selection");
const computerSelection = document.querySelector(".house-selection");
const close = document.getElementById("close");
const resultBox = document.querySelector(".rules-box");
const rulesButton = document.querySelector(".btn-rules");

var score = 0 ;
var userChoice ;
var computerChoice ;

buttons.forEach( button => {
    button.addEventListener("click" , () => {

        userChoice = button.getAttribute("data-choice");
        computerChoice = pickRandom();

        updateChoice(userSelection , userChoice );
        updateChoice(computerSelection , computerChoice );

        checkWinner(userChoice , computerChoice);
    })
});

close.addEventListener("click" , () => {
    resultBox.style.display="none";
});

rulesButton.addEventListener("click" , () => {
    resultBox.style.display="flex";
});


reset.addEventListener("click", () => {

    main.style.display="flex";
    selection.style.display="none";
});

function pickRandom(){

    return choices[Math.floor(Math.random()*choices.length)];

}

function updateScore(value){

    score+=value;
    scoreEl.innerText=score;
}

function checkWinner(userChoice , computerChoice)
{

    if(userChoice === computerChoice)
    {
        result.innerText="DRAW";
    }
    else if( userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper"
         || userChoice === "rock" && computerChoice === "rock" )
    {
        updateScore(1);
        result.innerText="YOU WIN";
        reset.style.color="hsl(229, 64%, 46%)";
    }
    else
    {
        updateScore(-1);
        result.innerText="YOU LOSE";
        reset.style.color="#e8505b"

    }    
    
    main.style.display="none";
    selection.style.display="flex";

}

function updateChoice(selectionEl , selectionChoice )
{
    var selected = selectionEl.querySelector(".btn-circle");
    var image = selected.querySelector("img");

    selected.classList.remove("paper");
    selected.classList.remove("scissors");
    selected.classList.remove("rock");

    selected.classList.add(selectionChoice);

    image.setAttribute("src" , "images/icon-"+selectionChoice+".svg");
}