/*   NAVBAR MOBILE MENU   */

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
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
}

mobileMenu.addEventListener("click", toggleNav);
overlay.addEventListener("click", toggleNav);

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", toggleNav);
});

/*   HERO VIDEO CONTROLS   */

const videoCards = document.querySelectorAll(".video-card1");

videoCards.forEach((card) => {
  const video = card.querySelector("video");
  const icon = card.querySelector(".play-icon i");

  card.addEventListener("click", () => {
    if (video.paused) {
      videoCards.forEach((c) => {
        const v = c.querySelector("video");
        const i = c.querySelector(".play-icon i");

        v.pause();
        i.classList.replace("fa-pause", "fa-play");
        c.classList.remove("playing");
      });

      video.play();
      icon.classList.replace("fa-play", "fa-pause");
      card.classList.add("playing");
    } else {
      video.pause();
      icon.classList.replace("fa-pause", "fa-play");
      card.classList.remove("playing");
    }
  });

  video.loop = true;
});

/*   CLIENT LOGO SLIDER   */

const track = document.querySelector(".logo-track");
const images = Array.from(track.children);

images.forEach((img) => {
  const clone = img.cloneNode(true);
  track.appendChild(clone);
});

track.addEventListener("mouseenter", () => {
  track.style.animationPlayState = "paused";
});

track.addEventListener("mouseleave", () => {
  track.style.animationPlayState = "running";
});

/*   PACKAGE SELECTION   */

function selectPackage(element) {
  document.querySelectorAll(".package-option").forEach((opt) => {
    opt.classList.remove("selected");
    opt.querySelector('input[type="radio"]').checked = false;
  });

  element.classList.add("selected");
  element.querySelector('input[type="radio"]').checked = true;
}

/*   VIDEO CAROUSEL CONTROLS   */

function togglePlay(card) {
  const video = card.querySelector("video");
  const icon = card.querySelector(".play-icon");

  document.querySelectorAll(".video-card").forEach((otherCard) => {
    if (otherCard !== card) {
      const otherVideo = otherCard.querySelector("video");
      const otherIcon = otherCard.querySelector(".play-icon");

      otherVideo.pause();
      otherCard.classList.remove("playing");
      otherIcon.innerText = "▶";
    }
  });

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

function scrollCarousel(button) {
  const wrapper = button.closest(".carousel-wrapper");
  const track = wrapper.querySelector(".carousel-track");

  const card = track.querySelector(".video-card");
  const gap = parseInt(getComputedStyle(track).gap) || 20;

  const scrollAmount = card.offsetWidth + gap;

  track.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
}

/*   TESTIMONIAL VIDEO CONTROLS   */

const testiCards = document.querySelectorAll(".testi-card");

testiCards.forEach((card) => {
  const video = card.querySelector("video");
  const playBtn = card.querySelector(".play-btn i");

  card.querySelector(".play-btn").addEventListener("click", () => {
    testiCards.forEach((otherCard) => {
      if (otherCard !== card) {
        const otherVideo = otherCard.querySelector("video");
        const otherIcon = otherCard.querySelector(".play-btn i");

        otherVideo.pause();
        otherIcon.classList.replace("fa-pause", "fa-play");
      }
    });

    if (video.paused) {
      video.play();
      playBtn.classList.replace("fa-play", "fa-pause");
    } else {
      video.pause();
      playBtn.classList.replace("fa-pause", "fa-play");
    }
  });

  video.addEventListener("ended", () => {
    playBtn.classList.replace("fa-pause", "fa-play");
  });
});

/*   CLIENT REVIEWS (JSON DATA)   */

const reviewsGrid = document.getElementById("reviewsGrid");

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

/*   FAQ ACCORDION   */

function toggleFAQ(element) {
  const item = element.parentElement;

  document.querySelectorAll(".faq-item").forEach((i) => {
    if (i !== item) i.classList.remove("active");
  });

  item.classList.toggle("active");
}
