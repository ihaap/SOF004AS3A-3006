// Tilaton komponentti, propseista tulee kaikki tarvittava tieto.

function TodoTable(props) {

    const { todos } = props; 

    return (

        <table>
            <tbody>
                {todos.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default TodoTable;