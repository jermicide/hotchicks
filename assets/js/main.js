function updateTime() {
    $('.date-time').text(new Date().toString());
    setTimeout(updateTime, 1000);
}
(function($) {

    updateTime();

    $.get("https://hotchicks.lakey.net/temp.json", function(data) {
        $('#pitemp').text(data.temp);
    });

})(jQuery);