/**
 * Created by Jan Bart Local on 6-7-2016.
 */

import { Injectable } from '@angular/core'
import {ICompetitie} from "../model/competitie";
import {ICompStand} from "../model/competitie.stand";
import {ISpeler} from "../model/speler";
import {IWedstrijd} from "../model/wedstrijd";
import {ISpelerStand} from "../model/speler.stand";

@Injectable()
export class CompetitieService {

    getOvzSpeler(spelerId: string, competitie: ICompetitie): ISpelerStand[] {
        var self = this;
        var ovz: ISpelerStand[] = <ISpelerStand[]>[];
        var spelerTotaal: ISpelerStand = <ISpelerStand>{};
        spelerTotaal.tegNaam = 'TOTAAL'
        spelerTotaal.wedDatum = '';
        spelerTotaal.splWedCar = 0;
        spelerTotaal.splWedBrt = 0;
        spelerTotaal.splWedSer = 0;
        spelerTotaal.splWedPunt = 0;
        var speler: ISpeler = this.getSpeler(spelerId, competitie);
        var splTsCar = this.berekenTeSpelenCar(+speler.gemiddelde, +competitie.compBeurten)
        if (speler.wedstrijden) {
            speler.wedstrijden.forEach(function(splWed: IWedstrijd) {
                var spelerData: ISpelerStand = <ISpelerStand>{};
                var tegenstander: ISpeler = self.getSpeler(splWed.tegenstanderId, competitie);
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
                var tegWed: IWedstrijd = self.getWedstrijd(speler.spelerId, tegenstander);
                spelerData.tegWedCar = +tegWed.caramboles;
                spelerData.tegWedSer = +tegWed.hoogsteSerie;
                ovz.push(spelerData);
            });
        }
        spelerTotaal.splWedGem = this.berekenGemiddelde(spelerTotaal.splWedCar, spelerTotaal.splWedBrt);
        spelerTotaal.splWedRend = this.berekenRendement(spelerTotaal.splWedGem, +speler.gemiddelde);
        ovz.push(spelerTotaal);
        return ovz;
    }

    getOvzCompetitie(competitie: ICompetitie): ICompStand[] {
        var self = this;
        var ovz:ICompStand[] = <ICompStand[]>[];
        if (competitie.spelers) {
            competitie.spelers.forEach(function (speler:ISpeler) {
                var spelerData:ICompStand = self.getSpelerData(speler, competitie);
                ovz.push(spelerData);
            });
        }
        // vul rang in punten en in rendement
        ovz.forEach(function(elm: ICompStand): void {
            elm.rangPunt = ovz.length;
            elm.rangRend = ovz.length;
            ovz.forEach(function(elm2: ICompStand): void {
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
    }
    
    getNogTeSpelenWeds(competitie: ICompetitie): number {
        var aantSpelers: number = competitie.spelers ? competitie.spelers.length : 0;
        if (aantSpelers == 0) {
            return 0;
        }
        var totWeds: number = (aantSpelers * (aantSpelers - 1)) / 2;
        var totGespeeld: number = 0;
        competitie.spelers.forEach(function(speler: ISpeler) {
            if (speler.wedstrijden) {
                totGespeeld += speler.wedstrijden.length;
            }
        });
        totGespeeld = totGespeeld / 2;
        return totWeds - totGespeeld;
    }
    
    getDLW(competitie: ICompetitie): string {
        if (competitie.wijzigDatum) {
            return competitie.wijzigDatum.substr(0, 10);
        }
        else {
            return "onbekend";
        }
    }

    getSpeler(id: string, comp: ICompetitie): ISpeler {
        return comp.spelers.find(function(speler: ISpeler): boolean {
            return speler.spelerId === id;
        });
    }

    private getSpelerData(speler: ISpeler, comp: ICompetitie): ICompStand {
        var self = this;
        var splData: ICompStand = <ICompStand>{};
        splData.splId = speler.spelerId;
        splData.splNaam = speler.naam;
        splData.tsGemid = +speler.gemiddelde;
        splData.tsCar = this.berekenTeSpelenCar(splData.tsGemid, +comp.compBeurten);
        var totWed: number = 0;
        var totCar: number = 0;
        var totBrt: number = 0;
        var totPnt: number = 0;
        var hoogsteSerie: number = 0;
        var hoogsteGemid: number = 0;
        if (speler.wedstrijden) {
            speler.wedstrijden.forEach(function(splWed: IWedstrijd) {
                totWed++;
                totCar += +splWed.caramboles;
                totBrt += +splWed.wedBeurten;
                hoogsteSerie = (+splWed.hoogsteSerie > hoogsteSerie) ? +splWed.hoogsteSerie : hoogsteSerie;
                var wedGemid: number = self.berekenGemiddelde(+splWed.caramboles, +splWed.wedBeurten);
                hoogsteGemid = (wedGemid > hoogsteGemid) ? wedGemid : hoogsteGemid;
                totPnt += self.berekenPunten(speler.spelerId, splData.tsCar, splData.tsGemid, splWed, comp);
            });
        }
        var totGemid: number = this.berekenGemiddelde(totCar, totBrt);
        var totRend: number = this.berekenRendement(totGemid, splData.tsGemid);
        splData.aantWed = totWed;
        splData.totCar = totCar;
        splData.totBrt = totBrt;
        splData.punten = totPnt;
        splData.totGemid = totGemid;
        splData.rendement = totRend;
        splData.hgGemid = hoogsteGemid;
        splData.hgSerie = hoogsteSerie;
        return splData;
    }
    
    berekenTeSpelenCar(gemid: number, aantBrt: number): number {
        return Math.round(aantBrt * gemid);
    }

    private berekenPunten(splId: string, splTsCar: number, splTsGem: number, splWed: IWedstrijd, comp: ICompetitie): number {
        var punten: number = 0;
        // haal gegevens op van tegenstander
        var tegId: string = splWed.tegenstanderId;
        var tegenstander: ISpeler = this.getSpeler(tegId, comp);
        var tegTsCar: number = this.berekenTeSpelenCar(+tegenstander.gemiddelde, +comp.compBeurten);
        // haal wedstrijd op van tegenstander
        var tegWed: IWedstrijd = this.getWedstrijd(splId, tegenstander);
        // gespeelde gemiddeldes
        var splGemid: number = this.berekenGemiddelde(+splWed.caramboles, +splWed.wedBeurten);
        var tegGemid: number = this.berekenGemiddelde(+tegWed.caramboles, +tegWed.wedBeurten);
        // gespeelde rendementen
        var splRend: number = this.berekenRendement(splGemid, splTsGem);
        var tegRend: number = this.berekenRendement(tegGemid, +tegenstander.gemiddelde);
        // bereken de punten
        var splHeeftCarsGehaald: boolean = +splWed.caramboles >= splTsCar;
        var tegHeeftCarsGehaald: boolean = +tegWed.caramboles >= tegTsCar;
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
            else {  // speler heeft aantal caramboles niet gehaald
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
    }

    private getWedstrijd(id: string, speler: ISpeler): IWedstrijd {
        return speler.wedstrijden.find(function(wedstrijd: IWedstrijd): boolean {
            return wedstrijd.tegenstanderId === id;
        });
    }

    private berekenGemiddelde(car: number, brt: number): number {
        var gmd: number = 0;
        if (!car || !brt) {
            return gmd;
        }
        if (brt === 0) {
            return gmd;
        }
        return car / brt;
    }

    private berekenRendement(gespeeldGemid: number, teSpelenGemid: number): number {
        var rend: number = 0;
        if (!gespeeldGemid || !teSpelenGemid) {
            return rend;
        }
        if (teSpelenGemid === 0) {
            return rend;
        }
        return 100 * gespeeldGemid / teSpelenGemid;
    }

}