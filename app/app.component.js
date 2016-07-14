System.register(['@angular/core', '@angular/http', 'rxjs/Rx', '@angular/router', "./api/competitie.api.service", "./home/welcome.component", "./competities/competitie-stand.component", "./competities/competitie.service", './rxjs-operators', "./competities/competitie-speler.component", "./competities/competitie.pdf.service"], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, competitie_api_service_1, welcome_component_1, competitie_stand_component_1, competitie_service_1, competitie_speler_component_1, competitie_pdf_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (competitie_api_service_1_1) {
                competitie_api_service_1 = competitie_api_service_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (competitie_stand_component_1_1) {
                competitie_stand_component_1 = competitie_stand_component_1_1;
            },
            function (competitie_service_1_1) {
                competitie_service_1 = competitie_service_1_1;
            },
            function (_2) {},
            function (competitie_speler_component_1_1) {
                competitie_speler_component_1 = competitie_speler_component_1_1;
            },
            function (competitie_pdf_service_1_1) {
                competitie_pdf_service_1 = competitie_pdf_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_apiService, _router) {
                    this._apiService = _apiService;
                    this._router = _router;
                    this.altText = 'Driebanden "Bij van Dijk"';
                    this.linkTxt = 'Loading...';
                    this.linkRef = '/';
                    this.linkTarget = '_self';
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getCompIds();
                };
                AppComponent.prototype.getCompIds = function () {
                    var _this = this;
                    this._apiService.getCompetitieIds()
                        .then(function (data) {
                        _this.competitieIds = data;
                        _this.setEnvironment(_this._apiService.getEnvironment());
                    }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent.prototype.setEnvironment = function (env) {
                    console.log('Set environment : ' + env);
                    if (!env) {
                        this.errorMessage = 'ERROR: Environment is undefined or null';
                        this.linkTxt = 'ERROR...';
                    }
                    else {
                        if (env == 'development') {
                            this.linkTxt = env;
                        }
                        else {
                            this.linkTxt = 'Biljartprof.nl';
                            this.linkRef = 'http://www.biljartprof.nl';
                            this.linkTarget = '_blank';
                        }
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'bvd-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [competitie_api_service_1.CompetitieApiService,
                            competitie_service_1.CompetitieService,
                            competitie_pdf_service_1.CompetitiePdfService,
                            http_1.HTTP_PROVIDERS],
                        precompile: [
                            welcome_component_1.WelcomeComponent,
                            competitie_stand_component_1.CompetitieStandComponent,
                            competitie_speler_component_1.CompetitieSpelerComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [competitie_api_service_1.CompetitieApiService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map