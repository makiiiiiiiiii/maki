let holeSize = 50; // Initial hole size
let isOpened = false; // Flag to track if the hole is successfully opened

const hole = document.querySelector(".hole");
const text = document.querySelector("#text");
const button = document.querySelector(".rounded-button");

const interval = setInterval(() => {
    // Check if the hole is big enough
    if (holeSize >= 300) {
      isOpened = true;
      clearInterval(interval); // Stop increasing the size
    } else {
      if(holeSize-3 > 50) {
          holeSize -= 5;
          hole.style.width = holeSize + "px";
          hole.style.height = holeSize + "px";
      } 
    }
}, 50);

function expandHole() {
  holeSize += 12; // Increase the hole size on click
  hole.style.width = holeSize + "px";
  hole.style.height = holeSize + "px";

  if(holeSize >= 300) {
    text.innerHTML = "good job bby <333";
    button.style.visibility = "visible";
  } else if (holeSize >= 250) {
    text.innerHTML = "gigil na gigil";
  } else if(holeSize >= 200) {
    text.innerHTML = "paningkamot bb";
  } else if(holeSize >= 150) {
    text.innerHTML = "halfway there! 🤭🤭🤭";
  } else if(holeSize >= 100) {
    text.innerHTML = "fast hands si idol ahahahh";
  } else if(holeSize >= 50) {
    text.innerHTML = "cute mo pumindot";
  } else if(holeSize >= 10) {
    text.innerHTML = "too hard for you maki? blehh";
  }
}
