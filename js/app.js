// An example Parse.js Backbone application based on the todo app by
// [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses Parse to persist
// the todo items and provide user authentication and sessions.

require.config({
    paths: {
        'jquery': 'lib/jquery.min',
        'underscore': 'lib/underscore-1.1.6',
        'Parse': 'lib/parse-1.1.15.min',
        'jquery.bootstrap': 'lib/bootstrap.min'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'Parse': {
            deps: ['underscore', 'jquery'],
            exports: 'Parse'
        }
    }
});

require(
  [
    "Parse",
    "views/appview",
    "routers/approuter",
    "models/appstate"
  ],
    function (Parse, AppView, AppRouter, state) {
        $(function () {

            // Initialize Parse with your Parse application javascript keys
            Parse.initialize("0Oq3tTp9JMvd72LOrGN25PiEq9XgVHCxo57MQbpT",
                "vUFy2o7nFx3eeKVlZneYMPI2MBoxT5LhWNoIWPja");

            new AppRouter();
            new AppView();
            Parse.history.start();
        });

    }
);