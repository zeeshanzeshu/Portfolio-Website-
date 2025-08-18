// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon when navbar links click

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation footer on scroll

    // let footer = document.querySelector('footer');

    // footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


// script.js

// Function to handle 'Hire Me' button
document.getElementById("hireMe").addEventListener("click", function() {
    // Open Gmail with a pre-filled subject
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=mz0870317@gmail.com&su=Hire Me for a Project", "_blank");
});


// Function to handle 'Let's Talk' button
document.getElementById("letsTalk").addEventListener("click", function() {
    // Redirect to a contact form or an email
    window.location.href = "#contact";
});

// Function to handle social media links
// Facebook ke liye function
document.getElementById("facebook").addEventListener("click", function() {
    window.open("https://www.facebook.com/bilalsheikh968", "_blank"); // apna username yahan lagayein
});

// Instagram ke liye function
document.getElementById("instagram").addEventListener("click", function() {
    window.open("https://www.instagram.com/itx_bilal_sheikh", "_blank"); // apna Instagram username lagayein
});

// LinkedIn ke liye function
document.getElementById("linkedin").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/bilal-sheikh01", "_blank"); // apna LinkedIn username lagayein
});
