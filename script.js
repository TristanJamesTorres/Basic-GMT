const burgur = document.querySelector(".burgur__menu")
const header = document.querySelector(".header__nav")
burgur.addEventListener("click", () =>{
    burgur.classList.toggle("open");
    header.classList.toggle("open");
})
