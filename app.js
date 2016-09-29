var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'Gb9Mmk98uXhFB4KgVbY6VhEWf',
  consumer_secret: 'txTZa0pr25p6WtyFZtvwzcWvkDEvrwqNDYgUwvZWapBuZuuVkm',
  access_token_key: '630011793-yd5PDsb01v6f5YbZI0myHtM8O2bYTErNOdWNaC4e',
  access_token_secret: '2ueuny4yCnd25kigxR7ly8DKCZNiStEOW01tDERjdiRHY'
});

/**
 * Stream statuses filtered by keyword
 * number of tweets per second depends on topic popularity
 **/
client.stream('statuses/filter', {track: 'messi,ronaldo'},  function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});