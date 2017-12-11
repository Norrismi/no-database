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
    this.sortCoin = this.sortCoin.bind(this);
    this.sortMarketCap = this.sortMarketCap.bind(this);
    this.sortPrice = this.sortPrice.bind(this)
  }

  componentDidMount(){
    axios.get("/ticker").then(response =>{
      console.log(response);
      this.setState({ coinApi: response.data, Coin1: response.data[0] })
    
    })
  }
    //dropdown button
  handleChange(event){
    this.setState({ value: event.target.value })
  }
    //sort
  sortCoin(event){
    const sortedCoin = this.state.coinApi.sort(function(a,b){
      return b.percent_change_24h - a.percent_change_24h;
    })
    this.setState({ coinApi: sortedCoin })
  }
    //sort market cap
  sortMarketCap(event){
    const sortMarketCap = this.state.coinApi.sort(function(a,b){
      return b.market_cap_usd - a.market_cap_usd;
    })
    this.setState({ coinApi: sortMarketCap })
  }

  sortPrice(event){
    const sortPrice = this.state.coinApi.sort(function(a,b){
      return b.price_usd - a.price_usd;
    })
    this.setState({ coinApi: sortPrice })
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
              <th value ={this.state.sort} onClick={this.sortPrice} className="priceHeader" a href = "#">Price</th> 
              <th value ={this.state.sort} onClick={this.sortCoin} className="changeHeader" a href = "#">24hr Change</th> 
              <th value ={this.state.sort} onClick={this.sortMarketCap} className="mcHeader" a href = "#">Market Cap</th> 
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
                    <td className="marketCap">${elm.market_cap_usd} </td>
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
