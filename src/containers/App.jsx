import React from 'react';
import connectWithRouter from '../../modules/connectWithRouter';

import Header from '../components/Header';
import MainContainer from '../containers/MainContainer';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <MainContainer/>
      </div>
    );
  }
}

const connectedApp = connectWithRouter(null, null)(App); // To use this.props.dispatch

export default connectedApp;
