document.addEventListener('DOMContentLoaded', function() {
    const seeMoreButtons = document.querySelectorAll('.see-more');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModalButton = document.querySelector('.close-modal');
    const modalContent = document.querySelector('.modal-body');

    // Function to open the modal and display the full content
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();  // Prevents the link from being followed when 'See More' is clicked

            const fullContent = this.nextElementSibling.innerHTML;
            const title = this.parentElement.querySelector('.project-title').innerHTML;
            const visitLink = this.parentElement.querySelector('.project-link').getAttribute('href');

            // Set the inner HTML of the modal
            modalContent.innerHTML = `<h3>${title}</h3>${fullContent}<a href="${visitLink}" class="visit-link">Visit</a>`;

            // Display the modal
            modalOverlay.style.display = 'flex';
        });
    });

    // Function to close the modal
    closeModalButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });

    // Close the modal if the overlay itself is clicked (but not the content)
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });

    // Ensure the modal is hidden on page load
    modalOverlay.style.display = 'none';

    // Intersection Observer for animations
    const projects = document.querySelectorAll('.section');  // Use '.section' instead of '.project-thumbnail'

    const options = {
        root: null, // relative to the viewport
        threshold: 0.1, // 10% of the item is visible
        rootMargin: "0px"
    };

    const callback = entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 200); // Adjust the delay time as needed
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    projects.forEach(project => {
        observer.observe(project);
    });
});
