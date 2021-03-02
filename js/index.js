
// Modal Image Gallery
function onClick(element) {
    let activity = document.getElementById(element+"Header").innerText
    
    gtag('event', element.replace(" ","").replace("act",""), {'event_category': 'activityclick'} );
    document.getElementById("modal01").style.display = "block";
    document.getElementById("overlayHeader").innerHTML = activity;
    document.getElementById("overlaySubHeader").innerHTML = document.getElementById(element+"SubHeader").innerText;
    document.getElementById("overlayLong").innerHTML = document.getElementById(element+"Long").innerText;
    document.getElementById("overlayContactName").innerHTML = document.getElementById(element+"ContactName").innerText;

    if (document.getElementById(element+"Notes").innerText != "") {
        document.getElementById("overlayNotes").innerHTML = document.getElementById(element+"Notes").innerText;
        document.getElementById("overlayNotesWrapper").classList.remove("w3-hide")
    } else {
        document.getElementById("overlayNotesWrapper").classList.add("w3-hide")
    }

    if (document.getElementById(element+"NotesMore").innerText != "") {
        document.getElementById("overlayNotesMore").innerHTML = document.getElementById(element+"NotesMore").innerText;
        document.getElementById("overlayNotesMoreWrapper").classList.remove("w3-hide")
    } else {
        document.getElementById("overlayNotesMoreWrapper").classList.add("w3-hide")
    }
    
    if (document.getElementById(element+"ContactNumber").innerText != "") {
        document.getElementById("overlayContactNumber").innerHTML = document.getElementById(element+"ContactNumber").innerText;
        document.getElementById("overlayContactNumberWrapper").classList.remove("w3-hide")
    } else {
        document.getElementById("overlayContactNumberWrapper").classList.add("w3-hide")
    }
    if (document.getElementById(element+"ContactEmail").innerText != "") {
        document.getElementById("overlayContactEmail").innerHTML = document.getElementById(element+"ContactEmail").innerText;
        document.getElementById("overlayContactEmailWrapper").classList.remove("w3-hide")
    } else {
        document.getElementById("overlayContactEmailWrapper").classList.add("w3-hide")
    }
    if (document.getElementById(element+"ContactWebsite").innerText != "") {
        document.getElementById("overlayContactWebsite").innerHTML = document.getElementById(element+"ContactWebsite").innerText;
        document.getElementById("overlayContactWebsiteWrapper").classList.remove("w3-hide")
    } else {
        document.getElementById("overlayContactWebsiteWrapper").classList.add("w3-hide")
    }
    document.getElementById("overlayTime").innerHTML = document.getElementById(element+"Time").innerText;
    document.getElementById("overlayDay").innerHTML = document.getElementById(element+"Day").innerText;

    if (document.getElementById(element+"Image").innerText != "") {
        document.getElementById("overlayImage").src = "images/" + document.getElementById(element+"Image").innerText;
        document.getElementById("overlayImageWrapper").classList.remove("w3-hide")
    } else {
        document.getElementById("overlayImageWrapper").classList.add("w3-hide")
    }
  }

  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }


  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-light-blue", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-light-blue";
  }
  var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 5000); // Change image every 2 seconds
}
