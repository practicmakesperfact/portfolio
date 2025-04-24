// Function to load components
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading the component:', error));
}

// Load navbar and footer
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("navbar", "navbar.html");
    loadComponent("footer", "footer.html");
});
