//
// Burger Menu Toggle
function toggleMenu() {
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuOverlay = document.querySelector(".menu-overlay");

  burgerMenu.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");

  // Prevent body scroll when menu is open
  if (mobileMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

// Product data
const products = [
  {
    title: "RDE Galery",
    description:
      "Bros elegan dengan permata zircon original yang berkilauan. Dilapisi emas 18K dan dilengkapi mutiara air tawar. Cocok untuk acara formal maupun kasual.",
    image: "assets/img/bros_besar/bros_besar_2.jpeg",
  },
  {
    title: "RDE Galery",
    description:
      "Kombinasi sempurna antara mutiara air tawar premium dengan permata zircon. Design elegant yang cocok untuk berbagai outfit.",
    image: "assets/img/bros_besar/bros_besar_3.jpeg",
  },
  {
    title: "RDE Galery",
    description:
      "Bros unik dengan shell cangkang kerang asli. Detail natural yang membuatnya one of a kind. Limited edition dengan kualitas premium.",
    image: "assets/img/bros_besar/bros_besar_4.jpeg",
  },
  {
    title: "RDE Galery",
    description:
      "Bros mewah dengan dominasi lapis emas 18K. Permata zircon berkilau menambah kesan luxury. Perfect untuk acara special.",
    image: "assets/img/bros_kecil/img1.jpeg",
  },
  {
    title: "RDE Galery",
    description:
      "Design vintage yang timeless. Kombinasi sempurna antara classic dan modern. Material premium yang awet bertahun-tahun.",
    image: "assets/img/bros_kecil/img2.jpeg",
  },
  {
    title: "RDE Galery",
    description:
      "Bros dengan motif floral yang feminim. Detail halus dengan finishing sempurna. Cocok untuk melengkapi hijab atau outfit formal.",
    image: "assets/img/bros_kecil/img3.jpeg",
  },
];

// Open modal function
function openModal(index) {
  const product = products[index];
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalTitle").textContent = product.title;
  document.getElementById("modalPrice").textContent = product.price;
  document.getElementById("modalDescription").textContent = product.description;
  document.getElementById("productModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close modal function
function closeModal() {
  document.getElementById("productModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
document.getElementById("productModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
