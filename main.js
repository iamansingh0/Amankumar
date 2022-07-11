const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.2
        }s`;
      }
    });

    // burger animation
    burger.classList.toggle("toggle");
  });
};

const changeNavColorOnScrolling = () => {
  const navBar = document.querySelector(".wrapper");
  window.onscroll = () => {
    if (window.scrollY > 570) {
      navBar.classList.add("scrolled");
    } else {
      navBar.classList.remove("scrolled");
    }
  };
};


const App = () => {
  navSlide();
  changeNavColorOnScrolling();
};

App();
