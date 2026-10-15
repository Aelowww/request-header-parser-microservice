// Request Header Parser Microservice - freeCodeCamp Back End Development and APIs
const express = require('express');
const cors = require('cors');

const app = express();

// trust the hosting proxy so req.ip is the real client IP
app.set('trust proxy', true);

// enable CORS so freeCodeCamp can test the API remotely
app.use(cors({ optionsSuccessStatus: 200 }));

app.get('/', (req, res) => {
  res.send('<h1>Request Header Parser Microservice</h1>' +
    '<p>Example: <a href="/api/whoami">/api/whoami</a></p>');
});

app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

// GET /api/whoami -> { ipaddress, language, software }
app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
