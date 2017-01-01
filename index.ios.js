
import React, { Component } from 'react';
import Input from './components/input.ios.js'
import ButtonTop from './components/button.ios.js'
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';

var AwesomeProject = React.createClass({
  getInitialState(){
    return({
      word:'',
      definition:''

    })
   },
  
  handleChange(event){
      // console.log(event)
    this.setState({word:event})
    // console.log(this.state.word)
  }, 

  handleUrban(event){
    // var key  = "3c443f0f-94fe-4819-8b00-6e2e1e2f3cdd"
    event.preventDefault()
    console.log(this.state.word)
    fetch("https://api.urbandictionary.com/v0/define?term=" + this.state.word)
    .then((response) => response.json())
    .then((response) => {
      var final = response.list[0].definition 
      this.setState({info:final})
      console.log(this.state.info)
    })

  }, 

  render() {
    return (
      <View>
        <Input handleChange = {this.handleChange}/>
        <ButtonTop handleChange ={this.handleChange} handleUrban = {this.handleUrban}/>
        <Text>
          {this.state.info}
        </Text>

      </View>
    );
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     // justifyContent: 'center',
//     // alignItems: 'stretch',
//     width: 100,
//     height: 50, 
//     backgroundColor: 'yellow'

//   },
//   welcome: {
//     fontSize: 20,
//     backgroundColor: 'green',
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     backgroundColor: 'blue',
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
