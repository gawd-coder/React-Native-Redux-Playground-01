import React from "react";
import{
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import {connect} from "react-redux";
class CounterApp extends React.Component{
//   state = {
//     counter: 0,
//   }
//can remove now as we are getting our state from store now   
//we are getting rid of this below after defining the dispatch long with action method
    // increaseCounter = () => {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // };
    // decreaseCounter = () => {
    //     this.setState({
    //         counter: this.state.counter - 1
    //     })
    // }
  render(){
    return(
      <View style = {styles.container}>
        <View style = {{
          flexDirection: "row",
          width: 200,
          justifyContent: "space-around",
        }}>
          <TouchableOpacity onPress = {() => this.props.increaseCounter()}>
            <Text style = {{fontSize: 20}}>Increase</Text>
          </TouchableOpacity>
          <Text style = {{fontSize: 20}}>{this.props.counter}</Text>
          <TouchableOpacity onPress = {() => this.props.decreaseCounter()}>
            <Text style = {{fontSize: 20}}>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

//to be able to access the state in our counter app we need this function
function mapStateToProps(state){
    return{
        counter: state.counter
    }
    //this is for getting state.counter from store and mapping that to counter for our class here 
}
//we need to still connect the above function to our counter app: for this we import connect
export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);

function mapDispatchToProps(dispatch){
    return{
        increaseCounter: () => dispatch({type: "INCREASE_COUNTER"}),
        decreaseCounter: () => dispatch({type: "DECREASE_COUNTER"})
    }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "gold"
  }
});