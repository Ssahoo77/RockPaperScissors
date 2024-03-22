const choices=document.querySelectorAll(".choice");

let msg=document.querySelector("#msg");

let uScore=document.querySelector("#user-score");
let cScore=document.querySelector("#comp-score");

let resetBtn=document.querySelector("#reset");

let userScore=0;
let compScore=0;

let genRand = () => {
    const rand= ["rock", "paper", "scissors"];
    const idx= Math.floor(Math.random() * 3);
    return rand[idx];
};

let drawGame = () =>{
    msg.innerText="DRAW!!";
};

const showWinner = (userWin) => {
    if(userWin){
        msg.innerText="YOU WIN!!";
        userScore++;
        uScore.innerText=userScore;
    }
    else{
        msg.innerText="YOU LOSE!!";
        compScore++;
        cScore.innerText=compScore;
    }
};

const playGame = (userChoice) => {
    const compChoice=genRand();
    console.log(compChoice);
    console.log(userChoice);
    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice == "rock"){
            userWin = (compChoice == "paper" ? false: true);
        }
        else if(userChoice == "paper"){
            userWin= (compChoice == "scissors" ? false: true);
        }
        else if(userChoice == "scissors"){
            userWin = (compChoice == "rock" ?false: true);
        }
        showWinner(userWin);
    }
};

choices.forEach( (choice) => {
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute('id');
        playGame(userChoice);
    });
});

const resetGame = () => {
    userScore=0;
    uScore.innerText=userScore;
    compScore=0;
    cScore.innerText=compScore;
    msg.innerText="Play Game";
};

resetBtn.addEventListener('click', resetGame);