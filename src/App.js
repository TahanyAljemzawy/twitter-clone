import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Feed from './components/feed/Feed';
import Post from './components/post/Post';
import Sidebar from './components/sidebar/Sidebar';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Feed}/>
        <Route exact path='/post' component={Post}/>

      </Switch>
      <Widgets />
      </BrowserRouter> 
       
      
       
    </div>
  );
}

export default App;
