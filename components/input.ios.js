
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

var Input = React.createClass({

  render() {
    return (

        <TextInput
        type = 'button'
        style={{height: 40, borderColor: 'orange', borderWidth: 1, }}
        onChangeText = {this.props.handleChange} 
        // value={this.state.text}
        editable = {true}
        />
         
     
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // justifyContent: 'center',
    // alignItems: 'stretch',
    height:40,
    borderColor: 'orange',
    borderWidth: 1,
    backgroundColor: 'yellow'

  },
  welcome: {
    fontSize: 20,
    backgroundColor: 'green',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    backgroundColor: 'blue',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Input
