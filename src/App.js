import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    console.log('this is working');
    return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
  }
}

export default App;
