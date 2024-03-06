// Tilaton komponentti, propseista tulee kaikki tarvittava tieto.

function TodoTable(props) {

    const { todos, deleteTodo } = props;

    return (
        <table>
            {todos.length > 0 && (
                <thead>
                    <tr>
                        <th>Päivämäärä</th>
                        <th>Kuvaus</th>
                        <th></th>
                    </tr>
                </thead>
            )}
            <tbody>
                {todos.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.desc}</td>
                        <td><button onClick={() => deleteTodo(index)}>Poista</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TodoTable;