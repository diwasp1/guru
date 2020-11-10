/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

let searchIcon = document.getElementById("search-icon");
let searchBar = document.querySelector(".search-bar");
let hamBar = document.querySelector("#ham-bar");

searchIcon.addEventListener("click", displaySearch);

function displaySearch(e) {
  e.preventDefault();
  if (searchBar.style.display == "none") {
    searchBar.style.display = "inline-block";
    // searchBar.style.transition = "all .9s linear";
    searchBar.focus();
    searchBar.value = "";
  } else {
    searchBar.style.display = "none";
  }
}
window.onclick = function (event) {
  if (event.target != searchBar && event.target != searchIcon) {
    searchBar.style.display = "none";
  }
};

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
