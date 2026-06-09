(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".site-nav a");
  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href) {
      return;
    }

    var linkPage = href.split("/").pop();
    if (linkPage === currentPage || (currentPage.includes("dashboard") && linkPage === "projects.html") || (currentPage.includes("engine") && linkPage === "projects.html")) {
      link.classList.add("active");
    }
  });
})();
