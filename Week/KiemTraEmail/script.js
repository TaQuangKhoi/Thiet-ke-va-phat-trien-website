let iptEmail = document.getElementById('ipt-email')
let btnCheck = document.getElementById('btn-check')

btnCheck.onclick = CheckEmail;

function CheckEmail() {
    if (iptEmail.value.includes('@')) {
        alert('Email đấy!')
    } else {
        alert('Nhập cái lol gì thế?')
    }
}