const words = ["javascript", "programming", "developer", "frontend", "backend"];
let currentWordIndex = 0;
let score = 0;

const scrambledWordEl = document.getElementById("scrambled-word");
const userInput = document.getElementById("user-input");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");

function scrambleWord(word) {
  return word.split('').sort(() => Math.random() - 0.5).join('');
}

function showWord(index) {
  const word = scrambleWord(words[index]);
  scrambledWordEl.classList.add("fade-out");
  setTimeout(() => {
    scrambledWordEl.textContent = word;
    scrambledWordEl.classList.remove("fade-out");
    scrambledWordEl.classList.add("fade-in");
  }, 300);
}

function checkWord() {
  const userGuess = userInput.value.trim().toLowerCase();
  if (userGuess === words[currentWordIndex]) {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
    score++;
    scoreEl.textContent = score;
  } else {
    feedbackEl.textContent = "Try Again!";
    feedbackEl.style.color = "red";
  }
}

function nextWord() {
  if (currentWordIndex < words.length - 1) {
    currentWordIndex++;
    showWord(currentWordIndex);
    userInput.value = "";
    feedbackEl.textContent = "";
  }
}

function prevWord() {
  if (currentWordIndex > 0) {
    currentWordIndex--;
    showWord(currentWordIndex);
    userInput.value = "";
    feedbackEl.textContent = "";
  }
}

function exitGame() {
  alert(`Game Over! Your final score is: ${score}`);
  location.reload();
}

// Event Listeners
document.getElementById("check-button").addEventListener("click", checkWord);
document.getElementById("next-button").addEventListener("click", nextWord);
document.getElementById("prev-button").addEventListener("click", prevWord);
document.getElementById("exit-button").addEventListener("click", exitGame);

// Initialize Game
showWord(currentWordIndex);
