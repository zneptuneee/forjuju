function addDarkModeToggle() {
    const toggleContainer = document.createElement('div');
    toggleContainer.id = 'dark-mode-toggle';
    toggleContainer.style.position = 'fixed';
    toggleContainer.style.top = '20px';
    toggleContainer.style.right = '20px';
    toggleContainer.style.zIndex = '100';
    toggleContainer.style.cursor = 'pointer';
    toggleContainer.style.background = 'rgba(255, 255, 255, 0.2)';
    toggleContainer.style.backdropFilter = 'blur(5px)';
    toggleContainer.style.borderRadius = '50%';
    toggleContainer.style.width = '40px';
    toggleContainer.style.height = '40px';
    toggleContainer.style.display = 'flex';
    toggleContainer.style.justifyContent = 'center';
    toggleContainer.style.alignItems = 'center';
    toggleContainer.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    toggleContainer.style.transition = 'transform 0.3s ease, background 0.3s ease';
    
    const eyeIcon = document.createElement('i');
    eyeIcon.className = 'fas fa-eye';
    eyeIcon.style.fontSize = '20px';
    eyeIcon.style.color = '#333';
    toggleContainer.appendChild(eyeIcon);
    
    let isDarkMode = false;
    
    toggleContainer.addEventListener('mouseenter', () => {
        toggleContainer.style.transform = 'scale(1.1)';
    });
    
    toggleContainer.addEventListener('mouseleave', () => {
        toggleContainer.style.transform = 'scale(1)';
    });
    
    toggleContainer.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.style.background = '#000';
            eyeIcon.className = 'fas fa-eye-slash';
            
            const flowers = document.querySelectorAll('.flower');
            flowers.forEach(flower => {
                flower.style.opacity = '0';
                flower.style.visibility = 'hidden';
            });
            
            const petals = document.querySelectorAll('.petal');
            petals.forEach(petal => {
                petal.style.opacity = '0';
                petal.style.visibility = 'hidden';
            });
            
            toggleContainer.style.background = 'rgba(255, 255, 255, 0.1)';
            eyeIcon.style.color = '#fff';
        } else {
            document.body.style.background = '';
            eyeIcon.className = 'fas fa-eye';
            
            const flowers = document.querySelectorAll('.flower');
            flowers.forEach(flower => {
                flower.style.opacity = '';
                flower.style.visibility = '';
            });
            
            const petals = document.querySelectorAll('.petal');
            petals.forEach(petal => {
                petal.style.opacity = '';
                petal.style.visibility = '';
            });
            
            toggleContainer.style.background = 'rgba(255, 255, 255, 0.2)';
            eyeIcon.style.color = '#333';
        }
    });
    
    document.body.appendChild(toggleContainer);
}

window.addEventListener('load', function() {
    setTimeout(addDarkModeToggle, 500);
});