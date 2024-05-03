import React, { Component } from 'react'

export default class TMN_Form2 extends Component {
    constructor(props){
      super(props);
      this.state = {
        khoaHoc:"ReactJS"
      }
    }
    // Ham xu ly su kien 
    handleChange=(sv)=>{
      this.setState({
        khoaHoc:eval.target.value
      })
    }
  render() {
    return (
      <div>
         <form>
            <label>Khoa hoc</label>
            <select value={this.state.khoaHoc} name="khoaHoc" onChange={this.handleChange}>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JS">JS</option>
                <option value="ReactJS">ReactJS</option>
            </select>
            <button>Submit</button>
         </form>

      </div>
    )
  }
}
;