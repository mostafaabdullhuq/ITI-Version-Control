window.onload = function () {
    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        e.target.parentElement.style.backgroundColor = "#EEE";
    });
};
