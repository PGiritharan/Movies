const express = require('express');
const userRouter = require('./routers/user');
const movieRouter = require('./routers/movies');
const cors = require('cors');

const app = express();

app.use(cors());
// Help to parse the in coming json from request automatically
app.use(express.json());

app.use(userRouter);
app.use(movieRouter);

module.exports = app;