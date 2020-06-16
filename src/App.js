import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingPage from './loadingPage/LoadingPage';

import Sidebar from './sidebar/Sidebar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true    
    };
  }

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    this.demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  
  demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  render() {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for async data, remove this block 
      return <LoadingPage />; // render null when app is not ready
    }

    return (
      <Sidebar>
      </Sidebar>
    );

  }
}

export default App;
