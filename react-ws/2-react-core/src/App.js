import React from 'react';
import Home from './Home';
import Story from './Story';
import Box from './Box';

const App = () => {
  return (
    <div className='container'>
      <div className='alert alert-info text-center'>
      <h1>App Component</h1>

      </div>
      <hr/>
      <Home/>
      <Story/>
      <Box/>

      
    </div>
  );
};

export default App;