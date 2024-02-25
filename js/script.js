// Experiment use "btn" class to activate the magnetic mover
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener ("mousemove", function(e){
    const position = btn.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;
    btn.children[0].style.transform = "translate(" + x * 0.1 + "px, " + y * 0.1 + "px)";
  });
});

btns. forEach((btn) => {
  btn. addEventListener ("mouseout", function(e){
    btn. children[0].style.transform = "translate(0px, 0px)";
  });
}); 

 
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
