
//Toggle active hamburger menu
const hamburger = document.querySelector(".hamburger");
const drop = document.querySelector(".list-drop");
const dropLink = document.querySelector(".link")
const navMenu = document.querySelector(".normal-list");
const navDrop = document.querySelector(".dropdown");
drop.addEventListener("click", () => {
  navDrop.classList.toggle("active");
  dropLink.classList.toggle("active");
});
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  if (navDrop.classList.contains("active")) {
    navDrop.classList.remove("active");
    dropLink.classList.remove("active");
  }
});
//Toggle bubble carousel
const bubbleArrowr = document.querySelector(".sec-shadow.a .slidebubble.right"); //for some reason querySelectorAll deoesn't work for .slidebubble
const bubbleArrowl = document.querySelector(".sec-shadow.a .slidebubble.left");
const addBubble = document.querySelector(".addbubble");
const bubbleItem = document.querySelector(".bubble-item");
bubbleArrowr.addEventListener("click", () => {
  addBubble.classList.toggle("active");
  bubbleItem.classList.toggle("active");
});
bubbleArrowl.addEventListener("click", () => {
  addBubble.classList.toggle("active");
  bubbleItem.classList.toggle("active");
});