import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render(){
    const { monsters, searchField} = this.state
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>B-Monster</h1>
        <SearchBox placeholder='Search monster' handleChange={this.handleChange}/>
        <CardList monsters={filterMonsters} />
      </div>
  );
  }
  
}

export default App;
