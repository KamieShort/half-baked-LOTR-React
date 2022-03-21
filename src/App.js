import './App.css';

import Books from './views/Books/Books';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Characters from './views/Characters/Characters';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/books">
            <Books />
          </Route>
          {/* <Route exact path="/films">
            <Films />
          </Route> */}
          <Route exact path="/characters">
            <Characters />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
