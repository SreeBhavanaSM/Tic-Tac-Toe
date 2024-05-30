let boxes = document.querySelectorAll('.box');
let rBtn = document.querySelector('#reset-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');
let nBtn = document.querySelector('#new-btn');

let turn = true;

// all the winning patterns each box is considerd as a index starting from 0 to 8 as there are 9 boxes in total
const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


//disable the boxes after getting the winner
const disableBoxes = () => {
    for (let b of boxes) {
        b.disabled = true;
    }
};

//to enable boxes
const enableBoxes = () => {
    for (let b of boxes) {
        b.disabled = false;
        b.innerText="";
    }
};


// reset btn 
const resetGame = () => {
    turn=true;
    enableBoxes();
    msgContainer.classList.add('hide')
 };

//function to show the winner
const ShowWinner = (winner) => {
    msg.innerText= `congradulation, Winner is ${winner}`
    msgContainer.classList.remove('hide');
    disableBoxes();
};


// function to check winner
const checkWinner = ()=>{
    for(let pattern of winpattern){
        // console.log(pattern,pattern,pattern);
        console.log(pattern[0],pattern[1],pattern[2]);
        // console.log( boxes[pattern[0]]);
        let p1= boxes[pattern[0]].innerText;
        let p2= boxes[pattern[1]].innerText;
        let p3= boxes[pattern[2]].innerText;
        if(p1 != "" && p2 != "" && p3 != ""){
            if(p1 === p2 && p2 === p3){
                console.log(`winner is ${p1}`);
                ShowWinner(p1);
                draw();
            }
        }
    }
};

const draw = () => {
    let allBoxesFilled = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            allBoxesFilled = false;
            break;
        }
    }
    if (allBoxesFilled) {
        msg.innerText = "Match is Draw";
        msgContainer.classList.remove('hide');
        disableBoxes();
    }
};

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn) {
            box.innerHTML='O';
            box.style.color = '#D20062';
            turn=false;
        }
        else {
            box.innerHTML='X';
            box.style.color = '#002379';
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

nBtn.addEventListener('click', resetGame);
rBtn.addEventListener('click', resetGame);


