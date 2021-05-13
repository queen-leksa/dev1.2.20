// let digit = document.body.firstElementChild; // Полоучить тег проходясь по узлам (Нодам)

/*
    document.getElementByID("id")
    document.getElementsByTagName("div") - возвращает список из всех соответствующих тегов
    document.getElementsByClassName("class") - возвращает список из всех тегов c соответствующим классом
    *document.getElementsByName("name") - возвращает список из всех тегов c соответствующим значением атрибута name

*/

// let digit = document.getElementsByClassName("digital")[0];

/*
    Получение тегов по CSS-селектору
    .querySelector("селектор") - Получить первый подходящий элемент
    .querySelectorAll("селектор") - Получить все подходящие элементы (список)
*/

let digit = document.querySelector(".digital");
let analog = document.querySelector(".analog");
let h = analog.firstElementChild;
let m = h.nextElementSibling;
let s = m.nextElementSibling;

function changeDate() {
    let now = new Date();
    h.style.transform = `rotate(${360 / 12 * now.getHours()}deg)`;
    m.style.transform = `rotate(${360 / 60 * now.getMinutes()}deg)`;
    s.style.transform = `rotate(${360 / 60 * now.getSeconds()}deg)`;
    digit.innerText = now.toLocaleTimeString();
}

digit.innerText = new Date().toLocaleTimeString();
h.style.transform = `rotate(${360 / 12 * new Date().getHours()}deg)`;
m.style.transform = `rotate(${360 / 60 * new Date().getMinutes()}deg)`;
s.style.transform = `rotate(${360 / 60 * new Date().getSeconds()}deg)`;

setInterval(changeDate, 1000);
