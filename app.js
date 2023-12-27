const reviews = [
  {
    id: 1,
    head: " Discover innovative ways to decorate",
    text: "  We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    img: "./images/desktop-image-hero-1.jpg",
  },
  {
    id: 2,
    head: "  We are available all across the globe",
    text: " With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our  store locator. Any questions? Don't hesitate to contact us today.",
    img: "/images/desktop-image-hero-2.jpg",
  },
  {
    id: 3,
    head: "  Manufactured with the best materials",
    text: "   Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    img: "/images/desktop-image-hero-3.jpg",
  },
];
const header = document.getElementById("header");
const info = document.getElementById("info");
const image = document.getElementById("swim");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const menu = document.getElementById("menu");
const openMenu = document.getElementById("burger");
const closeMenu = document.getElementById("close");
console.log(image);

let currentTarget = 0;

window.addEventListener("DOMContentLoaded", function () {
  getCurrentTarget();
  console.log("hello world");
});

function getCurrentTarget() {
  const random = reviews[currentTarget];
  header.textContent = random.head;
  info.textContent = random.text;
  image.src = random.img;
}

nextBtn.addEventListener("click", function () {
  currentTarget++;
  if (currentTarget > reviews.length - 1) {
    currentTarget = 0;
  }
  getCurrentTarget();
});

prevBtn.addEventListener("click", function () {
  currentTarget--;
  if (currentTarget < 0) {
    currentTarget = reviews.length - 1;
  }
  getCurrentTarget();
});

openMenu.addEventListener("click", function () {
  menu.classList.add("active");
  document.body.classList.add("static");
});

closeMenu.addEventListener("click", function () {
  menu.classList.remove("active");
  document.body.classList.remove("static");
});
