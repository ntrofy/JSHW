//по массиву селекторов будет возвращать HTMLElement
/**
 * @param {Array<string>} selectors
 * @returns {?HTMLElement}
 */
// function getElement(selectors) {
//     let elem=document;
//     selectors.forEach ((item) => {
//         (item ==='shadowRoot')? elem = elem.shadowRoot : elem = elem.querySelector(item)
//     });
//     return elem;
// }

// function getElement(selectors) {
//     let elem = document;
//     selectors.map ((item) => { elem = (item ==='shadowRoot')? elem.shadowRoot : elem.querySelector(item)});
//     return elem;
// }

function getElement(selectors) {
    return selectors.reduce ((elem,item) => (
      (item ==='shadowRoot') ? elem.shadowRoot : elem.querySelector(item)
    ), document);
}

//на вход будет ожидаться то, что раньше ожидалось для createJSPath,
// ориентируясь на полученный массив функция getAttributes получит нужный нам элемент и дальше всё как раньше.

/**
 * @param {Array<string>} selectors
 * @returns {Object.<string, string>} attributes
 */
function getAttributes(selectors) {
    let myObject = {};
    var element = getElement(selectors);
    var attrs = element.attributes;
    for(var i = 0; i < attrs.length; i++) {
        myObject[attrs[i].name] = attrs[i].value;
    }
    return myObject;
}

//метод getElementAll, который будет для последнего селектора в массиве вызывать querySelectorAll
// и тем самым возвращать массив HTML-элементов
/**
 * @param {Array<string>} selectors
 * @returns {Array<HTMLElement>}
 */
function getElementAll(selectors) {
    var parentSelectors = selectors.slice(0,selectors.length-1);
    var element = getElement(parentSelectors);
    return element.querySelectorAll(selectors[selectors.length-1]);
}

//getAttributes(['#mainApp', 'shadowRoot', '#appSwitcher', 'shadowRoot', '#settings']); // атрибуты элемента settings
getElementAll(['#mainApp', 'shadowRoot', '#appSwitcher', 'shadowRoot', '#appSwitcherScrollWrapper', 'paper-tab']); // массив из всех переключатели приложений
