import React from 'react';
import Greeting from './Greeting';

const App = (props) => {
  let colours=['red', 'green', 'blue','yellow','orange','cyan'];

  return (
    <div className='container'>
      <h1>{props.title}</h1> <hr/>


      <Greeting msg='Good Morning' myColours={colours}/>

    </div>
  );
};

export default App;