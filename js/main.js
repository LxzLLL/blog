$(function () {
    $('a').each(function (i, e) {
        var oldHref = $(e).attr('href') || '';
        var href = oldHref.match(/(\/)(.*)/);
        href = RegExp.$2;
        // console.log('href --------', href)
        $(e).attr('href', href)
    })
})