
import { useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function TodoList() {

    const [desc, setDesc] = useState("");
    const [priority, setPriority] = useState("Matala");
    const [date, setDate] = useState("");
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const columns = [
        { field: "desc", headerName: "Kuvaus", sortable: true, filter: true, floatingFilter: true },
        {
            field: "priority", headerName: "Prioriteetti", sortable: true, filter: true, floatingFilter: true,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ['Matala', 'Keskitaso', 'Korkea']
            },
            cellStyle: params => {
                if (params.value === "Korkea") return { color: 'red' };
                if (params.value === "Matala") return { color: 'green' };
                if (params.value === "Keskitaso") return { color: 'orange' };
                return { color: 'black' };
            }
        },
        { field: "date", headerName: "Päivämäärä", sortable: true, filter: true, floatingFilter: true }
    ];

    const addTodo = () => {
        if (desc.length !== 0 && date.length !== 0 && priority.length !== 0) {
            setTodos([...todos, { desc, date, priority }]);
            setDesc("");
            setDate("");
            setPriority("Matala");
        } else {
            alert("Kentät ei voi olla tyhjiä!");
        }
    }

    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) =>
                index != gridRef.current.getSelectedNodes()[0].id))
        }
        else {
            alert("Valitse ensin poistettava rivi!");
        }
    }

    const handleDescChange = event => {
        setDesc(event.target.value);
    }

    const handleDateChange = event => {
        setDate(event.target.value);
    }

    const handlePriorityChange = event => {
        setPriority(event.target.value);
    }

    return (
        <>
            <input type="text" value={desc} onChange={handleDescChange} placeholder="Kuvaus" style={{marginRight: '10px'}} />
            <select value={priority} onChange={handlePriorityChange} style={{marginRight: '10px'}}>
                <option value="Matala">Matala</option>
                <option value="Keskitaso">Keskitaso</option>
                <option value="Korkea">Korkea</option>
            </select>
            <input type="date" value={date} onChange={handleDateChange} placeholder="Päivämäärä" style={{marginRight: '10px'}} />
            <button onClick={addTodo} style={{marginRight: '10px'}}>Lisää</button>
            <button onClick={handleDelete}>Poista</button>
            
            
            <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={todos}
                    columnDefs={columns}
                    rowSelection="single"
                    animateRows={true}
                />
            </div>
        </>
    )
}
export default TodoList;