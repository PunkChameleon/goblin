define(function (require) {

    'use strict';

    // dependencies
    var $ = require('jquery'),
        Common = require('common');

    require('models/UserModel');

    var GOB,
        user,
        VALID_USERNAME = 'admin',
        VALID_PASSWORD = 'admin';

    QUnit.module("LoginModule", {
        setup: function () {
            GOB = Common.app_namespace || {};
            user = new GOB.Models.UserModel();
        },
        teardown: function () {
            user.clear();
        }
    });

    QUnit.asyncTest("login test", 2, function () {
        user.set({
            username: VALID_USERNAME,
            password: VALID_PASSWORD
        });
        // log in
        user.login(VALID_USERNAME, VALID_PASSWORD, function (data) {

            ok(true, "Login successful!");

            user.logout(function () {
                ok(true, "Logout successful!");
                start();
            }, function () {
                ok(false, "Logout failed");
                start();
            });

        }, function () {
            ok(false, "Login failed");
            start();
        });
    });

    QUnit.asyncTest("unsuccessful login test", 1, function () {
        var FAKE_USERNAME = "fakeuser",
            FAKE_PASSWORD = "LKAJSDFLKJ";

        // attempt login w/ bad creds
        user.set({
            username: FAKE_USERNAME,
            password: FAKE_PASSWORD
        });

        user.login(FAKE_USERNAME, FAKE_PASSWORD, function () {
            ok(false, "Failed");
            start();
        }, function () {
            ok(true, "Passed!");
            start();
        });
    });
});