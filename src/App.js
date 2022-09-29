//import logo from './assets/brasao.png';

//import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import login from "./components/login";
import TelaPonto from "./components/TelaPonto";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={login}/>
        <Route path="/TelaPonto" exact component={TelaPonto}/>
      </Switch>
    </Router>
  );
}
export default App;
