import {Routes} from '@angular/router';
import {ListVinylComponent} from './vinyl/list-vinyl/list-vinyl.component';
import {LoginComponent} from './login/login.component';
import {logGuard} from './shared/guard/log.guard';

export const ROUTES: Routes = [
  {
    path: '', component: ListVinylComponent
  },
  {
    path: 'login', component: LoginComponent,
    canActivate: [logGuard],
  }
];
