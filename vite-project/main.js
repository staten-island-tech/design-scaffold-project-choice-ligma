import './style.css'
import { sections } from './catelog';
import { islands } from './catelog';
import { gsap } from "gsap";

const tl = gsap.timeline({ scrollTrigger: ".header-title", delay: 0.5 }); //sequence animations easily

tl.from("#header", { opacity: 0, duration: 1, ease: "ease-out" });
tl.from(".btn", { x: -500, duration: 0.5, ease: "ease-out" });
tl.from(".island-card", { duration: 1, flip: "flip" });

const DOMSelectors = {
  body: document.getElementById("#hawaii"),
  card: document.querySelector(".card"),
  display: document.querySelector(".info"),
  islanddisplay: document.querySelector(".islands"),
  beachdisplay: document.querySelector(".beaches"),
  volcanodisplay: document.querySelector(".volcanoes"),
  fooddisplay: document.querySelector(".foods"),
  museumdisplay: document.querySelector(".museums"),
  btn: document.querySelector(".btn"),
  themebtn: document.getElementById("#themebtn"),
};

DOMSelectors.themebtn.addEventListener("click", function () {
  if (document.body.classList.contains("pinktheme")) {
    document.body.classList.add("bluetheme");
    document.body.classList.remove("pinktheme");
  } else {
    document.body.classList.add("pinktheme");
    document.body.classList.remove("bluetheme");
  }
});

sections.forEach((section, index) => {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<h2 class="title">${section.name}</h2>
      <div class="card" id="${index}">
      <img class="img" src="${section.img}" alt="${section.name}">
      <div class="name">${section.subname}</div>
      <p class="description">${section.description}</p>
      </div>`
  );
});

islands.forEach((island, index) => {
  DOMSelectors.islanddisplay.insertAdjacentHTML(
    "afterbegin",
    `<div class="islands parent card" id="${index}">
      <div class="name">${island.name}</div>
      <img class="island-img" src="${island.img}" alt="${island.name}">
      <p class="description">${island.description}</p>
    </div>`
  );
});

volcanoes.forEach((volcano, index) => {
  DOMSelectors.volcanodisplay.insertAdjacentHTML(
    "afterbegin",
    `<div class="volcanoes parent card" id="${index}">
      <div class="name">${volcano.name}</div>
      <img class="img" src="${volcano.img}" alt="${volcano.name}">
      <p class="description">${volcano.description}</p>
    </div>`
  );
});

foods.forEach((food, index) => {
  DOMSelectors.fooddisplay.insertAdjacentHTML(
    "afterbegin",
    `<div class="foods parent card id="${index}">
      <div class="name">${food.name}</div>
      <img class="img" src="${food.img}" alt="${food.name}">
      <p class="description">${food.description}</p>
    </div>`
  );
});

beaches.forEach((beach, index) => {
  DOMSelectors.beachdisplay.insertAdjacentHTML(
    "afterbegin",
    `<div class="beaches parent card id="${index}">
      <div class="name">${beach.name}</div> 
      <img class="img" src="${beach.img}" alt="${beach.name}">
      <p class="description">${beach.description}</p>
      </div>`
  );
});

museums.forEach((museum, index) => {
  DOMSelectors.museumdisplay.insertAdjacentHTML(
    "afterbegin",
    `<div class="museums parent card id="${index}">
      <div class="name">${museum.name}</div> 
      <img class="img" src="${museum.img}" alt="${museum.name}">
      <p class="description">${museum.description}</p>
      </div>`
  );
});

DOMSelectors.themebtn.addEventListener("click", function () {
  if (document.body.classList.contains("pinktheme")) {
    document.body.classList.add("bluetheme");
    document.body.classList.remove("pinktheme");
  } else {
    document.body.classList.add("pinktheme");
    document.body.classList.remove("bluetheme");
  }
});

gsap
