define(["Parse", "underscore", "jquery","views/managetodosview","views/loginview"], function (Parse, _, $,ManageTodosView,LogInView) {
    // The main view for the app
    var AppView = Parse.View.extend({
        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: $("#todoapp"),

        initialize: function () {
            this.render();
        },

        render: function () {
            if (Parse.User.current()) {
                new ManageTodosView();
            } else {
                new LogInView();
            }
        }
    });
    return AppView;
});