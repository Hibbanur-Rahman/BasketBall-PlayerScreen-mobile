import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import PlayerCardScreen1 from './src/screens/PlayerCardScreen';
import PlayerCardScreen2 from './src/screens/PlayerCardScreen2';
import PlayerCardScreen3 from './src/screens/PlayerCardScreen3';
import playerImage from './src/assets/images/player-img-1.png';
import ArrowLeftSvg from './src/components/ArrowLeft';

function App(): React.JSX.Element {
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);
  const handleBack = () => {
    setCard1(false);
    setCard2(false);
    setCard3(false);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View
            style={
              card1 || card2 || card3
                ? {display: 'none'}
                : {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 50,
                  }
            }>
            <Text style={{fontSize: 30, color: '#000'}}>Select any card</Text>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => setCard1(!card1)}>
                <Image
                  style={styles.img}
                  source={require('./src/assets/images/screen-1.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={() => setCard2(!card2)}>
                <Image
                  style={styles.img}
                  source={require('./src/assets/images/screen-2.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={() => setCard3(!card3)}>
                <Image
                  style={styles.img}
                  source={require('./src/assets/images/screen-3.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          {card1 ? (
            <>
              <TouchableOpacity onPress={handleBack}>
                <ArrowLeftSvg />
              </TouchableOpacity>
              <PlayerCardScreen1
                name="Luka Doncic"
                image={playerImage}
                position="Forward-Guard"
                stats={{
                  pointsPerGame: 25.4,
                  assistsPerGame: 7.1,
                  reboundsPerGame: 10.5,
                }}
              />
            </>
          ) : (
            ''
          )}
          {card2 ? (
            <>
              <TouchableOpacity onPress={handleBack}>
                <ArrowLeftSvg />
              </TouchableOpacity>
              <PlayerCardScreen2
                name="Luka Doncic"
                image={playerImage}
                position="Forward-Guard"
                stats={{
                  pointsPerGame: 25.4,
                  assistsPerGame: 7.1,
                  reboundsPerGame: 10.5,
                }}
              />
            </>
          ) : (
            ''
          )}
          {card3 ? (
            <>
              <TouchableOpacity onPress={handleBack}>
                <ArrowLeftSvg />
              </TouchableOpacity>
              <PlayerCardScreen3
                name="Luka Doncic"
                image={playerImage}
                position="Forward-Guard"
                stats={{
                  pointsPerGame: 25.4,
                  assistsPerGame: 7.1,
                  reboundsPerGame: 10.5,
                }}
              />
            </>
          ) : (
            ''
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
  },
  scrollView: {
    // flexGrow: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    padding: 10,
  },
  backgroundImg: {
    height: '100%',
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    overflow: 'hidden',
    margin: 20,
  },
  img: {
    height: '100%',
    width: '100%',
  },
});

export default App;
