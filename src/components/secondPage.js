import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class SecondPage extends Component {
  static route(props) {
    return {
      id: 'FirstPage',
      component: SecondPage
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the second view</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF00',
  },
});

export default SecondPage;
