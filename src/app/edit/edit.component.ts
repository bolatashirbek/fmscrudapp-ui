import {Component, OnInit} from '@angular/core';
import {PersonService} from '../shared/person.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {RegionModel} from '../shared/region-model';
import {PersonModel} from '../shared/person-model';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
    id: number;
    person: PersonModel = new PersonModel();
    regions: Array<RegionModel> = [];

    constructor(
        private personService: PersonService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private location: Location) {
    }

    ngOnInit(): void {
        this.getAllRegions();
        this.getPersonForEdit();
    }

    getAllRegions(): any {
        this.personService
            .getAllRegion()
            .then(successResponse => {
                this.regions = successResponse;
            })
            .catch(errorResponse => {
                this.toastr.error(errorResponse.error.message);
            });
    }

    getPersonForEdit() {
        this.id = this.route.snapshot.params.id;
        if (this.id) {
            this.personService
                .getPersonById(this.id)
                .then(response => {
                    this.person = response;
                })
                .catch(errorResponse => {
                    this.toastr.error(errorResponse.error);
                });
        }
    }

    edit(id: number, form: NgForm) {
        this.personService
            .edit(this.person, id)
            .then(successResponse => {
                this.location.back();
            })
            .catch(errorResponse => {
                this.toastr.error(errorResponse.error);
            });
    }

    back() {
        this.location.back();
    }

}
