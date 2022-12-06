/* ÁNH XẠ */
let btn = document.getElementById("btn-tinh");
let appName = document.getElementById("app-name"); //h1
let spanSo1 = document.getElementById("span_so1");
let spanSo2 = document.getElementById("span_so2");

let inputNo1 = document.getElementById("ipt-text-s1");
let toanTuGiuaInput = document.getElementById('toan-tu-giua-input')
let inputNo2 = document.getElementById("ipt-text-s2");
let toantu; // nơi lưu toán tử đã chọn

let cb_tong = document.getElementById("cb_tong");

let pKetQua = document.getElementById('p_ket-qua')
let


/* THÊM SỰ KIỆN */
inputNo1.addEventListener('input', UpdateOnType);
inputNo1.addEventListener('keydown', function(event) {
    if(isNaN(event.key)) {
        event.preventDefault()   // không cho thêm chữ      
    }
});

inputNo2.addEventListener('input', UpdateOnType);
inputNo2.addEventListener('keydown', function(event) {
    if(isNaN(event.key)) {
        event.preventDefault()   // không cho thêm chữ      
    }
});

btn.onclick = function() {
    if (toantu == '+'){
        pKetQua.innerHTML = Tong(inputNo1.value, inputNo2.value)
    }
}

cb_tong.onclick = function () {
    SetToanTu('+');
}


/* HÀM */

// Update element when type in input tag
function UpdateOnType () {
    spanSo1.innerHTML = inputNo1.value;
    toanTuGiuaInput.innerHTML = toantu;
    spanSo2.innerHTML = inputNo2.value;
}

function Tong(a, b) {
    return Number(a) + Number(b)
}

function SetToanTu(settoantu) {
    if(cb_tong.checked != true ) {
        toantu = '...';
        UpdateOnType();
    } else {
        toantu = settoantu;
        UpdateOnType();
    }
}

function ValidateEmail() {
    
}

