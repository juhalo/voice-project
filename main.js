let currentTime = 0;

const dict = {
    1: "Off",
    2: "On",
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

    normalButton.addEventListener('click', function () {
        currentTime = audio.currentTime;
        normalButton.classList.add('green')
        rachelButton.classList.remove('green')
        brianButton.classList.remove('green')
        kuoroButton.classList.remove('green')
        robotButton.classList.remove('green')
        rangeInput.value = 1;
        document.getElementById("rangevalue").textContent = dict[rangeInput.value];

        var isPaused = audio.paused;

        audioSource.src = './assets/audio.mp3';
        audio.load();
        if (!isPaused) {
            audio.play();
        }
    });

    rachelButton.addEventListener('click', function () {
        currentTime = audio.currentTime;
        normalButton.classList.remove('green')
        brianButton.classList.remove('green')
        kuoroButton.classList.remove('green')
        robotButton.classList.remove('green')
        rachelButton.classList.add('green')
        rangeInput.value = 1;
        document.getElementById("rangevalue").textContent = dict[rangeInput.value];

        var isPaused = audio.paused;

        audioSource.src = './assets/Rachel.mp3'
        audio.load();
        if (!isPaused) {
            audio.play();
        }
    });

    brianButton.addEventListener('click', function () {
        currentTime = audio.currentTime;
        normalButton.classList.remove('green')
        rachelButton.classList.remove('green')
        kuoroButton.classList.remove('green')
        robotButton.classList.remove('green')
        brianButton.classList.add('green')
        rangeInput.value = 1;
        document.getElementById("rangevalue").textContent = dict[rangeInput.value];

        var isPaused = audio.paused;

        audioSource.src = './assets/Brian.mp3'
        audio.load();
        if (!isPaused) {
            audio.play();
        }
    });

    kuoroButton.addEventListener('click', function () {
        currentTime = audio.currentTime;
        normalButton.classList.remove('green')
        rachelButton.classList.remove('green')
        brianButton.classList.remove('green')
        robotButton.classList.remove('green')
        kuoroButton.classList.add('green')
        rangeInput.value = 1;
        document.getElementById("rangevalue").textContent = dict[rangeInput.value];

        var isPaused = audio.paused;

        audioSource.src = './assets/Kuoro_k.mp3'
        audio.load();
        if (!isPaused) {
            audio.play();
        }
    });

    robotButton.addEventListener('click', function () {
        currentTime = audio.currentTime;
        normalButton.classList.remove('green')
        rachelButton.classList.remove('green')
        brianButton.classList.remove('green')
        kuoroButton.classList.remove('green')
        robotButton.classList.add('green')
        rangeInput.value = 1;
        document.getElementById("rangevalue").textContent = dict[rangeInput.value];

        var isPaused = audio.paused;

        audioSource.src = './assets/Robo_k.mp3'
        audio.load();
        if (!isPaused) {
            audio.play();
        }
    });

    audio.addEventListener('loadedmetadata', function() {
        // Set current time to the saved time
        audio.currentTime = currentTime;
    });
});

function showPage(pageId) {
    // Hide all pages
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active-page');
    });

    // Show the selected page
    var selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active-page');
}
