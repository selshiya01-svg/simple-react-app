import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Push project to GitHub", done: false },
    { id: 3, text: "Deploy on Netlify", done: false },
  ]);
  const [text, setText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    setTasks([...tasks, { id: Date.now(), text: value, done: false }]);
    setText("");
  };

  const toggleTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const remaining = tasks.filter((t) => !t.done).length;

  return (
    <main className="app">
      <h1>My Tasks</h1>
      <p className="count">{remaining} left to do</p>

      <form onSubmit={addTask} className="add">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
          aria-label="New task"
        />
        <button type="submit">Add task</button>
      </form>

      {tasks.length === 0 ? (
        <p className="empty">No tasks yet. Add your first one above.</p>
      ) : (
        <ul>
          {tasks.map((t) => (
            <li key={t.id} className={t.done ? "done" : ""}>
              <label>
                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={() => toggleTask(t.id)}
                />
                <span>{t.text}</span>
              </label>
              <button
                className="delete"
                onClick={() => deleteTask(t.id)}
                aria-label={`Delete ${t.text}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
