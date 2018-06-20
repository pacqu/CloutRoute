const GOOGLE_API_KEY = 'AIzaSyD3_GHmb4k7sKXq9hQ9nOtJYCwZ_IhmGP8';

const googleMapsClient = require('@google/maps').createClient({
  key: GOOGLE_API_KEY
});

googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});
