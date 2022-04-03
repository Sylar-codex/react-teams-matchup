import React from 'react';
//import Title from './title'; 
import Header from './header'; 
import Content from './content'; 
import Footer from './footer'; 
import './css/App.css'; 
import './css/index.css';  

function App() {
  return ( 
    <div className="App">
      <Header />  
      <Content />
      <Footer /> 
    </div> 
    
  );
 
} 
  
export default App;
