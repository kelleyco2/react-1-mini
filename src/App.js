import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      picture: '',
      friends: []
    }
  }

  updatePicture(e){
    let picture = e.target.value
    this.setState({
      picture
    })
  }

  updateName(e){
    let name = e.target.value
    this.setState({
      name
    })
  }

  handleClick(){
    let {name, picture} = this.state
    let friend = {
      name: name,
      picture: picture
    }
    
    let friends = this.state.friends
    friends.push(friend)


    this.setState({
      friends
    })
  }

  render() {
    return (
      <div>
        <label>Picture:</label>
        <input onChange={e => this.updatePicture(e)}/>
        <label>Name:</label>
        <input onChange={e => this.updateName(e)}/>
        <button onClick={() => this.handleClick()}>Add Friend</button>
        {this.state.friends.map((friend, i) => {
          return (
            <div key ={i}>
              <div>{friend.name}</div>
              <img width={200} height={200} src={friend.picture}/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
