//FOR SHOWING MENU WHEN CLICKED ON MENU ICON
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    //Adding 'show' class to the div with 'nav__menu' class
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

//FOR HIDING MENU WHEN CLICKED ON ANY LINK FROM THE MENU
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

//FOR SCROLLING SECTIONS TO ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const secHt = current.offsetHeight;
    const secTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > secTop && scrollY <= secTop + secHt) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

// DARK-LIGHT THEME

const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.getElementById("theme-button").classList.toggle("bx-sun");
});

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home__data, .home__image,
          .about__data, .about__image,
          .services__content, .menu__content,
          .app__data, .app__img,
          .contact,
          .footer__content`,
  {
    interval: 200,
  }
);
