import {FormControl} from '@angular/forms';

export interface LoginFormTemplate {
  username: FormControl<string>;
  password: FormControl<string>;
}

export interface LoginDTO {
  username: string;
  password: string;
}

export interface JWTTokenDTO {
  id_token: string;
}
