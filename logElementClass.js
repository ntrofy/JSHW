//  Давайте выберем несколько элементов на главной странице MDN:
// 1. поле для ввода поискового запроса:
// document.querySelector('#home-q')
// 2. кнопка "подписаться сейчас":
// document.querySelector('#newsletter-submit')
// 3. Логин:
// document.querySelector('#toolbox').querySelector('ul').querySelector('li').querySelector('div').querySelector('a')
// Теперь небольшое задание:
// 1. Реализовать функцию, которая будет принимать на входе html-element и логировать его поле class.
// 2. Разместить эту функцию в своем снипете.
// 3. Вызвать в этом же снипете полученную функцию для каждого из трех элементов названных выше.

/**
 * @param {HTMLElement} element
 */
function logElementClass(element) {
    let attrClass = element.getAttribute('class');
    console.log(attrClass);
}

logElementClass(document.querySelector('#home-q'));



// 1. функция get​Attributes - будет возвращать Object, свойства которого будут повторять атрибуты, указанного элемента.
/**
 * @param {HTMLElement} element
 * @returns {Object.<string, string>} attributes
 */
function getAttributes(element) {
    let myObject = {};
    var attrs = element.attributes;
    for(var i = 0; i <= attrs.length - 1; i++) {
        myObject[attrs[i].name] = attrs[i].value;
    }
    return myObject;
}

getAttributes(document.querySelector('#newsletter-submit'));



// 2. сниппет для MDN - будет логировать с помощью console.log имена опубликованных блогов (см. скрин)
var elem = document.querySelector('#content > div.center.clear > div.home-hacks > div > div.column-hacks > ul');
var elements = elem.querySelectorAll('a');
for (var i = 0; i < elements.length; i++) {
    console.log( elements[i].innerHTML );
}