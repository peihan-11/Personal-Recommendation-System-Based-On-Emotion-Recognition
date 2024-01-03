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

const F1_3_2 = ({navigation}) => {
  const [page, setPage] = useState(page || 1);

  const rButton = () => {
    if (page === 1) {
      return (
        <View style={{flexDirection: 'row'}}>
          <View style={{width: 160}}></View>
          <TouchableOpacity
            onPress={() => {
              setPage(page + 1);
            }}>
            <Image
              style={{
                height: 40,
                width: 40,
              }}
              source={require('./assets/Farrowright.png')}
            />
          </TouchableOpacity>
        </View>
      );
    } else if (page > 2) {
      return (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setPage(page - 1);
            }}>
            <Image
              style={{
                height: 40,
                width: 40,
              }}
              source={require('./assets/Farrowleft.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('營養分析');
            }}>
            <Text style={styles.buttonText}>完成</Text>
          </TouchableOpacity>
          <View style={{width: 50}}></View>
        </View>
      );
    } else {
      return (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setPage(page - 1);
            }}>
            <Image
              style={{
                height: 40,
                width: 40,
              }}
              source={require('./assets/Farrowleft.png')}
            />
          </TouchableOpacity>
          <View style={{width: 120}}></View>
          <TouchableOpacity
            onPress={() => {
              setPage(page + 1);
            }}>
            <Image
              style={{
                height: 40,
                width: 40,
              }}
              source={require('./assets/Farrowright.png')}
            />
          </TouchableOpacity>
        </View>
      );
    }
  };

  const fruitPic = () => {
    if (page === 1) {
      return (
        <View>
          <Image
            style={{
              height: 230,
              width: 350,
            }}
            source={require('./assets/3_2_1.jpg')}
          />
          <Text style={styles.recipeWord}>將香蕉去皮切小塊</Text>
        </View>
      );
    } else if (page === 2) {
      return (
        <View>
          <Image
            style={{
              height: 230,
              width: 350,
            }}
            source={require('./assets/3_2_2.jpg')}
          />
          <Text style={styles.recipeWord}>
          放入果汁機中，並加入牛奶，建議1檔位30秒
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <Image
            style={{
              height: 230,
              width: 350,
            }}
            source={require('./assets/3_2_3.jpg')}
          />
          <Text style={styles.recipeWord}>可以加入些許冰塊，即可享用健康營養的香蕉牛奶</Text>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.box}>
      <View style={styles.back}>
        <View style={styles.container}>
          <Text style={styles.text}>食譜步驟</Text>
          {fruitPic()}
        </View>
      </View>
      <View style={styles.recipebox}>
        <Text style={{fontSize: 20}}>{page}</Text>
      </View>
      <View style={{alignItems: 'center'}}>{rButton()}</View>
    </SafeAreaView>
  );
};

export default F1_3_2;

const styles = StyleSheet.create({
  back: {
    padding: 5,
    backgroundColor: '#000000',
    borderRadius: 30,
    margin: 5,
  },
  box: {
    marginTop: 60,
    marginBottom: 120,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#F2E3CB',
    borderRadius: 30,
    height: 450,
  },
  containerB: {
    alignItems: 'center',
    backgroundColor: '#F2E3CB',
    borderRadius: 30,
    height: 80,
  },
  recipebox: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  title: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 5,
    marginBottom:20
  },
  button: {
    margin: 10,
    marginTop: 0,
    marginLeft: 20,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#193C76',
    borderRadius: 16,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 30,
  },
  recipeWord: {
    fontSize: 25,
    marginBottom: 10,
    justifyContent: 'center',
    marginTop:15
  },
});