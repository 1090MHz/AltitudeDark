// Smooth scrolling
document.querySelectorAll(".nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scrollspy functionality using Intersection Observer
// Select <section> elements and <div> elements with id starting with "section"
const sections = document.querySelectorAll("section[id], div[id^='section']");

const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        navLinks.forEach((link) => {
          link.classList.remove("bg-gray-700"); // Remove highlight from all
          if (link.dataset.link === id) {
            link.classList.add("bg-gray-700"); // Add highlight to the active one
          }
        });
      }
    });
  },
  {
    threshold: 0.7, // Adjust this if needed
  }
);

sections.forEach((section) => observer.observe(section));

// Navbar background toggle on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    navbar.classList.remove("bg-gray-900");
    navbar.classList.add("bg-transparent");
  } else {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-gray-900");
  }
});
