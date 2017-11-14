/**
 * Created by chensheng on 2017/9/24.
 */
'use strict';

(function (ns, Backbone, $, _) {
    var cooperation = 0;
    ns.JAdEditor = tp.view.Loader.extend({
        $me: null,
        events: {
            'change [name=type]': 'type_changeHandler',
            'click .search-agreement-button': 'searchAgreementButton_clickHandler',
            'keydown .agreement-keyword': 'agreementKeyword_keyDownHandler',
            'change #cooperation_type1': 'cooperation_changeHandler'
        },

        render: function () {
            tp.view.Loader.prototype.render.call(this);

            this.agreements = tp.model.ListCollection.getInstance({
                collectionId: 'agreement',
                url: tp.API + 'j_agreement/',
                key: 'agreement'
            });

            this.agreements.on('reset', function () {
                this.$('.agreement').find('input').prop('disabled', false);
                this.$('.search-agreement-button').spinner(false);
                _.defer(function (select) {
                    select.change();
                }, this.$('[name=agreement_id]'));
            }, this);

            // init
            $('#cooperation1').show();
            $('#market-type').hide();
            $('#cooperation2').hide();
            $('#form-rate').hide();
        },

        type_changeHandler: function(event) {
            var type = event.currentTarget.value;

            if (type && parseInt(type) === 1) {
                $('#cooperation1').show();
                if (cooperation == 3) { // 合作方式为评论，展示评论市场
                    $('#market-type').show();
                } else {
                    $('#market-type').hide();
                }
                $('#cooperation2').hide();
                $('#form-rate').hide();
            }

            if (type && parseInt(type) === 2) {
                $('#cooperation1').hide();
                $('#market-type').hide();
                $('#cooperation2').show();
                $('#form-rate').show();
            }
        },

        cooperation_changeHandler: function(event) {
            cooperation = event.target.value;
            if (cooperation == 3) { // 合作方式为评论，展示评论市场
                $('#market-type').show();
            } else {
                $('#market-type').hide();
            }
        },

        agreementKeyword_keyDownHandler: function (event) {
            if (event.keyCode === 13) {
                this.searchAgreement();
                event.preventDefault();
            }
        },

        searchAgreementButton_clickHandler: function() {
            this.searchAgreement();
        },

        searchAgreement: function () {
            var keyword = $.trim(this.$('.agreement-keyword').val());
            if (!keyword) {
                return false;
            }
            this.$('.agreement').find('input').prop('disabled', true);
            this.$('.search-agreement-button').spinner();
            this.agreements.fetch({
                data: {
                    keyword: keyword
                },
                reset: true
            });
        }
    })
}(Nervenet.createNameSpace('tp.page'), Backbone, jQuery, _))