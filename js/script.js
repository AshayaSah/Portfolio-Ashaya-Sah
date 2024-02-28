// // Experiment use "btn" class to activate the magnetic mover
// const btns = document.querySelectorAll(".btn");

//     // Function to handle mousemove event
//     function handleMouseMove(e) {
//       const position = this.getBoundingClientRect();
//       const x = e.pageX - position.left - position.width / 2;
//       const y = e.pageY - position.top - position.height / 2;
//       this.children[0].style.transform = "translate(" + x * 0.1 + "px, " + y * 0.1 + "px)";
//     }

//     // Function to handle mouseout event
//     function handleMouseOut() {
//       this.children[0].style.transform = "translate(0px, 0px)";
//     }

//     // Add or remove event listeners based on window width
//     function updateEventListeners() {
//       const isWideScreen = window.innerWidth > 1200;

//       btns.forEach((btn) => {
//         if (isWideScreen) {
//           btn.addEventListener("mousemove", handleMouseMove);
//           btn.addEventListener("mouseout", handleMouseOut);
//         } else {
//           btn.removeEventListener("mousemove", handleMouseMove);
//           btn.removeEventListener("mouseout", handleMouseOut);
//         }
//       });
//     }

//     // Initial check and add/remove event listeners based on window width
//     updateEventListeners();

//     // Listen for window resize events and adjust behavior accordingly
//     window.addEventListener("resize", updateEventListeners);


// Toggle for Hamburger Menu 

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

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