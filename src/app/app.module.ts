import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {ViewComponent} from './view/view.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PersonService} from './shared/person.service';

@NgModule({
    declarations: [
        AppComponent,
        AddComponent,
        EditComponent,
        ViewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        FormsModule
    ],
    providers: [PersonService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
