document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.getElementById("nav-items");
  const openMobile = document.getElementById("open-mobile");
  const closeMobile = document.getElementById("close-mobile");
  const links = document.querySelectorAll(".nav-items a:not(.download-btn)");

  // Function to open the menu
  const openMenu = () => {
    navItems.classList.add("active");
    closeMobile.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  // Function to close the menu
  const closeMenu = () => {
    navItems.classList.remove("active");
    closeMobile.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  // Event listeners
  openMobile.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevents the document click event from triggering
    openMenu();
  });

  closeMobile.addEventListener("click", closeMenu);

  // Close menu when any link (except download button) is clicked
  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close the menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navItems.contains(e.target) && e.target !== openMobile) {
      closeMenu();
    }
  });
});
