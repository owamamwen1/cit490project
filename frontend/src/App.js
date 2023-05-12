import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TopBar from './components/topbar/Topbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/settings/Setting';
import WriteDonor from './pages/write/WriteDonor';
import Home from './pages/home/Home';
import Single from './pages/single/Single';

function App() {
  const user = false;

  return (
    <Router>
    <TopBar/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/register">{ user ? <Home/> : <Register/>}</Route>
      <Route path="/login">{ user ? <Home/> : <Login/>}</Route>
      <Route path="/write">{ user ? <WriteDonor/> : <Register/>}</Route>
      <Route path="/setting">{ user ? <Setting/> : <Register/>}</Route>
      <Route path="/donor/:donorId">
        <Single/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
