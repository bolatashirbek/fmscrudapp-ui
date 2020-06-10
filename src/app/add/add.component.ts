import {Component, OnInit} from '@angular/core';
import {PersonModel} from '../shared/person-model';
import {RegionModel} from '../shared/region-model';
import {PersonService} from '../shared/person.service';
import {Location} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
    person: PersonModel = new PersonModel();
    regions: Array<RegionModel> = [];

    constructor(
        private personService: PersonService,
        private toastr: ToastrService,
        private location: Location) {
    }

    ngOnInit(): void {
        this.getRegion();
    }

    getRegion(): any {
        this.personService
            .getAllRegion()
            .then(successResponse => {
                this.regions = successResponse;
            })
            .catch(errorResponse => {
                this.toastr.error(errorResponse.error.message);
            });
    }

    add(person: any) {
        this.personService
            .add(this.person)
            .then(successResponse => {
                this.location.back();
            })
            .catch(errorResponse => {
                this.toastr.error(errorResponse.error.message);
            });
    }

    back() {
        this.location.back();
    }
}
