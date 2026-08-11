// 1. Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
    // Create lightbox div if not exists
    if (!document.querySelector('.lightbox')) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = '<span class="close">&times;</span><img src="" alt="Full screen view">';
        document.body.appendChild(lightbox);
    }
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.close');

    // Select all images on the page that should be clickable
    const images = document.querySelectorAll('.room-image, .room-image2');
    images.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    // Close lightbox on click anywhere or press ESC
    const closeLightbox = () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    };
    lightbox.addEventListener('click', closeLightbox);
    closeBtn.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });
});

// 2. Scroll fade-in using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    // Add .fade-up class to all elements that should animate
    const elementsToAnimate = document.querySelectorAll(
        '.direction-card, .room-card, .floor-heading, .room-image, .room-image2, .quick-index, .directions-intro, .building-info'
    );
    elementsToAnimate.forEach(el => el.classList.add('fade-up'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // only once
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});