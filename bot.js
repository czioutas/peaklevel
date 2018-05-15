const eventFire = (el, etype) => {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent(etype, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    el.dispatchEvent(evt);
}

let newChatBtn = null;
let newChatSearchBar = null;
let searchBar = null;
const mouseDown = 'mousedown';
const mouseUp = 'mouseup';

function init() {
    searchBar = document.querySelector('#side > div._3CPl4 > div > label > input');
}

function newChat(name, phonenumber) {
    searchBar.innerHTML = name.replace(/  /gm,'');
    searchBar.value = name;
}

function leftClick(targetElement) {
    eventFire(targetElement, mouseDown);
    eventFire(targetElement, mouseUp);
}

init();