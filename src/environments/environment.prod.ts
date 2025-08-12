export const environment = {
  production: true,
  tmdbApiKey: process.env['NG_APP_TMDB_API_KEY'] || '',
  tmdbBaseUrl: 'https://api.themoviedb.org/3',
  tmdbImageBaseUrl: 'https://image.tmdb.org/t/p/w500'
};
