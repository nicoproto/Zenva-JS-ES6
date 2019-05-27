const request = require('request');
const http = require('http');
const cryptocoin = require('./cryptocoin.js');

let coins = [];

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if (coins) {
    res.end(JSON.stringify(coins));
  } else {
    res.end('No data');
  };
}).listen(8080);

request('https://api.coinmarketcap.com/v1/ticker/', (err, request_res, body) => {
  if (err) throw err;

  let coin_data = JSON.parse(body);
  coin_data.forEach((coin) => coins.push(new cryptocoin.Cryptocoin(coin.id, coin.name, coin.price_usd)));

  coin_data = body;
});
