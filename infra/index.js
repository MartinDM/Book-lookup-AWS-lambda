const https = require('https');

exports.handler = async (event) => {
  const { author = '', startIndex = 0 } = event.queryStringParameters || {};
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
  const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodeURIComponent(
    author
  )}&printType=books&startIndex=${encodeURIComponent(
    startIndex
  )}&maxResults=10&key=${apiKey}`;

  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          resolve({
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: data,
          });
        });
      })
      .on('error', (err) => {
        resolve({
          statusCode: 500,
          body: JSON.stringify({ error: err.message }),
        });
      });
  });
};
