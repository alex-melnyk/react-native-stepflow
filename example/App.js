import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Stepflow} from "./Stepflow";

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>

        <Stepflow
          steps={[
            {
              checked: false,
              label: 'First'
            },
            {
              checked: false,
              label: 'Second'
            },
            {
              checked: false,
              label: 'Third'
            },
          ]}
          backgroundColor="#FAFAFA"
          highlightColor="#DB5461"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
