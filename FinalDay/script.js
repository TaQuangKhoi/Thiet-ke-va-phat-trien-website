function checkEmail()
{
    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
        email.value="";
        return false;
    }
    else{
        alert('Chúc mừng bạn, Email này hợp lê.');
    }
}