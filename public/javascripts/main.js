requirejs.config({
    appPath: '.',
    baseUrl: '/javascripts/vendor',
    enforceDefine: true,
    paths: {
        modernizr: [
            'modernizr-custom.min'
        ],
        jquery: [
            'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min',
            'jquery-3.2.1.min'
        ],
        bootstrap: [
            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min',
            'bootstrap.min'
        ]
    },
    shim: {
        'modernizr': {
            exports: 'Modernizr'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: "$.fn.popover"
        }
    }
});

define([
    'modernizr',
    'jquery',
    'bootstrap'
], function($) {
    console.log('JS ready');
    return {};
});