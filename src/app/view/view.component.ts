import {Component, OnInit} from '@angular/core';
import {PersonModel} from '../shared/person-model';
import {PersonService} from '../shared/person.service';
import {ToastrService} from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
    persons: Array<PersonModel> = [];

    constructor(
        private personService: PersonService,
        private toastr: ToastrService,
        private location: Location) {
    }

    ngOnInit(): void {
        this.getAllPersons();
    }

    getAllPersons(): any {
        this.personService
            .getAllPerson()
            .then(successResponse => {
                this.persons = successResponse;
            })
            .catch(errorResponse => {
                this.toastr.error(errorResponse.error.message);
            });
    }

    delete(id: any) {
        this.personService
            .delete(id)
            .then(successResponse => {
                this.getAllPersons();
            })
            .catch();
    }
}
