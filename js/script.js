$(function () {

    var ListView = Backbone.View.extend({
        el: $('body'),

        initialize: function () {

            _.bindAll(this, 'render');

            this.render();

        },

        render: function () {

            $(this.el).append("<ul><li>HeLLO</li></ul>");

        }

    });


    var listview = new ListView();

})(jQuery);