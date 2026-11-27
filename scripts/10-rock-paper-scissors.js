let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

/*
if (!score) {
score = {
  wins: 0,
  losses: 0,
  ties: 0
  };
}
*/

updateScoreElement()

function pickComputerMove() {
  const randomNum = Math.random();
  let computerMove = '';
  
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove()
  let result = ''

  if (computerMove === 'rock') {
    if (playerMove === 'rock') {
      result = 'Tie.'
    } else if (playerMove === 'paper') {
      result = 'You win.'
    } else if (playerMove === 'scissors') {
      result = 'You lose.'
    }
  } else if (computerMove === 'paper') {
    if (playerMove === 'rock') {
      result = 'You lose.'
    } else if (playerMove === 'paper') {
      result = 'Tie.'
    } else if (playerMove === 'scissors') {
      result = 'You win.'
    }
  } else if (computerMove === 'scissors') {
    if (playerMove === 'rock') {
      result = 'You win.'
    } else if (playerMove === 'paper') {
      result = 'You lose.'
    } else if (playerMove === 'scissors') {
      result = 'Tie.'
    }
  }
  if (result === 'You win.') {
    score.wins += 1
  } else if (result === 'You lose.') {
    score.losses += 1
  } else if (result === 'Tie.') {
    score.ties += 1
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement()

  /*
  alert(`You picked ${playerMove}, computer picked ${computerMove}, ${result}
Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`)
  */

  document.querySelector('.js-moves').
    innerHTML = `You picked <img class="move-icon" src="/Images/${playerMove}-emoji.png"> Computer picked <img class="move-icon" src="/Images/${computerMove}-emoji.png">`

  document.querySelector('.js-result').
    innerHTML = result
    
}

function updateScoreElement() {
    document.querySelector('.js-score').
      innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
  }
function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score')
  updateScoreElement()
  document.querySelector('.js-result').
    innerHTML = ''
  document.querySelector('.js-moves').
    innerHTML = ''
}  
