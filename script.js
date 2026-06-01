let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const gencompChoice=()=>{
    let option=["Rock","Paper","Scissors"];
    let idx=Math.floor(Math.random()*3);
    return option[idx];
};


const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};


const showWinner=(userWin, userChoice, compChoice )=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }

};


const playGame=(userChoice)=>{

    const compChoice=gencompChoice();

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="Rock"){
            userWin=compChoice==="Paper" ? false: true;
        }
        else if ( userChoice==="Paper"){
            userWin=compChoice==="Scissors" ? false: true;
        }
        else{
            //userchoice==Scisccor
            userWin = compChoice === "Rock" ? false: true;
        }
        showWinner(userWin, userChoice,compChoice );
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
