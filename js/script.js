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

// Toggle play/pause for videos
function togglePlay(card) {
  const video = card.querySelector("video");
  const icon = card.querySelector(".play-icon");

  // Pause all other videos first
  document.querySelectorAll(".video-card").forEach((otherCard) => {
    if (otherCard !== card) {
      const otherVideo = otherCard.querySelector("video");
      const otherIcon = otherCard.querySelector(".play-icon");
      otherVideo.pause();
      otherCard.classList.remove("playing");
      otherIcon.innerText = "▶";
    }
  });

  // Toggle this video
  if (video.paused) {
    video.play();
    card.classList.add("playing");
    icon.innerText = "⏸";
  } else {
    video.pause();
    card.classList.remove("playing");
    icon.innerText = "▶";
  }
}

// Scroll carousel for the specific section
function scrollCarousel(button) {
  // Find the carousel track in the same wrapper as this button
  const wrapper = button.closest(".carousel-wrapper");
  const track = wrapper.querySelector(".carousel-track");

  const card = track.querySelector(".video-card"); // first card
  const gap = parseInt(getComputedStyle(track).gap) || 20; // get CSS gap
  const scrollAmount = card.offsetWidth + gap;

  track.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

// Video play/pause toggle
function togglePlay(card) {
  const video = card.querySelector("video");
  const icon = card.querySelector(".play-icon");

  // Pause all other videos
  document.querySelectorAll(".video-card").forEach((otherCard) => {
    if (otherCard !== card) {
      const otherVideo = otherCard.querySelector("video");
      const otherIcon = otherCard.querySelector(".play-icon");
      otherVideo.pause();
      otherCard.classList.remove("playing");
      otherIcon.innerText = "▶";
    }
  });

  // Toggle this video
  if (video.paused) {
    video.play();
    card.classList.add("playing");
    icon.innerText = "⏸";
  } else {
    video.pause();
    card.classList.remove("playing");
    icon.innerText = "▶";
  }
}

/* testimonial video controll  */

// Select all testimonial cards
/* ===============================
   TESTIMONIAL VIDEO CONTROLS
================================ */

const testiCards = document.querySelectorAll(".testi-card");

testiCards.forEach((card) => {
  const video = card.querySelector("video");
  const playBtn = card.querySelector(".play-btn i");

  card.querySelector(".play-btn").addEventListener("click", () => {
    // Pause all other videos
    testiCards.forEach((otherCard) => {
      if (otherCard !== card) {
        const otherVideo = otherCard.querySelector("video");
        const otherIcon = otherCard.querySelector(".play-btn i");

        otherVideo.pause();
        otherIcon.classList.remove("fa-pause");
        otherIcon.classList.add("fa-play");
      }
    });

    // Toggle current video
    if (video.paused) {
      video.play();
      playBtn.classList.remove("fa-play");
      playBtn.classList.add("fa-pause");
    } else {
      video.pause();
      playBtn.classList.remove("fa-pause");
      playBtn.classList.add("fa-play");
    }
  });

  // Reset icon when video ends
  video.addEventListener("ended", () => {
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
  });
});




//   CLIENT REVIEWS SECTION

const reviewsGrid = document.getElementById("reviewsGrid");

// Create review card
function createReviewCard(review) {
  const card = document.createElement("div");
  card.classList.add("review-card");

  card.innerHTML = `
    <div class="review-top">

        <div class="review-user">
            <img src="./assets/images/logo.jpg" alt="User">

            <div class="review-user-info">
                <h4>${review.name}</h4>
                <p>${review.position}</p>
            </div>
        </div>

        <div class="review-rating">
            <i class="fa-solid fa-star"></i> ${review.rating}
        </div>

    </div>

    <div class="review-text">
        <span class="quote-start">“</span>
        <p>${review.description}</p>
        <span class="quote-end">”</span>
    </div>
  `;

  return card;
}

// Placeholder if JSON fails
function showPlaceholder() {
  const placeholder = {
    name: "John Doe",
    position: "Customer",
    rating: "5.0",
    description: "No reviews available right now.",
  };

  const card = createReviewCard(placeholder);
  reviewsGrid.appendChild(card);
}

// Fetch JSON reviews
fetch("/assets/data/reviews.json")
  .then((response) => {
    if (!response.ok) throw new Error("JSON not found");

    return response.json();
  })
  .then((data) => {
    if (!Array.isArray(data) || data.length === 0) {
      showPlaceholder();
      return;
    }

    data.forEach((review) => {
      const card = createReviewCard(review);
      reviewsGrid.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error loading reviews:", error);
    showPlaceholder();
  });








/* this is for the frequently Ask q and n */
function toggleFAQ(element) {
  const item = element.parentElement;

  // Optional: Close other open items
  document.querySelectorAll(".faq-item").forEach((i) => {
    if (i !== item) i.classList.remove("active");
  });

  // Toggle current item
  item.classList.toggle("active");
}
