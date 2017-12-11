import React, { Component } from 'react';
import './App.css';
import axios from 'axios';



class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      coinApi: [],
      Coin1: {},
      value: '10',
    
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    axios.get("/ticker").then(response =>{
      console.log(response);
      this.setState({ coinApi: response.data, Coin1: response.data[0] })
    
      console.log(this.state.coinApi)
    })
  }
    //dropdown button
  handleChange(event){
    this.setState({ value: event.target.value })
  }
    //sort
  handleChange(event){
    this.setState({ value: event.target.value })
  }


  render() {
    return (
      <div className="App">
        <title>Cryptocurrencies</title>
        <header className="App-header">
          Cryptocurrencies
        </header>


        <section className= "sectionRight">
          <div className="dropdown">
              <button className="dropbtn">Number of coins to display</button>
            <select value = {this.state.value} onChange={this.handleChange} className="dropdown-content">
              <option value="10">10 currencies</option>
              <option value="25">25 currencies</option>
              <option value="50">50 currencies</option>
              <option value="75">75 currencies</option>
              <option value="100">List All</option>
            </select>
          </div>
        </section>

        <section className="sectionLeft">
          <table className= "header">
          <tbody>
            <tr>
              <th className="nameHeader">Name</th>        
              <th className="priceHeader">Price</th> 
                  {/* sort */}
              <th value ={this.state.value} onClick={this.handleChange} className="changeHeader">24hr Change</th>
            </tr>




            {this.state.coinApi.map( (elm, index) => {
                   
            if (index > this.state.value){
              return null;
            }else{
              return (
               
                  <tr key={elm.name}>
                    <td className="name">{elm.name}</td>
                    <td className="price">${elm.price_usd}</td>
                    <td className="change">{elm.percent_change_24h}% </td>
                  </tr>
                  )
                }
              })}
            </tbody>
          </table>
          </section>



    

       
      </div>
    );
  }
}

export default App;
