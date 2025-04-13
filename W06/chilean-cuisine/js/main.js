document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const regionCards = document.querySelectorAll('.region-card');
    const regionInfo = document.getElementById('region-info');
    const newsletterForm = document.getElementById('newsletter-form');
    const subscriptionMessage = document.getElementById('subscription-message');

    const regionData = {
        norte: {
            title: 'Northern Chilean Cuisine',
            description: 'The cuisine of northern Chile is strongly influenced by Andean traditions and Aymara culture. Notable dishes include northern ceviche, charquicán, and calapurca. Typical ingredients include quinoa, Andean potatoes, corn, and fresh fish from the Pacific.'
        },
        centro: {
            title: 'Central Chilean Cuisine',
            description: 'The central zone concentrates many of Chile\'s most emblematic dishes. Here you\'ll find the famous empanadas de pino, pastel de choclo, porotos con riendas, and cazuela. This region is also known for its vineyards and world-class wine production.'
        },
        sur: {
            title: 'Southern Chilean Cuisine',
            description: 'The cuisine of southern Chile reflects strong German and Mapuche influences. Typical dishes include curanto, Patagonian roast, milcaos, and chapaleles. The prominent ingredients are seafood, Chilote potatoes, Patagonian lamb, and forest fruits.'
        }
    };

    function showRegionInfo(regionId) {
        if (regionInfo && regionData[regionId]) {
            const region = regionData[regionId];
            regionInfo.innerHTML = `
                <h3>${region.title}</h3>
                <p>${region.description}</p>
            `;
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    if (regionCards.length > 0) {
        regionCards.forEach(card => {
            card.addEventListener('click', () => {
                const regionId = card.id;
                
                regionCards.forEach(c => c.classList.remove('active'));
                
                card.classList.add('active');
                
                showRegionInfo(regionId);
            });
        });
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = document.getElementById('email');
            const email = emailInput.value.trim();
            
            if (!email || !isValidEmail(email)) {
                subscriptionMessage.textContent = 'Please enter a valid email address.';
                subscriptionMessage.style.color = 'var(--primary-color)';
                return;
            }
            
            saveSubscription(email);
            
            subscriptionMessage.textContent = 'Thank you for subscribing! You will receive our updates.';
            subscriptionMessage.style.color = '#2e7d32';
            
            emailInput.value = '';
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function saveSubscription(email) {
        let subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions')) || [];
        
        if (!subscriptions.includes(email)) {
            subscriptions.push(email);
            localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));
        }
    }

    const accordionHeaders = document.querySelectorAll('.accordion-header');
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                header.classList.toggle('active');
                
                const content = header.nextElementSibling;
                
                if (content) {
                    content.classList.toggle('active');
                }
            });
        });
    }

    const tabButtons = document.querySelectorAll('.tab-btn');
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                button.classList.add('active');
                
                const tabId = button.getAttribute('data-tab');
                
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                const selectedContent = document.getElementById(tabId);
                if (selectedContent) {
                    selectedContent.classList.add('active');
                }
            });
        });
    }
});
