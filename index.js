const express = require('express');
const morgan = require('morgan');

const router = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json);

app.use(morgan('dev'));
app.use(router);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Server running into ${PORT}...`);
});
