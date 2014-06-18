(function ($) {


    $.fn.slider = function (opt) {

        var defaults = {

            width: 700,
            height: 250,
            animationtype: 'slide',
            animationduration: 450,
            animationspeed: 4000,
            control: false

        };

        var settings = $.extend(defaults, opt);


        var container = $(this);

        //console.log(opt.width);



        return this.each(function () {

            $.Slider(container, opt, settings);


        });
    };


    $.Slider = function (container, opt, settings) {

        //console.log(settings.width);

        var elmlen = container.children().length;
        var childelm = container.children();
        var par = container.parent();




        if (container.children().length = 0) {
            return;
        }

        //console.log(container.children().length);

        par.css('position', 'relative');
        container.css({
            'position': 'absolute',
            'width': settings.width,
            'height': settings.height,
            'left': '0px',
            'top': '0px'
        });




        var tag = container.get(0);

        if (tag.tagName == 'ul' || 'UL') {
            container.css({
                'list-style': 'none',
                'margin': '0',
                'padding': '0'
            });
        }

        childelm.css({
            'float': 'left'
        });



    };






})(jQuery);