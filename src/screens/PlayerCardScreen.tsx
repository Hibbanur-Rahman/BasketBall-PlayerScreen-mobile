import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import playerImg1 from '../assets/images/Luka-Doncic.png';
import profileImg from '../assets/images/profile-img.png'
const PlayerCardScreen = () => {

  return (
    <View style={[styles.container, {padding:30}]}>
      <View
        style={{
          height: 100,
          width: 100,
          borderRadius: 50,
          borderWidth: 1,
          overflow: 'hidden',
        }}>
        <Image
          source={profileImg}
          style={{height: 100, width: 100, borderRadius: 50}}
        />
      </View>
      <View style={styles.playerInfoContainer}>
        <Text style={[styles.headText, {marginTop:20,textAlign:'center'}]}>Luka Doncic | #77</Text>
        <View style={{display:'flex',width:'100%',flexDirection:'row',marginTop:20}}>
            <View style={{borderRightWidth:1,borderRightColor:'black',paddingEnd:30}}>
                    <Text style={[styles.playerInfoText,{marginTop:0}]}>Team :</Text>
                    <Text style={[styles.playerInfoText]}>Position :</Text>
                    <Text style={[styles.playerInfoText]}>Age :</Text>
                    <Text style={[styles.playerInfoText]}>Country :</Text>
                    <Text style={[styles.playerInfoText]}>Height :</Text>

            </View>
            <View style={[{paddingStart:20}]}>
                <Text style={[styles.playerInfoText,{marginTop:0}]}>Dallas Mavericks</Text>
                <Text style={[styles.playerInfoText]}>Forward-Guard</Text>
                <Text style={[styles.playerInfoText]}>25 years [February 28, 1999]</Text>
                <Text style={[styles.playerInfoText]}>Slovenia</Text>
                <Text style={[styles.playerInfoText]}>2.01 m/6 ft 7 in</Text>
            </View>
        </View>
      </View>
      <View style={{width:'100%'}}>
        <Text style={[styles.headText, {marginTop:20,textAlign:'left',width:'100%'}]}>Statistics:</Text>
        <View style={{display:'flex',flexDirection:'row',width:'100%'}}>
            <View style={[styles.statsItems,{}]}>
                <View style={[styles.circle,{}]}>
                    <Text style={[styles.circleText,{}]}>33.9</Text>
                </View>
                <Text style={styles.statsText}>PPG</Text>
            </View>
            <View style={[styles.statsItems,{}]}>
                <View style={[styles.circle,{}]}>
                    <Text style={[styles.circleText,{}]}>9.2</Text>
                </View>
                <Text style={styles.statsText}>RPG</Text>
            </View>
            <View style={[styles.statsItems,{}]}>
                <View style={[styles.circle,{}]}>
                    <Text style={[styles.circleText,{}]}>9.8</Text>
                </View>
                <Text style={styles.statsText}>APG</Text>
            </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headText: {
    color: '#000',
    fontFamily: 'LexendDeca-SemiBold',
    fontSize:24,
    fontWeight:600,
  },
  playerInfoText:{
    color:'#000',
    fontSize:17,
    marginTop:15
  },
  playerInfoContainer: {
    paddingBottom:40,
    borderBottomWidth:1,
    borderBottomColor:'#000',
    width:'100%',
  },
  statsItems:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    margin:20
  },
  statsText:{
    color:'#000',
    fontFamily: 'LexendDeca-SemiBold',
    fontSize:15,
    marginTop:10
  },
  circle:{
    width:60,
    height:60,
    borderRadius:30,
    borderWidth:2,
    borderColor:'#000',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  circleText:{
    color:'#000',
    fontSize:20,
    fontFamily:'LexendDeca-Regular'
  }
});

export default PlayerCardScreen;
