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
            "client/ad/create(/)": "create",
            "client/ad/list(/)": "list"
        },

        create: function() {
            var model = this.$context.createInstance(tp.model.JyAD),
                options = {
                    className: 'client client-ad-new',
                    loader: tp.page.JAdEditor
                };
            this.$context.mapValue('client-ad', model, {API: tp.API});
            this.$body
                .load('page/jy/ad/create-client-ad.hbs', model, options)
                .setFramework('client client-ad-create', '创建客户广告');
        },

        list: function() {
            var init = {API: tp.API};
            this.$body
                .load('page/jy/ad/client-ad-list.html', init)
                .setFramework('client client-ad-list', '客户广告列表');
        }
    })
}(Nervenet.createNameSpace('tp.router'), _, Backbone));