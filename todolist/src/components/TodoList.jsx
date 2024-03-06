import { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {

    const [desc, setDesc] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {

        if (desc.length != 0) {
        setTodos([...todos, desc]);
        setDesc("");
        } else {
            alert("Kenttä ei voi olla tyhjä!");
        }
    }

    const handleChange = event => {
        setDesc(event.target.value);
    }

    return (
        <>
            <input type="text" value={desc} onChange={handleChange} />
            <button onClick={addTodo}>Add</button>
            <br /><br />
            <TodoTable todos={todos}/>
        </>
    )
}

export default TodoList;