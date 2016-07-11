import {Injectable} from "@angular/core";
import {ICompetitie} from "../model/competitie";
import {Http, Response} from "@angular/http";
import {ICompetitieId} from "../model/competitie-id";

@Injectable()
export class CompetitieApiService {

    private _compUrl: string = '/competities';
    private _envUrl: string = '/env';
    private _apiUrlDev: string = 'http://localhost:18080/jbbapi';
    private _apiUrlPrd: string = 'https://jbbrest.herokuapp.com/jbbapi';

    private _env:string = null;
    private _apiUrl: string = null;
    
    private _competitie: ICompetitie;
    
    constructor(private _http: Http) {}

    getEnvFromServer(): Promise<string> {
        if (!this._env) {
            return this._http.get(this._envUrl)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError)
        }
        else {
            return Promise.resolve(this._env);
        }
    }

    getApiUrl(env: string): string {
        if (env == 'development') {
            return this._apiUrlDev;
        }
        if (env == 'production') {
            return this._apiUrlPrd;
        }
        return '/error';
    }
    
    getEnvironment(): string {
        return this._env;
    }

    getCompetitieIds(): Promise<ICompetitieId[]> {
        return this.getEnvFromServer()
            .then(
                env => {
                    console.log("In getCompetitieIds: OK - env is " + env);
                    this._env = env;
                    return this._http.get(this.getApiUrl(env) + this._compUrl)
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError)
                },
                error => {
                    console.log("In getCompetitieIds: ERROR: " + JSON.stringify(error));
                    return Promise.reject(error);
                }
            );
    }

    getCompetitie(id: string): Promise<ICompetitie> {
        if (this._competitie && this._competitie.compId == id) {
            //console.log('Getting competitie from memory');
            return Promise.resolve(this._competitie);
        }
        else {
            return this.getEnvFromServer()
                .then(
                    env => {
                        this._env = env;
                        return this._http.get(this.getApiUrl(env) + this._compUrl + '/' + id)
                            .toPromise()
                            .then(this.extractData)
                            .catch(this.handleError);
                    },
                    error => {
                        return Promise.reject(error);
                    }
                );
        }
    }

    setCompetitie(comp: ICompetitie): void {
        this._competitie = comp;
    }
    
    private extractData(res: Response) {
        let body = res.json();
        var result = body.data || null;
        //console.log('Extracted: ' + JSON.stringify(result));
        return result;
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText} - ${error.url}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
    
}