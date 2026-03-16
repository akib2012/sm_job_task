const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");
const navActions = document.querySelector(".nav-actions");
const overlay = document.querySelector(".menu-overlay");

function toggleNav() {
  navLinks.classList.toggle("active");
  navActions.classList.toggle("active");
  overlay.classList.toggle("active");

  const icon = mobileMenu.querySelector("i");

  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

mobileMenu.addEventListener("click", toggleNav);
overlay.addEventListener("click", toggleNav);

mobileMenu.addEventListener("click", toggleNav);
overlay.addEventListener("click", toggleNav);

/* close menu when click link */

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", toggleNav);
});

// for the video paly and contronl

// Target the correct class name used in your HTML
const videoCards = document.querySelectorAll(".video-card1");

videoCards.forEach((card) => {
  const video = card.querySelector("video");
  const icon = card.querySelector(".play-icon i");

  card.addEventListener("click", () => {
    if (video.paused) {
      // pause all videos
      videoCards.forEach((c) => {
        const v = c.querySelector("video");
        const i = c.querySelector(".play-icon i");

        v.pause();
        i.classList.remove("fa-pause");
        i.classList.add("fa-play");
        c.classList.remove("playing");
      });

      video.play();
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
      card.classList.add("playing");
    } else {
      video.pause();
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
      card.classList.remove("playing");
    }
  });

  video.loop = true;
});

// dynamin client section
const track = document.querySelector(".logo-track");
const images = Array.from(track.children);

// Clone the logos to create a seamless loop
images.forEach((img) => {
  const clone = img.cloneNode(true);
  track.appendChild(clone);
});

// Optional: Pause animation on hover
track.addEventListener("mouseenter", () => {
  track.style.animationPlayState = "paused";
});

track.addEventListener("mouseleave", () => {
  track.style.animationPlayState = "running";
});

// sevice of pakages

function selectPackage(element) {
  // Remove 'selected' class from all options
  document.querySelectorAll(".package-option").forEach((opt) => {
    opt.classList.remove("selected");
    opt.querySelector('input[type="radio"]').checked = false;
  });

  // Add 'selected' class to the clicked one
  element.classList.add("selected");
  element.querySelector('input[type="radio"]').checked = true;
}

// Horizontal scroll function
function scrollCarousel() {
  const track = document.getElementById("carouselTrack");
  track.scrollBy({ left: 300, behavior: "smooth" });
}

// Play/Stop toggle logic
function togglePlay(card) {
  const icon = card.querySelector(".play-icon");

  // Toggle state
  if (card.classList.contains("playing")) {
    card.classList.remove("playing");
    icon.innerText = "▶";
    // Insert logic here to pause your video element
    console.log("Video Paused");
  } else {
    card.classList.add("playing");
    icon.innerText = "⏸";
    // Insert logic here to play your video element
    console.log("Video Playing");
  }
}

// client reviews here

document.querySelectorAll(".testi-card").forEach((card) => {
  const video = card.querySelector("video");
  const playBtn = card.querySelector(".play-btn");

  card.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.style.display = "none";
    } else {
      video.pause();
      playBtn.style.display = "flex";
    }
  });
});

// frequently ask question

function toggleFAQ(element) {
  const item = element.parentElement;

  // Optional: Close other open items
  document.querySelectorAll(".faq-item").forEach((i) => {
    if (i !== item) i.classList.remove("active");
  });

  // Toggle current item
  item.classList.toggle("active");
}
