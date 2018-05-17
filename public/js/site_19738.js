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

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
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

if (document.getElementsByClassName('fb-customerchat')[0]) {

    var carousels = bulmaCarousel.attach();

    window.fbMessengerPlugins = window.fbMessengerPlugins || {
        init: function () {
            FB.init({
                appId: '1678638095724206',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v2.10'
            });
        },
        callable: []
    };
    window.fbAsyncInit = window.fbAsyncInit || function () {
        window.fbMessengerPlugins.callable.forEach(function (item) {
            item();
        });
        window.fbMessengerPlugins.init();
    };
    setTimeout(function () {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, 0);

} else { 
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "b701ef4e-da12-4474-bdaa-0bc8f5ec1394";
    (function () {
        d = document;
        s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
    })(); 
}