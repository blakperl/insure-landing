document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector(".hero");
    const topline = document.querySelector(".topline");
    const headings = document.querySelectorAll(".content h1, .content p, .content a");
    const famImage = document.querySelector(".fam");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.5 });
  
    headings.forEach((heading) => {
      observer.observe(heading);
    });
  
    // Observe the topline separately
    observer.observe(topline);

    observer.observe(famImage);
  });
  
  // Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    const forthSection = document.querySelector(".forth.section");
    const cards = document.querySelectorAll(".forth.section .hidden");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    cards.forEach((card) => {
      observer.observe(card);
    });
  
    // Observe the forth section container
    observer.observe(forthSection);
  });
  