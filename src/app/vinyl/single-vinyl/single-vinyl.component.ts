import {Component, input} from '@angular/core';
import {VinylFormTemplate} from '../vinyl.model';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-single-vinyl',
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-vinyl.component.html',
  styleUrl: './single-vinyl.component.scss'
})
export class SingleVinylComponent {

  vinyl = input.required<VinylFormTemplate>();

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
