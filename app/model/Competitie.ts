/**
 * Created by Jan Bart Local on 6-7-2016.
 */
import {ISpeler} from "./speler";
export interface ICompetitie {
    compId: string;
    compBeurten: string;
    wijzigDatum: string;
    spelers: ISpeler[];
}
