import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
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
    <View style={[styles.container, {overflow:'hidden'}]}>
      <ImageBackground
        source={require('../assets/images/backgound-img.png')}
        style={styles.backgroundImg}
        resizeMode="cover">
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            borderWidth: 1,
            overflow: 'hidden',
          }}>
          <Image
            source={image}
            style={{height: 100, width: 100, borderRadius: 50}}
          />
        </View>
        <View style={styles.playerInfoContainer}>
          <Text style={[styles.headText, {marginTop: 20, textAlign: 'center'}]}>
            {name} | <Text style={{color: '#d83947'}}>#77</Text>
          </Text>
          <View
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <View
              style={{
                borderRightWidth: 1,
                borderRightColor: '#f4cfd8',
                paddingEnd: 30,
              }}>
              <Text
                style={[
                  styles.playerInfoText,
                  {marginTop: 0, color: '#7c7373', fontWeight: 700},
                ]}>
                Team :
              </Text>
              <Text
                style={[
                  styles.playerInfoText,
                  {color: '#7c7373', fontWeight: 700},
                ]}>
                Position :
              </Text>
              <Text
                style={[
                  styles.playerInfoText,
                  {color: '#7c7373', fontWeight: 700},
                ]}>
                Age :
              </Text>
              <Text
                style={[
                  styles.playerInfoText,
                  {color: '#7c7373', fontWeight: 700},
                ]}>
                Country :
              </Text>
              <Text
                style={[
                  styles.playerInfoText,
                  {color: '#7c7373', fontWeight: 700},
                ]}>
                Height :
              </Text>
            </View>
            <View style={[{paddingStart: 20}]}>
              <Text style={[styles.playerInfoText, {marginTop: 0}]}>
                Dallas Mavericks
              </Text>
              <Text style={[styles.playerInfoText]}>{position}</Text>
              <Text style={[styles.playerInfoText]}>
                25 years [February 28, 1999]
              </Text>
              <Text style={[styles.playerInfoText]}>Slovenia</Text>
              <Text style={[styles.playerInfoText]}>2.01 m/6 ft 7 in</Text>
            </View>
          </View>
        </View>
        <View style={{width: '100%'}}>
          <Text
            style={[
              styles.headText,
              {marginTop: 20, textAlign: 'left', width: '100%'},
            ]}>
            Statistics:
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={[styles.statsItems, {}]}>
              <View style={[styles.circle, {}]}>
                <Text style={[styles.circleText, {}]}>{stats.pointsPerGame}</Text>
              </View>
              <Text style={styles.statsText}>Points Per Game</Text>
            </View>
            <View style={[styles.statsItems, {}]}>
              <View style={[styles.circle, {}]}>
                <Text style={[styles.circleText, {}]}>{stats.reboundsPerGame}</Text>
              </View>
              <Text style={styles.statsText}>Rebounds Per Game</Text>
            </View>
            <View style={[styles.statsItems, {}]}>
              <View style={[styles.circle, {}]}>
                <Text style={[styles.circleText, {}]}>{stats.assistsPerGame}</Text>
              </View>
              <Text style={styles.statsText}>Assists Per Game</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImg: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#d9d0d3',
    padding:20
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    borderColor: '#d9d0d3',
    width: '96%',
  },
  headText: {
    color: '#000',
    fontFamily: 'LexendDeca-SemiBold',
    fontSize: 24,
    fontWeight: 600,
  },
  playerInfoText: {
    color: '#252526',
    fontSize: 17,
    marginTop: 15,
  },
  playerInfoContainer: {
    paddingBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d0d3',
    width: '100%',
  },
  statsItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  },
  statsText: {
    color: '#000',
    fontFamily: 'LexendDeca-SemiBold',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
  circle: {
    width: 65,
    height: 65,
    borderRadius: 33,
    borderWidth: 2,
    borderColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'LexendDeca-Regular',
  },
});

export default PlayerCardScreen;
