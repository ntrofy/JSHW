const inboxSelectors = ["#mainApp", 'shadowRoot', "#mailApp", 'shadowRoot', "#menuList", 'shadowRoot', '#list', 'nct-paper-menu-item[name="Входящие"]'];
const settingsSelectors = ['#mainApp', 'shadowRoot', '#appSwitcher', 'shadowRoot', '#settings'];
const contextMenuSelectors = ['#mainApp', 'shadowRoot', '#mailApp', 'shadowRoot', '#menuList', 'shadowRoot', '#contextMenuBlock'];

/**
 * @param {Array<string>} selectors
 * @returns {string}
 */

// 0. for
/*function createJSPath(selectors) {
    let jsPath = ['document'];
    for (var i = 0; i < selectors.length; i++) {
        if (selectors[i] !== 'shadowRoot') {
            jsPath.push(`querySelector("${selectors[i]}")`);
        } else {
            jsPath.push(selectors[i]);
        }
    };
    return jsPath.join('.');
}*/

// 1. forEach
/*function createJSPath(selectors) {
    let jsPath = ['document'];
    selectors.forEach( (item, i, selectors) => {
        if (item !== 'shadowRoot') {
            jsPath.push(`querySelector("${selectors[i]}")`);
        } else {
            jsPath.push(selectors[i]);
        }
    });
    return jsPath.join('.');
}*/

// 1.1 forEach with ternary operator
/*function createJSPath(selectors) {
    let jsPath = ['document'];
    selectors.forEach( (item, i, selectors) => {
        item !== 'shadowRoot' ? jsPath.push(`querySelector("${selectors[i]}")`) : jsPath.push(selectors[i]);
    });
    return jsPath.join('.');
}*/

// 2. map with if
/*function createJSPath(selectors) {
    let path = selectors.map( item => {
        if (item !== 'shadowRoot') {
            return `querySelector("${item}")`;
        }
        return item;
        });
    return `document.${path.join('.')}`;
}*/

// 2.1 map with ternary operator
// Это решение не работает. Выше слелала вариант 1.1 forEach с тернарным оператором, там всё работает
function createJSPath(selectors) {
    let path = selectors.map( item => {
        (item !== 'shadowRoot') ? `querySelector("${item}")` : item;
        });
    return `document.${path.join('.')}`;
}

// 3. reduce
/*function createJSPath(selectors) {
    return selectors.reduce( (result, currentValue) => {
        if (currentValue !== 'shadowRoot') {
            return `${result}.querySelector("${currentValue}")`;
        }
        return `${result}.${currentValue}`
    }, 'document')
}*/


console.log(createJSPath(inboxSelectors)); // -> document.querySelector("#mainApp").shadowRoot.querySelector("#mailApp").shadowRoot.querySelector("#menuList").shadowRoot.querySelector('#list').querySelector('nct-paper-menu-item[name="Входящие"]')
console.log(createJSPath(settingsSelectors)); // -> document.querySelector("#mainApp").shadowRoot.querySelector("#appSwitcher").shadowRoot.querySelector("#settings")
console.log(createJSPath(contextMenuSelectors)); // -> document.querySelector("#mainApp").shadowRoot.querySelector("#mailApp").shadowRoot.querySelector("#menuList").shadowRoot.querySelector("#contextMenuBlock")
console.log(createJSPath(inboxSelectors)); // -> document.querySelector("#mainApp").shadowRoot.querySelector("#mailApp").shadowRoot.querySelector("#menuList").shadowRoot.querySelector('#list').querySelector('nct-paper-menu-item[name="Входящие"]')
