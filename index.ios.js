

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
  TouchableHighlight,
  Image
} from 'react-native';

var AwesomeProject = React.createClass({
  getInitialState(){
    return({
      word:'',
      definition:'',
      syllables: null,
      rhymes: '',
      webster: '',
      syn: '',
      pic:''

    })
   },
  
  handleChange(event){
      // console.log(event)
    this.setState({word:event})
    // this.pictureApi()
    // console.log(this.state.word)
  }, 

  handleUrban(event){
    // var key  = "3c443f0f-94fe-4819-8b00-6e2e1e2f3cdd"
    event.preventDefault()
    this.pictureApi()

    console.log(this.state.word)
    fetch("https://api.urbandictionary.com/v0/define?term=" + this.state.word)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      var final = response.list[Math.floor((Math.random() * 4 ) + 1)].definition 
      this.setState({info:final})
      console.log(this.state.info)
    })

  }, 

  pictureApi(event){
    // var key  = "3c443f0f-94fe-4819-8b00-6e2e1e2f3cdd"
    // event.preventDefault()
    console.log(this.state.word)
    fetch("https://pixabay.com/api/?key=4172115-92e671ee61b211fd29dba7c9a&q=" + this.state.word + "&image_type=photo&pretty=true")
    .then((response) => response.json())
    .then((response) => {
      var final = response.hits[0].webformatURL
      console.log(final)
      this.setState({pic: final})
      // var final = response.list[Math.floor((Math.random() * 4 ) + 1)].definition 
      // this.setState({info:final})
      // console.log(this.state.info)
    })

  }, 

  handleWebster(event){
    // var key  = "3c443f0f-94fe-4819-8b00-6e2e1e2f3cdd"
    event.preventDefault()
    this.pictureApi()

    console.log(this.state.word)
    fetch("https://api.pearson.com/v2/dictionaries/entries?headword=" + this.state.word)
    .then((response) => response.json())
    .then((response) => {
      var final = response.results[2].senses[0].definition[0]
      // console.log(response.results[2].senses[0].definition[0])
      console.log(final)
      this.setState({webster:final})
      // console.log(this.state.info)
    })
  },  

    handleSyn(event){
    event.preventDefault()
    this.pictureApi()

    console.log(this.state.word)
    fetch("https://words.bighugelabs.com/api/2/9b0e7781308c60fd33d5fe868258c426/" + this.state.word + "/json")
    .then((response) => response.json())
    .then((response) => {
      var final = response.noun.syn[Math.floor((Math.random() * 2) + 1)] 
      this.setState({syn:final})
      console.log(this.state.syn)
    })

  }, 

  handleRhymes(event){
    event.preventDefault()
    this.pictureApi()

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
    this.pictureApi()

    console.log(this.state.word)
    fetch("https://api.datamuse.com/words?rel_rhy=" + this.state.word)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      var final = response[0].numSyllables
      this.setState({syllables: final})
      console.log(final)
    })

  }, 

  render() {
    return (
      <View>


        <Text style = {{height:100}}>
        </Text>


        <Text style = {{fontSize: 25, fontFamily: "AcademyEngravedLetPlain", textAlign: "center", height:20}}>
          A-PICTION-ARY
        </Text>

        <Text style = {{height:10}}>
        </Text>

        <Input handleChange = {this.handleChange}/>

        <Text style = {{height:20}}>
        </Text>

        <ButtonTop syn = {this.state.syn} handleSyn = {this.handleSyn} webster = {this.state.webster} handleWebster = {this.handleWebster} rhymes = {this.state.rhymes} syllables = {this.state.syllables} info = {this.state.info} handleChange ={this.handleChange} handleUrban = {this.handleUrban} handleRhymes = {this.handleRhymes} handleSyllables = {this.handleSyllables}/>

        <View style = {{ justifyContent: "center", alignItems: "center", borderRadius: 10, width: 300, height: 300}}>

          <Image style = {{flex: 1, borderRadius: 5, width: 300, height: 300}} source={{uri: this.state.pic == null ? this.state.pic : this.state.pic}}/>

        </View>

      </View>
    );
  }
})


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
