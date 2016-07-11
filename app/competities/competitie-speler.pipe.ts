/**
 * Created by Jan Bart Local on 11-7-2016.
 */
import {  PipeTransform, Pipe } from '@angular/core';
import {ISpelerStand} from "../model/speler.stand";

@Pipe({
    name: 'sortBy'
})
export class SpelerStandSortPipe implements PipeTransform {

    transform(value: ISpelerStand[], filter: string): ISpelerStand[] {
        console.log("sorting on " + filter);
        if (filter === "datum") {
            return value.sort(function(a: ISpelerStand, b: ISpelerStand): number {
                if (a.tegNaam == 'TOTAAL') {
                    return 1;
                }
                if (b.tegNaam == 'TOTAAL') {
                    return -1;
                }
                return a.wedDatum < b.wedDatum ? -1 : 1;
            });
        }
        else {
            return value;
        }
    }
}
