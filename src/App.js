import React, { Component } from 'react';
import './App.css';
import fetch from './config/fetch'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  monsters = [];

  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount = () => {
    fetch.get('https://jsonplaceholder.typicode.com/users')
      .then((users) => {
        this.monsters = users;
        this.setState({ monsters: users })
      });
  }

  filterMonsters = (e) => {
    const { value } = e.target;

    this.setState({
      searchField: value,
      monsters: this.monsters.filter((monster) => monster.name.toLowerCase().includes(value))
    })
  }

  render = () => {
    return (
      <div className="App" >
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          filterMonsters={this.filterMonsters} searchField={this.state.searchField} />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }

}

export default App;
