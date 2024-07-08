let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const computer=document.querySelector("#computer-score");


const computerChioce =()=>{
    const option = ["rock","paper","scissors"]
    const idx=Math.floor(Math.random()*3)
    return option[idx];
}
const drawGame=()=>{
    msg.innerText="Game was Draw. Play again!!"
    msg.style.backgroundColor="rgb(38,70,83)"
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true)
    {
        userScore++;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="rgb(231,111,81)";
    }
    else{
        compScore++;
        msg.innerText=`You Lose. ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor="rgb(42,157,143)"
    }
    user.innerText=userScore;
    computer.innerText=compScore;
}
const playGame=(userChoice)=>{
    const compChoice=computerChioce();
    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock")
        {
            userWin=(compChoice === "paper")?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=(compChoice === "scissors")?false:true;
        }
        else if(userChoice === "scissors")
        {
            userWin=(compChoice === "rock")?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
})