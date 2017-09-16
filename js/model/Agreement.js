/**
 * Created by chensheng on 2017/8/6.
 */
'use strict';
(function (ns, Backbone, _) {
    ns.Agreement = Backbone.Model.extend({
        $me: null,
        urlRoot: tp.API + 'j_agreement/',
        toJSON: function (options) {
            var json = Backbone.Model.prototype.toJSON.call(this, options);
            if (options) { // from sync，因为{patch: true}
                return json;
            }
            var previous = this.previousAttributes();
            if (!_.isEmpty(previous)) {
                json.previous = previous;
            }
            return _.extend(json, this.options, this.collection ? this.collection.options : null);
        }
    });
}(Nervenet.createNameSpace('tp.model'), Backbone, _));