
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

const Input = (props) => {

  return (

    <TextInput
    type = 'button'
    style={{ color: "white", height: 40, borderColor: 'orange', borderWidth: 2, top: -25}}
    onChangeText = {props.handleChange} 
    // value={state.text}
    editable = {true}
    />
     
   
  );
  
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: 40,
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

export default Input
