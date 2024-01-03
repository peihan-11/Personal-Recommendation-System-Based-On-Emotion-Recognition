import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const F1_2_1 = ({navigation}) => {
  const [database] = useState(1);
  const [errorM, setErrorM] = useState(true || errorM);
  const recipeSteps = () => {
    if ((database === 1) && (errorM===true)) {
      navigation.navigate('食譜步驟2');
    } 
    else if((database === 0) && (errorM===false)){
      navigation.navigate('水果放大鏡')
    }
    else{
      return (
        setErrorM(false)
        );
    }
  };
  const Message = () => {
    if (errorM) {
      return (
        <View>
          <Image
            style={{
              height: 230,
              width: 350,
            }}
            source={require('./assets/準備食材.jpg')}
          />
        </View>
      );
    } else {
      return (
        <View>
          <Text>目前水果不夠哦~請去水果放大鏡拍攝水果!</Text>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.box}>
      <View style={styles.back}>
        <View style={styles.container}>
          <Text style={styles.text}>是否開始製作</Text>
          <View>{Message()}</View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
              marginBottom: 10,
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Tabs');
              }}>
              <Text style={styles.buttonText}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                recipeSteps();
              }}>
              <Text style={styles.buttonText}>確定</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default F1_2_1;

const styles = StyleSheet.create({
  back: {
    padding: 5,
    backgroundColor: '#000000',
    borderRadius: 30,
    margin: 5,
  },
  box: {
    marginTop: 100,
    marginBottom: 120,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#F6F6E9',
    borderRadius: 30,
    height: 400,
  },
  title: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 5,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#193C76',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 30,
  },
});