const gameContainer = document.getElementById('gameContainer');
const positions = Array.from(gameContainer.children);

gameBoard = new Array(9);

let round = 1;

const Player = (name, playerNumber) => {
    const getName = () => name;
    const getPlayerNumber = () => playerNumber;
    return {getName, getPlayerNumber}
}

const player1 = Player('Gokhan', 1);
const player2 = Player('Emira', 2);

positions.forEach((position, index) => {
    position.addEventListener('click', () => {
        if (!gameBoard[index]) {
            if (round%2 === 0) {
                position.textContent = 'O';
                gameBoard[index] = 'O';
                if (gameChecker(index)) {
                    console.log(`${player2.getName()} is won!`);
                };
            }
            else {
                position.textContent = 'X';
                gameBoard[index] = 'X';
                if (gameChecker(index)) {
                    console.log(`${player1.getName()} is won!`);
                };
            }
            round++;
        }       
    })
})

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

function checkFunction(index, firstCheck, secondCheck) {
    if (gameBoard[index] === gameBoard[firstCheck] && gameBoard[index] === gameBoard[secondCheck]) {
        return true;
    }
}