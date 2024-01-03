import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  processColor,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import {CombinedChart} from 'react-native-charts-wrapper';
//import update from 'immutability-helper'
//import Video from 'react-native-video';

export default class F3 extends React.Component {
  constructor() {
    super();
    this.state = {
      tabletName: 0,
      barcolor: true,
      yAxis: {
        right: {
          granularityEnabled: true,
          granularity: 10,
        },
        left: {
          granularityEnabled: true,
          granularity: 100,
        },
      },
      marker: {
        enabled: true,
        markerColor: processColor('#004d61'),
        textColor: processColor('fff'),
        markerFontSize: 30,
      },
      legend: {
        enabled: true,
        textSize: 30,
        form: 'SQUARE',
        formSize: 30,
        xEntrySpace: 10,
        yEntrySpace: 5,
        formToTextSpace: 5,
        wordWrapEnabled: true,
        maxSizePercent: 0.5,
      },

      data2: {
        barData: {
          dataSets: [
            {
              values: [38],
              label: '蜂蜜蘋果',
              config: {
                drawValues: false,
                colors: [processColor('red')],
              },
            },
            {
              values: [61.6],
              label: '珍珠奶茶',
              config: {
                drawValues: false,
                colors: [processColor('gray')],
              },
            },
            {
              values: [81.2],
              label: '四季春加珍波椰',
              config: {
                drawValues: false,
                colors: [processColor('gray')],
              },
            },
            {
              values: [71.4],
              label: '優多綠茶',
              config: {
                drawValues: false,
                colors: [processColor('gray')],
              },
            },
            {
              values: [43.8],
              label: '芋頭鮮奶',
              config: {
                drawValues: false,
                colors: [processColor('gray')],
              },
            },
            {
              values: [45],
              label: '春芽冷露',
              config: {
                drawValues: false,
                colors: [processColor('gray')],
              },
            },
          ],
          config: {
            barWidth: 1,
            group: {
              fromX: 0,
              groupSpace: 0.1,
              barSpace: 0.1,
            },
          },
        },
        lineData: {
          dataSets: [
            {
              values: [
                {y: 47, marker: '每日最高上限'},
                {y: 47, marker: '每日最高上限'},
                {y: 47, marker: '每日最高上限'},
                {y: 47, marker: '每日最高上限'},
                {y: 47, marker: '每日最高上限'},
                {y: 47, marker: '每日最高上限'},
                {y: 47, marker: '每日最高上限'},
                {y: 47, marker: '每日最高上限'},
                {y: 47, marker: '每日最高上限'},
                {y: 47, marker: '每日最高上限'},
                {y: 47, marker: '每日最高上限'},
              ],
              label: '每日食用份數',
              config: {
                drawValues: false,
                colors: [processColor('#e79686')],
                mode: 'CUBIC_BEZIER',
                drawCircles: false,
                lineWidth: 3,
                //axisDependency: 'RIGHT',
              },
            },
          ],
        },
      },
      data: {
        barData: {
          dataSets: [
            {
              values: [10.86, 21.72, 21.72, 32.58, 10.86, 21.86,10.86 ],
              label: '維生素C',
              config: {
                drawValues: false,
                colors: [processColor('#41b6e6')],
                fontWeight: 'bold',
              },
            },
            {
              values: [9.86, 19.72, 19.72, 29.58, 9.86, 9.86, 9.86],
              label: '維生素B群',
              config: {
                drawValues: false,
                colors: [processColor('#fbf579')],
                fontWeight: 'bold',
              },
            },
            {
              values: [1.36, 2.72, 2.72, 4.08, 1.36, 1.36,1.36 ],
              label: '鋅',
              config: {
                drawValues: false,
                colors: [processColor('#96ceb4')],
                fontWeight: 'bold',
              },
            },
          ],
          config: {
            barWidth: 0.2,
            group: {
              fromX: 0,
              groupSpace: 0.1,
              barSpace: 0.1,
            },
          },
        },
        
      },
      highlights: [{x: 3}, {x: 6}],
      xAxis: {
        valueFormatter: [
          'Mon.',
          'Tues.',
          'Wen.',
          'Thur.',
          'Fri.',
          'Sat.',
          'Sun.',
        ],
        granularityEnabled: true,
        granularity: 1,
        axisMaximum: 7,
        axisMinimum: 0,
        centerAxisLabels: true,
      },
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      highlights: [{x: 1, y: 150, dataIndex: 4}],
    });
  }

  static displayName = 'Combined';
  handleSelect(event) {
    const entry = event.nativeEvent;
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null});
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)});
    }

    console.log(event.nativeEvent);
  }

  tablet(e) {
    if (e === 0) {
      return (
        <View>
          <View style={{flexDirection: 'row', marginLeft: 25}}>
            <View style={styles.mcircle}>
              <Image
                style={styles.mpic}
                source={require('./assets/蜂蜜蘋果汁.jpg')}
              />
            </View>
            <View style={styles.mword}>
              <Text style={styles.mtext}>今日水果茶：紅糖蘋果茶</Text>
              <Text style={styles.mtext}>含糖量：38克</Text>
              <Text style={styles.mtext}>每日食用上限：47克</Text>
            </View>
          </View>
          <View style={styles.back}>
            <ScrollView horizontal={true}>
              <View style={styles.subbak}>
                <View style={styles.circle}>
                  <Image
                    style={styles.pic}
                    source={require('./assets/四季春.jpg')}
                  />
                </View>
                <View style={styles.word}>
                  <Text style={styles.text}>四季春加珍波椰</Text>
                  <Text style={styles.text}>含糖量：81.2克</Text>
                </View>
              </View>
              <View style={styles.subbak}>
                <View style={styles.circle}>
                  <Image
                    style={styles.pic}
                    source={require('./assets/優多綠茶.jpg')}
                  />
                </View>
                <View style={styles.word}>
                  <Text style={styles.text}>優多綠茶</Text>
                  <Text style={styles.text}>含糖量：71.4克</Text>
                </View>
              </View>
              <View style={styles.subbak}>
                <View style={styles.circle}>
                  <Image
                    style={styles.pic}
                    source={require('./assets/絕代雙Q.jpg')}
                  />
                </View>
                <View style={styles.word}>
                  <Text style={styles.text}>絕代雙Q奶茶</Text>
                  <Text style={styles.text}>含糖量：61.6克</Text>
                </View>
              </View>
              <View style={styles.subbak}>
                <View style={styles.circle}>
                  <Image
                    style={styles.pic}
                    source={require('./assets/春芽冷露.jpeg')}
                  />
                </View>
                <View style={styles.word}>
                  <Text style={styles.text}>春芽冷露</Text>
                  <Text style={styles.text}>含糖量：45克</Text>
                </View>
              </View>
              <View style={styles.subbak}>
                <View style={styles.circle}>
                  <Image
                    style={styles.pic}
                    source={require('./assets/芋頭鮮奶.jpg')}
                  />
                </View>
                <View style={styles.word}>
                  <Text style={styles.text}>芋頭鮮奶</Text>
                  <Text style={styles.text}>含糖量：43.8克</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <CombinedChart
            data={this.state.data}
            xAxis={this.state.xAxis}
            onSelect={this.handleSelect.bind(this)}
            onChange={event => console.log(event.nativeEvent)}
            marker={this.state.marker}
            highlights={this.state.highlights}
            highlightFullBarEnabled={false}
            style={styles.container}
          />
        </View>
      );
    }
  }

  A = () => {
    this.setState({tabletName: (this.state.tabletName = 0) ,barcolor: this.setState.barcolor=true});
  };
  B = () => {
    this.setState({tabletName: (this.state.tabletName = 1) ,barcolor: this.setState.barcolor=false});
  };

  render() {
    const {barcolor} = this.state

    return (
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
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
            營養分析
          </Text>
        </View>
        <View style={styles.container2}>
          <View style={styles.place}>
            <View style={styles.box}>
              <TouchableOpacity
                style={barcolor ===true ? styles.color2 :styles.color1}
                onPress={() => {
                  this.A();
                }}>
                <Text style={styles.word}>天</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxl}>
              <TouchableOpacity
                style={barcolor ===true ? styles.color1 :styles.color2}
                onPress={() => {
                  this.B();
                }}>
                <Text style={styles.word}>週</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          {this.tablet(this.state.tabletName)}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },
  chart: {
    flex: 1,
  },
  container2: {
    marginTop: 5,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  place: {
    marginTop: 10,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  color1: {
    padding: 30,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#ffffff',
  },
  color2: {
    padding: 30,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#f4a460',
  },
  box: {
    backgroundColor: '#f4a460',
    padding: 5,
  },
  boxl: {
    backgroundColor: '#f4a460',
    padding: 5,
    paddingLeft: 0,
  },
  word: {
    fontSize: 30,
    fontWeight: '100',
    color: '#8b4513',
  },
  mcircle: {
    height: 120,
    width: 120,
    borderRadius: 100,
    backgroundColor: '#8b4513',
    marginRight: 10,
  },
  mword: {
    justifyContent: 'center',
  },
  mtext: {
    fontSize: 18,
    margin:2,
  },
  back: {
    backgroundColor: '#ffe4b5',
    borderRadius: 15,
    height: 240,
    marginTop: 20,
    paddingTop: 20,
  },
  subbak: {
    margin: 10,
    alignItems: 'center',
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: '#8b4513',
  },
  word: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  mpic: {
    height: 110,
    width: 110,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 5,
  },
  pic: {
    height: 90,
    width: 90,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 5,
  },
});
