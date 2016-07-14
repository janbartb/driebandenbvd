System.register(["@angular/core", "@angular/router", "./competitie.service", "../api/competitie.api.service", "./competitie-speler.pipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, competitie_service_1, competitie_api_service_1, competitie_speler_pipe_1;
    var CompetitieSpelerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (competitie_service_1_1) {
                competitie_service_1 = competitie_service_1_1;
            },
            function (competitie_api_service_1_1) {
                competitie_api_service_1 = competitie_api_service_1_1;
            },
            function (competitie_speler_pipe_1_1) {
                competitie_speler_pipe_1 = competitie_speler_pipe_1_1;
            }],
        execute: function() {
            CompetitieSpelerComponent = (function () {
                function CompetitieSpelerComponent(route, router, compService, apiService) {
                    this.route = route;
                    this.router = router;
                    this.compService = compService;
                    this.apiService = apiService;
                    this.compId = '';
                    this.spelerId = '';
                    this.speler = {};
                    this.tsCar = 0;
                    this.spelerStand = [];
                    this.sortField = 'datum';
                }
                CompetitieSpelerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._sub = this.route.params.subscribe(function (params) {
                        _this.compId = params['compId'];
                        _this.spelerId = params['splId'];
                        //console.log('In init. Param = ' + this.compId + ' ' + this.spelerId);
                        _this.getCompetitie();
                    });
                };
                CompetitieSpelerComponent.prototype.getCompetitie = function () {
                    var _this = this;
                    this.apiService.getCompetitie(this.compId)
                        .then(function (data) {
                        _this.apiService.setCompetitie(data);
                        _this.speler = _this.compService.getSpeler(_this.spelerId, data);
                        _this.spelerStand = _this.compService.getOvzSpeler(_this.spelerId, data);
                        _this.tsCar = _this.compService.berekenTeSpelenCar(+_this.speler.gemiddelde, +data.compBeurten);
                    }, function (error) {
                        _this.errorMessage = error;
                    });
                };
                CompetitieSpelerComponent.prototype.backToComp = function () {
                    this.router.navigate(['/competitie', this.compId]);
                };
                CompetitieSpelerComponent.prototype.onRowSelected = function (spelerId) {
                    if (!spelerId) {
                        return;
                    }
                    this.router.navigate(['/competitie', this.compId, spelerId]);
                };
                CompetitieSpelerComponent.prototype.setClasses = function (naam) {
                    var tot = (naam == 'TOTAAL');
                    var classes = {
                        totaal: tot
                    };
                    return classes;
                };
                CompetitieSpelerComponent.prototype.ngOnDestroy = function () {
                    this._sub.unsubscribe();
                };
                CompetitieSpelerComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/competities/competitie-speler.component.html',
                        styleUrls: ['app/competities/competitie-speler.component.css'],
                        pipes: [competitie_speler_pipe_1.SpelerStandSortPipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, competitie_service_1.CompetitieService, competitie_api_service_1.CompetitieApiService])
                ], CompetitieSpelerComponent);
                return CompetitieSpelerComponent;
            }());
            exports_1("CompetitieSpelerComponent", CompetitieSpelerComponent);
        }
    }
});
//# sourceMappingURL=competitie-speler.component.js.map