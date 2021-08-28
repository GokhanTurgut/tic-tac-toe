const gameModule = (() => {
    // Game elements
    const gameContainer = document.getElementById('gameContainer');
    const positionContainer = document.getElementById('positionContainer');
    const positions = Array.from(positionContainer.children);
    // Player name and message elements
    const nameContainer = document.getElementById('nameContainer');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const playerOneName = document.getElementById('playerOneName');
    const playerTwoName = document.getElementById('playerTwoName');
    const warningMessage = document.getElementById('warningMessage');
    const resultMessage = document.getElementById('resultMessage');
    // Buttons
    const startBtn = document.getElementById('startBtn');
    const restartBtn = document.getElementById('restartBtn');

    gameBoard = new Array(9);
    
    let round = 1;
    let playerOne;
    let playerTwo;
    
    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restartGame);
    
    positions.forEach((position, index) => {
        position.addEventListener('click', () => {
            if (!gameBoard[index]) {
                if (round%2 === 0) {
                    position.textContent = 'O';
                    gameBoard[index] = 'O';
                    playerColorChanger('#5680E9', '#2A1B3D');
                    if (gameChecker(index)) {
                        positionContainer.style.display = 'none';                   
                        resultMessage.textContent = `Congratulations ${playerTwo.getName()}, you have won!`;
                        playerColorChanger('#2A1B3D', '#2A1B3D');
                    };
                    drawChecker();
                }
                else {
                    position.textContent = 'X';
                    gameBoard[index] = 'X';
                    playerColorChanger('#2A1B3D', '#5680E9');
                    if (gameChecker(index)) {
                        positionContainer.style.display = 'none';                   
                        resultMessage.textContent = `Congratulations ${playerOne.getName()}, you have won!`;
                        playerColorChanger('#2A1B3D', '#2A1B3D');
                    };
                    drawChecker();
                }
                round++;
            }       
        })
    })

    function startGame() {
        if (player1.value && player2.value) {
        playerOne = Player(player1.value, 1);
        playerTwo = Player(player2.value, 2);
        playerOneName.textContent = playerOne.getName();
        playerTwoName.textContent = playerTwo.getName();
        player1.value = '';
        player2.value = '';
        nameContainer.style.display = 'none';
        gameContainer.style.display = 'flex';
        }
        else {
            warningMessage.textContent = 'Please enter two names!';
            return
        }
    }
    
    function restartGame() {
        gameBoard = [];
        gameBoard.length = 9;
        round = 1;
        positions.forEach((position) => {
            position.textContent = '';
        })
        playerColorChanger('#5680E9', '#2A1B3D');
        resultMessage.textContent = '';
        positionContainer.style.display = 'grid';
    }
    
    function playerColorChanger(playerOneColor, playerTwoColor) {
        playerOneName.style.backgroundColor = playerOneColor;
        playerTwoName.style.backgroundColor = playerTwoColor;
    }
    
    function drawChecker() {
        if (round === 9) {
            positionContainer.style.display = 'none';                   
            resultMessage.textContent = `It's a tie!`;
            playerColorChanger('#2A1B3D', '#2A1B3D');
        }
    }

    function checkFunction(index, firstCheck, secondCheck) {
        if (gameBoard[index] === gameBoard[firstCheck] && gameBoard[index] === gameBoard[secondCheck]) {
            return true;
        }
    }
    function gameChecker(positionIndex) {
        switch (positionIndex) {
            case 0:
                if(checkFunction(positionIndex, 1, 2) || checkFunction(positionIndex, 3, 6) || checkFunction(positionIndex, 4, 8)) {
                    return true;
                };
                break;
            case 1:
                if(checkFunction(positionIndex, 0, 2) || checkFunction(positionIndex, 4, 7)) {
                    return true;
                };
                break;
            case 2:
                if(checkFunction(positionIndex, 1, 0) || checkFunction(positionIndex, 5, 8) || checkFunction(positionIndex, 4, 6)) {
                    return true;
                };
                break;
            case 3:
                if(checkFunction(positionIndex, 0, 6) || checkFunction(positionIndex, 4, 5)) {
                    return true;
                };
                break;
            case 4:
                if(checkFunction(positionIndex, 3, 5) || checkFunction(positionIndex, 1, 7) || checkFunction(positionIndex, 2, 6) || checkFunction(positionIndex, 0, 8)) {
                    return true;
                };
                break;
            case 5:
                if(checkFunction(positionIndex, 2, 8) || checkFunction(positionIndex, 4, 3)) {
                    return true;
                };
                break;
            case 6:
                if(checkFunction(positionIndex, 3, 0) || checkFunction(positionIndex, 7, 8) || checkFunction(positionIndex, 4, 2)) {
                    return true;
                };
                break;
            case 7:
                if(checkFunction(positionIndex, 6, 8) || checkFunction(positionIndex, 4, 1)) {
                    return true;
                };
                break;
            case 8:
                if(checkFunction(positionIndex, 7, 6) || checkFunction(positionIndex, 5, 2) || checkFunction(positionIndex, 4, 0)) {
                    return true;
                };
                break;
        }
    }
})()

const Player = (name, playerNumber) => {
    const getName = () => name;
    const getPlayerNumber = () => playerNumber;
    return {getName, getPlayerNumber}
}