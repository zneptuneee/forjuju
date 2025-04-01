
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
        songTitle: "rises the moon", 
        artist: "Liana Flores", 
        songFile: "songs/song6.mp3",
        coverImage: "images/cover6.jfif",
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
        leftContent: "<h2 class='calligraphy-title'>Dear Juju</h2><div class='letter-content'><p class='first-paragraph'>Hi, this is just for me to tell you something. Nothing big. Originally, I was planing to make this as one of the gifts with my word letter being on this website as a whole book. I think this is kind of lame, this website is not finalized so think of it as an unfinished project. You have no idea how stressed and tweaked out I was trying to get the fucking flowers and the fucking music player to work. Also for the song, it's so you don't have to read in silent so I might as well add a song player in the background. But yeah, so far about this website, it looks plain and not much to show off, and I'm gonna scratch this because you deserve so much better than this therefore, I'm gonna come up with a much better idea for your gift. I'll think of something like I always do.</p></div>", 
        rightContent: "<div class='letter-content'><p>Moving on, you pretty much know everything I ever wanted to tell you but even that is like 20% of what I could tell you. Everything is on the word, which for now is just a draft and will be turned into a gift for your birthday. Anyyywaayss yeah, my secret has been exposed hahahahaha, I've always loved you, ever since we started talking that day. I will never forget it. I don't want to say too much that would make my gift for you basically not new to you cause it's supposed to tell you everything about me, my story, and my reasonings and such behind everything. But yeah moving on, I mean when I say this, you taught me a lot of things. You just don't know it but you taught me to be a better person, a better man. Like I mentioned before, I was a bully, I was a pathetic Discord sore loser, and unhealthy as fuck. Then out of nowhere, you came along, and I don't know what you did to me but because of you, I became a new person.</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><p>I became less judgmental towards people, more kind to people, I became more grateful, more quiet, more matured, and so on. I just want to take this moment to thank you for everything, seriously thank you. You've given me more than you will ever know. I told you a bit of my lore of trying to move on but couldn't but let me just explain it better. That summer of me trying to move on was just miserable, and after a few months I thought I had moved on so I started talking again because I guessed I thought I moved on, or maybe because I thought it was what I needed to move on. I don't know how to explain it, it's weird. After a month of me being in relationship with them, I had to end it. I hated myself for that, and I could never forgive myself for that.</p></div>", 
        rightContent: "<div class='letter-content'><p>I made someone's daughter fall in love and broke their heart because of my own carelessness, my own selfishness, reckless thinking, and just overall immaturity. Also this is off topic, the reason why I have so many clip of you laughing well is because I love your laugh. Explains why I clip it every chance I get. Your laugh makes me laugh, it makes me smile, and it makes me happy. Anyways, I had to end the reason because I realized I still loved you. I don't know why I do this to myself but I look for you in every girl I talked to, and yet no one has what you have. I knew I loved you because sometimes I couldn't just wait to get home and spend time with you. I knew I'm in love with you, when even when I had a bad day at school, being with you just heals me. It made my whole day better.</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><p>I knew I'm madly in love with you because even though I'm out with my friends, and when you are busy, I still yearn for you, and just miss you. I honestly could go on with this but tsk tsk tsk spoiler for my word letter. Yeah, after I became more distant, spent most of my time alone, and learning new things. Lost a lot of my online and irl friends along the way but somehow I don't regret it. You only need a few good friends anyway. Adam knows about you ever since you were a little baby, since you were like 12-13, I don't remember. Huy knows about you since last year. Honestly, it was supposed to be Adam only, but I trust Huy, and I could tell Adam is getting tired of me talking about the same girl over and over again. And even Huy IS ALREADY GETTING TIRED OF ME.</p></div>", 
        rightContent: "<div class='letter-content'><p>It's okay though, I talk about you with myself than with anyone. While on my path of trying to move on, yes, I did talk to you occasionally, but I tried my best to talk to you as if you were just my friend. I really did not think you like me at all. I had like less than 1% of believing but that doesn't mean I never hoped. But for whatever reason, must've been because I was bored but I decided to call you as a joke now expecting that you would actually join on that day of Feb 23rd. My progress went back to zero, and I am reminded of all the many reason why I love you. I don't wanna say too much cause spoiler... just know that you made fell in love again, as if it had never left. I was so happy that day. Probably one of my favorite day of the year but then again every other moment with you is my favorite day.</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><p>After that day, I just felt like I should write a letter to you, talked to my friends about it. I first planned to finish school, learn Arabic, and moving to Qatar to meet you and confess to you in your own native language, and second, is never tell you because I didn't want to grow apart from you. I was afraid of losing you and if I told you, I won't be able to talk to you anymore. I'd rather love you from a distance, and talk to you as friends rather not talk anymore. I genuinely did not want to lose you, so my second thought was never to confess to you. Then while I was talking to Adam, \"If she's Arab she is bond to get marry soon, like that is how it is for most Arab girls.\"</p></div>", 
        rightContent: "<div class='letter-content'><p>Yeah.... I did not like hearing that because the thought of you getting married to someone and me never getting a chance to confess just shatters me. Even if you don't like me, I would like to confess someday but if you happen to marry someone before then, I'd rather just to watch. Obviously, I don't want that which is why I planned to confess this year during your birthday. Now here we are. I hope you know how hard I was smiling going through your repost, and your video. Wish I could honestly save them because you genuinely are the prettiest woman I've met. Every time I see you, my autosmile just turns on, no fucking clue why. Probbaly some bug in the human system. I looked at just a couple of your repost before you basically forced me to watch it in front of you.</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><p>Basically right.. I saw a little bit, I got too excited. I started leaving my chair and going to the bathroom to process, and just punch the air and looking at the mirror tweaking out and shit. I got too happy that I called my friends to tell them that this might be a sign she's into me, that she likes me back. Yeah, that's it. I just got too excited to go through them all so I paused. Then you told me how you hated your voice, and all these guys. Like they can honestly go fuck themselves like holy shit. They're a bunch of disgusting and dirty animal. I really hope every single person that ever see you as nothing but a mere pleasure to themselves? I hope they rot, I hope they reach the highest level of hell, I hope they burn for eternity.</p></div>", 
        rightContent: "<div class='letter-content'><p>It makes me mad hearing these people making you be insecure of one of the many things I love about you. I hope you know every insecurity you may of have, it's mostly definietly metnioned in my 100 reasons why I love you gift. I really hate it when they take advantages of you. This is one of the reasons of why I want to get you so many things. I want you to know that you are worthy of desvering of many things. You deserve a lot of things. I wanted you to get you flowers because I want to show you how special you are. I want to show you you're not just a person that lives in Qatar. I already say this once, but I'll say it again, I'll keep saying until you recognize your worth. You're unique, you're insanely unique. There's not a single soul that can replace what you have.</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><p>I hope you realized that every part of you that you think you hate, I love the, every single insecurity you may have, I love them. any of that you think is unlovable, I love them. And every time you talk badly about yourself, I wish I could hold you and hug you and tell you that you're completely wrong. It's unealthy to speak so badly of yourself like that yk. I wish I could erase every doubt and insecurity from your mind. If only you could see yourself through my eyes, you would understand how beautiful, and irreplaceable you truly are. Please write this down in your head: no matter what the world says, no matter what people say or make you feel, I will always see you as the amazing person you are.</p></div>", 
        rightContent: "<div class='letter-content'><p>You are worthy of love, respect, and happiness. Also, the reason why I was so quiet was probably because I was surprised that you actually do like me. I mean, I've lived all this year thinking maybe I'm probably just a friend to her you know. I lived a life thinking you could never see me that way. Lived a life where every day I hope and pray that it gets us closer together, so it just still shocks me that you even feel like this about me. I mean, I made a paragraph of where you'd reject me, and I have nothing to do about it except accept it so you can't blame me for being surprised. You can read the alternative of that paragraph <a href=\"#\" class=\"alt-paragraph-link\" style=\"color: blue; text-decoration: underline; cursor: pointer;\">here</a> if you want to.</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><p>I'm really glad you like me. It makes me happy knowing that fact. Honestly, I don't even know how to put words into how much this means to me. I spent all this time believing that this wasn't gonna happen, that you'd never see me that way, and now that I know you do, it feels unreal. It's a mix of happiness, shock, and a little bit of disbelief but I just feel grateful, grateful that you're in my life and that we got to share this moment together. It's equivalent to like living your whole life thinking your parents are your parents till they tell you you're adopted. And you know, I mean it when I told you I wanted to learn about Islam so I could convert for you and do things correctly for marriage.</p></div>", 
        rightContent: "<div class='letter-content'><p>After high school, I want to dedicate myself to learning Arabic, studying Islam properly, and understand what it means to be a Muslim. That's why, at the end of the day, this isn't about what I want, it's about what YOU want. If your faith and religion is important to you, and you'd rather we wait and do things the right way, then I will respect that completely. But if you feel differently, if you see things another way, then I'll accept that too. This is your decision to make, not mine, and whatever you choose, I will respect and follow your choice. I don't want you to feel like you have to change for me. If there's one thing I never want, it's for you to never grow apart from your religion and beliefs because of me. I want to honor what matters to you, not take it away you know what I mean?</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><p>So whatever you decided, know that I will always respect you, your faith, and the boundaries that are important to you. And as for the obstacles between such as time, distance, other things. they mean nothing to me. That's why I had that \"obstacle means nothing if that person means everything\" video saved. I'm willing to go through all the trouble, take every step necessary, no matter how long it takes, and when the day finally comes, I hope I get to see you with my 2 own eyes. Overall, I just want you to know that whatever happens, I will always be here for you. Whether we take things slow, or whatever path we walk, I will always support it.</p></div>", 
        rightContent: "<div class='letter-content'><p>You deserve more than I could offer. And when the day comes, I promise I will be ready. Until the day comes, know that my feelings for you will neve fade, and I'll always be here growing and waiting for the moment we are meant to share.</p><p>Thank you for everything.</p><p>I really do love you.</p></div>"
    },
    { 
        leftContent: "<div class='letter-content'><h2 class='calligraphy-title'></h2><p class='first-paragraph'>Me from the future making edits to this: I saw your instagram stoy and I noticed that you covered your noise. I notice this a lot time ago but I really didn't want to say anything because you must have your reason. I notice that most of your tiktok from beginning and to latest, has a lot of filter that covers your nose. It either the dog one or some sticker one that covers it. Not only that but on snapchat too. I thought you were just insecure of your nose, and I just want to tell you that I find nothing, absolutely nothing wrong with your noise.</p></div>", 
        rightContent: "<div class='letter-content'><p>You're pretty, and I love your face, and with your face, there's feature that makes you beautiful. Your eyes, your mouth, your lip, your cheeks, your hair, and your nose. There's really nothing wrong with your noise. They are perfect as every other part of you. Yeahhh insecurities can be hard to get rid of but just know that what you see as a flaw is something I love, what you see as flaw is something that I think makes you unique and beautiful. You don't need fliters or cover. Ofc, if you really don't like your nose and feel better covering it, that is all up to you. I'm not trying to tell you to stop or change anything. I just want you to know that there's absolutely nothing wrong with it. If only you could see yourself the way I see you.</p></div>"
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
