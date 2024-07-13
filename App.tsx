import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground
} from 'react-native';

import PlayerCardScreen from './src/screens/PlayerCardScreen3';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
       {/* <ImageBackground
    source={require('./src/assets/images/bg-img-4.jpg')}
    style={styles.backgroundImg}
    resizeMode="cover"> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{display:'flex',alignItems:'center',justifyContent:'center',padding:10}}>
          <PlayerCardScreen />
        </View>
      </ScrollView>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImg:{
    height:'100%',
    width:'100%'
  }
});

export default App;
