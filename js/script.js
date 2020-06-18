var argButtonName, buttonPaper, buttonRock, buttonScissors;

buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ getPlayerMove('kamień'); });
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ getPlayerMove('papier'); });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ getPlayerMove('nożyce'); });

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

