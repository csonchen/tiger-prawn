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
            "client/ad/list(/)": "list",
            "ad/:id/click/(:start/:end)": "showAdClick",
            "ad/:id/market": "showAdMarket"
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
        },

        showAdClick: function (id, start, end) {
            var today = moment().add(-1, 'days').format(moment.DATE_FORMAT);
            end = end ? end : today;
            start = start ? start : moment().add(-7, 'days').format(moment.DATE_FORMAT);
            var model = new tp.model.JyAD({
                id: id,
                start: start,
                end: end
            });
            this.$body.load('page/jy/ad/click-ad.hbs', model, {API: tp.API});
            this.$body.setFramework('has-date-range ad click click-ad', '录入数据');
        },

        showAdMarket: function (id) {
            var init = {API: tp.API, id: id};
            this.$body
                .load('page/jy/ad/ad-market.hbs', init)
                .setFramework('ad-market ad-market-list', '客户广告-评论市场列表');
        }
    })
}(Nervenet.createNameSpace('tp.router'), _, Backbone));