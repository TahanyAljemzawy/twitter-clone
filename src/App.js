import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
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

      </Switch>
      <Widgets />
      </BrowserRouter> 
       
      
       
    </div>
  );
}

export default App;
