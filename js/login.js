var un = document.getElementById('username');
var pwd = document.getElementById('pwd');
var btn = document.querySelector('.login');
var form = document.querySelector('form');
btn.onclick = function() {
    if (un.value.length == 10 && pwd.value != '') {
        // window.open('index_login.html');
        // btn.disable = false;
        form.action = 'index_login.html';
    } else {
        // btn.disable = true;
        form.action = 'login.html';
    }
}

var inp = document.getElementById('pwd');
var eye = document.querySelector('.img_co');
var flag = 0;
eye.onclick = function() {
    if (flag == 0) {
        inp.type = 'text';
        this.src = 'img/open.png';
        flag = 1;
    } else {
        inp.type = 'password';
        this.src = 'img/close.png';
        flag = 0;
    }
}

var con = document.querySelector('.con');
var un = document.querySelector('#username');
un.addEventListener('keyup', function() {
    if (this.value == '') {
        con.style.display = 'none';
    } else {
        con.style.display = 'block';
        con.innerText = this.value;
    }
})
un.addEventListener('blur', function() {
    con.style.display = 'none';
})
un.addEventListener('focus', function() {
    if (this.value !== '') {
        con.style.display = 'block';
    }
})