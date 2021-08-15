import React from 'react';
import s from './App.module.scss';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import UsersStats from './pages/UsersStats/UsersStats';
import User from './pages/User/User';

const  App = () => {
  return (
    <div className={s.root}>
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/statistic" component={UsersStats} />
      <Route path="/user/:uid" component={User} />
      <Route path="/404" component={notFound} />
      <Footer />
    </div>
  );
}

const notFound = () => {
  return(
    <div>
      404
    </div>
  )
}

export default App;
