/**
 * Created by Jan Bart Local on 7-7-2016.
 */
import {  PipeTransform, Pipe } from '@angular/core';
import {ICompStand} from "../model/competitie.stand";

@Pipe({
    name: 'sortBy'
})
export class CompStandSortPipe implements PipeTransform {

    transform(value: ICompStand[], filter: string): ICompStand[] {
        //console.log("sorting on " + filter);
        if (filter === "rangPunt") {
            return value.sort(function(a: ICompStand, b: ICompStand): number {
                return a.rangPunt < b.rangPunt ? -1 : 1;
            });
        }
        else {
            return value;
        }
    }
}
