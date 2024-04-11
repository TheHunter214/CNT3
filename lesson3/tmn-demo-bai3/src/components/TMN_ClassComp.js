import React, { Component } from 'react'

export default class TMN_ClassComp extends Component {
    constructor(props){
        super(props);
        // Tao doi tuong du lieu 
        this.state = {
            firtName:"Tran",
            lastName:"Nam",
            userName:"K22CNT3",
        }
    }
    // arrow function 
    Member = (props)=>{
        return(
            <div className='alert alert-success'>
                <h3>Xin chao: {props.fullName} - Ban da {props.age} tuoi.</h3>

            </div>
        );
    }

    ListMember = ()=>{
        return(
        <>
           <this.Member fullName="CGOD 1" age ="20"/>
           <this.Member fullName="CGOD 2" age ="30"/>
           <this.Member fullName="CGOD 3" age ="40"/>
           <this.Member fullName="CGOD 4" age ="50"/>
        </>
        )
    }
    render() {
        return (
            <div className='alert alert-danger'>
                  <h2>Class Component Demo</h2>
                  <hr/> 
                  <h3> Du lieu trong state</h3>
                  <h4> Xin chao: {this.state.fistName} {this.state.lastName}</h4>
                  <hr/>
                  <h3> Du lieu tu props </h3>
                  <p> Company: {this.props.company}</p>
                  <p> Course: {this.props.course}</p>

                  <hr/>
                  <this.Member fullName="Tran Minh Nam" age="20" />
                  <hr/>
                  {/* {this.ListMember} */}
                  <this.ListMember />
            </div>
    );
  }
}




