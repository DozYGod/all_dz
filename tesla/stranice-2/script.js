let btn1 = document.querySelector('.ite1')
let btn2 = document.querySelector('.ite2')
let btn3 = document.querySelector('.ite3')
let img1 = document.querySelector('.img-1')
let img2 = document.querySelector('.img-2')
let img3 = document.querySelector('.img-3')

btn1.onclick = () => {
    img1.classList.add('img-1')
    img1.classList.remove('img-2')
    img1.classList.remove('img-3')
}
btn2.onclick = () => {
    img1.classList.add('img-2')
    img1.classList.remove('img-1')
    img1.classList.remove('img-3')
}
btn3.onclick = () => {
    img1.classList.add('img-3')
    img1.classList.remove('img-2')
    img1.classList.remove('img-1')
}
