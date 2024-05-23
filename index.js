import express from 'express';

import loginRouter from './lib/login';

import eventRouter from './lib/event';


const app = express();

app.use('/api', loginRouter);

app.use('/api', eventRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is started on ${PORT}");
});
