function pressedBtn() {
  const buttons = document.querySelectorAll(".buttons");

  buttons[0].classList.add("active");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
    });
  });
}
pressedBtn();

const navbar = document.querySelector("nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // scrolling down
    navbar.style.top = "-100%";
  } else {
    // scrolling up
    navbar.style.top = "0";
  }
  lastScrollY = window.scrollY;
});
