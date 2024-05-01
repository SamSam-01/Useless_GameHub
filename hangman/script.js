const words = [
  "Supercalifragilisticexpialidocious",
  "Anticonstitutionnellement",
  "Hippopotomonstrosesquippedaliophobie",
  "Electroencéphalographie",
  "Pneumonoultramicroscopicsilicovolcanoconiose",
  "Honorificabilitudinitatibus",
  "Incompréhensiblement",
  "Spectrophotométriquement",
  "Déshydrogénation",
  "Hexakosioihexekontahexaphobie",
  "Otorhinolaryngologiste",
  "Anticonstitutionnalisme",
  "Mégalomanie",
  "Parallélépipédique",
  "Ineffablement",
  "Sophistication",
  "Transsubstantiation",
  "Électrocardiogramme",
  "Quadrillionième",
  "Psychopharmacologie",
  "Dendrochronologie",
  "Démultiplexeur",
  "Inextinguibilité",
  "Radiocommunication",
  "Médiocrement",
  "Mégalopole",
  "Microbiologie",
  "Désintoxication",
  "Décaphonisme",
  "Réincarnation",
  "Incommensurablement",
  "Thrombocytopénie",
  "Anesthésiologie",
  "Hétérogénéité",
  "Autocorrecteur",
  "Phénoménologie",
  "Télécommunications",
  "Bureaucratique",
  "Polytechnique",
  "Astrophysique",
  "Révolutionnairement",
  "Dysfonctionnement",
  "Mécaniquement",
  "Microélectronique",
  "Irresponsabilité",
  "Psychothérapeutique",
  "Neurochirurgien",
  "Aérodynamique",
  "Intraoculaire",
  "Immunohématologie"
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
}

function resetGame() {
    initGame();
}

initGame();
