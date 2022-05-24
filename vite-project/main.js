import './style.css'
import { sections } from './catelog';
import { islands } from './catelog';
import { gsap } from "gsap";

const tl = gsap.timeline({ scrollTrigger:".header-title", delay: 0.5 }); //sequence animations easily

tl.from("#header", { opacity: 0, duration: 1, ease: "ease-out" });
tl.from(".btn", { x: -500, duration: 0.5, ease: "ease-out" });
tl.from(".island-card", { duration: 1, flip: "flip" });

const DOMSelectors = {
  card: document.querySelector(".card"),
  display: document.querySelector(".info"),
  island:
  btn: document.querySelector("#btn"),
  themebtn: document.getElementById("themebtn"),
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
  DOMSelectors.islands.insertAdjacentHTML(
    "afterbegin",
    `<h2 class="title">${section.name}</h2>
      <div class="card" id="${index}">
      <img class="img" src="${section.img}" alt="${section.name}">
      <div class="subtitle">${section.subname}</div>
      <p class="description">${section.description}</p>
      </div>`
  );
});

islands.forEach((island, index) => {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="parent island-card" id="${index}">
        <div class="island-name">${island.name}</div>
        <img class="island-img" src="${island.img}" alt="${island.name}">
        <p class="island-description">${island.description}</p>
      </div>`
  );
});

volcanoes.forEach((volcano, index) => {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="parent volcano-card" id="${index}">
        <div class="volcano-name">${volcano.name}</div>
        <img class="volcano-img" src="${volcano.img}" alt="${volcano.name}">
        <p class="volcano-description">${volcano.description}</p>
      </div>`
  );
});

foods.forEach((food, index) => {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="parent food-card" id="${index}">
        <div class="food-name">${food.name}</div>
        <img class="food-img" src="${food.img}" alt="${food.name}">
        <p class="food-description">${food.description}</p>
      </div>`
  );
});

beaches.forEach((beach, index) => {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="parent beach-card" id="${index}">
        <div class="beach-name">${beach.name}</div>
        <img class="beach-img" src="${beaches.img}" alt="${beach.name}">
        <p class="beach-description">${beach.description}</p>
      </div>`
  );
});