import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  Linking,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const F4 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 0.9}}>
      <View style={{backgroundColor: '#ffffff'}}>
        <Text
          style={{
            alignSelf: 'flex-start',
            marginTop: 15,
            marginBottom: 0,
            marginLeft: 20,
            fontSize: 40,
            fontWeight: '100',
          }}>
          水果資料庫
        </Text>
      </View>
      <ScrollView style={styles.back}>
        <View style={styles.view}>
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.data}
            onPress={() => {
              navigation.navigate('水果分析');
            }}>
            <View style={{flexDirection: 'row',margin:10}}>
              <Image
                style={styles.icon}
                source={require('./assets/Apple.png')}
              />
              <View style={{justifyContent: 'center',marginLeft:10}}>
                <Text style={styles.text}>品項：蘋果</Text>
                <Text style={styles.text}>存入日：10/17</Text>
              </View>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default F4;
const styles = StyleSheet.create({
  back: {
    backgroundColor: '#f0e68c',
    borderRadius:20,
  },
  view: {
    marginTop: 30,
    padding: 25,
    flex: 1,
  },
  box:{
    backgroundColor:'#8b4513',
    borderRadius:15,
    padding:0.01,
  },
  data: {
    margin: 5,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  icon: {
    paddingLeft:20,
  },
  text: {
    fontSize: 20,
    fontWeight:'100',
    color: '#8b4513',
  },
});
