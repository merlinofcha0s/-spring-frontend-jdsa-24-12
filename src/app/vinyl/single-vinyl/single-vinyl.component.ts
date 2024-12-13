import {Component, input} from '@angular/core';
import {Vinyl} from '../vinyl.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-single-vinyl',
  imports: [
    DatePipe
  ],
  templateUrl: './single-vinyl.component.html',
  styleUrl: './single-vinyl.component.scss'
})
export class SingleVinylComponent {

  vinyl = input.required<Vinyl>();

  isEditing = false;

  // changeName() {
  //   this.vinyl().author.name = 'King of pop';
  // }

  // changeReleaseDate(newReleaseDate: number) {
  //   this.vinyl().releaseDate = newReleaseDate;
  // }

  switchEditMode() {
    this.isEditing = !this.isEditing;
  }
}
