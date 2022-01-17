import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent implements OnInit {
  movie: Movie = new Movie(); 

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.movieService.getMovie(id).subscribe((data) => {
      this.movie = data;
    });
  }
}
