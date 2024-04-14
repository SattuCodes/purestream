function home(){
    window.location.href = "../index.html";
}
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
    var darkModeButton = document.getElementById('dark-mode-toggle');
    if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Light Mode';
    } else {
        darkModeButton.textContent = 'Dark Mode';
    }
}