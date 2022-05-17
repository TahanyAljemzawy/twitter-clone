import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from './components/appGate/SignIn';
import SignUp from './components/appGate/SignUp';
import Feed from './components/feed/Feed';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="app">

      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Feed}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/signup' component={SignUp}/>

      </Switch>
      </BrowserRouter>



    </div>
  );
}

export default App;
