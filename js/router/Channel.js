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
            console.log('aaa')
        },

        list: function() {
            var init = {API: tp.API};
            this.$body
                .load('page/jy/channel/list.html', init)
                .setFramework('channel channel-list', '我的广告主');
        }
    });

})(Nervenet.createNameSpace('tp.router'), _, Backbone);
