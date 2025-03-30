let audio;
let isPlaying = false;

function createAudio(src) {
    if (audio) {
        audio.pause();
        audio.src = '';
    }
    
    audio = new Audio(src);
    
    audio.addEventListener('timeupdate', throttle(updateProgress, 100));
    
    audio.addEventListener('ended', () => {
        audio.currentTime = 0;
        audio.play().catch(error => {
            console.log("Audio replay failed: ", error);
        });
    });
    
    audio.addEventListener('loadedmetadata', () => {
        updateTimeInfo();
    });
    
    audio.addEventListener('error', (e) => {
        console.error("Audio error:", e);
    });
}

function togglePlayPause() {
    if (isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
}

function playAudio() {
    audio.play().catch(error => {
        console.log("Audio play failed: ", error);
    });
    isPlaying = true;
    document.getElementById('playPauseBtn').innerHTML = '<i class="fas fa-pause"></i>';
    document.getElementById('vinyl').classList.add('playing');
}

function pauseAudio() {
    if (audio) {
        audio.pause();
        isPlaying = false;
        document.getElementById('playPauseBtn').innerHTML = '<i class="fas fa-play"></i>';
        document.getElementById('vinyl').classList.remove('playing');
    }
}

function updateProgress() {
    if (audio) {
        const percent = (audio.currentTime / audio.duration) * 100 || 0;
        document.getElementById('progressBar').style.width = `${percent}%`;
        updateTimeInfo();
        
        const playPauseBtn = document.getElementById('playPauseBtn');
        if (playPauseBtn) {
            playPauseBtn.style.visibility = 'visible';
            playPauseBtn.style.opacity = '1';
        }
    }
}

function seekAudio(e) {
    if (audio) {
        const container = document.getElementById('progressBarContainer');
        const rect = container.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        audio.currentTime = pos * audio.duration;
        updateProgress();
    }
}

function updateTimeInfo() {
    if (audio) {
        const current = formatTime(audio.currentTime);
        const total = formatTime(audio.duration);
        document.getElementById('timeInfo').textContent = `[${current}] — [${total}]`;
    }
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

function updateSongInfo(songIndex) {
    if (songIndex < 0 || songIndex >= songPlaylist.length) {
        console.error("Invalid song index:", songIndex);
        return;
    }
    
    document.getElementById('songName').textContent = songPlaylist[songIndex].songTitle;
    document.getElementById('artistName').textContent = songPlaylist[songIndex].artist;
    
    document.getElementById('vinyl').style.backgroundImage = `url('${songPlaylist[songIndex].coverImage}')`;
    
    adjustPlayerWidth();
}

function createVolumeControl() {
    setTimeout(() => {
        const playerContainer = document.getElementById('playerContainer');
        
        if (playerContainer) {
            console.log("Adding volume control");
            
            const existingControl = document.getElementById('volume-control-wrapper');
            if (existingControl) {
                existingControl.remove();
            }
            
            const volumeControlWrapper = document.createElement('div');
            volumeControlWrapper.id = 'volume-control-wrapper';
            volumeControlWrapper.className = 'volume-control-wrapper';
            
            const volumeIconContainer = document.createElement('div');
            volumeIconContainer.className = 'volume-icon-container';
            
            const volumeIcon = document.createElement('i');
            volumeIcon.className = 'fas fa-volume-up';
            volumeIconContainer.appendChild(volumeIcon);
            
            const sliderContainer = document.createElement('div');
            sliderContainer.className = 'slider-container';
            sliderContainer.style.position = 'relative';
            
            const volumeSlider = document.createElement('input');
            volumeSlider.type = 'range';
            volumeSlider.min = '0';
            volumeSlider.max = '100';
            volumeSlider.value = '47';
            volumeSlider.id = 'volumeSlider';
            
            const progressFill = document.createElement('div');
            progressFill.className = 'progress-filled';
            progressFill.style.width = '47%';
            sliderContainer.appendChild(progressFill);
            
            sliderContainer.appendChild(volumeSlider);
            
            volumeControlWrapper.appendChild(volumeIconContainer);
            volumeControlWrapper.appendChild(sliderContainer);
            
            playerContainer.parentNode.insertBefore(volumeControlWrapper, playerContainer);
            
            if (audio) {
                audio.volume = 0.47;
            }
            
            volumeSlider.addEventListener('input', function() {
                const value = this.value;
                if (audio) {
                    audio.volume = value / 100;
                }
                updateVolumeIcon(value);
                
                progressFill.style.width = value + '%';
            });
            
            playerContainer.addEventListener('transitionend', function() {
                if (playerContainer.classList.contains('visible')) {
                    volumeControlWrapper.style.opacity = '1';
                    volumeControlWrapper.style.visibility = 'visible';
                } else {
                    volumeControlWrapper.style.opacity = '0';
                    volumeControlWrapper.style.visibility = 'hidden';
                }
            });
            
            if (playerContainer.classList.contains('visible')) {
                volumeControlWrapper.style.opacity = '1';
                volumeControlWrapper.style.visibility = 'visible';
            } else {
                volumeControlWrapper.style.opacity = '0';
                volumeControlWrapper.style.visibility = 'hidden';
            }
        }
    }, 300);
}

function updateVolumeIcon(value) {
    const volumeIcon = document.querySelector('.volume-icon-container i');
    
    if (volumeIcon) {
        if (value == 0) {
            volumeIcon.className = 'fas fa-volume-mute';
        } else if (value < 50) {
            volumeIcon.className = 'fas fa-volume-down';
        } else {
            volumeIcon.className = 'fas fa-volume-up';
        }
    }
}