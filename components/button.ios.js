
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  Button
} from 'react-native';

var ButtonTop = React.createClass({

  render() {
    return (
    <View style ={styles.main}>  
      <View >

        <View style = {styles.webster}>
         <Button  onPress = {this.props.handleWebster} title = 'Webster'/>  
        </View>

        <Text style = {{textAlign: "center"}}>
          {this.props.webster}
        </Text>

        <View style = {styles.urban}>
         <Button  onPress = {this.props.handleUrban} title = 'Urban'/>  
        </View>

        <Text style = {{textAlign: "center"}}>
          {this.props.info}
        </Text>

        <View style = {styles.thesaurus}>
         <Button  onPress = {this.props.handleSyn} title = 'Thesaurus'/>  
        </View> 

        <Text style = {{textAlign: "center"}}>
          {this.props.syn}
        </Text>

        <View style = {styles.syllables}>
         <Button  onPress = {this.props.handleSyllables} title = 'Syllables'/>  
        </View>

        <Text style = {{textAlign: "center"}}>
          {this.props.syllables}
        </Text>

        <View style = {styles.rhyming}>
         <Button  onPress = {this.props.handleRhymes} title = 'Rhyming'/>  
        </View>

        <Text style = {{textAlign: "center"}}>
          {this.props.rhymes }
        </Text>

      </View>
    </View>
    );
  }
})
       


const styles = StyleSheet.create({
  main: {
    // flex: 1,
    // flexDirection: "row",
    // // justifyContent: 'center'
    // alignItems: 'center'
    // // height: 50,
    // backgroundColor: 'purple',
  },  
  webster: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 50,
    backgroundColor: 'yellow',
  },
  urban: {
    // fontSize: 20,
    // textAlign: 'center',
    // margin: 10,
    height: 50,
    backgroundColor: 'pink',
  },
  thesaurus: {
    // textAlign: 'center',
    // color: '#333333',
    // marginBottom: 5,
    height: 50,
    backgroundColor: 'lightblue',
  },
  syllables: {
    // textAlign: 'center',
    // color: '#333333',
    // marginBottom: 5,
    height: 50,
    backgroundColor: 'lightgreen',
  }, 

  rhyming: {
    // textAlign: 'center',
    // color: '#333333',
    // marginBottom: 5,
    height: 50,
    backgroundColor: 'green',
  },
});

module.exports = ButtonTop
