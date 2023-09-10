import { useReducer, useState } from "react"

const HookUseReducer = () => {
    const [number, dispatch] = useReducer((state, action) => {
        return Math.floor(Math.random(state) * 100);
    });

    const initialTasks = [
        { id: 1, text: "Lorem ipsum dolor sit amet." },
        { id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    ];

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = { id: Math.floor(Math.random() * 100), text: taskText }
                setTaskText("");
                return [...state, newTask];
            case "DELETE":
                return state.filter((task) => task.id !== action.id);
            default:
                return state;
        }
    };

    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchTasks({ type: "ADD" });
    }

    const removeTask = (id) => {
        dispatchTasks({ type: "DELETE", id });
    }

    return (
        <div>
            <h2>useReducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Alterar número</button>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
                <input type="submit" value="Enviar" />
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
                ))}
            </ul>
            <hr />
        </div>
    )
}

export default HookUseReducer