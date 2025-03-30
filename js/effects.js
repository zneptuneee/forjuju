const activeFlowers = new Set();
const activePetals = new Set();
let flowerPositions = [];

function createDecorations() {
    const container = document.querySelector('body');
    
    for (let i = 0; i < 20; i++) {
        createPetal(container);
    }
    
    flowerPositions = [];
    createFlowers(container, SETTINGS.flowerCount);
}

function createFlowers(container, count) {
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const adjustedCount = viewportWidth < 768 ? Math.min(count, 12) : count;
    
    for (let i = 0; i < adjustedCount; i++) {
        const position = getNewFlowerPosition();
        if (position) {
            createFlower(container, position.x, position.y);
            flowerPositions.push(position);
        }
    }
}

function getNewFlowerPosition() {
    const buffer = 10;
    const centerX = 50;
    const centerY = 50;
    const bookAvoidRadius = SETTINGS.bookAvoidDistance;
    const minDistance = SETTINGS.flowerMinDistance;
    
    let attempts = 0;
    const maxAttempts = 50;
    
    while (attempts < maxAttempts) {
        attempts++;
        
        const x = buffer + Math.random() * (100 - 2 * buffer);
        const y = buffer + Math.random() * (100 - 2 * buffer);
        
        const distanceToCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        if (distanceToCenter < bookAvoidRadius) {
            continue;
        }
        
        let tooClose = false;
        for (const pos of flowerPositions) {
            const distance = Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2));
            if (distance < minDistance) {
                tooClose = true;
                break;
            }
        }
        
        if (!tooClose) {
            return { x, y };
        }
    }
    
    return null;
}

function createFlower(container, leftPos, topPos) {
    const flower = document.createElement('div');
    flower.className = 'flower';
    activeFlowers.add(flower);
    
    flower.style.left = `${leftPos}vw`;
    flower.style.top = `${topPos}vh`;
    
    const sizeVariation = 0.8 + (Math.random() * 0.4);
    flower.style.transform = `scale(${sizeVariation})`;
    
    const center = document.createElement('div');
    center.className = 'flower-center';
    
    center.style.display = 'block';
    center.style.background = '#FFDB58';
    center.style.boxShadow = '0 0 8px rgba(255, 219, 88, 0.5)';
    
    const centerDetail = document.createElement('div');
    centerDetail.style.position = 'absolute';
    centerDetail.style.width = '100%';
    centerDetail.style.height = '100%';
    centerDetail.style.top = '0';
    centerDetail.style.left = '0';
    centerDetail.style.background = 'radial-gradient(circle at center, rgba(255,255,255,0.6) 0%, transparent 70%)';
    
    center.appendChild(centerDetail);
    flower.appendChild(center);
    
    const petalSet = document.createElement('div');
    petalSet.className = 'petal-set';
    
    petalSet.style.animationDuration = `${20 + Math.random() * 10}s`;
    
    for (let i = 0; i < 6; i++) {
        const petal = document.createElement('div');
        petal.className = 'flower-petal';
        
        const angle = i * 60;
        petal.style.transform = `rotate(${angle}deg)`;
        
        petalSet.appendChild(petal);
    }
    
    flower.appendChild(petalSet);
    
    flower.style.pointerEvents = 'auto';
    flower.style.cursor = 'default';
    
    flower.addEventListener('mouseenter', function() {
        flower.style.transform = `scale(${sizeVariation * 1.1})`;
        flower.style.filter = 'brightness(1.1)';
        flower.style.zIndex = '10';
    });
    
    flower.addEventListener('mouseleave', function() {
        flower.style.transform = `scale(${sizeVariation})`;
        flower.style.filter = 'brightness(1)';
        flower.style.zIndex = '1';
    });
    
    container.appendChild(flower);
    
    startFlowerFadeCycle(flower, leftPos, topPos, container);
}

function startFlowerFadeCycle(flower, leftPos, topPos, container) {
    const minDuration = SETTINGS.flowerMinDuration;
    const maxDuration = SETTINGS.flowerMaxDuration;
    let duration = Math.random() * (maxDuration - minDuration) + minDuration;
    
    flower.style.opacity = '1';
    
    const fadeTimer = setTimeout(() => {
        flower.style.opacity = '0';
        
        const repositionTimer = setTimeout(() => {
            flowerPositions = flowerPositions.filter(pos => pos.x !== parseFloat(leftPos) || pos.y !== parseFloat(topPos));
            
            let newPos = getNewFlowerPosition();
            
            if (!newPos) {
                const oldMinDistance = SETTINGS.flowerMinDistance;
                SETTINGS.flowerMinDistance = oldMinDistance * 0.7;
                newPos = getNewFlowerPosition();
                SETTINGS.flowerMinDistance = oldMinDistance;
                
                if (!newPos) {
                    newPos = {
                        x: 10 + Math.random() * 80, 
                        y: 10 + Math.random() * 80
                    };
                }
            }
            
            flowerPositions.push(newPos);
            
            flower.style.left = `${newPos.x}vw`;
            flower.style.top = `${newPos.y}vh`;
            
            setTimeout(() => {
                flower.style.opacity = '1';
            }, 50);
            
            startFlowerFadeCycle(flower, newPos.x, newPos.y, container);
        }, SETTINGS.flowerFadeDuration * 1000);
        
        flower.repositionTimer = repositionTimer;
    }, duration * 1000);
    
    flower.fadeTimer = fadeTimer;
}

function createPetal(container) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    
    const size = Math.random() * 20 + 10;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.5}px`;
    
    petal.style.left = `${Math.random() * 100}vw`;
    
    const delay = Math.random() * 10;
    petal.style.animationDelay = `${delay}s`;
    
    const rotation = Math.random() * 360;
    petal.style.transform = `rotate(${rotation}deg)`;
    
    const hue = Math.random() * 20 + 340;
    petal.style.backgroundColor = `hsla(${hue}, 100%, 80%, 0.6)`;
    
    container.appendChild(petal);
}

function cleanupAnimations() {
    activeFlowers.forEach(flower => {
        if (flower.fadeTimer) {
            clearTimeout(flower.fadeTimer);
        }
        if (flower.repositionTimer) {
            clearTimeout(flower.repositionTimer);
        }
    });
    
    activePetals.forEach(petal => {
        if (petal.parentNode) {
            petal.parentNode.removeChild(petal);
        }
    });
    
    activeFlowers.clear();
    activePetals.clear();
}

function addFallingPetalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes falling-petal {
            0% { 
                transform: translateY(-5vh) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.8;
            }
            100% { 
                transform: translateY(105vh) translateX(${Math.random() * 20 - 10}vw) rotate(${Math.random() * 360}deg);
                opacity: 0;
            }
        }

        .flower {
            transition: opacity var(--flower-fade-duration) ease-in-out, transform 0.3s ease;
            will-change: transform, opacity;
        }

        .falling-petal {
            will-change: transform, opacity;
            position: fixed;
            z-index: 5;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
}