import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image } from 'react-native';

import F1 from './screens/F1';
import F2 from './screens/F2';
import F3 from './screens/F3';
import F4 from './screens/F4';
import F1_1_1 from './screens/F1_1_1'
import F1_1_2 from './screens/F1_1_2'
import F1_2_1 from './screens/F1_2_1'
import F1_2_2 from './screens/F1_2_2'
import F1_3_1 from './screens/F1_3_1'
import F1_3_2 from './screens/F1_3_2'
import F4_1 from './screens/F4_1'

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      //initialRouteName='營養分析'
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      tabBarOptions={{
        showLabel: false, //Tab.Screen name不秀出來
        style: {
          position: 'absolute',
          bottom: -15, //下面框框離下面多遠
          left: 0, //下面離左邊多遠
          right: 0, //下面離右邊多遠
          height: 130, //下面框框高度
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 10,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 20,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="今日食譜"
        component={F1}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./assets/今日食譜.jpg')}
              resizeMode="contain"
              style={styles.small}
            />
          ),
        }}
      />
      <Tab.Screen
        name="水果放大鏡"
        component={F2}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.tabView}>
              <Image
                source={require('./assets/水果放大鏡.jpg')}
                resizeMode="contain"
                style={styles.small}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="營養分析"
        component={F3}
        options={{
          tabBarIcon: ({ focused: boolean, color: string }) => (
            <View style={styles.tabView}>
              <Image
                source={require('./assets/營養分析.jpg')}
                resizeMode="contain"
                style={styles.small}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="水果資料庫"
        component={F4}
        options={{
          tabBarIcon: ({ focused: boolean, color: string }) => (
            <View style={styles.tabView}>
              <Image
                source={require('./assets/水果資料庫.jpg')}
                resizeMode="contain"
                style={styles.small}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};



const Stake = createStackNavigator();
const StakeNavigator = () => {
  return (
    <Stake.Navigator>
      <Stake.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      <Stake.Screen name="確定食譜1" component={F1_1_1} options={{ title:'確定食譜' }}/>
      <Stake.Screen name="確定食譜2" component={F1_2_1} options={{ title:'確定食譜' }}/>
      <Stake.Screen name="確定食譜3" component={F1_3_1} options={{ title:'確定食譜' }}/>
      <Stake.Screen name="食譜步驟1" component={F1_1_2} options={{ title:'食譜步驟' }}/>
      <Stake.Screen name="食譜步驟2" component={F1_2_2} options={{ title:'食譜步驟' }}/>
      <Stake.Screen name="食譜步驟3" component={F1_3_2} options={{ title:'食譜步驟' }}/>
      <Stake.Screen name="水果分析" component={F4_1} />
    </Stake.Navigator>
  );
};


const App = () => {
  const DeepLinking = {
    prefixes: ['https://www.kuo.com', "kuo://app"],
    config: {
      screens: {
        F1: { path: 'F1' }
      }

    }
  }

  return (
    <NavigationContainer linking={DeepLinking}>
      <StakeNavigator>
        <Tabs />
      </StakeNavigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
  },
  small: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  big: {
    width: 90,
    height: 90,
  },
});