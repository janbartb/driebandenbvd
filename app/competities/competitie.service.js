/**
 * Created by Jan Bart Local on 6-7-2016.
 */
System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var CompetitieService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CompetitieService = (function () {
                function CompetitieService() {
                }
                CompetitieService.prototype.getOvzSpeler = function (spelerId, competitie) {
                    var self = this;
                    var ovz = [];
                    var spelerTotaal = {};
                    spelerTotaal.tegNaam = 'TOTAAL';
                    spelerTotaal.wedDatum = '';
                    spelerTotaal.splWedCar = 0;
                    spelerTotaal.splWedBrt = 0;
                    spelerTotaal.splWedSer = 0;
                    spelerTotaal.splWedPunt = 0;
                    var speler = this.getSpeler(spelerId, competitie);
                    var splTsCar = this.berekenTeSpelenCar(+speler.gemiddelde, +competitie.compBeurten);
                    if (speler.wedstrijden) {
                        speler.wedstrijden.forEach(function (splWed) {
                            var spelerData = {};
                            var tegenstander = self.getSpeler(splWed.tegenstanderId, competitie);
                            spelerData.tegId = tegenstander.spelerId;
                            spelerData.tegNaam = tegenstander.naam;
                            spelerData.tegTsGemid = +tegenstander.gemiddelde;
                            spelerData.tegTsCar = self.berekenTeSpelenCar(spelerData.tegTsGemid, +competitie.compBeurten);
                            spelerData.wedDatum = splWed.datum;
                            spelerData.splWedCar = +splWed.caramboles;
                            spelerTotaal.splWedCar += spelerData.splWedCar;
                            spelerData.splWedBrt = +splWed.wedBeurten;
                            spelerTotaal.splWedBrt += spelerData.splWedBrt;
                            spelerData.splWedSer = +splWed.hoogsteSerie;
                            if (spelerData.splWedSer > spelerTotaal.splWedSer) {
                                spelerTotaal.splWedSer = spelerData.splWedSer;
                            }
                            spelerData.splWedPunt = self.berekenPunten(spelerId, splTsCar, +speler.gemiddelde, splWed, competitie);
                            spelerTotaal.splWedPunt += spelerData.splWedPunt;
                            spelerData.splWedGem = self.berekenGemiddelde(spelerData.splWedCar, spelerData.splWedBrt);
                            spelerData.splWedRend = self.berekenRendement(spelerData.splWedGem, +speler.gemiddelde);
                            var tegWed = self.getWedstrijd(speler.spelerId, tegenstander);
                            spelerData.tegWedCar = +tegWed.caramboles;
                            spelerData.tegWedSer = +tegWed.hoogsteSerie;
                            ovz.push(spelerData);
                        });
                    }
                    spelerTotaal.splWedGem = this.berekenGemiddelde(spelerTotaal.splWedCar, spelerTotaal.splWedBrt);
                    spelerTotaal.splWedRend = this.berekenRendement(spelerTotaal.splWedGem, +speler.gemiddelde);
                    ovz.push(spelerTotaal);
                    return ovz;
                };
                CompetitieService.prototype.getOvzCompetitie = function (competitie) {
                    var self = this;
                    var ovz = [];
                    if (competitie.spelers) {
                        competitie.spelers.forEach(function (speler) {
                            var spelerData = self.getSpelerData(speler, competitie);
                            ovz.push(spelerData);
                        });
                    }
                    // vul rang in punten en in rendement
                    ovz.forEach(function (elm) {
                        elm.rangPunt = ovz.length;
                        elm.rangRend = ovz.length;
                        ovz.forEach(function (elm2) {
                            if (elm2.splNaam !== elm.splNaam) {
                                // rang in punten
                                if (elm2.punten === elm.punten) {
                                    if (elm2.aantWed === elm.aantWed) {
                                        if (elm2.rendement === elm.rendement) {
                                            if (elm2.tsGemid === elm.tsGemid) {
                                                if (elm2.splNaam > elm.splNaam) {
                                                    elm.rangPunt--;
                                                }
                                            }
                                            else if (elm2.tsGemid < elm.tsGemid) {
                                                elm.rangPunt--;
                                            }
                                        }
                                        else if (elm2.rendement < elm.rendement) {
                                            elm.rangPunt--;
                                        }
                                    }
                                    else if (elm2.aantWed > elm.aantWed) {
                                        elm.rangPunt--;
                                    }
                                }
                                else if (elm2.punten < elm.punten) {
                                    elm.rangPunt--;
                                }
                                // rang in rendement
                                if (elm2.rendement === elm.rendement) {
                                    if (elm2.aantWed === elm.aantWed) {
                                        if (elm2.tsGemid === elm.tsGemid) {
                                            if (elm2.splNaam > elm.splNaam) {
                                                elm.rangRend--;
                                            }
                                        }
                                        else if (elm2.tsGemid < elm.tsGemid) {
                                            elm.rangRend--;
                                        }
                                    }
                                    else if (elm2.aantWed > elm.aantWed) {
                                        elm.rangRend--;
                                    }
                                }
                                else if (elm2.rendement < elm.rendement) {
                                    elm.rangRend--;
                                }
                            }
                        });
                    });
                    return ovz;
                };
                CompetitieService.prototype.getNogTeSpelenWeds = function (competitie) {
                    var aantSpelers = competitie.spelers ? competitie.spelers.length : 0;
                    if (aantSpelers == 0) {
                        return 0;
                    }
                    var totWeds = (aantSpelers * (aantSpelers - 1)) / 2;
                    var totGespeeld = 0;
                    competitie.spelers.forEach(function (speler) {
                        if (speler.wedstrijden) {
                            totGespeeld += speler.wedstrijden.length;
                        }
                    });
                    totGespeeld = totGespeeld / 2;
                    return totWeds - totGespeeld;
                };
                CompetitieService.prototype.getDLW = function (competitie) {
                    if (competitie.wijzigDatum) {
                        return competitie.wijzigDatum.substr(0, 10);
                    }
                    else {
                        return "onbekend";
                    }
                };
                CompetitieService.prototype.getSpeler = function (id, comp) {
                    return comp.spelers.find(function (speler) {
                        return speler.spelerId === id;
                    });
                };
                CompetitieService.prototype.getSpelerData = function (speler, comp) {
                    var self = this;
                    var splData = {};
                    splData.splId = speler.spelerId;
                    splData.splNaam = speler.naam;
                    splData.tsGemid = +speler.gemiddelde;
                    splData.tsCar = this.berekenTeSpelenCar(splData.tsGemid, +comp.compBeurten);
                    var totWed = 0;
                    var totCar = 0;
                    var totBrt = 0;
                    var totPnt = 0;
                    var hoogsteSerie = 0;
                    var hoogsteGemid = 0;
                    if (speler.wedstrijden) {
                        speler.wedstrijden.forEach(function (splWed) {
                            totWed++;
                            totCar += +splWed.caramboles;
                            totBrt += +splWed.wedBeurten;
                            hoogsteSerie = (+splWed.hoogsteSerie > hoogsteSerie) ? +splWed.hoogsteSerie : hoogsteSerie;
                            var wedGemid = self.berekenGemiddelde(+splWed.caramboles, +splWed.wedBeurten);
                            hoogsteGemid = (wedGemid > hoogsteGemid) ? wedGemid : hoogsteGemid;
                            totPnt += self.berekenPunten(speler.spelerId, splData.tsCar, splData.tsGemid, splWed, comp);
                        });
                    }
                    var totGemid = this.berekenGemiddelde(totCar, totBrt);
                    var totRend = this.berekenRendement(totGemid, splData.tsGemid);
                    splData.aantWed = totWed;
                    splData.totCar = totCar;
                    splData.totBrt = totBrt;
                    splData.punten = totPnt;
                    splData.totGemid = totGemid;
                    splData.rendement = totRend;
                    splData.hgGemid = hoogsteGemid;
                    splData.hgSerie = hoogsteSerie;
                    return splData;
                };
                CompetitieService.prototype.berekenTeSpelenCar = function (gemid, aantBrt) {
                    return Math.round(aantBrt * gemid);
                };
                CompetitieService.prototype.berekenPunten = function (splId, splTsCar, splTsGem, splWed, comp) {
                    var punten = 0;
                    // haal gegevens op van tegenstander
                    var tegId = splWed.tegenstanderId;
                    var tegenstander = this.getSpeler(tegId, comp);
                    var tegTsCar = this.berekenTeSpelenCar(+tegenstander.gemiddelde, +comp.compBeurten);
                    // haal wedstrijd op van tegenstander
                    var tegWed = this.getWedstrijd(splId, tegenstander);
                    // gespeelde gemiddeldes
                    var splGemid = this.berekenGemiddelde(+splWed.caramboles, +splWed.wedBeurten);
                    var tegGemid = this.berekenGemiddelde(+tegWed.caramboles, +tegWed.wedBeurten);
                    // gespeelde rendementen
                    var splRend = this.berekenRendement(splGemid, splTsGem);
                    var tegRend = this.berekenRendement(tegGemid, +tegenstander.gemiddelde);
                    // bereken de punten
                    var splHeeftCarsGehaald = +splWed.caramboles >= splTsCar;
                    var tegHeeftCarsGehaald = +tegWed.caramboles >= tegTsCar;
                    if (comp.compId === '2016') {
                        if (splHeeftCarsGehaald) {
                            if (tegHeeftCarsGehaald) {
                                punten += 1;
                            }
                            else {
                                punten += 2;
                            }
                            if (+splWed.wedBeurten < +comp.compBeurten) {
                                punten += 1;
                            }
                        }
                        else {
                            if (!tegHeeftCarsGehaald) {
                                if (splRend > tegRend) {
                                    punten += 2;
                                }
                                else if (splRend === tegRend) {
                                    punten += 1;
                                }
                            }
                            if (splGemid > splTsGem) {
                                punten += 1;
                            }
                        }
                    }
                    else {
                        if (splRend > tegRend) {
                            punten += 2;
                        }
                        else {
                            if (splRend === tegRend) {
                                punten += 1;
                            }
                        }
                        if (splRend > 100) {
                            punten += 1;
                        }
                    }
                    return punten;
                };
                CompetitieService.prototype.getWedstrijd = function (id, speler) {
                    return speler.wedstrijden.find(function (wedstrijd) {
                        return wedstrijd.tegenstanderId === id;
                    });
                };
                CompetitieService.prototype.berekenGemiddelde = function (car, brt) {
                    var gmd = 0;
                    if (!car || !brt) {
                        return gmd;
                    }
                    if (brt === 0) {
                        return gmd;
                    }
                    return car / brt;
                };
                CompetitieService.prototype.berekenRendement = function (gespeeldGemid, teSpelenGemid) {
                    var rend = 0;
                    if (!gespeeldGemid || !teSpelenGemid) {
                        return rend;
                    }
                    if (teSpelenGemid === 0) {
                        return rend;
                    }
                    return 100 * gespeeldGemid / teSpelenGemid;
                };
                CompetitieService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CompetitieService);
                return CompetitieService;
            }());
            exports_1("CompetitieService", CompetitieService);
        }
    }
});
//# sourceMappingURL=competitie.service.js.map