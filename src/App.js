
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TeamDetails from './Components/TeamDetails/TeamDetails';
import NotFound from './Components/NotFound/NotFound';
import Social from './Components/Social/Social';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/home">
          <Home/>
          </Route>

          <Route path="/about/:teamId">
            <TeamDetails/>
          </Route>
          <Route path="/webSite/:webSite">
           <Social></Social>
          </Route>
          
          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
      </Router>

     
    </div>
  );
}

export default App;
