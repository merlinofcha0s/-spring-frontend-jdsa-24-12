import {Component, inject, OnInit} from '@angular/core';
import {SingleVinylComponent} from "../single-vinyl/single-vinyl.component";
import {VinylService} from '../vinyl.service';
import {VinylFormTemplate} from '../vinyl.model';
import {filter, map} from 'rxjs';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-list-vinyl',
  imports: [
    SingleVinylComponent,
    RouterLink
  ],
  templateUrl: './list-vinyl.component.html',
  styleUrl: './list-vinyl.component.scss'
})
export class ListVinylComponent implements OnInit {

  vinylService = inject(VinylService);

  vinyls: VinylFormTemplate[] = [];

  ngOnInit(): void {
    this.vinylService.getAll()
      .pipe(
        filter(response => response.ok),
        map(response => response.body)
      )
      .subscribe(vinyl => this.vinyls = vinyl!);
  }

}
