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

const F1_2_2 = ({navigation}) => {
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
    } else if (page > 4) {
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
            source={require('./assets/步驟一.jpg')}
          />
          <Text style={styles.recipeWord}>蘋果洗淨去核切小塊</Text>
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
            source={require('./assets/步驟二.jpg')}
          />
          <Text style={styles.recipeWord}>
            將檸檬片、蘋果塊放入壺中，加入水
          </Text>
        </View>
      );
    } else if (page === 3) {
      return (
        <View>
          <Image
            style={{
              height: 230,
              width: 350,
            }}
            source={require('./assets/步驟三.jpg')}
          />
          <Text style={styles.recipeWord}>
            將茶包放入容器內，倒入煮好的蘋果水，燜五分鐘
          </Text>
        </View>
      );
    } else if (page === 4) {
      return (
        <View>
          <Image
            style={{
              height: 230,
              width: 350,
            }}
            source={require('./assets/步驟四.jpg')}
          />
          <Text style={styles.recipeWord}>加入紅糖，攪拌均勻</Text>
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
            source={require('./assets/步驟五(結束).jpg')}
          />
          <Text style={styles.recipeWord}>倒入杯中，蘋果也可以直接食用</Text>
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

export default F1_2_2;

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