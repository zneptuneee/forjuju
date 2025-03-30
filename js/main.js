const SETTINGS = {
    bookColor: '#D2B48C',
    bookSize: 90,
    
    backgroundGradient: {
        color1: '#ffdde1',
        color2: '#ee9ca7',
    },
    
    autoPlayOnPageTurn: true,
    
    bookBorderWidth: 20,
    coverFontSize: 3.5,
    pageFontSize: 1.15,
    
    flowerCount: 20,
    flowerMinDuration: 8,
    flowerMaxDuration: 15,
    flowerMinDistance: 15,
    bookAvoidDistance: 35,
    flowerFadeDuration: 1.2,
};

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, delay) {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
}

function init() {
    applySettings();
    
    initBook();
    
    addEventListeners();
    
    addFallingPetalStyles();
    
    createDecorations();
    
    centerBook();
    
    initAudioPlayer();
}

function applySettings() {
    document.documentElement.style.setProperty('--book-color', SETTINGS.bookColor);
    document.documentElement.style.setProperty('--book-size', `${SETTINGS.bookSize}%`);
    document.documentElement.style.setProperty('--book-border-width', `${SETTINGS.bookBorderWidth}px`);
    document.documentElement.style.setProperty('--cover-font-size', `${SETTINGS.coverFontSize}rem`);
    document.documentElement.style.setProperty('--page-font-size', `${SETTINGS.pageFontSize}rem`);
    document.documentElement.style.setProperty('--flower-fade-duration', `${SETTINGS.flowerFadeDuration}s`);
    
    document.documentElement.style.setProperty('--gradient-color-1', SETTINGS.backgroundGradient.color1);
    document.documentElement.style.setProperty('--gradient-color-2', SETTINGS.backgroundGradient.color2);
}

function initAudioPlayer() {
    if (songPlaylist && songPlaylist.length > 0) {
        createAudio(songPlaylist[0].songFile);
        updateSongInfo(0);
    }
}

function addEventListeners() {
    document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);
    document.getElementById('progressBarContainer').addEventListener('click', seekAudio);
    
    createVolumeControl();
    
    window.addEventListener('resize', debounce(centerBook, 150));
    window.addEventListener('orientationchange', centerBook);
    
    window.addEventListener('beforeunload', cleanupAnimations);
    
    document.addEventListener('input', function(e) {
        if (e.target && e.target.id === 'volumeSlider') {
            e.target.style.setProperty('--value', `${e.target.value}%`);
        }
    });
}

window.addEventListener('load', function() {
    init();
    
    setTimeout(() => {
        createVolumeControl();
        
        const volumeSlider = document.getElementById('volumeSlider');
        if (volumeSlider) {
            volumeSlider.style.setProperty('--value', '47%');
        }
    }, 1000);
});