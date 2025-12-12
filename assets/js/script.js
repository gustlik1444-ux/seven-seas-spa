// Custom JavaScript for Seven Seas Spa

// Newsletter Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('newsletterName').value;
            const email = document.getElementById('newsletterEmail').value;
            
            if (name && email) {
                // Show success message
                alert('Thank you for subscribing to our newsletter, ' + name + '!');
                newsletterForm.reset();
            }
        });
    }

    // Contact Form Validation and Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation
            let isValid = true;
            let errorMessage = '';
            
            if (!name) {
                errorMessage += 'Name is required.\n';
                isValid = false;
            }
            
            if (!email) {
                errorMessage += 'Email is required.\n';
                isValid = false;
            } else if (!isValidEmail(email)) {
                errorMessage += 'Please enter a valid email address.\n';
                isValid = false;
            }
            
            if (!subject) {
                errorMessage += 'Subject is required.\n';
                isValid = false;
            }
            
            if (!message) {
                errorMessage += 'Message is required.\n';
                isValid = false;
            }
            
            if (!isValid) {
                alert(errorMessage);
                return;
            }
            
            // Show success message
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.classList.remove('d-none');
                contactForm.reset();
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Hide success message after 5 seconds
                setTimeout(function() {
                    successMessage.classList.add('d-none');
                }, 5000);
            }
        });
    }
    
    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#' && targetId !== '') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Active nav link highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active', 'fw-bold');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active', 'fw-bold');
            }
        });
    });
});
