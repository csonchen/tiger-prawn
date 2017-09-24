/**
 * Created by chensheng on 2017/8/12.
 */
'use strict';
(function(ns, Backbone, _) {
    ns.JyAD = Backbone.Model.extend({
        $me: null,
        urlRoot: tp.API + 'j_ad/',
        toJSON: function (options) {
            var json = Backbone.Model.prototype.toJSON.call(this, options);
            if (options) { // from sync，因为{patch: true}
                return json;
            }
            var previous = this.previousAttributes();
            if (!_.isEmpty(previous)) {
                json.previous = previous;
            }
            json['API'] = tp.API;
            return _.extend(json, this.options, this.collection ? this.collection.options : null);
        }
    });
}(Nervenet.createNameSpace('tp.model'), Backbone, _));