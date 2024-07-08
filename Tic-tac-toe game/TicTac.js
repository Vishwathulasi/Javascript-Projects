let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let newbtn=document.querySelector(".newbtn");
let msgCointainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg")

let turnO=true; //PlayerX, PlayerO
const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetGame=()=>{
    turnO=true;
    enableButton();
    msgCointainer.classList.add("hide");
    clickCount=0;
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

let clickCount=0,i=1,k=1;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){ // player O
            box.innerText='O'
            turnO=false;
        }
        else{ //player X
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
        sleep(2000).then(()=>{

            clickCount+=1;
            if(clickCount==9){
                resetGame()
            }
            console.log("updated",clickCount)
        })
        k+=1;
    })
})

const disabelButton=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableButton=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgCointainer.classList.remove("hide");
    disabelButton();
    clickCount=0;
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!="")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                showWinner(pos1Val)
            }
        }
    }
}

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);