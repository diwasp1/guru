
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  } 


  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


//navbar link active

let navLinks = document.querySelector(".navigation_links");
let navBtn = navLinks.getElementsByClassName("nav_btn");

console.log(navBtn.length);

for(i=0; i < navBtn.length; i++){

    navBtn[i].addEventListener('click',function(e){
      
        let current = document.querySelector(".active");
        current.className = current.className.replace(" active", " ");
        this.className += " active";
    });

}