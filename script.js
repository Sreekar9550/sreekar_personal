// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Mobile dropdown toggle
const dropdown = document.querySelector('.dropdown');
if (dropdown && window.innerWidth <= 768) {
    dropdown.addEventListener('click', (e) => {
        if (e.target.classList.contains('dropbtn')) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
}

// Parallax effect for profile image
let lastScrollY = window.scrollY;
const profileImage = document.querySelector('.profile-image');
const profileBg = document.querySelector('.profile-bg');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (profileImage && scrollY < window.innerHeight) {
        profileImage.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0001})`;
        if (profileBg) {
            profileBg.style.transform = `scale(${1 + scrollY * 0.0005})`;
        }
    }
    
    lastScrollY = scrollY;
});

// Advanced intersection observer with staggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe tech and article cards
document.querySelectorAll('.tech-card, .article-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    fadeInObserver.observe(card);
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinksItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksItems.forEach(link => {
                if (!link.classList.contains('dropbtn')) {
                    link.style.color = 'var(--text-dim)';
                }
            });
            if (navLink && !navLink.classList.contains('dropbtn')) {
                navLink.style.color = 'var(--accent-cyan)';
            }
        }
    });
});

// Card 3D tilt effect on mouse move (only on desktop)
if (window.innerWidth > 768) {
    document.querySelectorAll('.tech-card, .article-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Smooth reveal for section titles
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.section-title').forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(50px)';
    title.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    titleObserver.observe(title);
});

// Animate profile ring rotation speed on scroll
const profileRing = document.querySelector('.profile-ring');
window.addEventListener('scroll', () => {
    if (profileRing && window.scrollY < window.innerHeight) {
        const speed = 20 - (window.scrollY / 100);
        profileRing.style.animationDuration = `${Math.max(speed, 5)}s`;
    }
});

// Loading sequence
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Contact card animation on scroll
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.contact-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    contactObserver.observe(card);
});
