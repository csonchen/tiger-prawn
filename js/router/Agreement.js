/**
 * Created by chensheng on 2017/9/16.
 */
(function (ns, _, Backbone) {
    ns.Agreement = Backbone.Router.extend({
        $body: null,
        $context: null,
        $me: null,
        routes: {
            'agreement/create(/)': 'create',
            'agreement/list(/)': 'list'
        },

        create: function() {
            var model = this.$context.createInstance(tp.model.Agreement);
            this.$context.mapValue('agreement', model, true);
            this.$body
                .load('page/jy/agreement/create.hbs', model)
                .setFramework('agreement agreement-create', '新建合同');
        },

        list: function() {
            var init = {API: tp.API};
            this.$body
                .load('page/jy/agreement/list.html', init)
                .setFramework('agreement agreement-list', '合同列表');
        }
    })
})(Nervenet.createNameSpace('tp.router'), _, Backbone);