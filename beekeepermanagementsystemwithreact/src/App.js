import './css/App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Registration from './components/Registration';
import AppBar from './components/AppBar';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Apiaries from './components/Apiaries';

function App() {
  return (
    <Router>
    <div className="App">
    <AppBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Registration">
          <Registration />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Apiaries">
          <Apiaries />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>    
      </Switch>
    </div>
    </Router>
  );
}

export default App;
