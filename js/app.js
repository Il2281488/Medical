let homeHeight = document.querySelector(".header_inner").clientHeight;
let scrollHeight = () => document.documentElement.scrollTop;

function onScroll(){
	if (scrollHeight() >= homeHeight) {
		document.querySelector("header").classList.add("fixed");
	} else {
		document.querySelector("header").classList.remove("fixed");
	}
}

setInterval(onScroll, 100);



// ------------------- nav toggle



const navToggle = document.querySelector("#nav_toggle");
const rightSide = document.querySelector(".right_side");

function onclickNavToggle(){
	navToggle.classList.toggle("active");
	rightSide.classList.toggle("active");
}

navToggle.onclick = onclickNavToggle;


// smooth scroll 
const navLinks = document.querySelectorAll('.nav a');


navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const navbarHeight = document.querySelector('.header_inner').clientHeight;
    const scrollToPosition = targetElement.offsetTop - navbarHeight ;

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  });
});



const logoHome = document.querySelector(".logo")

logoHome.addEventListener('click', (event) => {
  event.preventDefault();
  const targetId = event.target.getAttribute('data-href');
  const targetElement = document.querySelector(targetId);
  const navbarHeight = document.querySelector('.header_inner').clientHeight;
  const scrollToPosition = targetElement.offsetTop - navbarHeight;

  window.scrollTo({
    top: scrollToPosition,
    behavior: 'smooth'
  });
});


// ----------------------------------------           slider


document.addEventListener("DOMContentLoaded", function() {
  let slider = document.getElementById("slider");
  let sliderImg = document.querySelector(".slider_img");
  let sliderText = document.querySelectorAll(".slider_text");
  let sliderButtons = document.querySelectorAll(".slider button");

  let index = 0;

  sliderButtons.forEach(function(button) {
    button.addEventListener("click", function() {

      if (button.classList.contains("left_slider")) {
        index--;
      } else {
        index++;
      }

      if (index < 0) {
        index = sliderImg.children.length - 1;
      }

      if (index >= sliderImg.children.length) {
        index = 0;
      }

      sliderImg.querySelector(".active").classList.remove("active");
      sliderImg.children[index].classList.add("active");

      sliderText.forEach(function(text) {
        text.querySelector(".active").classList.remove("active");
        text.children[index].classList.add("active");
      });
    });
  });
});