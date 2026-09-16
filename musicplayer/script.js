const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

const songs = [
    {
        title: "Da Me Tol Kasor",
        artist: "Gul Panrra",
        audio: "images/music/song 1.mp3",
        cover: "images/cover 1.jpg"
    },
    {
        title: "Tery Bin Adhura",
        artist: "Arijit sing",
        audio: "images/music/song 2.mp3",
        cover: "images/cover 2.jpg"
    },
    {
        title: "RastaY Wahi Hay",
        artist: "Laila Khan",
        audio: "images/music/song 3.mp3",
        cover: "images/cover 3.jpg"
    }
];

let songIndex = 0;
let isPlaying = false;

function loadSong(index) {
    const song = songs[index];

    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    audio.src = song.audio;

    document.querySelectorAll(".song").forEach((item, i) => {
        item.classList.toggle("active", i === index);
    });
}

function playSong() {
    audio.play();
    isPlaying = true;
    playBtn.textContent = "⏸";
}

function pauseSong() {
    audio.pause();
    isPlaying = false;
    playBtn.textContent = "▶";
}

playBtn.addEventListener("click", () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

nextBtn.addEventListener("click", () => {
    songIndex++;

    if (songIndex >= songs.length) {
        songIndex = 0;
    }

    loadSong(songIndex);
    playSong();
});

prevBtn.addEventListener("click", () => {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songIndex);
    playSong();
});

audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
    }

    currentTime.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration);
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

audio.addEventListener("ended", () => {
    nextBtn.click();
});

document.querySelectorAll(".song").forEach(song => {
    song.addEventListener("click", () => {
        songIndex = Number(song.dataset.index);
        loadSong(songIndex);
        playSong();
    });
});

function formatTime(time) {
    if (isNaN(time)) {
        return "0:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

loadSong(songIndex);