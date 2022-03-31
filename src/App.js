import React from 'react';
// import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import InputOption from './InputOption';

function App() {
  return (
    <div className="app">
    {/* {header} */}
    <Header />
    

    {/* {App Body} */}
    <div className="app__body">
      <Sidebar />
      <Feed />
       <div className="div"></div>
      {/* {Widgets} */}
    </div>
   </div>
  );
}


export default App;
