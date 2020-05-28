import React, { Component } from 'react';
import {fetchData} from './api'
import './App.css';
import Cards from './component/Cards';
import Banner from './Banner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

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
          <Banner />
          <Cards data={data}/>
        </div>
    );
  }
}
export default App;
