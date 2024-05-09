import React, { Component } from 'react'
import TMN_Form1 from './component/TMN_Form1'
import TMN_Form2 from './component/TMn_Form2';
import TMN_Form3 from './component/TMN_Form3';

export default App; class App extends Component {
  handleSubmit = (param)=>{
    console.log(props);
  }
  render() {
    return (
      <div> 
        <h1>Event - Form - Controlled Component</h1>
        <div>
          <TMN_Form1/>
          <TMN_Form2/>
          <TMN_Form3 onSubmit={this.handleSubmit}/>
        </div>
      </div>

    );
  }
}
