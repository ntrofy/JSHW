const inboxSelectors = ["#mainApp", 'shadowRoot', "#mailApp", 'shadowRoot', "#menuList", 'shadowRoot', '#list', 'nct-paper-menu-item[name="Входящие"]'];
const settingsSelectors = ['#mainApp', 'shadowRoot', '#appSwitcher', 'shadowRoot', '#settings'];
const contextMenuSelectors = ['#mainApp', 'shadowRoot', '#mailApp', 'shadowRoot', '#menuList', 'shadowRoot', '#contextMenuBlock'];

/**
 * @param {Array<string>} selectors
 * @returns {string}
 */

// 0. for
/*function createJSPath(selectors) {
    for (var i = 0; i < selectors.length; i++) {
        if (selectors[i] != 'shadowRoot') {
            selectors[i] = 'querySelector("' + selectors[i] +'")';
        }
    }
    return 'document.' + selectors.join('.');
    //throw new Error("Not Implemented");
}*/

// 1. forEach
/*function createJSPath(selectors) {
    selectors.forEach( (item, i, selectors) => {
        if (item != 'shadowRoot') {
            selectors[i] = 'querySelector("' + item +'")';
        }
    })
    return 'document.' + selectors.join('.');
}*/

// 2. map
/*function createJSPath(selectors) {
    let path = selectors.map( item => {
        if (item != 'shadowRoot') {
            return 'querySelector("' + item +'")';
        } else {
            return item;
        }
    })
    return 'document.' + path.join('.');
}*/

// 3. reduce
function createJSPath(selectors) {
    return 'document.' + selectors.reduce( (result, currentValue) => {
        if (currentValue != 'shadowRoot') {
            return result + '.'+ 'querySelector("' + currentValue +'")';
        } else {
            return result + '.' + currentValue;
        }
    }, '')
}

console.log(createJSPath(inboxSelectors)); // -> document.querySelector("#mainApp").shadowRoot.querySelector("#mailApp").shadowRoot.querySelector("#menuList").shadowRoot.querySelector('#list').querySelector('nct-paper-menu-item[name="Входящие"]')
console.log(createJSPath(settingsSelectors)); // -> document.querySelector("#mainApp").shadowRoot.querySelector("#appSwitcher").shadowRoot.querySelector("#settings")
console.log(createJSPath(contextMenuSelectors)); // -> document.querySelector("#mainApp").shadowRoot.querySelector("#mailApp").shadowRoot.querySelector("#menuList").shadowRoot.querySelector("#contextMenuBlock")