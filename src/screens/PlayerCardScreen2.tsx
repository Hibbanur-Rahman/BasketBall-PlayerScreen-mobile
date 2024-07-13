import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

const PlayerCardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperPart}>
        <View style={styles.backgroundPart}>
          <Text style={[styles.rankText, {}]}>#77</Text>
          <View style={styles.playerImgParrent}>
            <Image
              style={styles.playerImg}
              source={require('../assets/images/player-img.png')}
            />
          </View>
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 28,
            color: '#000',
            fontFamily: 'LexendDeca-SemiBold',
            fontWeight: 600,
            marginTop: 10,
          }}>
          Luka Doncic
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              styles.playerPositionText,
              {borderRightWidth: 1, borderRightColor: '#000'},
            ]}>
            Dallas Mavericks
          </Text>
          <Text style={[styles.playerPositionText, {}]}>Forward-Guard</Text>
        </View>
      </View>
      <View style={styles.lowerPart}>
        <View>
          <Text
            style={{fontSize: 24, fontWeight: 'condensedBold', color: '#000'}}>
            Stats
          </Text>
        </View>
        <View style={styles.statsPart}>
          <View style={styles.statItem}>
            <Text style={styles.statItemText}>Point Per Game</Text>
            <Text style={styles.statItemHead}>22.0</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statItemText}>Rebound Per Game</Text>
            <Text style={styles.statItemHead}>22.0</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statItemText}>Assist Per Game</Text>
            <Text style={styles.statItemHead}>22.0</Text>
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
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor:'#fff'
  },
  backgroundImg: {
    padding: 20,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperPart: {
    position: 'relative',
    marginTop: 70,
  },
  backgroundPart: {
    backgroundColor: '#683e90',
    height: 140,
    width: '100%',
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    position: 'relative',
  },
  rankText: {
    color: '#d9b664',
    fontSize: 30,
  },
  playerImgParrent: {
    width: 200,
    height: 200,
    top: -80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerImg: {
    width: '100%',
    height: '100%',
  },
  playerPositionText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'LexendDeca-Regular',
    paddingStart: 10,
    paddingEnd: 10,
  },
  lowerPart: {
    marginTop: 20,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
  },
  statsPart: {
    width: '100%',
    padding: 10,
  },
  statItem: {
    backgroundColor: '#683e90',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
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
