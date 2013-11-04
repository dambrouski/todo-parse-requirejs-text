define(["Parse"], function (Parse) {

    // Our basic Todo model has `content`, `order`, and `done` attributes.
    var Todo = Parse.Object.extend("Todo", {
        // Default attributes for the todo.
        defaults: {
            content: "empty todo...",
            done: false
        },

        // Ensure that each todo created has `content`.
        initialize: function () {
            if (!this.get("content")) {
                this.set({
                    "content": this.defaults.content
                });
            }
        },

        // Toggle the `done` state of this todo item.
        toggle: function () {
            this.save({
                done: !this.get("done")
            });
        }
    });
    return Todo;
});