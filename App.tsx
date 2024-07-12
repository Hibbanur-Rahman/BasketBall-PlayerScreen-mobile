import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import PlayerCardScreen from './src/screens/PlayerCardScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <PlayerCardScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
