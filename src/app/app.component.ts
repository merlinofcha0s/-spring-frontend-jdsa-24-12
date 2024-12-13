import {Component, inject, OnInit} from '@angular/core';
import {SingleVinylComponent} from './vinyl/single-vinyl/single-vinyl.component';
import {Vinyl} from './vinyl/vinyl.model';
import {VinylService} from './vinyl/vinyl.service';

@Component({
  selector: 'app-root',
  imports: [
    SingleVinylComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'vinylmgt';

  vinylService = inject(VinylService);

  vinyls: Vinyl[] = [];

  ngOnInit(): void {
    this.vinylService.getAll()
      .subscribe(response => this.vinyls = response.body!);
  }
}
