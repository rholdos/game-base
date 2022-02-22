export const globals = {
  $jquery: require('jquery'),
  $axios: require('axios'),
  $vibrant: require('node-vibrant'),
  $cors: process.env.NODE_ENV === 'development' ? 'https://cors-anywhere.herokuapp.com/' : '',
  $apiUrl:
    process.env.NODE_ENV === 'development'
      ? 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com'
      : 'https://api-v3.igdb.com',
  $apiKey: 'c071fd6daf786d4026173b03d02299b4'
};
