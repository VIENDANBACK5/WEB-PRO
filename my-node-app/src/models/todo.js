const db = require('../config/database');

const Todo = {
    getAll: (callback) => {
        db.query('SELECT * FROM todos', callback);
    }
};

module.exports = Todo;
