// ========================================
// CONTACT BUTTON
// ========================================

const contactButton = document.getElementById("contactButton");

if (contactButton) {
    contactButton.addEventListener("click", function () {
        alert("Thank you for visiting my portfolio!");
    });
}


// ========================================
// NAVIGATION ACTIVE EFFECT
// ========================================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ========================================
// SCROLL ANIMATION
// ========================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.05
    }
);

sections.forEach(function (section) {
    observer.observe(section);
});


// ========================================
// SHOW FIRST SECTION IMMEDIATELY
// ========================================

const homeSection = document.getElementById("home");

if (homeSection) {
    homeSection.classList.add("show");
}