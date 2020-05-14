import React from "react";
import{
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import {Provider} from "react-redux";   //to connect the store to our react native app
import CounterApp from "./src/CounterApp"
import {createStore} from "redux"

const initialState = {
  counter : 0
}
const reducer = (state = initialState,action) => {
  switch(action.type){
    case "INCREASE_COUNTER":
      return{
        counter:state.counter+1
      }
    case "DECREASE_COUNTER":
      return{
        counter:state.counter-1
      }
  }
  return state;
}

const store = createStore(reducer);

export default class App extends React.Component{
  render(){
    return(
      <Provider store = {store}>
        <CounterApp />
      </Provider> 
    )
  }
}
