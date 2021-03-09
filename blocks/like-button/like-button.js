import "./like-button.scss"

$(document).ready(function () {
    $(".like-button").on("click", function () {
        $(this).toggleClass("like-button__active");
        var i = parseInt($(this).text());
            if ($(this).hasClass("like-button__active")) { i++; }
            else { i--; }
        $(this).text(i);
    });
});