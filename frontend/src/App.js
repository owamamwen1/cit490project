import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TopBar from './components/topbar/Topbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/settings/Setting';
import WriteDonor from './pages/write/WriteDonor';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import { useContext } from 'react';
import { Context } from './context/Context';
import About from './pages/about/About';
import Help from './pages/help/Help';

function App() {
  const {user} = useContext(Context);

  return (
    <Router>
    <TopBar/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/register">{ user ? <Home/> : <Register/>}</Route>
      <Route path="/login">{ user ? <Home/> : <Login/>}</Route>
      <Route path="/donor">{ user ? <WriteDonor/> : <Register/>}</Route>
      <Route path="/settings">{ user ? <Setting/> : <Register/>}</Route>
      <Route path="/help">{ user ? <Help/> : <Register/>}</Route>
      <Route path="/about"><About/></Route>
      <Route path="/view/:donorId">
        <Single/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
