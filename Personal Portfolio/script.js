var typed = new Typed(".auto-type", {
  strings: ["Frontend Developer", "Next JS Developer", "Python Enthusiast"],
  typeSpeed: 150,
  backSpeed: 50,
  loop: true,
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove active class from all
    navLinks.forEach((l) => l.classList.remove("active"));
    // Add to clicked one
    this.classList.add("active");
  });
});

  const menuIcon = document.querySelector(".menu");
  const nav_Links = document.getElementById("navLinks");

  menuIcon.addEventListener("click", () => {
    nav_Links.classList.toggle("show");

    // Optional: Toggle menu icon (hamburger to cross)
  });

