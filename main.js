// Menu mobile
        const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu');
        
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Scroll suave para âncoras
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Efeito de digitação no título
        function typeWriter(element, text, i = 0) {
            if (i < text.length) {
                element.innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
                setTimeout(() => typeWriter(element, text, i + 1), 100);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const title = document.querySelector('.hero h1');
            if (title) {
                const text = title.innerText;
                title.innerText = '';
                typeWriter(title, text);
            }
        });