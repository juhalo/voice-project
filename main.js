var personIsKarin = true;
var normalIntonation = true;

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');
    var playButton = document.getElementById('playButton');
    var karinButton = document.getElementById('karinButton');
    var mariaButton = document.getElementById('mariaButton');
    var normalIntonationButton = document.getElementById('normalIntonationButton');
    var modifiedIntonationButton = document.getElementById('modifiedIntonationButton');
    var audioSource = document.getElementById('audioSource');
    

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

    karinButton.addEventListener('click', function () {
        karinButton.classList.add('green')
        mariaButton.classList.remove('green')

        personIsKarin = true;
        if (normalIntonation === true) {
            audioSource.src = './assets/1.mp3';
        } else {
            audioSource.src = './assets/2.mp3';
        }
        audio.load();
    });

    mariaButton.addEventListener('click', function () {
        karinButton.classList.remove('green')
        mariaButton.classList.add('green')

        personIsKarin = false;
        if (normalIntonation === true) {
            audioSource.src = './assets/3.mp3';
        } else {
            audioSource.src = './assets/4.mp3';
        }
        audio.load();
    });

    normalIntonationButton.addEventListener('click', function () {
        normalIntonationButton.classList.add('green')
        modifiedIntonationButton.classList.remove('green')

        normalIntonation = true;
        if (personIsKarin === true) {
            audioSource.src = './assets/1.mp3';
        } else {
            audioSource.src = './assets/3.mp3';
        }
        audio.load();
    });

    modifiedIntonationButton.addEventListener('click', function () {
        normalIntonationButton.classList.remove('green')
        modifiedIntonationButton.classList.add('green')

        normalIntonation = false;
        if (personIsKarin === true) {
            audioSource.src = './assets/2.mp3';
        } else {
            audioSource.src = './assets/4.mp3';
        }
        audio.load();
    });
});
