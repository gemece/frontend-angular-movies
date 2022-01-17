import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Listado de Peliculas';
  list: Movie[];
  pageOfItems: Movie[];
  search: string = '';

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.movieService.getPopularMovie().subscribe((data) => {
      this.list = data.results;
    });
  }

  onChangePage(pageOfItems: Movie[]) {
    this.pageOfItems = pageOfItems;
    console.log('Muestra page of Items', pageOfItems);
  }

  showDetails(id: number) {
    this.router.navigate(['movie/' + id]);
  }

  searchMovie() {
    if (this.search.length === 0) {
      return;
    } else {
      this.movieService.searchMovie(this.search).subscribe((data) => {
        this.list = data.results;
      });
    }
  }
}
