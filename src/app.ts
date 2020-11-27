import express from 'express';
import * as bodyParser from 'body-parser';
// import {getConnection} from 'typeorm';
import {connect} from './db/db';
import {Film} from './db/models/film';

connect();

const app = express();
app.use(bodyParser.json({
  limit: '50mb',
  verify(req: any, res, buf, encoding) {
    req.rawBody = buf;
  },
}));
app.get('/', (req, res) => res.send('Hello World!'));

app.post('/movies', async (req, res) => {
  const movie = new Film();
  movie.title = req.body.title;
  movie.plot_summary = req.body.plot_summary;
  movie.duration = req.body.duration;
  await movie.save();
  res.send(movie);
});

export {app};
