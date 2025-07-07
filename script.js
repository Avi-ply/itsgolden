    const audio = document.getElementById("audio");
    audio.volume = 0.2; 
    const lyricsList = document.getElementById("lyricsList");

    const lyrics = [
  {time: 0.0, text: "..."},
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



    
    lyrics.forEach(line => {
      const div = document.createElement("div");
      div.className = "line";
      div.textContent = line.text;
      lyricsList.appendChild(div);
    });


      let currentIndex = 0;
      updateLyrics();



    audio.addEventListener("timeupdate", () => {

       if (audio.currentTime < lyrics[0].time) {
        if (currentIndex !== 0) {
          currentIndex = 0;
          updateLyrics();
        }
        return;
      }

      for (let i = 0; i < lyrics.length - 1; i++) {
        if (audio.currentTime >= lyrics[i].time && audio.currentTime < lyrics[i + 1].time) {
          if (currentIndex !== i) {
            currentIndex = i;
            updateLyrics();
          }
          break;
        }
      }

      if (audio.currentTime >= lyrics[lyrics.length - 1].time) {
        if (currentIndex !== lyrics.length - 1) {
          currentIndex = lyrics.length - 1;
          updateLyrics();
        }
      }

    });

    function updateLyrics() {
      const lines = document.querySelectorAll(".line");

      const gradientLines = [
        "Please don't be in love with someone else",
        "Please don't have somebody waiting on you",
        "I was enchanted to meet you",
        "And it was enchanting to meet you",
        "All I can say Is it was enchanting to meet you",
        "All I know is I was enchanted to meet you",
        "All I can say is I was enchanted to meet you",
        "Hey, it was enchanting to meet you"
      ]

      lines.forEach((line, i) => {
        line.classList.remove("active", "prev", "next");
        if (i === currentIndex) line.classList.add("active");

        if (gradientLines.includes(line.textContent.trim())) {
          line.classList.add("gradient-text");
        }
        
        else if (i === currentIndex - 1) line.classList.add("prev");
        else if (i === currentIndex + 1) line.classList.add("next");
      });

      const activeLine = lines[currentIndex];
      if(!activeLine) return;

      const containerHeight = lyricsList.parentElement.clientHeight;
      const activeRect = activeLine.getBoundingClientRect();
      const containerRect = lyricsList.parentElement.getBoundingClientRect();

      const offset = (activeLine.offsetTop + activeRect.height / 2) - (containerHeight / 2);
      lyricsList.style.transform = `translateY(-${offset}px)`;

    }
    document.addEventListener("keydown", e => {
      if (e.code === "Space") {
        e.preventDefault();
        if (audio.paused) audio.play();
        else audio.pause();
      }
    });

    const startScreen = document.getElementById("startScreen");
    const playPauseButton = document.getElementById("playPauseButton");
    const checkbox = playPauseButton.querySelector("input");

playPauseButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    startScreen.style.display = "none";
  } else {
    audio.pause();
  }
});

audio.addEventListener("ended",  () => {
  startScreen.style.display = "flex";
  currentIndex = 0;
  updateLyrics();
});

