// set-env.js
const { writeFileSync } = require('fs');

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `
export const environment = {
  production: true,
  tmdbApiKey: '${process.env.TMDB_API_KEY}',
  tmdbBaseUrl: '${process.env.TMDB_BASE_URL || "https://api.themoviedb.org/3"}',
  tmdbImageBaseUrl: '${process.env.TMDB_IMAGE_BASE_URL || "https://image.tmdb.org/t/p/w500"}'
};
`;

writeFileSync(targetPath, envConfigFile);
console.log(`Environment file generated at ${targetPath}`);
