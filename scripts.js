let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const playPauseButton = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress');
    const volumeControl = document.getElementById('volume');
    const muteButton = document.getElementById('mute');

    playPauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    video.addEventListener('timeupdate', () => {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.value = progress;
    });

    progressBar.addEventListener('input', () => {
        const seekTime = (progressBar.value / 100) * video.duration;
        video.currentTime = seekTime;
    });

    volumeControl.addEventListener('input', () => {
        video.volume = volumeControl.value;
        if (video.volume === 0) {
            muteButton.textContent = 'Unmute';
        } else {
            muteButton.textContent = 'Mute';
        }
    });

    muteButton.addEventListener('click', () => {
        if (video.volume === 0) {
            video.volume = volumeControl.value;
            muteButton.textContent = 'Mute';
        } else {
            video.volume = 0;
            volumeControl.value = 0;
            muteButton.textContent = 'Unmute';
        }
    });
});
