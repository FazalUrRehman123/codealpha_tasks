// Navbar links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Project buttons
const projectButtons = document.querySelectorAll(".project-card a");

projectButtons.forEach(button => {
    button.addEventListener("click", function () {
        window.open(this.href, "_blank");
    });
});