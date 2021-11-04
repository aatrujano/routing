import About from './About';
import Shop from './Shop';
import Nav from './Nav';
import Home from './Home';
import ItemInfo from './ItemInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route exact path='/Shop' component={Shop} />
          <Route path='/Shop/:id' component={ItemInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
