/**
 * Created by Jan Bart Local on 6-7-2016.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {CompetitieService} from "./competitie.service";
import {ICompetitie} from "../model/competitie";
import {CompetitieApiService} from "../api/competitie.api.service";
import {ICompStand} from "../model/competitie.stand";
import {CompStandSortPipe} from "./competitie-stand.pipe";
import {Observable} from "rxjs/Rx";
import {CompetitiePdfService} from "./competitie.pdf.service";

@Component({
    templateUrl: 'app/competities/competitie-stand.component.html',
    styleUrls: ['app/competities/competitie-stand.component.css'],
    pipes: [CompStandSortPipe]
})
export class CompetitieStandComponent implements OnInit, OnDestroy {

    compId: string = '';
    compDatum: string = '';
    compStand: ICompStand[] = <ICompStand[]>[];
    nogTeSpelen: number = 0;
    sortField: string = 'rangPunt';
    downloadMessage: string;
    errorMessage: string;
    private _sub: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private compService: CompetitieService,
        private pdfService: CompetitiePdfService,
        private apiService: CompetitieApiService) {}

    ngOnInit() {
        this._sub = this.route.params.subscribe(
            params => {
                this.compId = params['compId'];
                //console.log('In init. Param = ' + this.compId);
                this.getCompetitie();
            }
        );
    }
    
    private getCompetitie(): void {
        this.apiService.getCompetitie(this.compId)
            .then(
                data => {
                    this.apiService.setCompetitie(data);
                    this.compDatum = this.compService.getDLW(data);
                    this.compStand = this.compService.getOvzCompetitie(data);
                    this.nogTeSpelen = this.compService.getNogTeSpelenWeds(data);
                },
                error => {
                    this.errorMessage = <any>error;
                }
            );
    }

    makePdf(): void {
        this.apiService.getCompetitie(this.compId)
            .then(data => {
                this.pdfService.makePdfCompetitieStand(data);
                this.downloadMessage = "Het PDF overzicht is opgeslagen in de download map."
            });
    }

    clearMessage(): void {
        this.downloadMessage = undefined;
    }

    onRowSelected(spelerId: string): void {
        this.router.navigate(['/competitie', this.compId, spelerId]);
    }

    ngOnDestroy() {
        this._sub.unsubscribe();
    }

}