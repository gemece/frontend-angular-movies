import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../component/shared/movie.model';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { listMovie } from '../component/shared/listMovies.model';

@Injectable()
export class MovieService {
  private apiKey = '63887a89dca509241e0b37f7ca253456';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  searchMovie(text: string) {
    const url = `${this.urlMoviedb}/search/movie/?query=${text}&api_key=${this.apiKey}&language=es`;

    return this.http.get<listMovie>(url).pipe(
      map((data: listMovie) => {
        return data;
      }),
      catchError((error) => {
        return throwError('Something went wrong!');
      })
    );
  }

  getPopularMovie() {
    const url = `${this.urlMoviedb}/movie/popular?api_key=${this.apiKey}&language=es`;

    return this.http.get<listMovie>(url).pipe(
      map((data: listMovie) => {
        return data;
      }),
      catchError((error) => {
        return throwError('Something went wrong!');
      })
    );
  }

  getMovie(id: number) {
    const url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}`;

    return this.http.get<Movie>(url).pipe(
      map((data: Movie) => {
        return data;
      }),
      catchError((error) => {
        return throwError('Something went wrong!');
      })
    );
  }
}
