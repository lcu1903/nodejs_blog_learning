import { engine } from 'express-handlebars';
import express from 'express';
import morgan from 'morgan';
import route from './routes/index.js';

const app = express();
const port = 3000;

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//Template engine

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

app.use(express.static('src/public'));

//HTTP logger
app.use(morgan('combined'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
