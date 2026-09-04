const menuToggle = document.querySelector(".menu-toggle"); 
const mobileMenu = document.querySelector(".mobile-menu"); 

menuToggle.addEventListener("click", () => { 
  const isOpen = mobileMenu.classList.toggle("is-open"); 
  menuToggle.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", isOpen); 
}); 

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});