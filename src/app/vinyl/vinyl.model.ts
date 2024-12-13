export interface Vinyl {
  id?: number;
  songName: string;
  imageUrl: string;
  author: Author;
  releaseDate: Date;
}

export interface Author {
  id?: string;
  name: string;
  birthDate: string;
}

export interface VinylFormTemplate {
  songName: string;
  author: string;
  imageUrl: string;
  releaseDate: string;
}
