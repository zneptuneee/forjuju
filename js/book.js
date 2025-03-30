
const songPlaylist = [
    {
        songTitle: "Somethin' Stupid", 
        artist: "Frank Sinatra", 
        songFile: "songs/song1.mp3",
        coverImage: "images/cover1.jfif",
        startPage: 1,
        endPage: 2
    },
    {
        songTitle: "Lover, You Should've Come Over", 
        artist: "Jeff Buckley", 
        songFile: "songs/song2.mp3",
        coverImage: "images/cover2.jfif",
        startPage: 3,
        endPage: 4
    },
    {
        songTitle: "K.", 
        artist: "Cigarettes After Sex", 
        songFile: "songs/song3.mp3",
        coverImage: "images/cover3.jfif",
        startPage: 5,
        endPage: 8
    },
    {
        songTitle: "I Bet On Losing Dogs", 
        artist: "Mitski", 
        songFile: "songs/song4.mp3",
        coverImage: "images/cover4.jfif",
        startPage: 9,
        endPage: 10
    },
    {
        songTitle: "Nothing", 
        artist: "Bruno Major", 
        songFile: "songs/nothing.mp3",
        coverImage: "images/cover5.jfif",
        startPage: 11,
        endPage: 20
    },
];


let currentSongIndex = 0;

const pages = [
    { 
        leftContent: "<h2 class='calligraphy-title'>Dear Juju</h2><div class='letter-content'><p class='first-paragraph'>Hi, this is just for me to tell you something. Nothing big. Originally, I was planning to make this as one of the gifts with my word being on this website and it being a whole book and such. But nah, I think this is kind of lame, this website is not finalized so think of it as an unfinished project. You have no idea how stress I was trying to get the fucking flowers and the fucking music player to work. Also, the song for each page doesn't mean anything. I just shuffled and whatever I get on the playlist I made for you; I added on the page. But that, so far it looks plain and not much to show off, and I'm gonna come up with a better idea for your gift. I'll think of something like I always do.</p></div>", 
        rightContent: "<div class='letter-content'><p>Moving on, you pretty much know everything I ever wanted to tell you but even that is like 20% of what I could to tell you. Everything is on the word, which for now is just a draft and will be turned into a gift for your birthday. Anyways yeah, my secret been exposed hahahahah, I've loved you from afar, ever since we started talking that day. I will never forget it. I don't want to say too much that would make my gift for you useless, and less meaningful cause it's supposed to tell you everything about me, the lore, my reasonings and such. But yeah, I mean when I say it, you taught me a lot of things. You taught me to be a better man. Like I mentioned before, I was a pathetic sore Discord loser. Then you came along, and I don't know what you did but I started to get a sense of feeling of needing to better myself. So, I become better, I became less judgmental, I became more grateful, more quiet, more matured, and so on.</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><p>I just want to take this moment to thank you for everything, seriously thank you. Because of you, myself now and myself before I met you, they are two completely different people, so thank you. Told you my lore of trying to move on but couldn't already so I'll explain it again. My summer of me trying to move on was just miserable, I never want to go through that again, and even after I thought I moved on. I started talking to new girls because I guessed I thought I moved on, or maybe because I thought I needed to move on, so I started talking to new girls looking for them to fill in the void you know. I don't know to explain it, it's weird. After a month of me being in relationship with them, I had to end it. I hated myself for that. I made someone's sweet daughter fell in love and broke their heart because of my own selfishness, reckless thought, and just overall immature.</p></div>", 
        rightContent: "<div class='letter-content'><p>After I ended the relationship, I think about you, and how no one has your voice, your laugh (I love your laugh so much that's why I clipped it because just a single laugh from you makes my whole day), they didn't have your personality, your humor and so on. It also contained some lust, which is part of the reason why I ended it because that is just not who I am. Every time I get back from school, she always asks me to get on call, she always wants me to text her, and so on. And yk sometime, I just wanna relax after school and not talk to anyone. But with you, you are different. I knew I love you because I sometimes just couldn't wait to get home and spend time with you. I knew I love you because even if I had a bad day, your presence makes up for it. I knew I love you because even though I'm out with my friends, I still yearn for you and think about you. I could continue this on but tsk tsk tsk spoiler for my word. But yeah, that's the lore.</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><p>I became more distant, spent most of my time alone. Lost all my online friends, and such along the way but I somehow don't regret it. I only need a 2 of my good friends anyway. Adam knows about you ever since you were a baby girl, since you were like 11-13, idk. Huy knows about you since last year. Honestly, it was supposed to be Adam only, but I could tell he's getting tired of me talking about you so hahaha I told Huy instead, and even HE ALREADY GETTING TIRED. It's okay though, I talk about you with myself than with anyone. While on my path of trying to be better, yes, I did talk to you occasionally, but I tried my best to talk to you as if you were my friend. I really did not think you like me at all. I had like less than a 1%. But for some reason, I decided to call you as a joke not knowing if you actually would join or not on the night of Feb 23rd, my progress went back to zero. I am reminded of all the many reasons why I love you.</p></div>", 
        rightContent: "<div class='letter-content'><p>Man, I don't wanna say too much since spoiler.... just know that you made me feel like both a man, and a child, along with being the happiest person alive. It's one of my favorite day this year. At the end of the day, when you left. I had a talk to myself, I got so pissed because I was like fuckkk why did I call you, now I'm gonna have to try and move on again fuccckkkkkk. It's tough, I don't regret it. Originally, I never wanted to tell you and in hopes of moving on. Hold on, let me tell you something during my phase of moving on, I genuinely did not think I would find anyone better than you. I genuinely don't want to meet anyone new because I really just wanted you, and no one else. But yeah after that day, I just felt to write you that letter, talked to my friends about it.</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><p>Ok I actually lied: I have 2 thoughts going through my head, first was graduating school, learning arabic, moving to Qatar to meet you and confessing to you in your own native language, and second, waiting till we're both matured, starts talking to you again but this time I take more seriously as if I have just fallen in love with you which in reality I have been all these years. Then Adam was like, if she's Arab she's bonded to get marry soon, like that is how it is for most Arab girls. Not gonna lie, I did not like hearing that because the thought of you married someone else and me never getting a chance to confess just doesn't go well with me. Even if you don't like me, I would still like to confess someday but if you happen to marry someone before then, I'd rather to continue loving you from a distance and watch you become happy.</p></div>", 
        rightContent: "<div class='letter-content'><p>Obviously, I don't want that which was why i planned to confess this year during your birthday. Now here we are. I hope you know how hard I was smiling looking at your reposts, and your video. Wish I could honestly save them because you genuinely are the prettiest woman I've ever met. Every time I see you, my autosmile just turns on, no fucking clue why. Probably somewhere bug in the human system. I looked at just a couple of your repost before you basically forced me to watch it in front of you. Basically, I saw a little bit, I got toooo excited. I started like leaving my chair and going to the bathroom to look at the bathroom and just started punching the air while jumping up and down and just tweaking out. I got too excited that I had to call all my friends to tell them that this is a sign that she likes me back. Yeah, that's it. I just got too excited to go through them all.</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><p>Then you told me how you hated your voice, and all these guys. Like, they can honestly go fuck themselves like holy shit. They're a bunch of disgusting and dirty animal. I really hope every single person that ever see you as nothing but a mere pleasure to themselves? I hope they rot, I hope they reach the highest level of hell, I hope they burn for eternity. It makes me mad hearing these people making you be insecure of one of the many things I love about you. I hope you know every insecurity you may of have, it's mostly likely mentioned in my 100 reasons why I love you gift because I genuinely do love everything about you except your absence obviously. I really hate it when they take this innocent sweet baby and make advantages of you.</p></div>", 
        rightContent: "<div class='letter-content'><p>This is one of the reasons why I want to get you so many things. I want you to know that you are worthy deserving of such things. You deserve a lot of things. I wanted to get you flowers because I want to show you how special you are. Like I want to show you you're not just a person that lives in Qatar. I already say this once, but I'll say it again, I'll keep saying until you recognize your own worth. You're unique, you're insanely unique. There's not a single soul that can replace what you have, and I say soul because somewhere in the world someone that looks like you could exist, they are incomparable to what you have.</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><p>I hope you realize that every part of you that you think you hate, I love them, every single insecurity you may have, I love them, any of that you think is unlovable, I love them. And every time you talk badly about yourself, I wish I could hold and hug you and tell you that you're completely wrong. It's unhealthy to speak badly of yourself cause to me, you are perfect just the way you are. I wish I could erase every doubt and insecurity from your mind. If only you could see yourself through my eyes, you would understand how beautiful, kind, and irreplaceable you truly are. Please write this down because it's important: no matter what the world says, no matter what those people say or make you feel, I will always see you as the amazing person you are.</p></div>", 
        rightContent: "<div class='letter-content'><p>You are worthy of love, respect, and happiness, and since you know this much, I will keep remind you of that for as long as I am alive. Also, the reason why I was so quiet was probably because I was surprised that you actually do like me. I mean, I've lived all this year thinking maybe I'm probably just a friend to her you know. I lived a life thinking you could never see me that way. Lived a life where every day I hope and pray that it gets us closer together, so it just still shocks me that you even feel like this about me. I mean, I made a paragraph of where you'd reject me, and I have nothing to do about it except accept it so you can't blame me for being surprised. You can read the alternative of that paragraph <a href=\"#\" class=\"alt-paragraph-link\" style=\"color: blue; text-decoration: underline; cursor: pointer;\">here</a> if you want to.</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><p>I'm really glad you like me; it makes me happy knowing that fact. Honestly, I don't even know how to words input how much this means to me. I spent so much time believing that this wasn't gonna happen, that you'd never see me that way, and now that I know you do, it feels unreal. It's a mix of happiness, shock, and a little bit of disbelief but I just feel grateful, grateful that you're in my life and that we got to share this moment together. And you know, I meant it when I told you I wanted to learn about Islam so I could convert for you and do things correctly for marriage. After high school, I want to dedicate myself to learning Arabic, studying Islam properly, and understand what it means to be a Muslim.</p></div>", 
        rightContent: "<div class='letter-content'><p>That's why, at the end of the day, this isn't about what I want, it's about what YOU want. If your faith and religion is important to you, and you'd rather we wait and do things the right way, then I will respect that completely. But if you feel differently, if you see things another way, then I'll accept that too. This is your decision to make, not mine, and whatever you choose, I will respect and follow your choice. I don't want you to feel like you have to change for me. If there's one thing I never want, it's for you to never grow apart from your religion and beliefs because of me. I want to honor what matters to you, not take it away you know what I mean?</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><p>So whatever you decided, know that I will always respect you, your faith, and the boundaries that are important to you. And as for the obstacles between us such as time, distance, other things - they mean nothing to me. That's why I had that \"obstacle means nothing if that person means everything\" video saved. I'm willing to go through all the trouble, I will take every step, no matter how long it takes, and when the day finally comes, I hope I get to see you with my 2 own eyes. Overall, I just want you to know that whatever happens, I will always be here for you. Whether we take things slow, or whatever path we walk, I will always support it.</p></div>", 
        rightContent: "<div class='letter-content'><p>You deserve more than I could offer. And when the day comes, I promise I will be ready, ready to be the man you deserve. I will continue to be better until then. Until the day comes, know that my feelings for you will never fade, and I'll always be here growing and waiting for the moment we are meant to share.</p><p>Thank you for everything.</p><p>I really do love you.</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><h2 class='back-cover-title'>The End</h2><p class='back-cover-comment'>Comment down below and let me know what you think</p></div>", 
        rightContent: "<div class='letter-content'><p style='text-align: center; margin-top: 50px;'>"
    }
];



let currentSpread = -1; 
let totalSpreads = pages.length;
let isCoverOpen = false;


function createAltParagraphPopup() {
   
    const popup = document.createElement('div');
    popup.className = 'alt-paragraph-popup';
    popup.style.display = 'none';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.width = '80%';
    popup.style.maxWidth = '600px';
    popup.style.maxHeight = '80vh';
    popup.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    popup.style.backdropFilter = 'blur(10px)';
    popup.style.borderRadius = '15px';
    popup.style.padding = '25px';
    popup.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.3)';
    popup.style.zIndex = '100';
    popup.style.overflow = 'auto';
 
    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '10px';
    closeBtn.style.right = '15px';
    closeBtn.style.fontSize = '24px';
    closeBtn.style.fontWeight = 'bold';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.color = '#333';
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    

    const content = document.createElement('div');
    content.style.fontSize = '1.1rem';
    content.style.lineHeight = '1.5';
    content.style.color = '#333';
    content.style.textAlign = 'justify';
    content.innerHTML = `"...I want to be the one you think about before you sleep, the one who makes your heart skip a beat, the one you miss when I'm not around. I know I say all this, but in the back of my mind, I know I can't have you. No matter how much I want to hold on, no matter how much I wish things were different, reality faces us ahead the journey. If I do send you this, I know I will have to try and let you go. I will have to send this and finally step to a path I never wanted to take. I want you to know that I won't reach to you out anymore. Not because I don't want to, but because I must force myself to move forward. I'm afraid if I talk to you again even a little bit, my progress will restart just like this year, and I will fall in love with you again. From the way it's looking, I don't think it's any time soon that I'll be able to move on but even if the time comes, where I learn to exist and live a life where I don't think of you, I don't think I will ever love another woman the way I loved you. Maybe I will, maybe I will laugh, maybe I will find someone who cares but it will never be the same. No one else will ever be you. I wish for you to find someone who will love you the way you deserve-someone who will make you laugh on your worst days and hold you close. One day, another man will admire the eyes and the face I once adore, the same eyes that held the whole grain of sands for them to love, another man that will get to spend all his time with you, the way I once wish I could, and he will be the one to make you smile in ways I'll only ever imagine. He will get to hear your voice every morning, feel your warmth every night, and be the reason why your world is brighter. And while that thought shatters me, I hope he never takes you for granted. I hope he knows just how lucky he is to have you. My only regret is that I didn't try harder to win you, that I didn't fight enough with everything I had. Maybe if I just told you my feelings earlier, if I had done more, things would be different. But instead, I am left to live a life without you, a life where I will never get to call you mine, never get to wake up beside you, never get to build a home with you. I will never get to marry you, never get to see us living together, never get to see a child with your eyes and your smile, never get to grow old with you the way I once dreamed. And that is something I will have to carry with me for as long as I exist. But if there's one thing I know for certain, it's that loving you was the most beautiful thing I've ever done, even if it was never meant to last."`;

    const overlay = document.createElement('div');
    overlay.className = 'alt-paragraph-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '99';
    overlay.style.display = 'none';
    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    popup.appendChild(closeBtn);
    popup.appendChild(content);
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
  
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('alt-paragraph-link')) {
            e.preventDefault();
            popup.style.display = 'block';
            overlay.style.display = 'block';
        }
    });
}


function getCurrentPageNumber() {
    if (currentSpread === -1) return 0; 
    return (currentSpread * 2) + 1; 
}


function getSongForCurrentPage() {
    const currentPage = getCurrentPageNumber();
    
    
    for (let i = 0; i < songPlaylist.length; i++) {
        if (currentPage >= songPlaylist[i].startPage && currentPage <= songPlaylist[i].endPage) {
            return i;
        }
    }
    
   
    return 0;
}


function initBook() {
    const book = document.getElementById('book');
    

    for (let i = 0; i < totalSpreads; i++) {
        const spread = document.createElement('div');
        spread.className = 'page-spread hide';
        spread.dataset.index = i;
        

        const leftPage = document.createElement('div');
        leftPage.className = 'page-left';
        leftPage.innerHTML = `
            <div class="page-content">
                ${pages[i].leftContent}
            </div>
            <div class="page-number">${i * 2 + 1}</div>
        `;
        
        const rightPage = document.createElement('div');
        rightPage.className = 'page-right';
        rightPage.innerHTML = `
            <div class="page-content">
                ${pages[i].rightContent}
            </div>
            <div class="page-number">${i * 2 + 2}</div>
        `;
        
        spread.appendChild(leftPage);
        spread.appendChild(rightPage);
        book.appendChild(spread);
    }
    
   
    document.getElementById('playerContainer').classList.remove('visible');
    

    document.getElementById('cover').classList.remove('open');
    
 
    document.querySelectorAll('.letter-content').forEach(content => {
        content.style.fontSize = '1.15rem';
        content.style.lineHeight = '1.4';
        content.style.textAlign = 'justify';
        content.style.maxHeight = '100%';
        content.style.padding = '5px 20px';
    });
    
 
    document.querySelectorAll('.calligraphy-title').forEach(title => {
        title.style.fontSize = '4.5rem';
        title.style.marginBottom = '10px';
        title.style.marginTop = '0';
        title.style.textAlign = 'left';
    });
    
  
    const backCoverTitle = document.querySelector('.back-cover-title');
    if (backCoverTitle) {
        backCoverTitle.style.fontSize = '4.8rem';
        backCoverTitle.style.textAlign = 'center';
        backCoverTitle.style.marginBottom = '20px';
        backCoverTitle.style.marginTop = '50px';
    }
    
    const backCoverComment = document.querySelector('.back-cover-comment');
    if (backCoverComment) {
        backCoverComment.style.fontSize = '1.5rem';
        backCoverComment.style.textAlign = 'center';
        backCoverComment.style.fontStyle = 'italic';
        backCoverComment.style.marginTop = '30px';
    }
    
   
    const firstParagraph = document.querySelector('.first-paragraph');
    if (firstParagraph) {
        firstParagraph.style.textIndent = '1.5em';
    }
    
    
    createAltParagraphPopup();
    
  
    createAudio(songPlaylist[0].songFile);
    updateSongInfo(0);
}


function nextPage() {
    if (!isCoverOpen) {
      
        const cover = document.getElementById('cover');
        cover.style.display = 'none';
        isCoverOpen = true;
        
    
        currentSpread = 0;
        document.querySelector(`.page-spread[data-index="${currentSpread}"]`).classList.remove('hide');
        
 
        currentSongIndex = getSongForCurrentPage();
        
    
        playAudio();
        
  
        document.getElementById('playerContainer').classList.add('visible');
        
        centerBook();
    } else if (currentSpread < totalSpreads - 1) {

        document.querySelector(`.page-spread[data-index="${currentSpread}"]`).classList.add('hide');
        
   
        currentSpread++;
        document.querySelector(`.page-spread[data-index="${currentSpread}"]`).classList.remove('hide');

        const songIndexForPage = getSongForCurrentPage();
        if (currentSongIndex !== songIndexForPage) {
      
            const wasPlaying = isPlaying;
            
     
            currentSongIndex = songIndexForPage;
            createAudio(songPlaylist[currentSongIndex].songFile);
            updateSongInfo(currentSongIndex);
            
            playAudio();
        }
        
        centerBook();
    }
}

function prevPage() {
    if (isCoverOpen && currentSpread > 0) {

        document.querySelector(`.page-spread[data-index="${currentSpread}"]`).classList.add('hide');
        
  
        currentSpread--;
        document.querySelector(`.page-spread[data-index="${currentSpread}"]`).classList.remove('hide');
        
 
        const songIndexForPage = getSongForCurrentPage();
        if (currentSongIndex !== songIndexForPage) {

            const wasPlaying = isPlaying;
            
     
            currentSongIndex = songIndexForPage;
            createAudio(songPlaylist[currentSongIndex].songFile);
            updateSongInfo(currentSongIndex);
            
     
            playAudio();
        }
        
        centerBook();
    } else if (isCoverOpen && currentSpread === 0) {
 
        document.querySelector(`.page-spread[data-index="0"]`).classList.add('hide');
        

        document.getElementById('cover').style.display = '';
        isCoverOpen = false;
        currentSpread = -1;
        
     
        document.getElementById('playerContainer').classList.remove('visible');
        
  
        pauseAudio();
        centerBook();
    }
}


function centerBook() {
    const book = document.getElementById('book');
    const container = document.querySelector('.book-container');
    
s
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    
  
    const maxWidth = Math.min(viewportWidth * 0.9, 1200);
    const maxHeight = viewportHeight * 0.7;
 
    container.style.width = maxWidth + 'px';
    container.style.height = maxHeight + 'px';
    container.style.maxWidth = '100%';
    
    
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    
    if (arrowLeft && arrowRight) {
        if (viewportWidth <= 480) {
            arrowLeft.style.left = '10px';
            arrowRight.style.right = '10px';
        } else if (viewportWidth <= 768) {
            arrowLeft.style.left = '15px';
            arrowRight.style.right = '15px';
        } else {
            arrowLeft.style.left = '20px';
            arrowRight.style.right = '20px';
        }
    }
    
    
    adjustPlayerWidth();
}


function adjustPlayerWidth() {
    if (currentSpread >= 0) {
        const songName = document.getElementById('songName');
        const artistName = document.getElementById('artistName');
        const playerContainer = document.getElementById('playerContainer');
        
        if (!songName || !artistName || !playerContainer) return;
        
      
        const songLength = songName.textContent.length;
        const artistLength = artistName.textContent.length;
        const maxLength = Math.max(songLength, artistLength);
        
       
        let width = 340; 
        
      
        if (maxLength > 15) {
        
            
            const extraWidth = (maxLength - 15) * 10; 
            width = 340 + extraWidth;
            
        
            width = Math.min(width, 600);
        }
        
 
        playerContainer.style.width = `${width}px`;
        
       
        songName.style.width = 'auto';
        artistName.style.width = 'auto';
        
 
        const recordPlayer = document.querySelector('.record-player');
        if (recordPlayer) {
            recordPlayer.style.width = '100%';
            recordPlayer.style.display = 'flex';
            recordPlayer.style.justifyContent = 'space-between';
        }
    }
}