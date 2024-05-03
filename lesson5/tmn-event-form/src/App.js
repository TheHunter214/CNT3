import React, { Component } from 'react'
import TMN_Form1 from './component/TMN_Form1'
import TMN_Form2 from './component/TMn_Form2';

export default App; class App extends Component {
  render() {
    return (
      <div> 
        <h1>Event - Form - Controlled Component</h1>
        <div>
          <TMN_Form1/>
          <TMN_Form2/>
        </div>
      </div>

    );
  }
}
