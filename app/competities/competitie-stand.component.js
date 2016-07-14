System.register(['@angular/core', '@angular/router', "./competitie.service", "../api/competitie.api.service", "./competitie-stand.pipe", "./competitie.pdf.service"], function(exports_1, context_1) {
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
    var core_1, router_1, competitie_service_1, competitie_api_service_1, competitie_stand_pipe_1, competitie_pdf_service_1;
    var CompetitieStandComponent;
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
            function (competitie_stand_pipe_1_1) {
                competitie_stand_pipe_1 = competitie_stand_pipe_1_1;
            },
            function (competitie_pdf_service_1_1) {
                competitie_pdf_service_1 = competitie_pdf_service_1_1;
            }],
        execute: function() {
            CompetitieStandComponent = (function () {
                function CompetitieStandComponent(route, router, compService, pdfService, apiService) {
                    this.route = route;
                    this.router = router;
                    this.compService = compService;
                    this.pdfService = pdfService;
                    this.apiService = apiService;
                    this.compId = '';
                    this.compDatum = '';
                    this.compStand = [];
                    this.nogTeSpelen = 0;
                    this.sortField = 'rangPunt';
                }
                CompetitieStandComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._sub = this.route.params.subscribe(function (params) {
                        _this.compId = params['compId'];
                        //console.log('In init. Param = ' + this.compId);
                        _this.getCompetitie();
                    });
                };
                CompetitieStandComponent.prototype.getCompetitie = function () {
                    var _this = this;
                    this.apiService.getCompetitie(this.compId)
                        .then(function (data) {
                        _this.apiService.setCompetitie(data);
                        _this.compDatum = _this.compService.getDLW(data);
                        _this.compStand = _this.compService.getOvzCompetitie(data);
                        _this.nogTeSpelen = _this.compService.getNogTeSpelenWeds(data);
                    }, function (error) {
                        _this.errorMessage = error;
                    });
                };
                CompetitieStandComponent.prototype.makePdf = function () {
                    var _this = this;
                    this.apiService.getCompetitie(this.compId)
                        .then(function (data) {
                        _this.pdfService.makePdfCompetitieStand(data);
                        _this.downloadMessage = "Het PDF overzicht is opgeslagen in de download map.";
                    });
                };
                CompetitieStandComponent.prototype.clearMessage = function () {
                    this.downloadMessage = undefined;
                };
                CompetitieStandComponent.prototype.onRowSelected = function (spelerId) {
                    this.router.navigate(['/competitie', this.compId, spelerId]);
                };
                CompetitieStandComponent.prototype.ngOnDestroy = function () {
                    this._sub.unsubscribe();
                };
                CompetitieStandComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/competities/competitie-stand.component.html',
                        styleUrls: ['app/competities/competitie-stand.component.css'],
                        pipes: [competitie_stand_pipe_1.CompStandSortPipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, competitie_service_1.CompetitieService, competitie_pdf_service_1.CompetitiePdfService, competitie_api_service_1.CompetitieApiService])
                ], CompetitieStandComponent);
                return CompetitieStandComponent;
            }());
            exports_1("CompetitieStandComponent", CompetitieStandComponent);
        }
    }
});
//# sourceMappingURL=competitie-stand.component.js.map