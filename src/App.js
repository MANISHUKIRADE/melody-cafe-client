import './App.css';
import { Stack  } from '@mui/material';

import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from './components/Home/Home'
import Login from './components/Login/Login';
 // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591


export default function App() {
  return (
    <Router>
     
      <Stack>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        </Stack>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.


function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
