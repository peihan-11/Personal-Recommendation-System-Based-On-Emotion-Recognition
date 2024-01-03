import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const F1 = ({navigation, props}) => {
  const [count, setCount] = useState(1);
  const [number, setNumber] = useState(1);

  const changeFruitMenu = e => {
    setCount(e);
  };

  const fruitM = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const fruitA = () => {
    if (number < 3) {
      setNumber(number + 1);
    }
  };

  const fruitTitle = () => {
    if (count === 1) {
      //props.setCount(1)
      return (
        <View>
          <View style={styles.context}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.contextword}>西瓜</Text>
              <TouchableOpacity onPress={() => fruitM()}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 10,
                    marginLeft: 10,
                  }}
                  source={require('./assets/arrowleft.png')}
                />
              </TouchableOpacity>
              <Text style={styles.contextword}>{number}</Text>
              <TouchableOpacity onPress={() => fruitA()}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    margin: 10,
                    marginLeft: 15,
                    marginRight: 5,
                  }}
                  source={require('./assets/arrowright.png')}
                />
              </TouchableOpacity>
              <Text style={{fontSize: 25}}>份</Text>
            </View>
          </View>
          <View style={styles.context}>
            <Text style={styles.contextword}>1. 牛奶240毫升</Text>
          </View>
          <View style={styles.context}/>
          <View style={styles.context}/>
          <View style={styles.context}/>
        </View >
      );
    } else if (count === 2) {
      return (
        <View>
          <View style={styles.context}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.contextword}>蘋果</Text>
              <TouchableOpacity onPress={() => fruitM()}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 10,
                    marginLeft: 10,
                  }}
                  source={require('./assets/arrowleft.png')}
                />
              </TouchableOpacity>
              <Text style={styles.contextword}>{number}</Text>
              <TouchableOpacity onPress={() => fruitA()}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    margin: 10,
                    marginLeft: 15,
                    marginRight: 5,
                  }}
                  source={require('./assets/arrowright.png')}
                />
              </TouchableOpacity>
              <Text style={{fontSize: 25}}>份</Text>
            </View>
          </View>
          <View style={styles.context}>
            <Text style={styles.contextword}>1. 紅茶包</Text>
            <Text style={styles.contextword}>2. 紅糖少許（也可以不準備）</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.context}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.contextword}>香蕉</Text>
              <TouchableOpacity onPress={() => fruitM()}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 10,
                    marginLeft: 10,
                  }}
                  source={require('./assets/arrowleft.png')}
                />
              </TouchableOpacity>
              <Text style={styles.contextword}>{number}</Text>
              <TouchableOpacity onPress={() => fruitA()}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    margin: 10,
                    marginLeft: 15,
                    marginRight: 5,
                  }}
                  source={require('./assets/arrowright.png')}
                />
              </TouchableOpacity>
              <Text style={{fontSize: 25}}>份</Text>
            </View>
          </View>
          <View style={styles.context}>
            <Text style={styles.contextword}>1. 鮮奶300毫升</Text>
            <Text style={styles.contextword}>2. 水200毫升</Text>
          </View>
        </View>
      );
    }
  };

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
          今日食譜
        </Text>
      </View>
      <View style={{backgroundColor: '#ffffff'}}>{F1P1()}</View>
      <ScrollView>
        <View>{F1P2({navigation})}</View>
      </ScrollView>
    </SafeAreaView>
  );

  function F1P1() {
    return (
      <ScrollView horizontal={true}>
        <TouchableOpacity
          style={styles.food1}
          onPress={() => {
            changeFruitMenu(1);
          }}>
          <Image
            style={styles.foodpic}
            source={require('./assets/Watermelon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.food2}
          onPress={() => {
            changeFruitMenu(2);
          }}>
          <Image
            style={styles.foodpicapple}
            source={require('./assets/Apple.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.food1}
          onPress={() => {
            changeFruitMenu(3);
          }}>
          <Image
            style={styles.foodpic}
            source={require('./assets/Banana.png')}
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }

  function F1P2({navigation, props}) {
    return (
      <ScrollView>
        <View style={{backgroundColor: '#ffffff'}}>
          <View style={styles.pre}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text
                style={{
                  fontSize: 35,
                  fontWeight: '100',
                  marginTop: 10,
                  marginLeft: 20,
                  color: '#8b4513',
                }}>
                準備食材
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate('確定食譜'+count);
                }}>
                <Text style={styles.buttonText}>GO</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.line}></View>
            <View>{fruitTitle()}</View>
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default F1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  food1: {
    width: 230,
    height: 250,
    margin: 15,
    marginRight: 10,
    backgroundColor: '#66cdaa',
    borderRadius: 15,
  },
  food2: {
    width: 230,
    height: 250,
    margin: 15,
    marginRight: 10,
    backgroundColor: '#f4a460',
    borderRadius: 15,
  },
  foodpic: {
    width: 170,
    height: 160,
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 40,
  },
  foodpicapple:{
    width: 140,
    height: 160,
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 40,
  },
  pre: {
    backgroundColor: '#ffe4b5',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 15,
    marginBottom: 50,
  },
  button: {
    marginTop: 10,
    marginLeft: 80,
    marginRight: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#8b4513',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  context: {
    marginLeft: 15,
    marginRight: 15,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 9,
  },
  contextword: {
    fontSize: 25,
    marginLeft: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '100',
  },
  line: {
    backgroundColor: '#8b4513',
    height: 2,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 2,
    color: '#8b4513',
  },
});
