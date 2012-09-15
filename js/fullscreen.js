(function($){

    $.fn.JQFullscreen = function(options) {

        // private vars
        var defaults = {
            fullwidth : '',
            fullheight : '',
            leftpos: 0,
            toppos:0,
            fullscreenpanel:''
        };
        var options = $.extend({}, defaults, options);

        var elm = $(this);
        var panel = options.fullscreenpanel;
        this.init = function() {
            elm.click(function(){

                var viewportwidth = $(window).width();
                var viewportheight = $(window).height();

                $(panel).css({position:'fixed',left:options.leftpos,top:options.toppos})
                if(options.fullwidth == '') {
                    $(panel).width(viewportwidth).height(viewportheight);
                }
                else {

                }
            });
            return this;
        };


        return this.init();
    }

})(jQuery);