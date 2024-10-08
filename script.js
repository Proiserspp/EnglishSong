const video = document.getElementById('video');
const verses = document.querySelectorAll('.verse');

// Define an array of video sources and corresponding times (start, end) for each verse
const verseData = [
    { src: 'pixverse%2Fmp4%2Fmedia%2F5404e598-056b-4440-be9a-605df9a6a0e3_seed1017060603.mp4', startTime: 0, endTime: 10 },
    { src: 'verse2.mp4', startTime: 10, endTime: 20 },
    { src: 'verse3.mp4', startTime: 20, endTime: 30 },
];

let currentVerseIndex = 0;

function updateVerseHighlight() {
    verses.forEach((verse, index) => {
        verse.classList.toggle('highlighted', index === currentVerseIndex);
    });
}

function changeVideoSource() {
    video.src = verseData[currentVerseIndex].src;
    video.currentTime = verseData[currentVerseIndex].startTime;
    video.play();
}

video.addEventListener('timeupdate', () => {
    const currentTime = video.currentTime;
    if (currentTime >= verseData[currentVerseIndex].endTime) {
        currentVerseIndex = (currentVerseIndex + 1) % verseData.length;
        changeVideoSource();
        updateVerseHighlight();
    }
});

changeVideoSource();
updateVerseHighlight();
