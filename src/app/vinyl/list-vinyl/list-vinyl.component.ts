import {Component, inject, OnInit} from '@angular/core';
import {SingleVinylComponent} from "../single-vinyl/single-vinyl.component";
import {VinylService} from '../vinyl.service';
import {Vinyl} from '../vinyl.model';
import {filter, map} from 'rxjs';

@Component({
  selector: 'app-list-vinyl',
    imports: [
        SingleVinylComponent
    ],
  templateUrl: './list-vinyl.component.html',
  styleUrl: './list-vinyl.component.scss'
})
export class ListVinylComponent implements OnInit {

  vinylService = inject(VinylService);

  vinyls: Vinyl[] = [];

  ngOnInit(): void {
    this.vinylService.getAll()
      .pipe(
        filter(response => response.ok),
        map(response => response.body)
      )
      .subscribe(vinyl => this.vinyls = vinyl!);
  }

}
