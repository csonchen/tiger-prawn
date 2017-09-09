/**
 * Created by chensheng on 2017/9/9.
 */
'use strict';
(function (ns, Backbone, _) {
    ns.Client = Backbone.Model.extend({
        $me: null,
        urlRoot: tp.API + 'jy_client/',
        toJSON: function (options) {
            var json = Backbone.Model.prototype.toJSON.call(this, options);
            if (options) {
                return json;
            }
            var previous = this.previousAttributes();
            if (!_.isEmpty(previous)) {
                json.previous = previous;
            }
            return _.extend(json, this.options, this.collection ? this.collection.options : null);
        }
    })
}(Nervenet.createNameSpace('tp.model'), Backbone, _));