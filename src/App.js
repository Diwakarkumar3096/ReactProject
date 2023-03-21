import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
   this.state = { 
      items:[]    
 }

  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json()).then((data)=>{
      this.setState({
        items:data
      })
    })
  }
  
  render() { 
    const {items}=this.state;
    return ( 
    <>
        {
          items.map(item=>(
            <div>
            <h1>userName:{item.username}</h1>
            <h1>name:{item.name}</h1>
            <h1>email:{item.email}</h1>
            </div>
          ))
          
        }
    </>);
  }
}
 
export default App;