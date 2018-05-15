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

document.querySelector('#formTop').addEventListener('submit', (e) => {
    const formData = new FormData(e.target);

    var age = formData.get("age");

    if (age < 18) {
        warn("Sorry, you have to be over 18 to participate.");
        e.preventDefault();
        return;
    }

    fetch("https://hooks.zapier.com/hooks/catch/2643540/a28tla/", {
        method: "POST",
        body: formData
    }).then(res => {
        var elements = document.getElementsByName("age");
        for (var ii = 0; ii < elements.length; ii++) {
            elements[ii].value = "";
        }

        var elements = document.getElementsByName("phonenumber");
        for (var ii = 0; ii < elements.length; ii++) {
            elements[ii].value = "";
        }
    });

    success("Thank you! 🎉");
    e.preventDefault();
});

document.querySelector('#formBottom').addEventListener('submit', (e) => {
    const formData = new FormData(e.target);

    var age = formData.get("age");
    console.log(age);

    if (age < 18) {
        warn("Sorry, you have to be over 18 to participate.");
        e.preventDefault();
        return;
    }

    fetch("https://hooks.zapier.com/hooks/catch/2643540/a28tla/", {
        method: "POST",
        body: formData
    }).then(res => {
        console.log("Request complete! response:", res);

        var elements = document.getElementsByName("age");
        for (var ii = 0; ii < elements.length; ii++) {
            elements[ii].value = "";
        }

        var elements = document.getElementsByName("phonenumber");
        for (var ii = 0; ii < elements.length; ii++) {
            elements[ii].value = "";
        }
    });

    success("Thank you! 🎉");
    e.preventDefault();
});