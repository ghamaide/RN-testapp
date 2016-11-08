import React, {Component} from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import SecondPage from './secondPage';

class FirstPage extends Component {
  static route(props) {
    return {
      id: 'FirstPage',
      component: FirstPage
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the first view</Text>
        <TouchableHighlight onPress={() => this.props.navigator.push(SecondPage.route())} style={styles.button}>
          <Text>Go to second view</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF00FF',
  },
  button: {
    backgroundColor: '#00FFFF',
    padding: 10
  }
});

export default FirstPage;
