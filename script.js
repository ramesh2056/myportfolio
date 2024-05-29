document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('#navbar ul').classList.toggle('show');
    });

    // Function to add a fade-in class to text elements
    function fadeInText(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.style.opacity = 0; // Start with text invisible
            setTimeout(() => {document.addEventListener('DOMContentLoaded', (event) => {
                document.querySelector('.hamburger').addEventListener('click', function() {
                    document.querySelector('#navbar ul').classList.toggle('show');
                });
            
                // Function to add a fade-in class to text elements
                function fadeInText(selector) {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach(element => {
                        element.style.opacity = 0; // Start with text invisible
                        setTimeout(() => {
                            element.style.opacity = 1; // Fade in to full visibility
                        }, 500); // Delay before the text starts fading in
                    });
                }
            
                // Apply fade-in effect to the main header and paragraph
                fadeInText('.welcome-text');
                fadeInText('.intro-text');
            });
            
                element.style.opacity = 1; // Fade in to full visibility
            }, 500); // Delay before the text starts fading in
        });
    }

    // Apply fade-in effect to the main header and paragraph
    fadeInText('.welcome-text');
    fadeInText('.intro-text');
});
