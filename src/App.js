import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from './components/appGate/SignIn';
import SignUp from './components/appGate/SignUp';
import Feed from './components/feed/Feed';
import Profile from './components/profile/Profile';
import Sidebar from './components/sidebar/Sidebar';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="app">
     
      <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Feed}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/signup' component={SignUp}/>

      </Switch>
      <Widgets />
      </BrowserRouter> 
       
      
       
    </div>
  );
}

export default App;
