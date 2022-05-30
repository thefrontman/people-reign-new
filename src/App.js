import React, { useEffect } from 'react';

import './styles/main.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mint from './pages/Mint';

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
    });
    Aos.refresh();
    document
      .querySelectorAll('img')
      .forEach(img => img.addEventListener('load', () => Aos.refresh()));
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/mint'>
          <Mint />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
