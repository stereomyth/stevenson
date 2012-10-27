/* Author:
 Crystal Presentations Ltd
 */
$(function () {
    //hide all but about
    $('#about').stop().siblings('.itemContent').slideUp('fast');

    //click on item
    $('.itemHead').click(function () {
        var theman = $(this);
        //open clicked and close other
        $(theman).next('.itemContent').slideToggle('fast'); //.siblings('.itemContent').not('#about').slideUp('fast');
        //scroll page
        $('html, body').animate({scrollTop:$(theman).offset().top - 50}, 600);
    });

    //hover over item
    $('.itemHead').hover(function () {
        //toggle hover states
        $(this).children('.itemTitle').toggleClass('itemTitleHover');
        $(this).children('.itemFront').toggleClass('itemFrontHover');
    });
});