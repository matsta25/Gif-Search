$(function () {
    $('#query').on('input', function () {
        $("li").remove();
        var query = $('#query').val();
        var $gifs = $('#gifs');
        var keyApi = "S5DI6R8Mq2NZsLgkLAUgk5gULADJ0j2f";
        var limit = 25;
        $.ajax({
            type: 'GET',
            url: 'http://api.giphy.com/v1/gifs/search?q=' + query + "&api_key=" + keyApi + "&limit=" + limit,
            success: function (gifs) {
                $.each(gifs.data, function (i, gifs) {
                    $gifs.append('<li class="box"><img src="' + gifs.images.preview_gif.url + '"></li>');
                });
            }
        })
    });
});