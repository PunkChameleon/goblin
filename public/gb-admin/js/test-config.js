var require = {

    baseUrl: "js",

    shim: {
        'underscore': {
            exports: '_'
        },

        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        'mustache': {
            exports: 'mustache'
        },

        'bootstrap': {
            deps: ['jquery']
        },

        'bootbox': {
            deps: ['jquery', 'bootstrap'],
            exports: 'bootbox'
        }
    },

    paths: {
        'jquery': 'vendor/jquery-2.0.3.min',
        'underscore': 'vendor/underscore.min',
        'backbone': 'vendor/backbone.min',
        'marionette': 'vendor/backbone.marionette',
        'mustache': 'vendor/mustache.min',
        'bootstrap': 'vendor/bootstrap.min',
        'common': 'common'
    }
};