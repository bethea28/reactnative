

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

class AwesomeProject extends Component {
  constructor(props){
    super(props)
    this.state = {
      word:'',
      definition:'',
      syllables: null,
      rhymes: '',
      webster: '',
      syn: '',
      pic:'',
      showButtons: true,
      showPic: false, 
      urban: ''
      
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleUrban = this.handleUrban.bind(this)
    this.pictureApi = this.pictureApi.bind(this)
    this.handleWebster = this.handleWebster.bind(this)
    this.handleSyn = this.handleSyn.bind(this)
    this.handleRhymes = this.handleRhymes.bind(this)
    this.handleSyllables = this.handleSyllables.bind(this)
    this.showButtons = this.showButtons.bind(this)
    
   }
  
  handleChange(event){
      // console.log(event)
    this.setState({word:event})
    // this.pictureApi()
    // console.log(this.state.word)
  }

  showButtons(){
    this.setState({display: true})
    console.log(this.state.display)
  }

  handleUrban(event){
    // let key  = "3c443f0f-94fe-4819-8b00-6e2e1e2f3cdd"
    event.preventDefault()
    this.setState({showPic: false})


    console.log(this.state.word)
    fetch("https://api.urbandictionary.com/v0/define?term=" + this.state.word)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      console.log(response.list[1].definition)
      // let final = response.list[Math.floor((Math.random() * 4 ) + 1)].definition 
      let final = response.list[1].definition
      this.setState({urban: final})
    })
      console.log(this.state.urban)

  }

  pictureApi(event){
    // let key  = "3c443f0f-94fe-4819-8b00-6e2e1e2f3cdd"
    // event.preventDefault()
    console.log(this.state.word)
    fetch("https://pixabay.com/api/?key=4172115-92e671ee61b211fd29dba7c9a&q=" + this.state.word + "&image_type=photo&pretty=true")
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      let final = response.hits[0].userImageURL
      console.log(final)
      this.setState({pic: final})
      this.setState({showPic: true, webster: null, urban: null, syn: null, syllables: null, rhymes: null})
      // let final = response.list[Math.floor((Math.random() * 4 ) + 1)].definition 
      // this.setState({info:final})
      // console.log(this.state.info)
    })

  }

  handleWebster(event){
    // let key  = "3c443f0f-94fe-4819-8b00-6e2e1e2f3cdd"

    event.preventDefault()
    this.setState({showPic: false})

    console.log(this.state.word)
    fetch("https://api.pearson.com/v2/dictionaries/entries?headword=" + this.state.word)
    .then((response) => response.json())
    .then((response) => {
      let final = response.results[2].senses[0].definition[0]
      // console.log(response.results[2].senses[0].definition[0])
      console.log(final)
      this.setState({webster:final})
      // console.log(this.state.info)
    })
    // this.pictureApi()
  }

  handleSyn(event){
    event.preventDefault()
    this.setState({showPic: false})


    console.log(this.state.word)
    fetch("https://words.bighugelabs.com/api/2/9b0e7781308c60fd33d5fe868258c426/" + this.state.word + "/json")
    .then((response) => response.json())
    .then((response) => {
      let final = response.noun.syn[Math.floor((Math.random() * 2) + 1)] 
      this.setState({syn:final})
      console.log(this.state.syn)
    })

  }

  handleRhymes(event){
    event.preventDefault()
    this.setState({showPic: false})

    console.log(this.state.word)
    fetch("https://api.datamuse.com/words?rel_rhy=" + this.state.word)
    .then((response) => response.json())
    .then((response) => {
      let final = response[Math.floor((Math.random() * 10) + 1)].word
      console.log(final)
      this.setState({rhymes: final})
      
    })


  }

  handleSyllables(event){
    // let key  = "3c443f0f-94fe-4819-8b00-6e2e1e2f3cdd"
    event.preventDefault()
    this.setState({showPic: false})


    console.log(this.state.word)
    fetch("https://api.datamuse.com/words?rel_rhy=" + this.state.word)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      let final = response[0].numSyllables
      this.setState({syllables: final})
      console.log(final)
    })

  } 

  render() {
    console.log(this.state.urban)
    return (
      <View style = {{backgroundColor: 'blue'}}>


        <Text style = {{height:100}}>
        </Text>


        <Text style = {{top: -39, fontWeight: 'bold', fontSize: 25, fontFamily: "AcademyEngravedLetPlain", textAlign: "center", height:20}}>
          A-PICTION-ARY
          
        </Text>

        <Text style = {{height:10}}>
        </Text>

        <Input handleChange = {this.handleChange}/>

        <Text style = {{height:20}}>
        </Text>

        {this.state.showButtons ? <ButtonTop urban = {this.state.urban} pics = {this.pictureApi} syn = {this.state.syn} handleSyn = {this.handleSyn} webster = {this.state.webster} handleWebster = {this.handleWebster} rhymes = {this.state.rhymes} syllables = {this.state.syllables} info = {this.state.info} handleChange ={this.handleChange} handleUrban = {this.handleUrban} handleRhymes = {this.handleRhymes} handleSyllables = {this.handleSyllables}/> : <Text> '' </Text>}


         

        {(this.state.urban|| this.state.webster|| this.state.syn|| this.state.syllables|| this.state.rhymes || this.state.pic) ?  <Text>'' </Text> : <Image
          style={{borderRadius: 10, position: 'relative', top: -100, right: -70,  width: 225, height: 225}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />}

        <View style = {{ justifyContent: "center", alignItems: "center", borderRadius: 10, width: 300, height: 300}}>

          {!this.state.showPic ?  <Text>'' </Text> : <Image onPress = {this.showButtons} style = {styles.image} source={{uri: this.state.pic ? this.state.pic : "  this.state.pic"}}/> }
        </View>
        <View>
          <Text style = {{textAlign: "center"}}>
          </Text>
        </View>

      </View>
    );
  }
}
            // {this.state.webster}

const styles = StyleSheet.create({
  image: {
    flex: 1, 
    borderWidth: 2,
    borderColor: 'red',

    // position: "absolute",
    borderRadius: 5,
    width: 300, 
    height: -500,
    left: 35,
    top: -115,

  }

})



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);