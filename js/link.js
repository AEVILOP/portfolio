/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        document.body.classList.add('menu-open')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
        document.body.classList.remove('menu-open')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    document.body.classList.remove('menu-open')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home__typed', {
    strings: ['Web Developer', 'Frontend Developer', 'React developer'],
    typeSpeed: 90,
    backspeed: 40,
    backDelay: 2000,
    cursorChar: '|',
    loop: true
})


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById("header");

    if (!header) return;

    if (window.scrollY >= 50) {
        header.classList.add("shadow-header");
    } else {
        header.classList.remove("shadow-header");
    }
};

window.addEventListener("scroll", shadowHeader);



/*=============== THEME TOGGLE - REMOVED ===============*/
// Theme toggle functionality has been removed

/*=============== SCROLL UP BUTTON ===============*/
const scrollUpButton = document.getElementById('scroll-up');

// Scroll-up button click event (only scrolls to top, no theme change)
if (scrollUpButton) {
    scrollUpButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up');
    if (window.scrollY >= 350) {
        scrollUpBtn?.classList.add('show-scroll');
    } else {
        scrollUpBtn?.classList.remove('show-scroll');
    }
};

window.addEventListener('scroll', scrollUp);


/*=============== CONTACT EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // EmailJS service configuration
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm(
        'service_x7vj708',  // Replace with your EmailJS service ID
        'template_9vimhri', // Replace with your EmailJS template ID
        '#contact-form',
        'J2jJAEGq53Q0CgGBn'            // Replace with your EmailJS public key
    ).then(() => {
        // Show success message
        contactMessage.textContent = 'Message sent successfully! ✅';
        contactMessage.classList.add('success');
        contactMessage.classList.remove('error');

        // Remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
            contactMessage.classList.remove('success');
        }, 5000);

        // Clear form
        contactForm.reset();
    }, (error) => {
        // Show error message
        contactMessage.textContent = 'Message failed to send. Please try again. ❌';
        contactMessage.classList.add('error');
        contactMessage.classList.remove('success');

        console.error('EmailJS Error:', error);

        // Remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
            contactMessage.classList.remove('error');
        }, 5000);
    });
};

if (contactForm) {
    contactForm.addEventListener('submit', sendEmail);
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
// Intersection Observer for scroll-based reveal animations
const revealElements = document.querySelectorAll('[data-reveal]');

// Observer configuration
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // When element enters viewport
        if (entry.isIntersecting) {
            // Add revealed class to trigger animation
            entry.target.classList.add('revealed');

            // Stop observing this element (animate only once)
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    // Trigger when 15% of element is visible
    threshold: 0.15,
    // Start observing 50px before element enters viewport
    rootMargin: '0px 0px -50px 0px'
});

// Observe all elements with data-reveal attribute
revealElements.forEach(element => {
    revealObserver.observe(element);
});
