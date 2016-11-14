import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import FirstPage from './src/components/firstPage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class TestApp extends Component {
  renderScene = (route, navigator) => {
    return React.createElement(route.component, {navigator: navigator});
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={FirstPage.route()}
          renderScene={this.renderScene}
          style={styles.navigator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigator: {
    flex: 1,
    height: windowHeight,
    width: windowWidth
  }
});

AppRegistry.registerComponent('TestApp', () => TestApp);
