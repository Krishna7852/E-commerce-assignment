/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Footer } from './components';
import Header from './components/Header/Header';
import FeaturePage from './containers/Feature/Loadable';
import Home from './containers/Home/home';
import NotFound from './containers/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feature" component={FeaturePage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
