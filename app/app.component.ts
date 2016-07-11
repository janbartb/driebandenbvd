import {Component, OnInit} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {CompetitieApiService} from "./api/competitie.api.service";
import {ICompetitieId} from "./model/competitie-id";
import {WelcomeComponent} from "./home/welcome.component";
import {CompetitieStandComponent} from "./competities/competitie-stand.component";
import {CompetitieService} from "./competities/competitie.service";
import './rxjs-operators';
import {CompetitieSpelerComponent} from "./competities/competitie-speler.component";

@Component({
    selector: 'bvd-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [CompetitieApiService, 
                CompetitieService,
                HTTP_PROVIDERS],
    precompile: [
        WelcomeComponent,
        CompetitieStandComponent,
        CompetitieSpelerComponent
    ]
})
export class AppComponent implements OnInit {
    altText: string = 'Driebanden "Bij van Dijk"';
    linkTxt: string = 'Loading...';
    linkRef: string = '/';
    linkTarget: string = '_self';
    competitieIds: ICompetitieId[];
    errorMessage: string;
    
    constructor(private _apiService: CompetitieApiService,
                private _router: Router) {}
    
    ngOnInit(): void {
        this.getCompIds();
    }

    private getCompIds(): void {
        this._apiService.getCompetitieIds()
            .then(
                data => {
                    this.competitieIds = data;
                    this.setEnvironment(this._apiService.getEnvironment());
                },
                error => this.errorMessage = <any>error
            );
    }

    private setEnvironment(env: string): void {
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
    }

    // onSelect(compId: string) {
    //     this._router.navigate(['/competitie', compId]);
    // }
}
