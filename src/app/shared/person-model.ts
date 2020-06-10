import {RegionModel} from './region-model';

export class PersonModel {
    id: number;
    firstName: string;
    lastName: string;
    patronymic: string;
    iin: string;
    region: RegionModel;
}
