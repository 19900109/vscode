import React from 'react';
// import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Home from './components/Home';
import News from './components/News'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>你好 react 根组件</p>
       
       <Home></Home>
       <News />
      </header>
    </div>
  );
}

export default App;
