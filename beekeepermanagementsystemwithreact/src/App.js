import './css/App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Registration from './components/Registration';
import AppBar from './components/AppBar';
import ErrorPage from './components/ErrorPage';
import Apiaries from './components/Apiaries';
import { UserContext } from './components/UserContext';
import { useState } from 'react';
import NewApiary from './components/NewApiary';
import Stock from './components/Stock';

function App() {
  const [user,setUser] = useState(null);
  return (
    <Router>
    <div className="App">
    <AppBar />
    <UserContext.Provider value={{user,setUser}}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Registration">
          <Registration />
        </Route>
        <Route path="/Apiaries">
          <Apiaries />
        </Route>
        <Route path="/newApiary">
          <NewApiary />
        </Route>
        <Route path="/Stock">
          <Stock />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>    
      </Switch>
    </UserContext.Provider>
    </div>
    </Router>
  );
}

export default App;
