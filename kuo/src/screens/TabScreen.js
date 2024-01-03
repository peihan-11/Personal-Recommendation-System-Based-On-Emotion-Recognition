import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image} from 'react-native';

import F1 from './F1';
import F2 from './F2';
import F3 from './F3';
import F4 from './F4';
//import back from './back';

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
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/今日食譜.jpg')}
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
          tabBarIcon: ({focused, color}) => (
            <View style={styles.tabView}>
              <Image
                source={require('../assets/水果放大鏡.jpg')}
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
          tabBarIcon: ({focused: boolean, color: string}) => (
            <View style={styles.tabView}>
              <Image
                source={require('../assets/營養分析.jpg')}
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
          tabBarIcon: ({focused: boolean, color: string}) => (
            <View style={styles.tabView}>
              <Image
                source={require('../assets/水果資料庫.jpg')}
                resizeMode="contain"
                style={styles.small}
              />
              {/*<Text style={styles.tabText}>水果資料庫</Text>*/}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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
    borderRadius:5,
  },
  big: {
    width: 90,
    height: 90,
  },
});

export default Tabs;
