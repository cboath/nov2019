import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <p>
        Save to reload.
        </p>
      <Person name='Chris' age='43' />
      <Person name='Jason' age='44'>I do strange things</Person>
      <Person name='Marjory' age='45' />
    </div>
  );
}

export default App;
