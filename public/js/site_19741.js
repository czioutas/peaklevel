function getLastUrlSegment() {
    var urlArray = window.location.href.split('/');
    return urlArray.pop() || urlArray.pop();
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function warn(text) {
    text = '<div class="is-size-4">' + text + '</div>'
    new Noty({
        type: 'warning',
        theme: 'sunset',
        text: text,
        layout: 'topCenter'
    }).show();
}

function danger(text) {
    text = '<div class="is-size-4">' + text + '</div>'
    new Noty({
        type: 'error',
        theme: 'nest',
        text: text,
        layout: 'topCenter'
    }).show();
}

function info(text) {
    text = '<div class="is-size-4">' + text + '</div>'
    new Noty({
        type: 'info',
        theme: 'metroui',
        text: text,
        layout: 'topCenter',
        timeout: 3000,
        progressBar: true
    }).show();
}

function success(text) {
    text = '<div class="is-size-4">' + text + '</div>'
    new Noty({
        type: 'success',
        theme: 'sunset',
        text: text,
        layout: 'topCenter',
        timeout: 3000,
        progressBar: true
    }).show();
}

function awesome(text) {
    text = '<div class="is-size-4">' + text + ' 🎈 </div>'
    new Noty({
        type: 'success',
        theme: 'nest',
        text: text,
        layout: 'topCenter',
        timeout: 3000,
        progressBar: true
    }).show();
}

if (document.querySelector('#businessForm')) {
    document.querySelector('#businessForm').addEventListener('submit', (e) => {
        const formData = new FormData(e.target);

        fetch("https://hooks.zapier.com/hooks/catch/3305492/a6yzyr/", {
            method: "POST",
            body: formData
        }).then(res => {
            document.getElementById('businessForm').reset();
        });

        success("Thank you! We will contact you shortly!");
        e.preventDefault();
    });
}

document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

window.$crisp = [];
window.CRISP_WEBSITE_ID = "b701ef4e-da12-4474-bdaa-0bc8f5ec1394";
(function () {
    d = document;
    s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
})();

if (document.querySelector('#b2cwaitinglistForm')) {
    document.querySelector('#b2cwaitinglistForm').addEventListener('submit', (e) => {
        document.getElementById('refCode').value = getParameterByName('refcode');
        document.getElementById('userRefCode').value = makeid();
        var formData = new FormData(e.target);

        fetch("https://hooks.zapier.com/hooks/catch/3305492/a9hhbc/", {
            method: "POST",
            body: formData
        }).then(res => {
            document.getElementById('b2cwaitinglistForm').reset();
        });

        success("Thank you for signing up! We will keep you up to date!");
        e.preventDefault();
    });
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}