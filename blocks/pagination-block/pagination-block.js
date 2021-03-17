import "../../node_modules/simplePagination/jquery.simplePagination"
import "./pagination-block.scss"

$('.pagination__container').pagination({
    items: 15,
    itemsOnPage: 1,
    edges: 1,
    displayedPages: 3,
    ellipsePageSet: false,
    prevText: ' ',
    nextText: ' '
});

var num = $('.pagination__container').pagination('getCurrentPage');
$('.pagination__text').text((num * 12 - 11) + ' - ' + num * 12 + ' из 100+ вариантов аренды ')
$('.pagination__container').on('click', function () {
    var num = $('.pagination__container').pagination('getCurrentPage');
    $('.pagination__text').text((num * 12 - 11) + ' - ' + num * 12 + ' из 100+ вариантов аренды ')
});
