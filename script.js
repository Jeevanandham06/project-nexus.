function toggleForms(showLogin) {
    if (showLogin) {
        document.getElementById('signup-container').style.opacity = '0';
        document.getElementById('signup-container').style.visibility = 'hidden';
        document.querySelector('.login-container').style.opacity = '1';
        document.querySelector('.login-container').style.visibility = 'visible';
    } else {
        document.querySelector('.login-container').style.opacity = '0';
        document.querySelector('.login-container').style.visibility = 'hidden';
        document.getElementById('signup-container').style.opacity = '1';
        document.getElementById('signup-container').style.visibility = 'visible';
    }
}


document.getElementById('show-signup').addEventListener('click', function(e) {
    e.preventDefault();
    toggleForms(false); 
});

document.getElementById('show-login').addEventListener('click', function(e) {
    e.preventDefault();
    toggleForms(true); 
});