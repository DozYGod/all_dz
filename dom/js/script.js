/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS */ //do 3

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


//1
let promo__adv = document.querySelectorAll('.promo__adv img')
for (let item of promo__adv) {
    item.remove()
}
//2
let promo__genre = document.querySelector('.promo__genre')
promo__genre.innerHTML = 'Драма'
//3 
let promo__bg = document.querySelector('.promo__bg')
promo__bg.style.background = 'url(./img/bg.jpg)'
//4
let musor = document.querySelectorAll('.delete')
let delet1 = document.querySelectorAll("li")

function deletee() {
    for(let musor of delet1) {
        musor.onclick = () => {
            delet1.remove()
        }
    }
}
deletee()

