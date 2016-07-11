/**
 * Created by Jan Bart Local on 6-7-2016.
 */
import { provideRouter, RouterConfig } from '@angular/router';

import {WelcomeComponent} from "./home/welcome.component";
import {COMPETITIES_ROUTES} from "./competities/competities.routes";

export const routes: RouterConfig = [
    ...COMPETITIES_ROUTES,
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent }
    

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
