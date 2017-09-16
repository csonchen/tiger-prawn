'use strict';
/**
 * Created by chensheng on 2017/8/1.
 */
(function (ns, _, Backbone) {
    ns.Channel = Backbone.Router.extend({
        $body: null,
        $context: null,
        $me: null,
        routes: {
            "channel/create(/)": "create",
            "channel/list(/)": "list"
        },

        create: function() {
            var model = this.$context.createInstance(tp.model.Channel);
            this.$context.mapValue('channel', model, true);
            this.$body
                .load('page/jy/channel/create.hbs', model)
                .setFramework('channel channel-create', '创建渠道');
        },

        list: function() {
            var init = {API: tp.API};
            this.$body
                .load('page/jy/channel/list.html', init)
                .setFramework('channel channel-list', '渠道列表');
        }
    });

})(Nervenet.createNameSpace('tp.router'), _, Backbone);
