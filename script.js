document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // Contact Form
  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });

  // Feedback Form
  const feedbackForm = document.querySelector(".feedback-form");
  feedbackForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for your feedback! We value your opinion.");
    feedbackForm.reset();
  });
});
