/**
 * Created by chensheng on 2017/9/9.
 */
(function (ns, _, Backbone) {
    ns.Client = Backbone.Router.extend({
        $body: null,
        $context: null,
        $me: null,
        routes: {
            "client/create(/)": "create",
            "client/list(/)": "list"
        },
        create: function () {
            var model = this.$context.createInstance(tp.model.Client);
            this.$context.mapValue('client', model, true);
            this.$body
                .load('page/jy/client/create.hbs', model)
                .setFramework('client client-create', '新建客户');
        },
        list: function() {
            var init = {API: tp.API};
            this.$body
                .load('page/jy/client/list.html', init)
                .setFramework('client client-list', '客户列表');
        }
    })
})(Nervenet.createNameSpace('tp.router'), _, Backbone);