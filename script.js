/*--Lottie Animation and Mobile Menu Appear---*/
const pageHeader = document.querySelector(".header");
const toggleMenu = document.querySelector(".toggle-menu");
const player = document.querySelector("lottie-player");
const menuWrapper = document.querySelector(".nav__menu");
// 1.define a variable with array of all 3 menu-link:
//querySelectorAll gets you all 3 menu-links
const menuLink = document.querySelectorAll(".nav__link");
const menuOpenedClass = "menu-open";
const noTransitionClass = "no-transition";
let timer;

toggleMenu.addEventListener("click", function (e) {
  e.preventDefault();
  pageHeader.classList.toggle(menuOpenedClass);
  if (pageHeader.classList.contains(menuOpenedClass)) {
    this.setAttribute("aria-label", "Close navigation");
    this.setAttribute("aria-expanded", "true");
    player.getLottie().playSegments([0, 90], true);
  } else {
    this.setAttribute("aria-label", "Open navigation");
    this.setAttribute("aria-expanded", "false");
    player.getLottie().playSegments([90, 0], true);
  }
});
//2.define a function() that closes the menu and plays backwards the lottie player:
function closeMenu() {
  // pageHeader.classList.toggle(menuOpenedClass); // would also work;
  pageHeader.classList.remove("menu-open");

  // play lottie player segment backwards
  player.getLottie().playSegments([90, 0], true);
}
//3.Add event listener to all 3 menu-links:
menuLink.forEach(function (element) {
  element.addEventListener("click", function () {
    closeMenu();
  });
});

window.addEventListener("resize", function () {
  menuWrapper.classList.add(noTransitionClass);
  clearTimeout(timer);
  timer = setTimeout(function () {
    menuWrapper.classList.remove(noTransitionClass);
  }, 500);
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");else
  header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");else
  scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.
      querySelector(".nav__menu a[href*=" + sectionId + "]").
      classList.add("active-link");
    } else {
      document.
      querySelector(".nav__menu a[href*=" + sectionId + "]").
      classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400
  // reset: true
});

sr.reveal(`.home__header, .section__title`, { delay: 600 });
sr.reveal(`.home__footer`, { delay: 700 });
sr.reveal(`.home__img`, { delay: 900, origin: "top" });

sr.reveal(
`.social__icon, .products__card, .footer__logo, .footer__content, .footer__copy`,
{ origin: "top", interval: 100 });

sr.reveal(`.specs__data, .discount__animate`, {
  origin: "left",
  interval: 100 });

sr.reveal(`.specs__img, .discount__img`, { origin: "right" });
sr.reveal(`.case__img`, { origin: "top" });
sr.reveal(`.case__data`);
//# sourceURL=pen.js

