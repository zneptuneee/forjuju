(function() {
    const style = document.createElement('style');
    style.textContent = `
        body > .container {
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        
        body.unlocked > .container {
            opacity: 1;
            visibility: visible;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        
        #protection-screen {
            transition: opacity 0.5s ease;
        }
        
        .password-container {
            animation: float 6s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);
})();

const REAL_PASSWORD = "06iloveyourhair29";

const EASTER_EGG_PASSWORDS = ["aot", "attack on titan", "attackontitan"];
const TYPING_SPEED = 8;
let failedAttempts = 0;
let easterEggFailedAttempts = 0;
let hintsMode = false;
let thinkMode = false;
let keepTryingMode = false;
let currentText = "Enter password to gain access";

function createProtectionScreen() {
    const protectionScreen = document.createElement('div');
    protectionScreen.id = 'protection-screen';
    protectionScreen.style.position = 'fixed';
    protectionScreen.style.top = '0';
    protectionScreen.style.left = '0';
    protectionScreen.style.width = '100%';
    protectionScreen.style.height = '100%';
    protectionScreen.style.backgroundColor = '#000';
    protectionScreen.style.display = 'flex';
    protectionScreen.style.flexDirection = 'column';
    protectionScreen.style.justifyContent = 'center';
    protectionScreen.style.alignItems = 'center';
    protectionScreen.style.zIndex = '9999';
    protectionScreen.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    
    const passwordContainer = document.createElement('div');
    passwordContainer.className = 'password-container';
    passwordContainer.style.display = 'flex';
    passwordContainer.style.flexDirection = 'column';
    passwordContainer.style.alignItems = 'center';
    passwordContainer.style.justifyContent = 'center';
    passwordContainer.style.padding = '30px';
    passwordContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
    passwordContainer.style.borderRadius = '10px';
    passwordContainer.style.backdropFilter = 'blur(5px)';
    passwordContainer.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    passwordContainer.style.width = '350px';
    passwordContainer.style.maxWidth = '90%';
    passwordContainer.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    passwordContainer.style.transform = 'translateY(0)';
    passwordContainer.style.opacity = '0';
    
    setTimeout(() => {
        passwordContainer.style.opacity = '1';
        passwordContainer.style.transform = 'translateY(0)';
    }, 300);
    
    const messageText = document.createElement('p');
    messageText.id = 'password-message';
    messageText.textContent = currentText;
    messageText.style.color = '#fff';
    messageText.style.fontSize = '1.2rem';
    messageText.style.marginBottom = '20px';
    messageText.style.textAlign = 'center';
    messageText.style.minHeight = '60px';
    messageText.style.display = 'flex';
    messageText.style.alignItems = 'center';
    messageText.style.justifyContent = 'center';
    
    const passwordInput = document.createElement('input');
    passwordInput.id = 'password-input';
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Enter password...';
    passwordInput.style.width = '100%';
    passwordInput.style.padding = '12px 15px';
    passwordInput.style.marginBottom = '15px';
    passwordInput.style.border = '1px solid rgba(255, 255, 255, 0.1)';
    passwordInput.style.borderRadius = '5px';
    passwordInput.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    passwordInput.style.color = '#fff';
    passwordInput.style.fontSize = '1rem';
    passwordInput.style.outline = 'none';
    passwordInput.style.transition = 'border-color 0.3s ease, transform 0.2s ease';
    
    passwordInput.addEventListener('focus', () => {
        passwordInput.style.borderColor = 'rgba(255, 255, 255, 0.3)';
    });
    
    passwordInput.addEventListener('blur', () => {
        passwordInput.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
    
    const continueButton = document.createElement('button');
    continueButton.id = 'continue-button';
    continueButton.textContent = 'Continue';
    continueButton.style.padding = '12px 25px';
    continueButton.style.backgroundColor = '#333';
    continueButton.style.color = '#fff';
    continueButton.style.border = 'none';
    continueButton.style.borderRadius = '5px';
    continueButton.style.fontSize = '1rem';
    continueButton.style.cursor = 'pointer';
    continueButton.style.transition = 'background-color 0.3s ease, transform 0.2s ease';
    
    continueButton.addEventListener('mouseenter', () => {
        continueButton.style.backgroundColor = '#444';
    });
    
    continueButton.addEventListener('mouseleave', () => {
        continueButton.style.backgroundColor = '#333';
    });
    
    continueButton.addEventListener('mousedown', () => {
        continueButton.style.transform = 'scale(0.95)';
    });
    
    continueButton.addEventListener('mouseup', () => {
        continueButton.style.transform = 'scale(1)';
    });
    
    continueButton.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    
    passwordContainer.appendChild(messageText);
    passwordContainer.appendChild(passwordInput);
    passwordContainer.appendChild(continueButton);
    
    protectionScreen.appendChild(passwordContainer);
    document.body.appendChild(protectionScreen);
    
    setTimeout(() => {
        passwordInput.focus();
    }, 500);
}

function checkPassword() {
    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value.trim();
    
    if (password.toLowerCase() === REAL_PASSWORD.toLowerCase()) {
        const protectionScreen = document.getElementById('protection-screen');
        protectionScreen.style.opacity = '0';
        
        document.body.classList.add('unlocked');
        
        setTimeout(() => {
            protectionScreen.remove();
        }, 500);
        return;
    }
    
    // Changed to check against array of passwords
    if (hintsMode && EASTER_EGG_PASSWORDS.includes(password.toLowerCase())) {
        handleEasterEggPassword();
        return;
    }
    
    passwordInput.value = '';
    passwordInput.style.borderColor = 'rgba(255, 0, 0, 0.5)';
    passwordInput.style.animation = 'shake 0.5s';
    
    setTimeout(() => {
        passwordInput.style.animation = '';
    }, 500);
    
    if (thinkMode) {
        easterEggFailedAttempts++;
        
        if (easterEggFailedAttempts >= 5) {
            keepTryingMode = true;
            thinkMode = false;
            typeText("Keep trying I believe in you :) ");
        }
    } else if (keepTryingMode) {
        easterEggFailedAttempts++;
        
        if (easterEggFailedAttempts >= 3) {
            showFinalFailureMessage();
        }
    } else if (hintsMode) {
      
    } else {
        failedAttempts++;
        
      
        if (failedAttempts >= 2) {
            hintsMode = true;
            typeText("You really don't know the password?", () => {
                setTimeout(() => {
                    typeTextWithDeletion("I'll give you a hint", () => {
                        setTimeout(() => {
                            typeText("Hint is my favorite show");
                        }, 500);
                    });
                }, 2000);
            });
        }
    }
}

function handleEasterEggPassword() {
    const passwordInput = document.getElementById('password-input');
    const continueButton = document.getElementById('continue-button');
    
    hintsMode = false;
    thinkMode = true;
    easterEggFailedAttempts = 3;
    
    passwordInput.disabled = true;
    continueButton.disabled = true;
    
    typeText("I love you ❤️", () => {
        setTimeout(() => {
            typeTextWithoutDeletion(" but...", () => {
                setTimeout(() => {
                    typeText("I can't make it that easy tho", () => {
                        setTimeout(() => {
                            typeText("Sorry...", () => {
                                setTimeout(() => {
                                    typeText("Think of what it might be.");
                                    
                                    setTimeout(() => {
                                        passwordInput.disabled = false;
                                        continueButton.disabled = false;
                                        passwordInput.value = '';
                                        passwordInput.focus();
                                    }, 1000);
                                }, 1500);
                            });
                        }, 1500);
                    });
                }, 2000);
            });
        }, 1000);
    });
}

function showFinalFailureMessage() {
    const passwordInput = document.getElementById('password-input');
    const continueButton = document.getElementById('continue-button');
    const messageText = document.getElementById('password-message');
    
    passwordInput.style.display = 'none';
    continueButton.style.display = 'none';
    
    typeText("I have to tell you something", () => {
        setTimeout(() => {
            typeText("I made this for fun", () => {
                setTimeout(() => {
                    typeText("I can't have you read it without me being here 😼", () => {
                        setTimeout(() => {
                            typeText("So just wait for me", () => {
                                setTimeout(() => {
                                    typeText("Thank you!!");
                                }, 1500);
                            });
                        }, 1500);
                    });
                }, 1500);
            });
        }, 1500);
    });
}

function typeText(text, callback) {
    const messageText = document.getElementById('password-message');
    const originalText = messageText.textContent;
    
    messageText.textContent = '';
    
    const typingDelay = 110 - (TYPING_SPEED * 10);
    
    let charIndex = 0;
    
    function typeChar() {
        if (charIndex < text.length) {
            messageText.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, typingDelay);
        } else {
            if (callback) callback();
        }
    }
    
    typeChar();
}

function typeTextWithDeletion(text, callback) {
    const messageText = document.getElementById('password-message');
    const originalText = messageText.textContent;
    
    const typingDelay = 110 - (TYPING_SPEED * 10);
    const deletingDelay = 60 - (TYPING_SPEED * 5);
    
    let charIndex = originalText.length;
    
    function deleteChar() {
        if (charIndex > 0) {
            messageText.textContent = originalText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteChar, deletingDelay);
        } else {
            setTimeout(() => {
                typeText(text, callback);
            }, 300);
        }
    }
    
    deleteChar();
}

function typeTextWithoutDeletion(textToAdd, callback) {
    const messageText = document.getElementById('password-message');
    const originalText = messageText.textContent;
    
    const typingDelay = 110 - (TYPING_SPEED * 10);
    
    let charIndex = 0;
    
    function typeChar() {
        if (charIndex < textToAdd.length) {
            messageText.textContent = originalText + textToAdd.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeChar, typingDelay);
        } else {
            if (callback) callback();
        }
    }
    
    typeChar();
}

document.addEventListener('DOMContentLoaded', function() {
    createProtectionScreen();
});

if (document.readyState === 'loading') {
} else {
    createProtectionScreen();
}