function updateTime() {
    $('.date-time').text(moment().format("ddd, MMM Do, h:mm:ss a"));
    setTimeout(updateTime, 1000);
}

(function($) {
    var format = 'hh:mm:ss'
    updateTime();


    $.get("https://hotchicks.lakey.net/temp.json", function(data) {
        $('#pitemp').text(data.temp);
    });

})(jQuery);