import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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

const PlayerCardScreen: React.FC<PlayerCardScreenProps> = ({
  name,
  image,
  position,
  stats,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperPart}>
        <View style={styles.backgroundPart}>
          <Text style={styles.rankText}>#77</Text>
          <View style={styles.playerImgParrent}>
            <Image style={styles.playerImg} source={image} />
          </View>
        </View>
        <Text style={styles.playerName}>{name}</Text>
        <View style={styles.teamPosition}>
          <Text style={[styles.playerPositionText, styles.borderRight]}>
            Dallas Mavericks
          </Text>
          <Text style={styles.playerPositionText}>{position}</Text>
        </View>
      </View>
      <View style={styles.lowerPart}>
        <Text style={styles.statsTitle}>Stats</Text>
        <View style={styles.statsPart}>
          <View style={styles.statItem}>
            <Text style={styles.statItemText}>Points Per Game</Text>
            <Text style={styles.statItemHead}>{stats.pointsPerGame}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statItemText}>Rebounds Per Game</Text>
            <Text style={styles.statItemHead}>{stats.reboundsPerGame}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statItemText}>Assists Per Game</Text>
            <Text style={styles.statItemHead}>{stats.assistsPerGame}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
  },
  upperPart: {
    marginTop: 50,
  },
  backgroundPart: {
    backgroundColor: '#683e90',
    height: 140,
    width: '100%',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  rankText: {
    color: '#d9b664',
    fontSize: 30,
  },
  playerImgParrent: {
    width: 250,
    height: 200,
    top: -80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerImg: {
    width: '100%',
    height: '100%',
  },
  playerName: {
    textAlign: 'center',
    fontSize: 28,
    color: '#000',
    fontFamily: 'LexendDeca-SemiBold',
    fontWeight: '600',
    marginTop: 10,
  },
  teamPosition: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerPositionText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'LexendDeca-Regular',
    paddingHorizontal: 10,
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
  lowerPart: {
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
  },
  statsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  statsPart: {
    width: '100%',
    padding: 10,
  },
  statItem: {
    backgroundColor: '#683e90',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 20,
    borderRadius: 20,
  },
  statItemText: {
    color: '#fff',
    fontSize: 16,
  },
  statItemHead: {
    color: '#d9b664',
    fontSize: 30,
    fontFamily: 'LexendDeca-Bold',
    fontWeight: 'bold',
  },
});

export default PlayerCardScreen;
