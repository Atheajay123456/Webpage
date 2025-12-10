let bt = document.getElementById('btn')
let a = document.getElementById('us')
let b = document.getElementById('pw')
bt.addEventListener('click',()=>{
    let c = localStorage.setItem('username',JSON.stringify(a.value))
    let c1 = localStorage.setItem('password',JSON.stringify(b.value))
    window.location.href = 'login.html';
})

