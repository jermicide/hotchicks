function updateTime() {
    $('.date-time').text(moment().format("ddd, MMM do, h:mm:ss a"));
    setTimeout(updateTime, 1000);
}
(function($) {

    updateTime();

    $.get("https://hotchicks.lakey.net/temp.json", function(data) {
        $('#pitemp').text(data.temp);
    });

})(jQuery);