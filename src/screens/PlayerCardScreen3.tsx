import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

interface PlayerCardScreenProps {
  name: string;
  image: any;
  position: string;
  stats: {
    pointsPerGame: number;
    assistsPerGame: number;
    reboundsPerGame: number;
  };
}

const PlayerCardScreen: React.FC<PlayerCardScreenProps> = ({ name, image, position, stats }) => {
  return (
    <View style={styles.container}>
      <View style={styles.InnerContainer}>
        <ImageBackground
          source={require('../assets/images/bg-img-6.jpg')}
          style={styles.backgroundImg}
          resizeMode="cover"
        >
          <View style={styles.upperPart}>
            <Image
              source={image}
              style={styles.playerImg}
            />
          </View>
          <View style={styles.lowerPart}>
            <Text style={styles.headText}>{name}</Text>
            <Text style={styles.paraText}>{position}</Text>
            <Text style={[styles.headText, { fontSize: 22, fontWeight: 'bold', marginTop: 30 }]}>
              PLAYER STATS
            </Text>
            <View style={styles.statsContainer}>
              <View style={styles.statsItems}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>{stats.pointsPerGame}</Text>
                </View>
                <Text style={styles.statsText}>Points Per Game</Text>
              </View>
              <View style={styles.statsItems}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>{stats.reboundsPerGame}</Text>
                </View>
                <Text style={styles.statsText}>Rebounds Per Game</Text>
              </View>
              <View style={styles.statsItems}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>{stats.assistsPerGame}</Text>
                </View>
                <Text style={styles.statsText}>Assists Per Game</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#000',
    padding: 10,
    width: '100%',
  },
  InnerContainer: {
    backgroundColor: '#fff',
    borderRadius: 18,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    overflow: 'hidden',
  },
  backgroundImg: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  upperPart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  playerImg: {
    width: 250,
    height: 200,
  },
  lowerPart: {
    display: 'flex',
    backgroundColor: '#000',
    borderTopEndRadius: 80,
    padding: 30,
  },
  headText: {
    fontSize: 36,
    color: '#fff',
  },
  paraText: {
    fontSize: 16,
    color: '#fff',
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statsItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  },
  statsText: {
    color: '#fff',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
  circle: {
    width: 65,
    height: 65,
    borderRadius: 33,
    borderWidth: 2,
    borderColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default PlayerCardScreen;
