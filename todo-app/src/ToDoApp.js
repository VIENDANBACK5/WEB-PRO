import React, { useState, useEffect } from 'react';

function TodoList() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [history, setHistory] = useState([]); // Trạng thái để lưu lịch sử
    const [inputValue, setInputValue] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleCategoryChange(e) {
        setCategory(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue.trim() !== '' && category.trim() !== '') {
            const newTodo = {
                text: inputValue,
                category: category,
                time: new Date().toLocaleString()
            };
            setTodos([...todos, newTodo]);
            setHistory([...history, newTodo]); // Cập nhật lịch sử
            setInputValue('');
            setCategory('');
        }
    }

    function handleDelete(todoToDelete) {
        setTodos(todos.filter(todo => todo !== todoToDelete));
        setHistory(history.filter(todo => todo !== todoToDelete)); // Xóa khỏi lịch sử nếu cần
    }

    function handleDeleteHistory(todoToDelete) {
        setHistory(history.filter(todo => todo !== todoToDelete)); // Xóa khỏi lịch sử
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Nhập công việc"
                />
                <select value={category} onChange={handleCategoryChange}>
                    <option value="">Chọn loại công việc</option>
                    <option value="Công việc">Công việc</option>
                    <option value="Học tập">Học tập</option>
                    <option value="Gia đình">Gia đình</option>
                    <option value="Khác">Khác</option>
                </select>
                <button type='submit'>Thêm Công Việc</button>
            </form>
            <h2>Công Việc</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo.text} <span>({todo.category})</span> <span>({todo.time})</span>
                        <button onClick={() => handleDelete(todo)}>Xóa</button>
                    </li>
                ))}
            </ul>
            <h2>Lịch Sử Thêm</h2>
            <ul>
                {history.map((todo, index) => (
                    <li key={index}>
                        {todo.text} <span>({todo.category})</span> <span>({todo.time})</span>
                        <button onClick={() => handleDeleteHistory(todoToDelete)}>xóa lịch sử</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;