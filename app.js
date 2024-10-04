function toggleAccordion(element) {
    const content = element.nextElementSibling; // Get the next sibling (content)
    const isVisible = content.style.display === "block"; // Check if content is visible
    const allContents = document.querySelectorAll('.content');
    const allBoxes = document.querySelectorAll('.box');
    const allImages = document.querySelectorAll('.upper img');

    allContents.forEach((item) => item.style.display = 'none');
    allBoxes.forEach((box) => box.classList.remove('bg-green')); // Remove bg-green class
    allImages.forEach((img) => img.src = './images/plus-icon.png'); // Revert to plus icon

    if (!isVisible) {
        content.style.display = 'block'; // Show the content
        element.closest('.box').classList.add('bg-green'); // Add the bg-green class to the closest .box
        const img = element.querySelector('img');
        img.src = './images/minus-icon.png'; // Change image to minus icon
    }
}
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu.classList.contains('active')) {
        sideMenu.classList.remove('active');
        setTimeout(() => {
            sideMenu.style.display = 'none';
        }, 300); // Wait for transition to complete before hiding
    } else {
        sideMenu.style.display = 'block'; // Make sure the menu is visible
        setTimeout(() => {
            sideMenu.classList.add('active');
        }, 10); // Delay for transition 
    }
}
document.querySelector('.close-btn').addEventListener('click', function () {
    toggleMenu(); // Reuse the toggleMenu function
});