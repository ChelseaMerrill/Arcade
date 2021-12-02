let playerTurn = document.querySelector('.player-turn');
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

playerTurn.innerHTML = currentPlayer + "'s turn";

let winningConditions=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

function fillBox(clickedCell){
  gameState[clickedCell.getAttribute('data')] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function clicked(e){
  fillBox(e.target);
  checkWin();
  if(gameActive === false){return};
  playerChange();
}

function playerChange(){
  if(currentPlayer === 'X'){
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }  
  playerTurn.innerHTML = currentPlayer + "'s turn";
}

function restart(){
  gameState = ["", "", "", "", "", "", "", "", ""];
  document.querySelectorAll('.box').forEach(box => box.innerHTML = "");
  currentPlayer='X';
  playerTurn.innerHTML = currentPlayer + "'s turn";
  gameActive = true;
}

function checkWin(){
  winningConditions.forEach(condition => {
    if(gameState[condition[0]] === '' || gameState[condition[1]] === '' || gameState[condition[2]] === ''){
      '';
    } else if(gameState[condition[0]] === gameState[condition[1]] && gameState[condition[0]] === gameState[condition[2]]){
      playerTurn.innerHTML = currentPlayer + " won!";
      gameActive = false;
    }
  }) 
}

