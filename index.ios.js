
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
      definition:'',
      syllables: null,
      rhymes: ''

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
      console.log(response)
      var final = response.list[Math.floor((Math.random() * 10) + 1)].definition 
      this.setState({info:final})
      console.log(this.state.info)
    })

  }, 

  handleRhymes(event){
    event.preventDefault()
    console.log(this.state.word)
    fetch("https://api.datamuse.com/words?rel_rhy=" + this.state.word)
    .then((response) => response.json())
    .then((response) => {
      var final = response[Math.floor((Math.random() * 10) + 1)].word
      console.log(final)
      this.setState({rhymes: final})
      
    })


  },

  handleSyllables(event){
    // var key  = "3c443f0f-94fe-4819-8b00-6e2e1e2f3cdd"
    event.preventDefault()
    console.log(this.state.word)
    fetch("https://api.datamuse.com/words?rel_rhy=" + this.state.word)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      var final = response[0].numSyllables
      this.setState({syllables: final})
      console.log(final)
      // var syll = response
      // this.setState({syllables:syll})
      // console.log(this.state.syllables)
    })

  }, 

          // {this.state.info}
          // {this.state.syllables}
  render() {
    return (
      <View>
        <Input handleChange = {this.handleChange}/>
        <ButtonTop rhymes = {this.state.rhymes} syllables = {this.state.syllables} info = {this.state.info} handleChange ={this.handleChange} handleUrban = {this.handleUrban} handleRhymes = {this.handleRhymes} handleSyllables = {this.handleSyllables}/>
        <Text>
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
