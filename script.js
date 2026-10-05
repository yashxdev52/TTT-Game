let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#newbtn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");
let score = document.querySelector("#score");
let resetScore = document.querySelector("#resetscore")
let turnx = true;
scorex = 0;
scoreo = 0;
draw = 0;
count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]



const resetGame = () => {
    turnx = true;
    enableBtn();
    msgContainer.classList.add("hide");
}



boxes.forEach((box) => {
    box.addEventListener ("click", () => {
        if (turnx == true) {
            box.style.color = "#ff4d6d";
            box.innerText = "X";
            turnx = false;
            count ++ ;
            console.log(count);
        } else {
            box.style.color = "#38bdf8";
            box.innerText = "O";
            turnx = true;
            count ++ ;
            console.log(count) ;
        }
        box.disabled = true;

        checkwinner();
    })
})


resetbtn.addEventListener("click", () => {
    resetGame();
})
newGameBtn.addEventListener("click", () => {
    resetGame();
})
resetScore.addEventListener("click", () => {
    scorex = 0;
    scoreo = 0;
    draw = 0;
})



const disableBtn = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBtn = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = () => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    score.innerText = `Score X: ${scorex}   O: ${scoreo}   Draw: ${draw}`;
    msgContainer.classList.remove("hide");
    disableBtn();
    count = 0;
}


const checkwinner = () => {
    for(let pattern of winPatterns) {
        if(boxes[pattern[0]].innerText == "X" && boxes[pattern[1]].innerText == "X" && boxes[pattern[2]].innerText == "X") {
            winner = "X";
            scorex += 1;
            showWinner();
        } else if(boxes[pattern[0]].innerText == "O" && boxes[pattern[1]].innerText == "O" && boxes[pattern[2]].innerText == "O") {
            winner = "O";
            scoreo += 1;
            showWinner();
        } else if(count == 9) {
            draw += 1;
            showWinner();
            winner = "No one";
        }
    }
}


