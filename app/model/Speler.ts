/**
 * Created by Jan Bart Local on 6-7-2016.
 */
import {IWedstrijd} from "./wedstrijd";
export interface ISpeler {
    spelerId: string;
    naam: string;
    gemiddelde: string;
    wedstrijden: IWedstrijd[];
}
