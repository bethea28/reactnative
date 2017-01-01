
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

        <View style = {styles.webster}>
         <Button onPress = {this.props.handleChange} title = 'Webster'/>  
        </View>

        <View style = {styles.urban}>
         <Button  onPress = {this.props.handleUrban} title = 'Urban'/>  
        </View>

        <Text>
          {this.props.info}
        </Text>

        <View style = {styles.thesaurus}>
         <Button  onPress = {this.props.handleChange} title = 'Thesaurus'/>  
        </View> 

        <View style = {styles.syllables}>
         <Button  onPress = {this.props.handleSyllables} title = 'Syllables'/>  
        </View>

        <Text>
          {this.props.syllables}
        </Text>

        <View style = {styles.rhyming}>
         <Button  onPress = {this.props.handleRhymes} title = 'Rhyming'/>  
        </View>
        <Text>
          {this.props.rhymes}
        </Text>

      </View>

       
    );
  }
})

const styles = StyleSheet.create({
  main: {
    // flexGrow: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
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
