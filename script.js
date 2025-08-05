const audio = document.getElementById("audio");
audio.volume = 0.2;
const lyricsList = document.getElementById("lyricsList");
const startScreen = document.getElementById("startScreen");
const playPauseButton = document.getElementById("playPauseButton");

const lyrics = [
    { time: 0.0, text: "..." },
    { time: 13.34, text: "There I was again tonight" },
    { time: 16.32, text: "Forcing laughter, faking smiles" },
    { time: 19.27, text: "Same old tired, lonely place" },
    { time: 24.91, text: "Walls of insincerity" },
    { time: 28.03, text: "Shifting eyes and vacancy" },
    { time: 30.92, text: "Vanished when I saw your face" },
    { time: 34.23, text: "All I can say is it was enchanting to meet you" },
    { time: 44.19, text: "..." },
    { time: 48.31, text: "Your eyes whispered, \"Have we met?\"" },
    { time: 51.44, text: "Across the room, your silhouette" },
    { time: 54.28, text: "Starts to make its way to me" },
    { time: 60.00, text: "The playful conversation starts" },
    { time: 63.18, text: "Counter all your quick remarks" },
    { time: 65.89, text: "Like passing notes in secrecy" },
    { time: 70.85, text: "And it was enchanting to meet you" },
    { time: 81.14, text: "All I can say is I was enchanted to meet you" },
    { time: 90.98, text: "..." },
    { time: 95.89, text: "This night is sparkling, don't you let it go" },
    { time: 102.04, text: "I'm wonderstruck, blushing all the way home" },
    { time: 107.81, text: "I'll spend forever wondering if you knew" },
    { time: 113.29, text: "I was enchanted to meet you" },
    { time: 119.52, text: "..." },
    { time: 124.35, text: "The lingering question kept me up" },
    { time: 127.42, text: "2 a.m., who do you love?" },
    { time: 130.32, text: "I wonder 'til I'm wide awake" },
    { time: 136.04, text: "And now I'm pacing back and forth" },
    { time: 139.18, text: "Wishing you were at my door" },
    { time: 141.94, text: "I'd open up and you would say" },
    { time: 146.58, text: "Hey, it was enchanting to meet you" },
    { time: 155.52, text: "..." },
    { time: 157.54, text: "All I know is I was enchanted to meet you" },
    { time: 168.44, text: "..." },
    { time: 171.94, text: "This night is sparkling, don't you let it go" },
    { time: 178.09, text: "I'm wonderstruck, blushing all the way home" },
    { time: 184.09, text: "I'll spend forever wondering if you knew..." },
    { time: 193.44, text: "..." },
    { time: 195.65, text: "This night is flawless, don't you let it go" },
    { time: 201.54, text: "I'm wonderstruck, dancing around all alone" },
    { time: 207.31, text: "I'll spend forever wondering if you knew" },
    { time: 213.03, text: "I was enchanted to meet you" },
    { time: 219.66, text: "..." },
    { time: 239.06, text: "This is me praying that" },
    { time: 242.15, text: "This was the very first page" },
    { time: 245.05, text: "Not where the story line ends" },
    { time: 247.90, text: "My thoughts will echo your name" },
    { time: 251.06, text: "Until I see you again" },
    { time: 253.80, text: "These are the words I held back" },
    { time: 256.90, text: "As I was leaving too soon" },
    { time: 259.86, text: "I was enchanted to meet you" },
    { time: 265.28, text: "Please don't be in love with someone else" },
    { time: 271.08, text: "Please don't have somebody waiting on you" },
    { time: 276.72, text: "Please don't be in love with someone else" },
    { time: 282.82, text: "Please don't have somebody waiting on you" },
    { time: 289.27, text: "This night is sparkling, don't you let it go" },
    { time: 295.26, text: "I'm wonderstruck, blushing all the way home" },
    { time: 301.05, text: "I'll spend forever wondering if you knew" },
    { time: 310.06, text: "..." },
    { time: 312.76, text: "This night is flawless, don't you let it go" },
    { time: 318.71, text: "I'm wonderstruck, dancing around all alone" },
    { time: 324.57, text: "I'll spend forever wondering if you knew" },
    { time: 330.18, text: "I was enchanted to meet you" },
    { time: 335.56, text: "Please don't be in love with someone else" },
    { time: 341.35, text: "Please don't have somebody waiting on you" },
    { time: 346.84, text: "..." }
];

const gradientLinesText = [
    "All I can say is it was enchanting to meet you",
    "Please don't be in love with someone else",
    "Please don't have somebody waiting on you",
    "I was enchanted to meet you",
    "And it was enchanting to meet you",
    "All I know is I was enchanted to meet you",
    "Hey, it was enchanting to meet you",
    "My thoughts will echo your name"
];

let lineElements = [];
let currentActiveLineIndex = -1;

function buildLyricsHTML() {
    lyricsList.innerHTML = '';
    lineElements = [];

    lyrics.forEach((line, index) => {
        const lineDiv = document.createElement("div");
        lineDiv.className = "line";
        lineDiv.textContent = line.text;
        lineDiv.dataset.lineIndex = index;

        if (gradientLinesText.includes(line.text.trim())) {
            lineDiv.classList.add("gradient-text");
        }

        lyricsList.appendChild(lineDiv);
        lineElements.push(lineDiv);
    });
}

buildLyricsHTML();

audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    let newActiveLineIndex = -1;

    for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time) {
            newActiveLineIndex = i;
        } else {
            break;
        }
    }

    if (newActiveLineIndex !== currentActiveLineIndex) {
        if (currentActiveLineIndex !== -1 && lineElements[currentActiveLineIndex]) {
            gsap.to(lineElements[currentActiveLineIndex], {
                opacity: 0,
                y: 10,
                duration: 1.2,
                ease: "sine.inOut"
            });
        }

        if (newActiveLineIndex !== -1 && lineElements[newActiveLineIndex]) {
            const newActiveLineElement = lineElements[newActiveLineIndex];
            gsap.set(newActiveLineElement, { clearProps: "transform,opacity,filter,font-size,font-weight" });

            const randomAnimationType = gsap.utils.random(["softFade", "gentleSlide", "subtleLift", "elegantGlow"]);
            const duration = gsap.utils.random(1.0, 1.5);
            const ease = "sine.inOut";

            switch (randomAnimationType) {
                case "softFade":
                    gsap.fromTo(newActiveLineElement,
                        { opacity: 0 },
                        { opacity: 1, duration: duration, ease: ease }
                    );
                    break;
                case "gentleSlide":
                    gsap.fromTo(newActiveLineElement,
                        { opacity: 0, x: 20 },
                        { opacity: 1, x: 0, duration: duration, ease: ease }
                    );
                    break;
                case "subtleLift":
                    gsap.fromTo(newActiveLineElement,
                        { opacity: 0, y: 15 },
                        { opacity: 1, y: 0, duration: duration, ease: ease }
                    );
                    break;
                case "elegantGlow":
                    gsap.fromTo(newActiveLineElement,
                        { opacity: 0, textShadow: "0 0 0 rgba(255, 182, 193, 0)" },
                        { opacity: 1, textShadow: "0 0 8px rgba(255, 182, 193, 0.5)", duration: duration, ease: ease }
                    );
                    break;
            }

            gsap.set(newActiveLineElement, {
                fontSize: "28px",
                fontWeight: "bold",
                filter: "blur(0px)"
            });
        }

        currentActiveLineIndex = newActiveLineIndex;
        updateScrollPosition();
    }
});

function updateScrollPosition() {
    const activeLineElement = lineElements[currentActiveLineIndex];
    if (!activeLineElement) return;

    lineElements.forEach((line, index) => {
        line.classList.remove("active", "prev", "next");
        if (index === currentActiveLineIndex) {
            line.classList.add("active");
        } else {
            gsap.to(line, { opacity: 0, duration: 1.2, ease: "sine.inOut" });
        }
    });

    const containerHeight = lyricsList.parentElement.clientHeight;
    const activeRect = activeLineElement.getBoundingClientRect();
    const offset = (activeLineElement.offsetTop + activeRect.height / 2) - (containerHeight / 2);

    gsap.to(lyricsList, { y: -offset, duration: 1.2, ease: "sine.inOut" });
}

playPauseButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        gsap.to(startScreen, {
            opacity: 0, duration: 1.2, ease: "sine.inOut", onComplete: () => {
                startScreen.style.display = "none";
            }
        });
    } else {
        audio.pause();
    }
});

audio.addEventListener("ended", () => {
    startScreen.style.display = "flex";
    gsap.fromTo(startScreen, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "sine.inOut" });
    currentActiveLineIndex = -1;
    lineElements.forEach(line => {
        gsap.set(line, {
            opacity: 0,
            fontSize: "20px",
            fontWeight: "normal",
            y: 0
        });
    });
});

document.addEventListener("keydown", e => {
    if (e.code === "Space") {
        e.preventDefault();
        if (audio.paused) {
            audio.play();
            gsap.to(startScreen, {
                opacity: 0, duration: 1.2, ease: "sine.inOut", onComplete: () => {
                    startScreen.style.display = "none";
                }
            });
        } else {
            audio.pause();
        }
    }
});