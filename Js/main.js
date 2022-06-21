let bars = document.querySelector(".bars");
let uls = document.querySelector("nav ul");
let btn = document.querySelector("nav button");
let lis = document.querySelectorAll(".bars span");
let container = document.querySelector("header .container");
let header = document.querySelector("header");

bars.onclick = function () {
  lis[1].classList.toggle("one");
  lis[0].classList.toggle("two");
  lis[2].classList.toggle("three");
  uls.classList.toggle("show");
  btn.classList.toggle("show");
};

window.onscroll = function () {
  if (window.scrollY > header.offsetTop + 100) {
    header.style.top = "0";
  } else {
    header.style.top = "-100%";
  }
};

// Selecting the icon from the testimonials
let buttlets = document.querySelectorAll(".buttles li");
let cards = document.querySelectorAll(".test-people .card");
let icons = document.querySelectorAll(".icon");
let card = document.querySelector(".test-people");

icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    let offset = icon.dataset.dir === "right" ? 1 : -1;
    let activeSlide = document.querySelector("[data-slide]");
    let newIndex = [...card.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      icon.classList.add("disappear");
    }
    if (newIndex >= card.children.length) {
      icon.classList.add("disappear");
    }

    card.children[newIndex].dataset.slide = true;
    delete activeSlide.dataset.slide;

    for (i = 0; i < buttlets.length; i++) {
      buttlets[i].classList.remove("active");

      if (newIndex) {
        buttlets[newIndex].classList.add("active");
      } else {
        buttlets[0].classList.add("active");
      }
    }
  });
});

document.querySelector(".icon.left").addEventListener("click", (e) => {
  document.querySelector(".icon.right").classList.remove("disappear");
});
document.querySelector(".icon.right").addEventListener("click", (e) => {
  document.querySelector(".icon.left").classList.remove("disappear");
});

// How to make an accordion with vanilla js
let faqDivs = document.querySelectorAll(".faq-div");
let faqText = document.querySelectorAll(".faq .text");

faqDivs.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    faqText.forEach((text) => {
      text.style.display = "none";
      document.querySelector(e.target.dataset.faq).style.display = "block";
      //document.querySelector(e.target.dataset.faq).classList.toggle("faq-dis");
    });
  });
});
