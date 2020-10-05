import express from 'express';
import * as config from './config';
import cors from 'cors';

const app = express();
app.use(cors());
app.listen(config.PORT);

app.get('/api/orders', (req, res) => {
  return res.json(config.ORDERS);
});

app.post('/api/page-view', (req, res) => {
  console.log('bonus -- store the page view data');
  return res.send();
});
