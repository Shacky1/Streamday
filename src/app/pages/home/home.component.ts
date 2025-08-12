import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  movies: any[] = [];
  query = '';
  selectedGenre = '';

  genres = [
    { id: '35', name: 'Comedy' },
    { id: '18', name: 'Drama' },
    { id: '27', name: 'Horror' },
    { id: '10749', name: 'Romance' }
  ];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(): void {
    this.movieService.getPopularMovies().subscribe((res: any) => {
      // Store both movies and TV shows in one array
      this.movies = res.results;
    });
  }

  searchMovies(): void {
    if (this.query.trim()) {
      this.movieService.searchMulti(this.query).subscribe((res: any) => {
        this.movies = res.results;
      });
    } else if (this.selectedGenre) {
      this.getMoviesByGenre();
    } else {
      this.getPopularMovies();
    }
  }

  getMoviesByGenre(): void {
    if (this.selectedGenre) {
      this.movieService.getMoviesByGenre(Number(this.selectedGenre)).subscribe((res: any) => {
        this.movies = res.results;
      });
    }
  }

  imageUrl(path: string): string {
    return path ? 'https://image.tmdb.org/t/p/w500' + path : 'assets/no-image.png';
  }
}
