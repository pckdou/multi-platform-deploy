const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Cloud Run', version: process.env.APP_VERSION || 'dev' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
