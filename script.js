
const character = document.querySelectorAll('.character');
let characterStage = 0;

const firstButton = document.querySelector('.scroll-icon');
const wrapperStart = document.querySelector('.wrapper-start');

firstButton.addEventListener('click', () => {
    wrapperStart.style.display = "none";
});

/*---------- Intro ---------------*/

const introText = document.querySelectorAll('.intro-text');
const arrow = document.getElementById('arrow');
const startButton = document.getElementById('start-button');

let introTextIndex = 0;

arrow.addEventListener('click', () => {
    introText[introTextIndex].classList.remove('active');
    introTextIndex++;
    if(introTextIndex < introText.length) {
        introText[introTextIndex].classList.add('active');
    }
    if (introTextIndex === introText.length - 1) {
        arrow.style.display = "none";
        startButton.style.display = "flex";
    }
});

/* ---------------- Start Button -----------------*/

const planner = document.querySelector('.wrapper-planner');
const calendar = document.querySelector('.calendar');
const firstCharacter = document.getElementById('first-character');
const energyContainer = document.querySelector('.energy-container');
const starContainer = document.querySelector('.star-container');
const wrapperIntro = document.querySelector('.wrapper-intro');
const statsBackground = document.querySelector('.stats-background');

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.style.display = "none";
    planner.style.display = "block";
    firstCharacter.classList.add('character-move');
    energyContainer.style.display = "flex";
    starContainer.style.display = "flex";
    wrapperIntro.style.zIndex = "1";
    statsBackground.style.display = "flex";
}

/* ----------------- Open Pop-up ----------*/

document.querySelectorAll('.plus').forEach(plus => {
    plus.addEventListener('click', () => {
        currentSlot = plus.parentElement;
        document.getElementById(plus.dataset.target).style.display = 'block';
    })
})

/* ------------ Add Text in Calendar + Next Plus Button -----------*/

let currentSlot = null;
let currentPlusIndex = 0;
const plusButtons = document.querySelectorAll('.plus');

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        if (currentSlot) {
            currentSlot.querySelector('.calendar-text').textContent = option.dataset.text;

            currentSlot.querySelector('.plus').classList.remove('active');

            currentPlusIndex++;

            if (plusButtons[currentPlusIndex]) {
                plusButtons[currentPlusIndex].classList.add('active');
            }
        }

        if (option.dataset.text) {
            writing.play();
        }
    });
});

/*------------- Energy Bar + Star Count----------*/

const energySegments = document.querySelectorAll('.energy-segment');
let energy = energySegments.length;

const star = document.querySelectorAll('.star');
let starCount = 0;

var question = document.querySelectorAll('.question-background');

function updateCharacter() {
    character.forEach((character, index) => {
        character.classList.toggle('active', index === characterStage);
    });
 }

function updateEnergyBar() {
    energySegments.forEach((segment, index) => {
        segment.classList.toggle('active', index < energy);
    });
 }

function updateStars() {
    star.forEach((el, index) => {
        if (index < starCount) {
            el.src = "images/star.svg";
        } else {
            el.src = "images/star-inactive.svg";
        }
    });
 }
    
updateEnergyBar();
updateStars();

const message = document.querySelector('.message');
const subMessage = document.querySelector('.sub-message');
const resultTitle = document.querySelector('.result-title');
const speechBubble = document.getElementById('speech-bubble');
const subheading = document.querySelector('.subheading');
const commentText = document.querySelectorAll('.comment-text');

let commentTextIndex = 0;

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.action === 'remove' && characterStage < character.length && energy > 0) {
                characterStage++;
                energy--;
                if (starCount < star.length) {
                    starCount++;
                }
        }    
        if (button.dataset.action === 'add' && characterStage > 0 && energy < energySegments.length) {
                energy++;
        }
        updateCharacter();
        updateEnergyBar();
        updateStars();

/*---- Fail Screen -----*/

        if (button.dataset.fail === "true") {
            document.getElementById("fail-screen").style.display = "flex"; 
            music.stop();
            lose.play();
            return;     
        }

/*---------Result Screen --------*/

        if (button.dataset.final === "true") {
            document.getElementById("result-screen").style.display = "flex";
            calendar.style.display = "none";
            music.stop()

            if (starCount > 5) {
                applause.play();
                resultTitle.textContent = "Congratulations!";
                subheading.textContent = "You would make the perfect Housewife";
                message.textContent = "You put your own needs last and dedicated your day to your husband. But why do you look so defeated? Shouldn’t you be feeling fulfilled?";
                subMessage.textContent = "Maybe you've experienced some of this:";
            }
            else {
                lose.play();
                resultTitle.textContent = "You Lose";
                subheading.textContent = "Try harder next time";
                message.textContent = "Your choices didn’t align with the expectations of a 1950's housewife! Maybe deep down you value your free will and independency";
                subMessage.textContent = "What to be aware of:";
            }

            question.forEach(question => {
                question.style.display = "none";
            });

            return;     
        }
    
/*------ Comments -----*/

        if (button.dataset.comment) {
            const activeComment = document.getElementById(button.dataset.target);
            speechBubble.style.display = "flex"; 
            thinking.play();
            commentText.forEach(commentText => {
                commentText.style.display = "none";
            })
            if (activeComment) {
                activeComment.style.display = "block";
            }
            setTimeout(() => {
                speechBubble.style.display = "none";
            }, 4000);  
        }

        question.forEach(question => question.style.display = "none");

    });
});

const resultNext = document.querySelector(".result-next");
const resultInfoContainer = document.querySelector(".result-info-container");

resultNext.addEventListener('click', resultInfo);

function resultInfo() {
    resultInfoContainer.style.display = "flex";
    document.getElementById("result-screen").style.display = "none";
}

/*-------------------- MUSIC -----------------*/

var music = new Howl({
    src: ['../images/music.ogg'],
    autoplay: true,
    loop: true,
    volume: 0.1
  });
  var mute = false;

  var applause = new Howl({
    src: ['../images/applause.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.2
  });

var lose = new Howl({
    src: ['../images/lose.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.2
  });

  var writing = new Howl({
    src: ['../images/writing.mp3'],
    autoplay: false,
    loop: false,
    volume: 1
  });

    var thinking = new Howl({
    src: ['../images/thinking.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.6
  });