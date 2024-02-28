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