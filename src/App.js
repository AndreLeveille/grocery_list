import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import GroceryForm from './GroceryForm';



class App extends Component {

  state = {
    groceryList: [
      {id: 1, name: "bananas", complete: false},
      {id: 2, name: "yogurt", complete: false},
    ],
    // filter: "All",
  };

  addItem = (name) => {
    const {groceryList} = this.state;
    const grocery = { name, id: `${Math.random()}`, complete: false };
    this.setState({ groceryList: [...groceryList, grocery,]})
  }
  
  deleteItem = (id) => {
    const groceryList = this.state.groceryList.filter (grocery => {
      if (grocery.id !== id)
      return grocery
    });
      this.setState({ groceryList: [...groceryList]})
  }

  renderGroceries = () => {
    const { groceryList, } = this.state;
    return groceryList.map( grocery =>
      <li key= {grocery.id}>{grocery.name}</li>
      )
  }

  handleClick = (id) => {
    const { groceryList } = this.state;
    this.setState({
      groceryList: groceryList.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete
          }
        }
        return grocery
      })
    })
  }

  render() {
    const { groceryList } = this.state
    
    return (
      <div>
      <h1>Grocery List</h1>
      <List 
        name= "Things I need" 
        items={groceryList}
        itemClick={this.handleClick}
        deleteItem={this.deleteItem}
        
      />
      {/* <button onClick={this.toggleForm}>^^</button>
          {this.state.showForm && <GroceryForm addItem={this.addItem} />} */}
      <GroceryForm addItem={this.addItem}/>
      </div>
      
    );
  }
}


export default App;
