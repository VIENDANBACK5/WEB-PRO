const express = require('express');
const app = express();
const port = 2507;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});



app.get('', (req, res) => {
    res.send("hello cac ban minh la UDU");
})
app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'CHUNG', ntns: '25/07/2005' },
        { id: 2, name: 'web programming', start: '2/08/2024' },
        { id: 3, name: 'hie', end: 'hjcbrnioceino'},
        { id: 4, name: 'test lần thứ n', endsaid: 'bye code :))' },
        { id: 5, name: 'test lần thứ n+1', endsaid: 'lần này bye thật code :))' }
    ]);
});


app.use(express.json()); // Middleware để parse JSON từ body của POST request
app.post('/users', (req, res) => {
    const newUser = req.body;
    console.log(req.body)
    res.status(201).json({ message: 'User created', user: newUser });
});

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    console.log(`Updating user with ID ${userId}`, updatedUser);
    res.send(`User with ID ${userId} has been updated`);
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`Deleting user with ID ${userId}`);
    res.send(`User with ID ${userId} has been deleted`);
});
