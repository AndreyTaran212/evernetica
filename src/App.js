import './App.css';
import SearchPage from './pages/SearchPage';
import CardInfoPage from './pages/CardInfoPage';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

function App() {

    return (
        <Switch>
            <Route exact path='/'>
                <Redirect to={`/search/`}/>
            </Route>
            <Route path={`/search/`} component={SearchPage}/>
            <Route path='/infopage/:code' component={CardInfoPage}/>
        </Switch>
    );
}

export default App;
