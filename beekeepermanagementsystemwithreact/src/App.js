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
import Sales from './components/Sales';
import Customers from './components/Customers';
import Statistics from './components/Statistics';


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
        <Route exact path="/Registration">
          <Registration />
        </Route>
        <Route exact path="/Apiaries">
          <Apiaries />
        </Route>
        <Route exact path="/newApiary">
          <NewApiary />
        </Route>
        <Route exact path="/Stock">
          <Stock />
        </Route>
        <Route exact path="/Sales">
          <Sales />
        </Route>
        <Route exact path="/Customers">
          <Customers />
        </Route>
        <Route exact path="/Statistics">
          <Statistics />
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
