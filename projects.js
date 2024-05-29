document.addEventListener('DOMContentLoaded', function() {
    // Select all project and publication sections
    const projects = document.querySelectorAll('.project, .publication');

    // Options for the Intersection Observer
    const options = {
        root: null, // relative to the viewport
        threshold: 0.1, // 10% of the item is visible
        rootMargin: "0px"
    };

    // Callback function for Intersection Observer
    const callback = entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add 'active' class to project when it becomes visible with a delay
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 200); // Adjust the delay time as needed
            } else {
                // Optional: Remove 'active' class when project is not visible
                entry.target.classList.remove('active');
            }
        });
    };

    // Create the observer instance linked to the callback function
    const observer = new IntersectionObserver(callback, options);

    // Attach observer to each project and publication section
    projects.forEach(project => {
        observer.observe(project);
    });
});
