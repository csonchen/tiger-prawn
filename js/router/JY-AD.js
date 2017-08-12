/**
 * Created by chensheng on 2017/8/12.
 */
'use strict';
(function (ns, _, Backbone) {
    ns.JyAD = Backbone.Router.extend({
        $body: null,
        $context: null,
        $me: null,
        routes: {
            "jy-ad/create(/)": "create"
        },

        create: function() {
            var model = this.$context.createInstance(tp.model.JyAD);
            this.$context.mapValue('ad', model, true);
            this.$body
                .load('page/jy/ad/create.hbs', model)
                .setFramework('ad ad-create', '创建广告');
        }
    })
}(Nervenet.createNameSpace('tp.router'), _, Backbone));