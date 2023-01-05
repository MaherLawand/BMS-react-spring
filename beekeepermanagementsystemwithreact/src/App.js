import './css/App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Registration from './components/Registration';
import AppBar from './components/AppBar';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Apiaries from './components/Apiaries';
import { UserContext } from './components/UserContext';
import { useState } from 'react';

function App() {
  const [userid,setUserId] = useState(null);
  return (
    <Router>
    <div className="App">
    <AppBar />
    <UserContext.Provider value={{userid,setUserId}}>
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
