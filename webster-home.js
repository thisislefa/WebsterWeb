// --- NAVIGATION LOGIC ---
        const navWrapper = document.getElementById('navWrapper');
        const menuTrigger = document.getElementById('menuTrigger');

        function openMenu() { navWrapper.classList.add('menu-open'); }
        function closeMenu() { navWrapper.classList.remove('menu-open'); }

        navWrapper.addEventListener('mouseenter', (e) => {
            if (e.target === menuTrigger || navWrapper.contains(e.target)) {}
        });
        menuTrigger.addEventListener('mouseenter', openMenu);
        navWrapper.addEventListener('mouseleave', closeMenu);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navWrapper.classList.add('is-scrolled');
            } else {
                navWrapper.classList.remove('is-scrolled');
            }
        });

        // --- TESTIMONIALS CAROUSEL LOGIC ---
        const track = document.getElementById('track');
        const btnPrev = document.getElementById('btnPrev');
        const btnNext = document.getElementById('btnNext');
        
        let currentIndex = 0;
        const cardCount = 4; // We have 4 cards now
        let cardsPerView = 3; // Default for desktop

        // Update responsive value
        function updateCardsPerView() {
            if (window.innerWidth < 900) cardsPerView = 1;
            else if (window.innerWidth < 1200) cardsPerView = 2;
            else cardsPerView = 3;
            updatePosition();
        }

        function updatePosition() {
            // Calculate percentage shift based on card width
            const movePercentage = (100 / cardsPerView) * currentIndex;
            track.style.transform = `translateX(-${movePercentage}%)`;
            
            // Update Button States
            btnPrev.style.opacity = currentIndex === 0 ? '0.5' : '1';
            btnNext.style.opacity = currentIndex >= cardCount - cardsPerView ? '0.5' : '1';
        }

        btnNext.addEventListener('click', () => {
            if (currentIndex < cardCount - cardsPerView) {
                currentIndex++;
                updatePosition();
            }
        });

        btnPrev.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updatePosition();
            }
        });

        // Initial Setup
        window.addEventListener('resize', updateCardsPerView);
        updateCardsPerView();