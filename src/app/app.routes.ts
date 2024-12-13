import {Routes} from '@angular/router';
import {ListVinylComponent} from './vinyl/list-vinyl/list-vinyl.component';
import {LoginComponent} from './login/login.component';
import {logGuard} from './shared/guard/log.guard';
import {EditVinylComponent} from './vinyl/edit-vinyl/edit-vinyl.component';

export const ROUTES: Routes = [
  {
    path: '', component: ListVinylComponent
  },
  {
    path: 'login', component: LoginComponent,
    canActivate: [logGuard],
  },
  {
    path: 'edit-vinyl',
    component: EditVinylComponent,
  },
];
