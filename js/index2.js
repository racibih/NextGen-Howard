// Create a new file named index.js and add the following code

document.addEventListener("DOMContentLoaded", function () {
    const lowerBar = document.querySelector('.lowerBar');
    const toggleLowerBarBtn = document.getElementById('toggleLowerBarBtn');

    toggleLowerBarBtn.addEventListener('click', function () {
        lowerBar.style.display = (lowerBar.style.display === 'none' || lowerBar.style.display === '') ? 'block' : 'none';
    });
});
