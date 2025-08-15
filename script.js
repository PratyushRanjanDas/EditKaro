document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter');
            const videoItems = document.querySelectorAll('.video-item');

            filterButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    
                    videoItems.forEach(item => {
                        if (filter === 'all') {
                            item.classList.remove('hidden');
                            item.style.animation = 'fadeIn 0.5s ease-in-out';
                        } else if (item.classList.contains(filter)) {
                            item.classList.remove('hidden');
                            item.style.animation = 'fadeIn 0.5s ease-in-out';
                        } else {
                            item.classList.add('hidden');
                        }
                    });
                });
            });

            // Add fade in animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.appendChild(style);

            // Add smooth scrolling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Add loading animation for images
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.addEventListener('load', function() {
                    this.style.opacity = '1';
                });
                img.style.transition = 'opacity 0.3s ease';
                img.style.opacity = '0.8';
            });
        });