var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const btnEl = document.querySelector(".card_btn")
const btn2El = document.querySelector(".card_btn2")
const btn3El = document.querySelector(".card_btn3")
const btn4El = document.querySelector(".card_btn4")
const textEl = document.querySelector(".num")
let num = 0;
textEl.innerHTML = num;
btnEl.addEventListener("click", () => {
    num++;
    textEl.innerHTML = num;
})
btn2El.addEventListener("click", () => {
    num++;
    textEl.innerHTML = num;
})
btn3El.addEventListener("click", () => {
    num++;
    textEl.innerHTML = num;
})
btn4El.addEventListener("click", () => {
    num++;
    textEl.innerHTML = num;
});
