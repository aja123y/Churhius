const navMenu = document.getElementById("navMenu"),
  navToggle = document.getElementById("navToggle"),
  navClose = document.getElementById("navClose");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("showMenu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("showMenu");
  });
}

// ===================================

// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId);

//   toggle.addEventListener("click", () => {
//     nav.classList.toggle("showMenu");
//     toggle.classList.toggle("showIcon");
//   });
// };

// showMenu("navToggle", "nevMenu");
// ========================================


// Number Animation
function animateValue(el, end, duration) {
  const start = 0;
  const range = end - start;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    el.textContent = Math.floor(progress * range);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = end;
    }
  }

  requestAnimationFrame(update);
}

// Scroll Observer
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = document.querySelectorAll(".secEheading");
        const duration = 2000;

        counters.forEach((counter) => {
          const endValue = parseInt(counter.getAttribute("data-count"));
          animateValue(counter, endValue, duration);
        });

        obs.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(document.querySelector(".secErating"));
