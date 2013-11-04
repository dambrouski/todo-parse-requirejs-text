define(["Parse","underscore"], function (Parse,_) {

    // This is the transient application state, not persisted on Parse
    var AppState = Parse.Object.extend("AppState", {
        defaults: {
            filter: "all"
        }
    });
     return new AppState();
});