/**
 *	jquery.fullscreen
 * 	by Sanooj AH (www.sanooj.me) <sanooj007@gmail.com>
 *
 *	Copyright (c) 2012 Sanooj A H
 *	Licensed under the MIT license:
 *	http://www.opensource.org/licenses/mit-license.php
 *
 *	NOTE: This script requires jQuery to work.  Download jQuery at www.jquery.com
 */
;(function($){
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
            var curtxt = elm.text();
            elm.click(function(){

                var viewportwidth = $(window).width();
                var viewportheight = $(window).height();

                $(panel).css({position:'fixed',left:options.leftpos,top:options.toppos});
                elm.text('press escape button or click here to return ')
                if(!$(panel).hasClass('fullscreen')) {
                    if(options.fullwidth == '') {
                        $(panel).width(viewportwidth).height(viewportheight).addClass('fullscreen');
                    }
                    else {
                        $(panel).width(options.fullwidth).height(options.fullheight);
                    }
                }
                else {
                    $(panel).width('').height('').css({position:'static',left:'',top:''}).removeClass('fullscreen');
                    elm.text(curtxt)
                }
            });
            $(document).keyup(function(e) {
                if (e.keyCode == 27) {
                    $(panel).width('').height('').css({position:'static',left:'',top:''}).removeClass('fullscreen');
                    elm.text(curtxt)
                }   // esc
            });
            return this;
        };

        return this.init();
    }

})(jQuery);