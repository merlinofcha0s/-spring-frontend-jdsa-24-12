import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-counting-buttons',
  imports: [],
  templateUrl: './counting-buttons.component.html',
  styleUrl: './counting-buttons.component.scss'
})
export class CountingButtonsComponent {

  releaseDate = input.required<number>();
  releaseDateChanges = output<number>();

  incValue() {
    const releaseDate = this.releaseDate() + 1;
    console.log(releaseDate);
    this.releaseDateChanges.emit(releaseDate);
  }

  decValue() {
    const releaseDate = this.releaseDate() -1;
    console.log(releaseDate);
    this.releaseDateChanges.emit(releaseDate);
  }
}
