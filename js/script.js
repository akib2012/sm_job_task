const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");
const navActions = document.querySelector(".nav-actions");
const overlay = document.querySelector(".menu-overlay");

function toggleNav() {
  navLinks.classList.toggle("active");
  navActions.classList.toggle("active");
  overlay.classList.toggle("active");

  // Change icon
  const icon = mobileMenu.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
}

mobileMenu.addEventListener("click", toggleNav);
overlay.addEventListener("click", toggleNav);

// Auto-close on click
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", toggleNav);
});

// for the video paly and contronl

const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach((card) => {
  const video = card.querySelector("video");

  if (video) {
    card.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        card.classList.add("playing");
      } else {
        video.pause();
        card.classList.remove("playing");
      }
    });

    video.loop = true;

    video.muted = false;
  }
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
