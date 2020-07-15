/*jshint ignore:start*/
import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import './App.css';
class App extends Component {
  state = {
    ninjas: [
      {name:'Bob', age:30, belt:'Black', id:1},
      {name:'Yoshi', age:27, belt:'Blue', id:2},
      {name:'Crystal', age:25, belt:'pink', id:3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }
  componentDidMount(){
    console.log(`Component Mounted`)
  }
  componentDidUpdate(prevProps, prevState){
    console.log(`Component Updated`)
    console.log(prevProps)
    console.log(prevState)
  }
  render(){
   return(<div className="App">
     <h1>My first react app!</h1>
     <p>Welcome :)</p>
     <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
     <AddNinja addNinja={this.addNinja}/>
    </div>
    )
  };
}

export default App;
