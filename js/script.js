// Experiment use "btn" class to activate the magnetic mover
const btns = document.querySelectorAll(".btn");

    // Function to handle mousemove event
    function handleMouseMove(e) {
      const position = this.getBoundingClientRect();
      const x = e.pageX - position.left - position.width / 2;
      const y = e.pageY - position.top - position.height / 2;
      this.children[0].style.transform = "translate(" + x * 0.05 + "px, " + y * 0.05 + "px)";
    }

    // Function to handle mouseout event
    function handleMouseOut() {
      this.children[0].style.transform = "translate(0px, 0px)";
    }

    // Add or remove event listeners based on window width
    function updateEventListeners() {
      const isWideScreen = window.innerWidth > 600;

      btns.forEach((btn) => {
        if (isWideScreen) {
          btn.addEventListener("mousemove", handleMouseMove);
          btn.addEventListener("mouseout", handleMouseOut);
        } else {
          btn.removeEventListener("mousemove", handleMouseMove);
          btn.removeEventListener("mouseout", handleMouseOut);
        }
      });
    }

    // Initial check and add/remove event listeners based on window width
    updateEventListeners();

    // Listen for window resize events and adjust behavior accordingly
    window.addEventListener("resize", updateEventListeners);


// Toggle for Hamburger Menu 

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const isOpen = menu.classList.toggle("open");
  icon.classList.toggle("open", isOpen);
}

function closeMenuOutsideClick(event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Check if the clicked element is not part of the menu or its button
  if (
      !menu.contains(event.target) &&
      !icon.contains(event.target) &&
      menu.classList.contains("open")
  ) {
      menu.classList.remove("open");
      icon.classList.remove("open");
  }
}

// Function to close the menu when it's not in view
function closeMenuIfNotInView(entries) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (!entries[0].isIntersecting && menu.classList.contains("open")) {
      menu.classList.remove("open");
      icon.classList.remove("open");
  }
}

// Set up IntersectionObserver to monitor the menu
const menuObserver = new IntersectionObserver(closeMenuIfNotInView);
const menuElement = document.querySelector(".menu-links");
menuObserver.observe(menuElement);

// Add event listener to document body for mousedown event
document.body.addEventListener("mousedown", closeMenuOutsideClick);


// For scroling animation on the page scroll

 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
 });

 const hiddenElements = document.querySelectorAll('.hidden');
 hiddenElements.forEach((el) => observer.observe(el));

 //For Varcel Insight
 window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };

 //SpideWeb Effect
// let banner = document.getElementById('profile');
// let canvas = document.getElementById('dotsCanvas');
// canvas.width = canvas.offsetWidth;
// canvas.height = canvas.offsetHeight;
// const ctx = canvas.getContext('2d');
// const dots = [];
// const arrayColors = ['#eee', '#545454', '#596d91', '#bb5a68', '#696541'];
// for (let index = 0; index < 50; index++) {
//     dots.push({
//         x:  Math.floor(Math.random() * canvas.width),
//         y:  Math.floor(Math.random() * canvas.height),
//         size: Math.random() * 3 + 5,
//         color: arrayColors[Math.floor(Math.random()* 5)]
//     });
// }
// const drawDots = () => {
//     dots.forEach(dot => {
//         ctx.fillStyle = dot.color;
//         ctx.beginPath();
//         ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);
//         ctx.fill();
//     })
// }
// drawDots();
// banner.addEventListener('mousemove', (event) => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawDots();
//     let mouse = {
//         x:  event.pageX - banner.getBoundingClientRect().left,
//         y:  event.pageY - banner.getBoundingClientRect().top
//     }
//     dots.forEach(dot => {
//         let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
//         if(distance < 300){
//             ctx.strokeStyle = dot.color;
//             ctx.lineWidth = 1;
//             ctx.beginPath();
//             ctx.moveTo(dot.x, dot.y);
//             ctx.lineTo(mouse.x, mouse.y);
//             ctx.stroke();
//         }
//     })
// })
// banner.addEventListener('mouseout', () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawDots();
// })
// window.addEventListener('resize', () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     canvas.width = banner.offsetWidth;
//     canvas.height = banner.offsetHeight;

//     dots = [];
//     for (let index = 0; index < 50; index++) {
//         dots.push({
//             x:  Math.floor(Math.random() * canvas.width),
//             y:  Math.floor(Math.random() * canvas.height),
//             size: Math.random() * 3 + 5,
//             color: arrayColors[Math.floor(Math.random()* 5)]
//         });
//     }
//     drawDots();
// })