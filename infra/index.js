const https = require('https');

exports.handler = async (event) => {
  const author = event.queryStringParameters?.author;
  const url = `https://openlibrary.org/search/authors.json?q=${encodeURIComponent(
    author
  )}`;

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
