// Function to load components
function loadComponent(id, file,callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback(); 
        })
        .catch(error => console.error('Error loading the component:', error));
}

// Load navbar and footer
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("navbar", "navbar.html");
    loadComponent("footer", "footer.html");
});
