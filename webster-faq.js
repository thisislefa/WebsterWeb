document.addEventListener('DOMContentLoaded', () => {
            const items = document.querySelectorAll('.fr-faq-item');

            items.forEach(item => {
                const trigger = item.querySelector('.fr-faq-trigger');
                
                trigger.addEventListener('click', () => {
                    // Check if current item is already active
                    const isActive = item.classList.contains('active');

                    // Close all other items (Optional: remove this block if you want multiple open at once)
                    items.forEach(otherItem => {
                        otherItem.classList.remove('active');
                    });

                    // Toggle current item
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
            });
        });