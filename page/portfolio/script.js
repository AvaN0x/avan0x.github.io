// Affichage de l'age
var yearOld = new Date(new Date().getTime() - new Date("2001-10-09").getTime()).getFullYear() - 1970;
// Affichage du nombre de jours depuis l'anniversaire en hover de l'age
var daysSinceBirthday = Math.floor((new Date().getTime() - new Date(2001 + yearOld, 9, 9).getTime()) / 86400000);

$("span#myAge").text(yearOld).prop("title", "et " + daysSinceBirthday + " jours.");


function sendEmail() {
    var mail = "XXXXXXXXXXXX@gmail.com";
    var object = $("#contact > form #name").val().trim();
    var content = $("#contact > form #content").val().trim();
    if (object && !object !== "" && content && content !== "")
        window.open('mailto:' + mail + '?subject=Contact - ' + object + '&body=' + content);
}

$('#portfolio article > h1:first-of-type').click(function () {
    var contentElt = $(this).parent().find('div:first-of-type');
    if (!contentElt.is(":visible")) {
        contentElt.fadeIn(1000);
        // scroll to the element
        $('html').animate({
            scrollTop: $(this).offset().top - 100
        });
    } else
        contentElt.fadeOut(500);

    $(this).find('i:first-of-type').toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
})
