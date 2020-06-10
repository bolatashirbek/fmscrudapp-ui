import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutes} from '../constants/app-routes';
import {EditComponent} from '../edit/edit.component';
import {ViewComponent} from '../view/view.component';
import {AddComponent} from '../add/add.component';

const routes: Routes = [
    {
        path: '',
        component: ViewComponent,
        pathMatch: 'full'
    },
    {
        path: AppRoutes.edit,
        component: EditComponent,
        pathMatch: 'full'
    },
    {
        path: AppRoutes.add,
        component: AddComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
