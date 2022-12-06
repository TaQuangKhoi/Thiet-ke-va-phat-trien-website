let btnYellow = document.getElementById('yellow')
let h1 = document.getElementById('heading1')
// Nếu mình dùng getElementsByTagName thì không style được

let div_my_melody = document.getElementById('my-melody')


btnYellow.addEventListener('click', Yellow)
div_my_melody.addEventListener('mouseover', ChangeStyleMyMelody)
div_my_melody.addEventListener('mouseleave', ClearStyles)

function Yellow() {
    h1.style.backgroundColor = "#aad521"
    h1.style.color = "#fff"
    h1.style.margin = "auto"
    h1.style.width = "200px"
}

function ClearStyles() {
    div_my_melody.removeAttribute('style')
}

function ChangeStyleMyMelody() {
    div_my_melody.style.border = "thick solid #0000FF";
}