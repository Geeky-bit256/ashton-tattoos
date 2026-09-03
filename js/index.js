const menuToggle = document.querySelector(".menu-toggle"); 
const mobileMenu = document.querySelector(".mobile-menu"); 

menuToggle.addEventListener("click", () => { 
  
  const isOpen = mobileMenu.classList.toggle("is-open"); 
  menuToggle.classList.toggle("is-open");
  menuToggle.setAttribute( "aria-expanded", isOpen ); 
  
}); 