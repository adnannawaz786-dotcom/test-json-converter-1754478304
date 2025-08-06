console.log('Test project loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    // Add some interactive functionality
    const heading = document.querySelector('h1');
    if (heading) {
        heading.addEventListener('click', function() {
            alert('Hello from the test project!');
        });
    }
});