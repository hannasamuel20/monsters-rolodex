import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {Search} from './components/search-box/search-box.component';
class App extends Component{
constructor(){
  super();
  this.state={
    monsters:[
      
    ],
    searchField:''
  }
 
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=>this.setState({monsters:users}));
}

handleChange=(e)=>{
  this.setState({searchField:e.target.value});
}

  render(){

      const filteredList=this.state.monsters.filter((monster)=>
         monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()));


    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
      
        <Search 
        placeholder='search monsters'
        handleChange={this.handleChange}
        />
        <CardList monsters={filteredList}>

        </CardList>
    
      </div>
    );
  }

}
export default App;
