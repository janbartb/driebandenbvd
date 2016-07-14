import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {CompetitieService} from "./competitie.service";
import {CompetitieApiService} from "../api/competitie.api.service";
import {ISpelerStand} from "../model/speler.stand";
import {ISpeler} from "../model/speler";
import {SpelerStandSortPipe} from "./competitie-speler.pipe";

@Component({
    templateUrl: 'app/competities/competitie-speler.component.html',
    styleUrls: ['app/competities/competitie-speler.component.css'],
    pipes: [SpelerStandSortPipe]
})
export class CompetitieSpelerComponent implements OnInit, OnDestroy {
    errorMessage: string;
    compId:string = '';
    spelerId: string = '';
    speler: ISpeler = <ISpeler>{};
    tsCar: number = 0;
    spelerStand: ISpelerStand[] = <ISpelerStand[]>[];
    sortField: string = 'datum';
    private _sub: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private compService: CompetitieService,
        private apiService: CompetitieApiService) {}

    ngOnInit() {
        this._sub = this.route.params.subscribe(
            params => {
                this.compId = params['compId'];
                this.spelerId = params['splId'];
                //console.log('In init. Param = ' + this.compId + ' ' + this.spelerId);
                this.getCompetitie();
            }
        );
    }

    private getCompetitie(): void {
        this.apiService.getCompetitie(this.compId)
            .then(
                data => {
                    this.apiService.setCompetitie(data);
                    this.speler = this.compService.getSpeler(this.spelerId, data);
                    this.spelerStand = this.compService.getOvzSpeler(this.spelerId, data);
                    this.tsCar = this.compService.berekenTeSpelenCar(+this.speler.gemiddelde, +data.compBeurten);
                },
                error => {
                    this.errorMessage = <any>error;
                }
            );
    }

    backToComp(): void {
        this.router.navigate(['/competitie', this.compId]);
    }

    onRowSelected(spelerId: string): void {
        if (!spelerId) {
            return;
        }
        this.router.navigate(['/competitie', this.compId, spelerId]);
    }

    setClasses(naam: string) {
        let tot: boolean = (naam == 'TOTAAL');
        let classes = {
            totaal: tot
        };
        return classes;
    }

    ngOnDestroy() {
        this._sub.unsubscribe();
    }

}