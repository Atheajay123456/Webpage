let bt = document.getElementById('btn');
let a1 = document.getElementById('us'); 
let b1 = document.getElementById('pw'); 

// Get saved credentials
let savedUser = JSON.parse(localStorage.getItem('username'));
let savedPass = JSON.parse(localStorage.getItem('password'));

bt.addEventListener('click', (e) => {
    e.preventDefault();

    if (a1.value === savedUser && b1.value === savedPass) {
        window.location.href = 'home.html';
    } else {
        alert("Invalid username or password");
    }
});


