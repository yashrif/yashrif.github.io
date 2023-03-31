"use strict";

const Header = document.querySelector(".header");
const Hero = document.querySelector(".section-hero");
const ClientTestimonials = document.querySelector(".client-testimonials");
const HomeArrow = document.querySelector(".home-arrow");
const Form = document.querySelector(".contacts-message");
const FormButton = document.querySelector(".btn--form");
const CopyrightYear = document.querySelector("#copyright-year");

/* ------------------------------- Sticky Nav and Home Arrow ------------------------------- */

// $(document).ready(function () {
//   $(window).scroll(function () {
//     if (this.scrollY > $(Hero.clientHeight)) console.log("tall");
//   });
// });

HomeArrow.classList.add("hidden");

window.onscroll = (e) => {
  if (window.scrollY >= Hero.clientHeight * 0.9) {
    Header.classList.add("sticky");
    Header.classList.add("slide-in");
    HomeArrow.classList.remove("hidden");
    HomeArrow.classList.add("visible");
    HomeArrow.classList.add("slide-up");
  } else {
    Header.classList.remove("sticky");
    Header.classList.remove("slide-in");
    HomeArrow.classList.remove("visible");
    HomeArrow.classList.add("hidden");
  }
};

HomeArrow.addEventListener(
  "click",
  () => (document.documentElement.scrollTop = 0)
);

/* -------------------------------- Menu bar -------------------------------- */

document.querySelector(".menu-bar").addEventListener("click", () => {
  document.querySelector(".icon--menu").classList.toggle("hidden");
  document.querySelector(".menu--close").classList.toggle("visible");
  if (document.querySelector(".icon--menu").classList.contains("hidden")) {
    document.querySelector(".main-nav").classList.add("mobile-nav");
    document.querySelector("html").classList.add("stop-scroll");
  } else {
    document.querySelector(".main-nav").classList.remove("mobile-nav");
    document.querySelector("html").classList.remove("stop-scroll");
  }
});

/* ------------------------------ Testimonials ------------------------------ */
let testimonialNumber = 0;

const TestimonialContent = [
  {
    img: "client-1.jpg",
    text: "Very talented! Love his design. His every work has an artistic touch.",
    name: "Emon",
    profession: "Backend Developer",
  },
  {
    img: "client-2.jpg",
    text: "Great staff. His every works in unique! Keep doing the great staff.",
    name: "Nazmul",
    profession: "Coder",
  },
  {
    img: "client-3.jpg",
    text: "Love his every work. Can't wait to see more of his works!",
    name: "Mansib",
    profession: "Player",
  },
];

const checkBound = (num) => {
  if (num >= TestimonialContent.length)
    return Math.floor(num % TestimonialContent.length);
  else if (num < 0) return TestimonialContent.length - 1;
  else return num;
};

const ClientTestimonialList = (content, index, direction) => {
  if (ClientTestimonials) ClientTestimonials.innerHTML = " ";
  for (let i = 1; i <= 3; i++) {
    index = checkBound(index);
    const html = `
    ${i === 2 ? `<div class="client-testimonial-nav">` : ""}
      <div class="client-testimonial client-testimonial--${i}">
        <img class="client-img fade-in" src="./img/${
          content[index].img
        }" alt="avatar" />
        <p class="text ${direction === 0 ? "slide-right" : "slide-left"}">${
      content[index].text
    }</p>
        <p class="client-name ${
          direction === 0 ? "slide-right" : "slide-left"
        }">${content[index].name}</p>
        <p class="client-profession ${
          direction === 0 ? "slide-right" : "slide-left"
        }">${content[index].profession}</p>
      </div>

    ${
      i == 2
        ? `<div class="testimonial-navigation">
            <button class="btn testimonial-navigation--btn testimonial-navigation--btn--left">
              <ion-icon class="testimonial-navigation-icon" name="chevron-back-outline"></ion-icon>
            </button>
            <button class="btn testimonial-navigation--btn testimonial-navigation--btn--right">
              <ion-icon class="testimonial-navigation-icon" name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
       </div>`
        : ""
    }`;
    ClientTestimonials.insertAdjacentHTML("beforeend", html);

    index++;
  }

  document
    .querySelector(".testimonial-navigation--btn--left")
    .addEventListener("click", () => {
      testimonialNumber = checkBound(testimonialNumber - 1);
      ClientTestimonialList(TestimonialContent, testimonialNumber, 0);
    });

  document
    .querySelector(".testimonial-navigation--btn--right")
    .addEventListener("click", () => {
      testimonialNumber = checkBound(testimonialNumber + 1);
      ClientTestimonialList(TestimonialContent, testimonialNumber, 1);
    });
};

ClientTestimonialList(TestimonialContent, 2, 0);

/* -------------------------------- Form Data ------------------------------- */

const FormData = FormButton.addEventListener("click", () =>
  document.querySelectorAll(".form-control")
);

/* ----------------------------- Copyright Year ----------------------------- */

CopyrightYear.innerHTML = new Date().getFullYear();
