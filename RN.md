# Build Up a Cross Platform App in 10 minutes with React Native

Mobile Apps are a crucial part of our daily life. Yet, building a mobile app for everyone requires to have knowledge in at least two languages: Java for Android and Swift or Objective-C for iOS. Or at least, that’s what I thought until I discovered **React Native**.

## What is React Native ?

React Native is a framework to build **native** apps using only Javascript. For the Javascript fan I am, it's a great opportunity. As you read it, React Native builds native apps, and not hybrid apps or «HTML5» apps. This is possible because the Javascript written is transformed into native UI blocks for Android or iOS. I suggest you check React Native's [official website](https://facebook.github.io/react-native/) for more information. Let's jump into building of first mobile app.

## Installing React Native

The first step is to install React Native:)
I won't pretend explaining this better than what has already been done inthe last few months. However, I have a few suggestions and links to share

To install the CLI tools for React Native, you'll need Node.js (Node.js 6 works fine, I haven't tested other versions but React Native should work with Node.js 4 or newer). 
Then you can just run `npm install -g react-native-cli` to install React Native.

### iOS

In order to develop an iOS app, you'll need a Mac with xCode (you can find it on the AppStore). If you are using Linux, a [great article](https://github.com/theodo/theodo-blog/blob/master/posts/2016/10/ios-development-from-linux.md) has been published to help you develop iOS app on Linux.
XCode comes up with a simulator, which we will use for development.

### Android

Testing you application on an Android device is a bit tougher. The best practices are described on [React Native's website](https://facebook.github.io/react-native/docs/getting-started.html). Here are the main points:
1. Install [Android Studio](https://developer.android.com/studio/install.html)
2. Set up paths

```
export ANDROID_HOME=~/Android/Sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
```

3. Set up Android Virtual Device (if not set up by Android Studio)

```
android avd
```

## Creating and running a React Native App

To create a React Native App run:

```
react-native init <YourAppNameHere>
```

Then launch it on the simulator you want with :

```
react-native run-ios
react-native run-android
```

You should see the following screen on your emulator:
![iOS simulator showing the sample app](sample-app-screen.png)

## Modifying our app

Let's enter the fun part! Creating our first cross platform mobile app!
Open you favorite editor and let's take a look at what React Native generated for us.
We have two files that represent our two entry points : one for iOS (`index.ios.js`) and one for Android (`index.android.js`).
Let's play with the `index.ios.js` and change the texto and style.

```
<Text style={styles.welcome}>
  Our first React Native App
</Text>
```

You can see the changes in your emulator by pressing Ctrl+R or Cmd+R thanks to some live reloading. This makes React Native development so much easier.

### How does the styling work in React Native

The sample app gives us an example of how the styling works in React Native.

```
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
```

There are two key ideas here to have in mind when developping in React Native.
1. React Native uses flexbox for the design. If you've never used flexbox, here are two awesome links to master it in minutes :)
  * A [TD game](http://www.flexboxdefense.com/)
  * A greatly written [guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
2. React Native writes CSS styles in camel case.
  * `background-color` => `backgroundColor`
  * `border-width` => `borderWidth`

### React Native Components

You can find a list of components to use in React Native on their official website. For our demo app, we'll use the navigation component given to us by RN : `Navigator`

First, we need to write a couple components that we'll allow us to try our navigation.

Let's create a src folder where the components inside will be used by both our Android and iOS app. Inside our src folder, let's create a components folder and inside it two JS files : `firstPage.js` and `secondPage.js`

In our firstPage component we'll simply write a text that says ... "This is the first view". And in our second page, we'll simply write a text that says ... "This is the second view". You can find all the files we will write on GitHub [here].

**firstPage.js**

```
import React, {Component} from 'react';
import {
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
        <TouchableHighlight onPress={() => this.props.navigator.push(SecondPage.route())}</TouchableHighlight>
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
});

export default FirstPage;

```

**secondPage.js**

```
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
```

We then need to set up our Navigator to go back and forth from one page to the other.
First, in our `index.ios.js`, let's remove what's in the container View and add a Navigator:

**index.ios.js**

```
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
```

Let's analyze these lines.
1. We've given our Navigator an initial route that will be displayed when loading our app.
2. We've given a renderScene function that will render our different scenes. We'll take a look at this function in a moment.
3. We've given a style to our Navigator 

What should our `renderScene` do ? Well, it should render our component. Let's see how to write this:

**index.ios.js**

```
renderScene = (route, navigator) => {
  return React.createElement(route.component, {navigator: navigator});
}
```

Our `renderScene` method takes two arguments. The first one is the route we want to mount. The second one is the navigator. We'll need to pass the navigator to our components as a prop to be able to navigate back and forth.
Here, I wrote a one liner that will create a React element based on the route given to mount. Our initial route was FirstPage.route(), so the first component that will be mounted is FirstPage. Remember, in our firstPage class, we wrote a route method that returned a JSON with component set to ... FirstPage.





