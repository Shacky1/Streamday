// environment.prod.ts (production)
export const environment = {
  production: true,
  tmdbApiKey: process.env['TMDB_API_KEY'] || '',
  tmdbBaseUrl: process.env['TMDB_BASE_URL'] || 'https://api.themoviedb.org/3',
  tmdbImageBaseUrl: process.env['TMDB_IMAGE_BASE_URL'] || 'https://image.tmdb.org/t/p/w500'
};
