const audio = document.getElementById("audio");
const lyricsList = document.getElementById("lyricsList");

const lyrics = [
  { time: 15.7, text: "When you feel your love's been taken" },
  { time: 19.65, text: "When you know there's something missing" },
  { time: 23.63, text: "In the dark, we're barely hanging on" },
  { time: 31.38, text: "Then you rest your head upon my chest" },
  { time: 35.41, text: "And you feel like there ain't nothing left" },
  { time: 39.34, text: "I'm afraid that what we had is gone" },
  { time: 46.53, text: "Then I think of the start" },
  { time: 50.53, text: "And it echoes a spark" },
  { time: 55.02, text: "And I remember the magic electricity" },
  { time: 61.44, text: "Then I look in my heart" },
  { time: 65.69, text: "There's a light in the dark" },
  { time: 70.0,  text: "Still a flicker of hope that you first gave to me" },
  { time: 76.79, text: "That I wanna keep" },
  { time: 80.99, text: "Please don't leave" },
  { time: 88.95, text: "Please don't leave" },
  { time: 97.14, text: "When you lay there and you're sleeping" },
  { time: 101.49, text: "Hear the patterns of your breathing" },
  { time: 105.25, text: "And I tell you things you've never heard before" },
  { time: 112.92, text: "Asking questions to the ceiling" },
  { time: 116.8,  text: "Never knowing what you're thinking" },
  { time: 120.85, text: "I'm afraid that what we had is gone" },
  { time: 127.82, text: "Then I think of the start" },
  { time: 131.82, text: "And it echoes a spark" },
  { time: 136.24, text: "And I remember the magic electricity" },
  { time: 142.69, text: "Then I look in my heart" },
  { time: 146.45, text: "There's a light in the dark" },
  { time: 151.08, text: "Still a flicker of hope that you first gave to me" },
  { time: 157.35, text: "That I wanna keep" },
  { time: 161.45, text: "Please don't leave" },
  { time: 169.4,  text: "Please don't leave" },
  { time: 177.79, text: "And I want this to pass" },
  { time: 185.75, text: "And I hope this won't last" },
  { time: 192.74, text: "Last too long" },
  { time: 196.31, text: "Then I think of the start" },
  { time: 200.44, text: "And it echoes a spark" },
  { time: 205.07, text: "And I remember the magic electricity" },
  { time: 211.26, text: "Then I look in my heart" },
  { time: 215.25, text: "There's a light in the dark" },
  { time: 219.5,  text: "Still a flicker of hope that you first gave to me" },
  { time: 226.06, text: "That I wanna keep" },
  { time: 230.1,  text: "Please don't leave" },
  { time: 234.32, text: "" },
  { time: 237.99, text: "Please don't leave" },
  { time: 240.42, text: "" }
];

lyrics.forEach((line) => {
  const div = document.createElement("div");
  div.classList.add("line");
  div.textContent = line.text;
  lyricsList.appendChild(div);
});

let currentIndex = 0;

audio.ontimeupdate = () => {
  for (let i = 0; i < lyrics.length - 1; i++) {
    if (audio.currentTime >= lyrics[i].time && audio.currentTime < lyrics[i + 1].time) {
      if (currentIndex !== i) {
        currentIndex = i;
        updateScroll();
      }
      break;
    }
  }
};

function updateScroll() {
  const offset = (currentIndex - 1) * 30; // 30px por línea
  lyricsList.style.transform = `translateY(-${offset}px)`;

  const lines = document.querySelectorAll(".line");
  lines.forEach((line, i) => {
    line.classList.remove("active", "prev", "next");
    if (i === currentIndex) line.classList.add("active");
    else if (i === currentIndex - 1) line.classList.add("prev");
    else if (i === currentIndex + 1) line.classList.add("next");
  });
}
