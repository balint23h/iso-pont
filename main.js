//---------first----------
const first = document.querySelector(".split__image--first");
const firstsplit = document.querySelector(".split__image--first");


first.addEventListener("mouseenter", () => {
  firstsplit.classList.add("hover-first");
});

first.addEventListener("mouseleave", () => {
  firstsplit.classList.remove("hover-first");
});

//---------second----------
const second = document.querySelector(".split__image--second");
const secondsplit = document.querySelector(".split__image--second");

second.addEventListener("mouseenter", () => {
  secondsplit.classList.add("hover-second");
});

second.addEventListener("mouseleave", () => {
  secondsplit.classList.remove("hover-second");
});

//---------third----------
const third = document.querySelector(".split__image--third");
const thirdsplit = document.querySelector(".split__image--third");


third.addEventListener("mouseenter", () => {
  thirdsplit.classList.add("hover-third");
});

third.addEventListener("mouseleave", () => {
  thirdsplit.classList.remove("hover-third");
});

//---------fourth----------
const fourth = document.querySelector(".split__image--fourth");
const fourthsplit = document.querySelector(".split__image--fourth");

fourth.addEventListener("mouseenter", () => {
  fourthsplit.classList.add("hover-fourth");
});

fourth.addEventListener("mouseleave", () => {
  fourthsplit.classList.remove("hover-fourth");
});





