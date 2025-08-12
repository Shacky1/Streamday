import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { environment } from '../../environments/environment';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;
  const apiKey = environment.tmdbApiKey;
  const baseUrl = environment.tmdbBaseUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verify no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch popular movies', () => {
    const dummyResponse = { results: [{ id: 1, title: 'Movie 1' }] };

    service.getPopularMovies().subscribe((res: any) => {
      expect(res).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('should search movies by query', () => {
    const query = 'batman';
    const dummyResponse = { results: [{ id: 2, title: 'Batman Begins' }] };

    service.searchMovies(query).subscribe((res: any) => {
      expect(res).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('should fetch movie details by id', () => {
    const movieId = 123;
    const dummyResponse = { id: movieId, title: 'Some Movie' };

    service.getMovieDetail(movieId).subscribe((res: any) => {
      expect(res).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});
