import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react';
import './App.css'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import TodoList from './components/TodoList'
import { AppBar, Tabs, Tab, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChecklistIcon from '@mui/icons-material/Checklist';


function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth="xl">
        <CssBaseline />
        <AppBar position="absolute" color='transparent'>
          <Tabs value={value} onChange={handleChange}>
            <Tab icon={<HomeIcon />}label="Etusivu" />
            <Tab icon={<ChecklistIcon />}label="Tehtävälista" />
          </Tabs>
        </AppBar>
        <Box sx={{ p:1 }} >
          {value === 0 && <Home /> }
          {value === 1 && <TodoList />}
        </Box>
      </Container>
    </>
  );
}

export default App;
