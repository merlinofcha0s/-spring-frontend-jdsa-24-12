import {CanActivateFn} from '@angular/router';

export const logGuard: CanActivateFn = (route, state) => {
  console.log("Helloo guard");
  return true;
}
