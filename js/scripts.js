const navLinks = document.querySelectorAll(`nav a`);
const sections = document.querySelectorAll("section[id]");

window.addEventListener("locationchange", function (e) {
  const hash = e.currentTarget.location.hash;
  if (hash) {
    const getLinkEl = document.querySelector(`nav a[href='${hash}']`);

    navLinks?.forEach((el) => {
      const classList = el.classList;
      el.classList.remove("active");
    });

    getLinkEl.classList.add("active");
  }
});

window.addEventListener("popstate", () => {
  window.dispatchEvent(new Event("locationchange"));
});

function removeClass(elList) {
  elList?.forEach((el) => {
    const classList = el.classList;
    if (classList.includes("active")) {
      getLinkEl.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", navHighlighter);
window.addEventListener("unload", navHighlighter);

function navHighlighter(action) {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector("nav a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
