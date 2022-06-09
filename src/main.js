const hamBurger = document.querySelector("#hamburger");
const close = document.querySelector("#close");
const navBar = document.querySelector("#nav_bar");
const arrowLeft = document.querySelectorAll(".arrow_left");
const arrowRight = document.querySelectorAll(".arrow_right");
const slider = document.querySelector("#slider");
const h1 = document.querySelector(".h1");
const para = document.querySelector(".para");
const array = [
  'url("/src/images/mobile-image-hero-1.jpg")',
  'url("/src/images/mobile-image-hero-2.jpg")',
  'url("/src/images/mobile-image-hero-3.jpg")',
];
let counter = 0;
const div = [
 
   "Discover innovative ways to decorate",
   "We are available all across the globe",
   "Manufactured with the best materials",
  
];
const paragraph = [
  " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bring in your vision to life. Create a room in your own style with ourcollection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business.  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our  store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
];
hamBurger.addEventListener("click", () => {
  navBar.style.display = "block";
  // console.log(navBar)
});
// console.log(hamBurger)
close.addEventListener("click", () => {
  navBar.style.display = "none";
});
arrowRight.forEach((arrow) => {
  console.log(arrow);
  arrow.addEventListener("click", () => {
    counter++;

    if (counter == array.length) {
      counter = 0;
    }
    slider.style.backgroundImage = array[counter];
      h1.textContent = div[counter];
      para.textContent = paragraph[counter]
  });
});

arrowLeft.forEach((arrow) => {
  console.log(arrow);
  arrow.addEventListener("click", () => {
    slider.style.backgroundImage = array[counter];
    h1.textContent = div[counter];
    para.textContent = paragraph[counter]
    if (counter == 0) {
      counter = array.length;
    }
    counter--;
  });
});
console.log(info);
