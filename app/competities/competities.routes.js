System.register(['./competitie-stand.component', "./competitie-speler.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var competitie_stand_component_1, competitie_speler_component_1;
    var COMPETITIES_ROUTES;
    return {
        setters:[
            function (competitie_stand_component_1_1) {
                competitie_stand_component_1 = competitie_stand_component_1_1;
            },
            function (competitie_speler_component_1_1) {
                competitie_speler_component_1 = competitie_speler_component_1_1;
            }],
        execute: function() {
            exports_1("COMPETITIES_ROUTES", COMPETITIES_ROUTES = [
                {
                    path: 'competitie/:compId',
                    component: competitie_stand_component_1.CompetitieStandComponent
                },
                {
                    path: 'competitie/:compId/:splId',
                    component: competitie_speler_component_1.CompetitieSpelerComponent
                }
            ]);
        }
    }
});
//# sourceMappingURL=competities.routes.js.map