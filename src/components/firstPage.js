import React, {Component} from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import NavBar from 'react-native-navbar';

import SecondPage from './secondPage';

class FirstPage extends Component {
  static route(props) {
    return {
      id: 'FirstPage',
      component: FirstPage
    };
  }

  render() {
    const titleConfig = {
      title: 'First Component',
    };

    return (
      <View style={styles.container}>
        <NavBar title={titleConfig} />
        <View style={styles.content}>
          <Text>This is the first view</Text>
          <TouchableHighlight onPress={() => this.props.navigator.push(SecondPage.route())} style={styles.button}>
            <Text>Go to second view</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: '#FF00FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00FFFF',
    padding: 10
  }
});

export default FirstPage;
