import React, { Component } from 'react';
import {fetchData} from './api'
import './App.css';
import Cards from './component/Cards';

class App extends Component{
  state = {
    data: {}
  }

  async componentDidMount(){
    const data = await fetchData();
    this.setState({ data: data });
  }

  render(){
    const {data} = this.state;
    return (
      <div>
        <Cards data={data}/>
      </div>
    );
  }
}

export default App;
