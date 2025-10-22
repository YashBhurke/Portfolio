let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) activeLink.classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Editor', 'YouTuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const btn = document.getElementById('read-more-btn');
const moreInfo = document.getElementById('more-info');

btn.addEventListener('click', (e) => {
    e.preventDefault(); 
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        btn.textContent = 'Read Less'; 
    } else {
        moreInfo.style.display = 'none';
        btn.textContent = 'Read More';
    }
});

 (function(){
      emailjs.init("KeSuJHnN-dV2fw2hW"); // Replace with your EmailJS public key
   })();

   const form = document.getElementById('contact-form');

   form.addEventListener('submit', function(e){
       e.preventDefault(); // Prevent default form submission

       emailjs.sendForm('service_oo7xfip', 'template_1pr7jcd', this)
       .then(function(){
           alert("Message sent successfully!");
           form.reset(); // Clear the form
       }, function(error){
           alert("Oops! Something went wrong.", error);
       });
   });



   // private key : KeSuJHnN-dV2fw2hW
   // email id : yashrb712@gmail.com
   // tamplate : template_1pr7jcd