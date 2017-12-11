

//creation of the child component that does all of our internal API calls which will trigger our backend

import React, { Component } from "react";
import axios from "axios";

export default class Callapi extends Component{
    constructor(props){
        super(props);

        this.setState = {
            tick: '', // need to add other states and select correct data type
        }
        this.getApiInfo = this.getApiInfo.bind(this);
    }
            //https://api.coinmarketcap.com/v1/ticker/
    getApiInfo(){
        axios
            .post("/api/getApiInfo", { /* element to find in the API docs? */  })
            .then(result => {
                return this.setState({ /* element to find in the API docs? */ })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render(){
        return (
            //JSX builds out in block level top to bottom 
            //Add one crypto row and map over info to dynamically add additional crypto info. 
            <div>
                <div className = "container">
          
                </div>

                <input
                    onChange={event => {
                        this.setState({ location: event.target.value })
                    }}/>
                <button onClick={this.getApiData}> Get Api Data </button>

                <h3> { /*     */ } </h3>
            </div>


        );
    }
}
