

import Home from './components/Home';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import AnimeDetails from './components/AnimeDetails';
import Nav from './components/Nav';
import Search from './components/Search';




function App() {
  return (
    <Router>
    
    <div className="App">
      <Nav/>
   
       <Switch>
          <Route exact path="/">
             <Home/>
          </Route>

          <Route path="/anime:id">
             <AnimeDetails/>
           </Route>

           <Route path="/search:searchVal">
             <Search/>
           </Route>

      
          </Switch>
    </div>
    </Router>
    
  );
}

export default App;
