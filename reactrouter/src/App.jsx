import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AppBar position="fixed" color='warning'>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 5 }}>
            React Router!
          </Typography>
          <Button color="inherit" component={Link} to="/">Etusivu</Button>
          <Button color="inherit" component={Link} to="/about">Tietoa meistä</Button>
          <Button color="inherit" component={Link} to="/contact">Yhteystiedot</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Outlet />
    </div>
  );
}

export default App;
