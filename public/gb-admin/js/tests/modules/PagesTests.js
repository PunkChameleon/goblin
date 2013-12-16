define(function (require) {

    'use strict';

    // dependencies
    var $ = require('jquery'),
        Common = require('common');

    require('models/PageModel');
    require('collections/PagesToEditCollection');
    require('collections/ThemesCollection');


    var GOB,
        user,
        VALID_USERNAME = 'admin',
        VALID_PASSWORD = 'admin';

    QUnit.module("PagesModule", {
        setup: function () {
            GOB = Common.app_namespace || {};
            user = new GOB.Models.UserModel();

            user.set({
                username: VALID_USERNAME,
                password: VALID_PASSWORD
            });
            // log in
            user.login(VALID_USERNAME, VALID_PASSWORD, function (data) {
                console.log('user logged in to test Jobs');
                start();
            }, function () {
                console.log('user login failure');
                start();

            });
        },
        teardown: function () {
            GOB.ActiveUser.logout();
        }
    });

});