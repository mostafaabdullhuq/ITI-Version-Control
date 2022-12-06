// when window loads
window.onload = function () {
    // get form and add an event to it, when form submitted
    document.getElementById("login-form").addEventListener("submit", (e) => {
        // prevent the form submit default behavior
        e.preventDefault();

        // change form parent background color
        e.target.parentElement.style.backgroundColor = "#EEE";
    });
};
