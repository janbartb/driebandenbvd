System.register(['@angular/router', "./home/welcome.component", "./competities/competities.routes"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, welcome_component_1, competities_routes_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (competities_routes_1_1) {
                competities_routes_1 = competities_routes_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = competities_routes_1.COMPETITIES_ROUTES.concat([
                { path: '', redirectTo: '/welcome', pathMatch: 'full' },
                { path: 'welcome', component: welcome_component_1.WelcomeComponent }
            ]));
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map