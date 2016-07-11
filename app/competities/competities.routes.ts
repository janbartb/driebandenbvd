/**
 * Created by Jan Bart Local on 6-7-2016.
 */
import { RouterConfig }          from '@angular/router';
import { CompetitieStandComponent }   from './competitie-stand.component';
import {CompetitieSpelerComponent} from "./competitie-speler.component";

export const COMPETITIES_ROUTES: RouterConfig = [
    { 
        path: 'competitie/:compId',
        component: CompetitieStandComponent
    },
    {
        path: 'competitie/:compId/:splId',
        component: CompetitieSpelerComponent
    }
];
