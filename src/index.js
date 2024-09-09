document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery-item img");
  const modal = document.createElement("div");
  const modalImg = document.createElement("img");

  modal.classList.add("lightbox-modal");
  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  images.forEach((img) => {
    img.addEventListener("click", function () {
      modalImg.src = this.src;
      modal.style.display = "block";
    });
  });

  modal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Toggle navigation menu
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  hamburgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
