import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiConstants} from '../constants/api-constants';
import {PersonModel} from './person-model';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    constructor(private http: HttpClient) {
    }

    getAllPerson() {
        return this.http
            .get(ApiConstants.API_ENDPOINT + '/persons')
            .toPromise()
            .then(this.handleSuccess)
            .catch(this.handleError);
    }

    getPersonById(id): Promise<any> {
        return this.http
            .get(ApiConstants.API_ENDPOINT + '/persons/' + id)
            .toPromise()
            .then(this.handleSuccess)
            .catch(this.handleError);
    }

    add(person: PersonModel) {
        return this.http
            .post(ApiConstants.API_ENDPOINT + '/persons', person, httpOptions)
            .toPromise()
            .then(this.handleSuccess)
            .catch(this.handleError);
    }

    edit(person: PersonModel, id): Promise<any> {
        return this.http
            .put(ApiConstants.API_ENDPOINT + '/persons/' + id, person)
            .toPromise()
            .then(this.handleSuccess)
            .catch(this.handleError);
    }

    delete(id): Promise<any> {
        return this.http
            .delete(ApiConstants.API_ENDPOINT + '/persons/' + id)
            .toPromise()
            .then(this.handleSuccess)
            .catch(this.handleError);
    }

    getAllRegion() {
        return this.http
            .get(ApiConstants.API_ENDPOINT + '/regions')
            .toPromise()
            .then(this.handleSuccess)
            .catch(this.handleError);
    }

    private handleSuccess(successResponse): Promise<any> {
        return Promise.resolve(successResponse);
    }

    private handleError(errorResponse): Promise<any> {
        return Promise.reject(errorResponse);
    }

}
