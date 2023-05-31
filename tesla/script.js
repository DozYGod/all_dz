let km = document.querySelector('.km')
let gradus = document.querySelector('.gradus')
let diski = document.querySelector('.diski')
let zapas = document.querySelector('.zapas')
let small = document.querySelectorAll('.small')
let big = document.querySelector('.big-noact')

let plusKm = document.querySelector('.plus-km')
let plusGradus = document.querySelector('.plus-gradus')
let plusDiski = document.querySelector('.plus-diski')

let minusKm = document.querySelector('.minus-km')
let minusGradus = document.querySelector('.minus-gradus')
let minusDiski = document.querySelector('.minus-diski')

let kmc = 60     
let gradusc = 20
let diskic = 19
let zapasc = 750

function kmfunp () {
    kmc = kmc + 5 
    km.innerHTML = `<p>${kmc} км/ч</p>`
    zapasc = zapasc + 30 
    zapas.innerHTML = `<p>${zapasc}км</p>`
}

function kmfunm () {
    kmc = kmc - 5 
    km.innerHTML = `<p>${kmc} км/ч</p>`
    zapasc = zapasc - 30 
    zapas.innerHTML = `<p>${zapasc}км</p>`
}

function gradusPlus () {
    gradusc = gradusc + 5 
    gradus.innerHTML = `<p>${gradusc}°</p>`
    zapasc = zapasc + 3 
    zapas.innerHTML = `<p>${zapasc}км</p>`
}

function gradusMinus () {
    gradusc = gradusc - 5 
    gradus.innerHTML = `<p>${gradusc}°</p>`
    zapasc = zapasc - 3 
    zapas.innerHTML = `<p>${zapasc}км</p>`
}

function diskiPlus () {
    diskic = diskic + 2 
    diski.innerHTML = `<p>${diskic}</p>`
    for (let item of small) {
        item.classList.add('big')
        item.classList.remove('small')
    }
    zapasc = zapasc + 10 
    zapas.innerHTML = `<p>${zapasc}км</p>`
}

function diskiMinus () {
    diskic = diskic - 2 
    diski.innerHTML = `<p>${diskic}</p>`
    for (let item of small) {
        item.classList.add('small')
        item.classList.remove('big')
    }
    zapasc = zapasc - 10 
    zapas.innerHTML = `<p>${zapasc}км</p>`
}


minusKm.onclick = () => {
    if(kmc <= 20) {
    } else {
        kmfunm() 
    }
}

plusKm.onclick = () => {
    if(kmc >= 140) {
    } else {
        kmfunp()   
    }
}

plusGradus.onclick = () => {
    if(gradusc >= 60) {
    } else {
        gradusPlus()  
    }
}

minusGradus.onclick = () => {
    if(gradusc <= -20) {
    } else {
        gradusMinus()  
    }
}

plusDiski.onclick = () => {
    if(diskic == 19) {
        diskiPlus()
    } else {
       
    }
}

minusDiski.onclick = () => {
    if(diskic == 21) {
        diskiMinus()
    } else {
        
    }
}



let condish = document.querySelector('.condish')
let longRange = document.querySelector('.long-range')


function cnd() {
    zapasc = zapasc - 20 
    zapas.innerHTML = `<p>${zapasc}км</p>`
}

function cndc() {
    zapasc = zapasc + 20 
    zapas.innerHTML = `<p>${zapasc}км</p>`
}

condish.onchange = () => {
    if(condish = true) {
        cnd()
    } else if(condish = false) {
        cndc()
    }
}

let basePrice = 89990; 
let priceElement = document.getElementById('price');

function updatePrice() {
  let longRangeCheckbox = document.querySelector('.long-range'); 
  if (longRangeCheckbox.checked) { 
    priceElement.innerHTML = `$${basePrice + 5000}`
  } else {
    priceElement.innerHTML = `$${basePrice}`
  }
}

