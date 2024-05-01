const words = [
  "supercalifragilisticexpialidocious",
  "anticonstitutionnellement",
  "hippopotomonstrosesquippedaliophobie",
  "electroencephalographie",
  "pneumonoultramicroscopicsilicovolcanoconiose",
  "honorificabilitudinitatibus",
  "incomprehensiblement",
  "spectrophotometriquement",
  "deshydrogenation",
  "hexakosioihexekontahexaphobie",
  "otorhinolaryngologiste",
  "anticonstitutionnalisme",
  "megalomanie",
  "parallelepipedique",
  "ineffablement",
  "sophistication",
  "transsubstantiation",
  "electrocardiogramme",
  "quadrillionieme",
  "psychopharmacologie",
  "dendrochronologie",
  "demultiplexeur",
  "inextinguibilite",
  "radiocommunication",
  "mediocrement",
  "megalopole",
  "microbiologie",
  "desintoxication",
  "decaphonisme",
  "reincarnation",
  "incommensurablement",
  "thrombocytemie",
  "anesthesiologie",
  "heterogeneite",
  "autocorrecteur",
  "phenomenologie",
  "telecommunications",
  "bureaucratique",
  "polytechnique",
  "astrophysique",
  "revolutionnairement",
  "dysfonctionnement",
  "mecaniquement",
  "microelectronique",
  "irresponsabilite",
  "psychotherapeutique",
  "neurochirurgien",
  "aerodynamique",
  "intraoculaire",
  "immunohematologie"
];

let word;
let guessedLetters = [];
let remainingAttempts;

function initGame() {
    word = words[Math.floor(Math.random() * words.length)];
    remainingAttempts = 6;
    guessedLetters = [];
    console.log(word);

    displayWord();
    displayLetters();
}

function displayWord() {
    const wordContainer = document.getElementById('wordContainer');
    wordContainer.innerHTML = '';

    word.split('').forEach(letter => {
        const span = document.createElement('span');
        span.textContent = guessedLetters.includes(letter) ? letter : '_';
        wordContainer.appendChild(span);
    });
}

function displayLetters() {
    const lettersContainer = document.getElementById('lettersContainer');
    lettersContainer.innerHTML = '';

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    alphabet.split('').forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.classList.add('letter');
        button.addEventListener('click', () => checkLetter(letter));
        lettersContainer.appendChild(button);
    });
}

function checkLetter(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!word.includes(letter)) {
            remainingAttempts--;
        }
        displayWord();
        displayLetters();
        checkGameStatus();
    }
}

function checkGameStatus() {
  if (remainingAttempts === 0) {
      alert(`You lost! The word was "${word}".`);
      initGame();
  } else if (word.split('').every(letter => guessedLetters.includes(letter))) {
      alert('Congratulations! You won!');
      initGame();
  }
  document.getElementById('remainingAttempts').textContent = remainingAttempts;
}

function resetGame() {
    initGame();
}

initGame();
