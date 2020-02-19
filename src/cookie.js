///////////////////////////
//// Cookies functions ////
///////////////////////////

function setCookie(cookieName, cookieValue, day) {
    if (day != -1) { // -1 mean that the cookie will be deleted after the navigator gets closed
        var d = new Date();
        d.setTime(d.getTime() + (day * 24 * 60 * 60 * 1000));
        var expires = ";expires=" + d.toUTCString();    
    } else {
        var expires = "";
    }
    
    document.cookie = cookieName + "=" + cookieValue + expires + ";path=/";

}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var cookieTable = document.cookie.split(';');
    for(var i = 0; i < cookieTable.length; i++) {
        var c = cookieTable[i];
        while (c.charAt(0) == ' ') 
            c = c.substring(1);
        if (c.indexOf(name) == 0) 
            return c.substring(name.length, c.length);
    }
    return null;
}


$(document).ready(function() {
    if (!getCookie("cookiesAccepted"))
        $("#cookieAccepter").css("display", "flex");
})

$("#cookieAccepter input[type=submit]").click(function() {
    setCookie("cookiesAccepted", "1", 365);
    $("#cookieAccepter").css("transform", "translateY(100%)");
})

