const express = require('express');
const app = express();
const port = 1000;
app.use(express.json());

const todoRouter = require('./src/routers/todo');
app.use('/todo', todoRouter);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


