document.addEventListener('DOMContentLoaded', () => {
let counter = 0
let isPaused = false;
const timerElement = document.getElementById('counter');
const incrementButton = document.getElementById('plus');
const decrementButton = document.getElementById('minus');
const likeCountElement = document.getElementsByClassName('likes')
const likes = {};
const likeButton = document.getElementById('heart');
const pauseResumeButton = document.getElementById('pause');
const commentElement = document.getElementById('list');

// See the timer increment every second once the page has loaded
function startTimer() {
    setInterval(() => {
        if (!isPaused) {
            counter++;
            updateTimerDisplay();
        }
    }, 1000);
}

window.onload = startTimer;

// Manually increment and decrement the counter using the plus and minus buttons
function updateTimerDisplay() {
    timerElement.textContent = counter;
    const currentLikes = likes[counter] || 0;
    likeCountElement.textContent = `Likes for this number: ${currentLikes}`;
}

// Event listeners for increment and decrement buttons
incrementButton.addEventListener('click', () => {
    if (!isPaused) {
        counter++
        updateTimerDisplay();
        displayRandomComment();
    }
});

decrementButton.addEventListener('click', () => {
    if (!isPaused) {
        counter--
        updateTimerDisplay();
        displayRandomComment();
    }
});

// "Like" an individual number of the counter
likeButton.addEventListener('click', () => {
    if (!isPaused) {
        if (!likes[counter]) {
            likes[counter] = 0;
        }
        likes[counter]++
        updateTimerDisplay();
        displayRandomComment();
    }
});

// Pause/Resume button event
function toggleButtons(disabled) {
    incrementButton.disabled = disabled;
    decrementButton.disabled = disabled;
    likeButton.disabled = disabled;
}
pauseResumeButton.addEventListener('click', () => {
    isPaused = !isPaused;

    if (isPaused){
        pauseResumeButton.textContent = 'resume';
        toggleButtons(true);
    } else {
        pauseResumeButton.textContent = 'pause';
        toggleButtons(false);
    }
});
// Leave comments
const comments = [
    "Wow, what a fun game this is!",
    "Keep it up!",
    "Check out that score!",
    "That's impressive!",
    "Nice job! Keep clicking!",
];

function displayRandomComment() {
    const randomIndex = Math.floor(Math.random() * comments.length);
    commentElement.textContent = comments[randomIndex];
}

updateTimerDisplay();
});