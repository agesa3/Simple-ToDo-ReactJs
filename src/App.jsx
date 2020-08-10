import React, { Component } from "react";
import "./App.css";
import { divide } from "lodash";
import ListItem from "./ListItem";
import _ from 'lodash';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chores: [
        {
          id:1,
          name: "Take out Trash",
          description:"Trash Removal From Both bins",
          completed:true
        },
        {
          id:2,
          name: "Do the Dishes",
          description:"Wash and Dry the dishes",
          completed:false
        },
        {
          id:3,
          name: "Walk The Dog",
          description:"Take the dog around the block 2 times",
          completed:true
        }
      ]
    };
  }
handleOnClick=id=>{
  const chores=_.cloneDeep(this.state.chores)

  for(let chore of chores){
    if(chore.id===id){
      chore.completed=!chore.completed;
      break;
    }
  }
  this.setState({chores});
}

  render() {
    const {chores}=this.state;
  return (
    <div className="App">
      <h1>Chores</h1>
      <ul>
        {chores.map(chore =>(
          <ListItem
          key={chore.id}
          id={chore.id}
          name={chore.name}
          completed={chore.completed}
          description={chore.description}
          handleOnClick={this.handleOnClick} 
          />
        ))}
      </ul>
    </div>
  )
  }
}

export default App;
