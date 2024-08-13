document.addEventListener('DOMContentLoaded', () => {
    const startGameButton = document.getElementById('start-game-button');
    const enterButton = document.getElementById('enter-button');
    const difficultySlider = document.getElementById('difficulty-slider');
    const userInput = document.getElementById('user-input');
    const imageContainer = document.getElementById('image-container');
    const content = document.querySelector('content');
 })


const priceImageScreen = [{ url: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/sterrato/huracan_sterrato_og_01.jpg', answer: '248000', difficulty: '5'}, 
    { url: 'https://cdnimg.webstaurantstore.com/images/products/large/535781/1959338.jpg', answer: '2.48', difficulty: '1'}, 
    { url: 'https://i.redd.it/j9c1rdk74r681.jpg', answer: '6.39', difficulty: '3'}
];

let currentIndex = 0;
let correctAnswers = 0;

function displayImage(index) {
    if (index >= 0 && index < priceImageScreen.length) {
        imageContainer.innerHTML = `<img src="${priceImageScreen[index].url}" class="picture" alt="current Image">`; 
        const difficulty = priceImageScreen[index].difficulty; 
        difficultySlider.value = difficulty;
        updateDifficultyText(difficulty);
    } else {
            console.error('Index out of bounds');
    }
}

function updateDifficultyText(value) {
    let difficulty = '';
    switch (value) {
        case '1':
            difficulty = 'Very Easy';
            break;
        case '2':
            difficulty = 'Easy';
            break;
        case '3':
            difficulty = 'Medium';
            break;
        case '4':
            difficulty = 'Hard';
            break;
        case '5':
            difficulty = 'Very Hard';
            break;
    }
    document.getElementById('difficulty-text').textContent = difficulty;
}


    startGameButtonElement.addEventListener('click', () => {
        content.style.display = 'flex';
        displayImage(currentIndex);
    });

    enterButton.addEventListener('click', () => {
        const userGuess = userInput.value.trim().replace(/[^0-9]/g, ''); 
        const correctAnswer = priceImageScreen[currentIndex].answer;

        if (userGuess === correctAnswer) {
            alert('Correct! Well done.');
            correctAnswers++;
            currentIndex++;
            if (currentIndex < priceImageScreen.length) {
                displayImage(currentIndex);
                userInput.value = ''; 
            } else {
                if (correctAnswers === priceImageScreen.length) {
                    alert('Congratulations! You have completed the game');
                } else {
                    alert('Well done move onto the next problem!!!')
                }
                content.style.display = 'none';
            }
        } else {
            alert('Incorrect. You lose.');
            content.style.display = 'none';
        }
    });
    
    difficultySlider.addEventListener('input', () => {
        const value = difficultySlider.value;
        updateDifficultyText(value);
    });

