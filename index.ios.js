import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TestApp extends Component {
  renderScene = (route, navigator) => {
    return React.createElement(route.component, {navigator: navigator});
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          renderScene={this.renderScene} />
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

AppRegistry.registerComponent('TestApp', () => TestApp);
