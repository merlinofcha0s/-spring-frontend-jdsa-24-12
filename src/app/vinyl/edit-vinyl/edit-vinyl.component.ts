import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {VinylService} from '../vinyl.service';
import {Vinyl, VinylFormTemplate} from '../vinyl.model';
import {Router} from '@angular/router';
import {SingleVinylComponent} from '../single-vinyl/single-vinyl.component';

@Component({
  selector: 'app-edit-vinyl',
  imports: [FormsModule, SingleVinylComponent],
  templateUrl: './edit-vinyl.component.html',
  styleUrl: './edit-vinyl.component.scss'
})
export class EditVinylComponent {

  vinylService = inject(VinylService);
  router = inject(Router);

  edit = false;

  vinylFormTemplate: VinylFormTemplate = {
    songName: '',
    imageUrl: '',
    author: '',
    releaseDate: '',
  };

  saveVinyl(): void {
    const vinyl : Vinyl = {
      songName: this.vinylFormTemplate.songName,
      imageUrl: this.vinylFormTemplate.imageUrl,
      author: {
        name: this.vinylFormTemplate.author,
        birthDate: ''
      },
      releaseDate: new Date(this.vinylFormTemplate.releaseDate)
    }

    this.vinylService.save(vinyl)
      .subscribe(vinyl => {
        this.router.navigate(['']);
      });
  }
}
