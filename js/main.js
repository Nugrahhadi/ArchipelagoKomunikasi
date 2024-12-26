// Add scroll event listener for navbar background
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0, 0, 0, 0.95)";
  } else {
    nav.style.background = "rgba(0, 0, 0, 0.8)";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Event listener untuk tombol hamburger
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active"); // Toggle class untuk menampilkan/menyembunyikan menu

    // Toggle animasi untuk hamburger
    hamburger.classList.toggle("is-active");
  });
});

// menu nav
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("nav-active");
});

//dropdown
document.addEventListener("DOMContentLoaded", function () {
  // For mobile dropdown toggle
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        const arrow = this.querySelector(".bi-chevron-down");

        // Toggle dropdown
        dropdownMenu.style.display =
          dropdownMenu.style.display === "block" ? "none" : "block";

        // Rotate arrow
        arrow.style.transform =
          dropdownMenu.style.display === "block"
            ? "rotate(180deg)"
            : "rotate(0)";
      }
    });
  });
});
