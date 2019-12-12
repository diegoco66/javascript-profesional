import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ 
    videoSource: video, 
    plugins: [
        new AutoPlay()
    ]
});

const button = document.querySelector('#play');
button.onclick = () => player.togglePlay();

const btnMute = document.querySelector('#mute');
btnMute.onclick = () => player.toggleMute();