import {inject, Injectable} from '@angular/core';
import {Vinyl, VinylFormTemplate} from './vinyl.model';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VinylService {

  http = inject(HttpClient);

  vinyls: Array<Vinyl> = [{
    id: 0,
    songName: 'Bad',
    author: {id: "1", name: 'Michael Jackson', birthDate: '1958-10-30'},
    imageUrl: 'https://img-4.linternaute.com/PI-AYLwdrSAlAsBVE53jZasrWYM=/350x/smart/4184ae2fdda74cb5b2e150bc98efebe8/ccmcms-linternaute/19006.jpg',
    releaseDate: new Date('1987-01-01'),
  }, {
    id: 1,
    songName: 'Uprising',
    author: {id: "2", name: 'Bob marley and the Wailers', birthDate: '1958-10-30'},
    imageUrl: 'https://img.cdandlp.com/2017/06/imgL/118865816.jpg',
    releaseDate: new Date('1980-01-01'),
  }, {
    id: 2,
    songName: 'Hendrix in the west',
    author: {id: "3", name: 'Jimi Hendrix', birthDate: '1958-10-30'},
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Hendrix_in_the_west.jpg',
    releaseDate: new Date('1972-01-01'),
  }, {
    id: 3,
    songName: 'Porgy and Bess',
    author: {id: "2", name: 'Louis Armstrong et Ella Fitzgerald', birthDate: '1958-10-30'},
    imageUrl: 'https://media1.jpc.de/image/w600/front/0/8436542011464.jpg',
    releaseDate: new Date('1958-01-01'),
  }];

  public getAll(): Observable<HttpResponse<VinylFormTemplate[]>> {
    return this.http.get<VinylFormTemplate[]>(`${environment.apiUrl}/vinyls`, {observe: "response"});
  }

  public save(vinyl: Vinyl): Observable<Vinyl> {
    return this.http.post<Vinyl>(`${environment.apiUrl}/vinyls`, vinyl);
  }

  getOneById(id: number) {
    let vinylsFiltered = this.vinyls.filter(vinyl => vinyl.id == id);
    return vinylsFiltered[0];
  }
}
