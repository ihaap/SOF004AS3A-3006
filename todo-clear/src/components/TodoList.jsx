
import { useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


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

    const handleClear = () => {
        setTodos([]);
    }    

    const handleDescChange = event => {
        setDesc(event.target.value);
    }

    const handleDateChange = date => {
        setDate(date);
    }

    const handlePriorityChange = event => {
        setPriority(event.target.value);
    }

    return (
        <>
            <Stack direction="row" mt={5} spacing={2} justifyContent="center" alignItems="center">
                <TextField label="Kuvaus" value={desc} onChange={handleDescChange} />
                <Select value={priority} onChange={handlePriorityChange} data-testid="priority">
                    <MenuItem value="Matala">Matala</MenuItem>
                    <MenuItem value="Keskitaso">Keskitaso</MenuItem>
                    <MenuItem value="Korkea">Korkea</MenuItem>
                </Select>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Päivämäärä" value={date} onChange={handleDateChange} />
                </LocalizationProvider>                
                <Button variant="contained" startIcon={<AddIcon />} color="success" onClick={addTodo}>Lisää</Button>
                <Button variant="contained" startIcon={<DeleteIcon />} color="error" onClick={handleDelete}>Poista</Button>
                <Button variant="contained" startIcon={<ClearIcon />} color="warning" onClick={handleClear}>Tyhjennä</Button>
            </Stack>

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