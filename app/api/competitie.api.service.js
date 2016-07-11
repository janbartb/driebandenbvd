System.register(["@angular/core", "@angular/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var CompetitieApiService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            CompetitieApiService = (function () {
                function CompetitieApiService(_http) {
                    this._http = _http;
                    this._compUrl = '/competities';
                    this._envUrl = '/env';
                    this._apiUrlDev = 'http://localhost:18080/jbbapi';
                    this._apiUrlPrd = 'https://jbbrest.herokuapp.com/jbbapi';
                    this._env = null;
                    this._apiUrl = null;
                }
                CompetitieApiService.prototype.getEnvFromServer = function () {
                    if (!this._env) {
                        return this._http.get(this._envUrl)
                            .toPromise()
                            .then(this.extractData)
                            .catch(this.handleError);
                    }
                    else {
                        return Promise.resolve(this._env);
                    }
                };
                CompetitieApiService.prototype.getApiUrl = function (env) {
                    if (env == 'development') {
                        return this._apiUrlDev;
                    }
                    if (env == 'production') {
                        return this._apiUrlPrd;
                    }
                    return '/error';
                };
                CompetitieApiService.prototype.getEnvironment = function () {
                    return this._env;
                };
                CompetitieApiService.prototype.getCompetitieIds = function () {
                    var _this = this;
                    return this.getEnvFromServer()
                        .then(function (env) {
                        console.log("In getCompetitieIds: OK - env is " + env);
                        _this._env = env;
                        return _this._http.get(_this.getApiUrl(env) + _this._compUrl)
                            .toPromise()
                            .then(_this.extractData)
                            .catch(_this.handleError);
                    }, function (error) {
                        console.log("In getCompetitieIds: ERROR: " + JSON.stringify(error));
                        return Promise.reject(error);
                    });
                };
                CompetitieApiService.prototype.getCompetitie = function (id) {
                    var _this = this;
                    if (this._competitie && this._competitie.compId == id) {
                        //console.log('Getting competitie from memory');
                        return Promise.resolve(this._competitie);
                    }
                    else {
                        return this.getEnvFromServer()
                            .then(function (env) {
                            _this._env = env;
                            return _this._http.get(_this.getApiUrl(env) + _this._compUrl + '/' + id)
                                .toPromise()
                                .then(_this.extractData)
                                .catch(_this.handleError);
                        }, function (error) {
                            return Promise.reject(error);
                        });
                    }
                };
                CompetitieApiService.prototype.setCompetitie = function (comp) {
                    this._competitie = comp;
                };
                CompetitieApiService.prototype.extractData = function (res) {
                    var body = res.json();
                    var result = body.data || null;
                    //console.log('Extracted: ' + JSON.stringify(result));
                    return result;
                };
                CompetitieApiService.prototype.handleError = function (error) {
                    // In a real world app, we might use a remote logging infrastructure
                    // We'd also dig deeper into the error to get a better message
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText + " - " + error.url : 'Server error';
                    console.error(errMsg); // log to console instead
                    return Promise.reject(errMsg);
                };
                CompetitieApiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CompetitieApiService);
                return CompetitieApiService;
            }());
            exports_1("CompetitieApiService", CompetitieApiService);
        }
    }
});
//# sourceMappingURL=competitie.api.service.js.map