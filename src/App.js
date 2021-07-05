import './App.css';
import SearchPage from './pages/SearchPage';
import CardInfoPage from './pages/CardInfoPage';
import {
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
            <Switch>
              <Route exact path='/' component={SearchPage}/>
              <Route path='/infopage/:code' component={CardInfoPage}/>
            </Switch>
  );
}

export default App;
