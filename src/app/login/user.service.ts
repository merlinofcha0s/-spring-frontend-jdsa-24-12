import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JWTTokenDTO, LoginDTO} from './login.model';
import {Observable, tap} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);

  currentUserJWT = '';

  login(loginDto: LoginDTO): Observable<JWTTokenDTO> {
    return this.http.post<JWTTokenDTO>(`${environment.apiUrl}/authenticate`, loginDto)
      .pipe(
        tap(jwtTokenDTO => this.currentUserJWT = jwtTokenDTO.id_token)
      );
  }

}
