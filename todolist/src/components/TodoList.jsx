import { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {

    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        // Jos eivät ole tyhjiä kenttiä niin lisää, muutoin alert...
        if (desc.length !== 0 && date.length !== 0) {
            setTodos([...todos, { desc, date }]);
            setDesc("");
            setDate("");
        } else {
            alert("Kentät ei voi olla tyhjiä!");
        }
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }


    // Nämä olisi varmaan voinut yhdistää yhdeksi Handleriksi..?

    const handleDescChange = event => {
        setDesc(event.target.value);
    }

    const handleDateChange = event => {
        setDate(event.target.value);
    }

    return (
        <>
            <input type="text" value={desc} onChange={handleDescChange} placeholder="Kuvaus" />
            <input type="date" value={date} onChange={handleDateChange} placeholder="Päivämäärä" />
            <button onClick={addTodo}>Lisää</button>
            <TodoTable todos={todos} deleteTodo={deleteTodo}/>
        </>
    )
}

export default TodoList;