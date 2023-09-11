import { engine } from 'express-handlebars';
import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;

//Template engine

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

app.use(express.static('src/public'))

//HTTP logger
app.use(morgan('combined'));


app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
