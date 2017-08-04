'use strict';
/**
 * Created by chensheng on 2017/8/1.
 */
(function (ns, _, Backbone) {
    ns.Agreement = Backbone.Router.extend({
        $body: null,
        $context: null,
        $me: null,
        routes: {
            "agreement/create(/)": "create",
            "agreement/list(/)": "list"
        },

        create: function() {
            console.log('aaa')
        },

        list: function() {
            var init = {API: tp.API};
            this.$body
                .load('page/agreement/list.html', init)
                .setFramework('agreement agreement-list', '我的广告主');
        }
    });

})(Nervenet.createNameSpace('tp.router'), _, Backbone);
