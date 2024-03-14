let currentTime = 0;

const dict = {
    1: "Off",
    2: "On",
};

const sources = {
    "Normal": "./assets/audio.mp3",
    "Rachel": "./assets/Rachel.mp3",
    "Brian": './assets/Brian.mp3',
    "Choir": './assets/Kuoro_k.mp3',
    "Robot": './assets/Robo_k.mp3',
};

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');
    var playButton = document.getElementById('playButton');
    var normalButton = document.getElementById('normalButton');
    var rachelButton = document.getElementById('rachelButton');
    var brianButton = document.getElementById('brianButton');
    var kuoroButton = document.getElementById('kuoroButton');
    var audioSource = document.getElementById('audioSource');
    var rangeInput = document.getElementById("rangeInput");
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            currentTime = audio.currentTime;
            normalButton.classList.remove('green')
            rachelButton.classList.remove('green')
            brianButton.classList.remove('green')
            kuoroButton.classList.remove('green')
            robotButton.classList.remove('green')

            button.classList.add('green')

            rangeInput.value = 1;
            document.getElementById("rangevalue").textContent = dict[rangeInput.value];
    
            var isPaused = audio.paused;
    
            audioSource.src = sources[button.textContent];
            audio.load();
            if (!isPaused) {
                audio.play();
            }
        });
    });

    rangeInput.addEventListener("change", function() {
        document.getElementById("rangevalue").textContent = dict[rangeInput.value];
        currentTime = audio.currentTime;
        normalButton.classList.add('green')
        rachelButton.classList.remove('green')
        brianButton.classList.remove('green')
        kuoroButton.classList.remove('green')
        robotButton.classList.remove('green')

        var isPaused = audio.paused;

        audioSource.src = './assets/Vaihtelu_kk.mp3';
        audio.load();
        if (!isPaused) {
            audio.play();
        }
    }, false);
    

    playButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playButton.classList.remove('play');
            playButton.classList.add('pause');
        } else {
            audio.pause();
            playButton.classList.remove('pause');
            playButton.classList.add('play');
        }
    });

    audio.addEventListener('loadedmetadata', function() {
        audio.currentTime = currentTime;
    });
});

function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active-page');
    });

    var selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active-page');
}
