import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  processColor,
  ScrollView,
  Image,
} from 'react-native';

import {PieChart} from 'react-native-charts-wrapper';

class F4_1 extends React.Component {
  constructor() {
    super();

    this.state = {
      legend: {
        enabled: true,
        textSize: 15,
        form: 'CIRCLE',

        horizontalAlignment: 'RIGHT',
        verticalAlignment: 'CENTER',
        orientation: 'VERTICAL',
        wordWrapEnabled: true,
      },
      pieData: {
        dataSets: [
          {
            values: [
              {value: 0.005, label: '鈣'},
              {value: 0.009, label: '磷'},
              {value: 0.015, label: '鎂'},
              {value: 0.009, label: '鐵'},
              {value: 0.039, label: '鋅'},
              {value: 0.082, label: '鉀'},
            ],
            label: '',
            config: {
              colors: [
                processColor('#A4E666'),
                processColor('#c1e0da'),
                processColor('#FFF056'),
                processColor('#C3C3E5'),
                processColor('#ffb47b'),
                processColor('#D7C8B6'),
              ],
              valueTextSize: 20,
              valueTextColor: processColor('#20366b'),
              sliceSpace: 5,
              selectionShift: 13,

              valueFormatter: "#.#'%'",
              valueLineColor: processColor('#20366b'),
              valueLinePart1Length: 0.5,
            },
          },
        ],
      },
      data: {
        dataSets: [
          {
            values: [
              {value: 0.009, label: 'A'},
              {value: 0.136, label: 'B1'},
              {value: 0.038, label: 'B2'},
              {value: 0.015, label: 'B3'},
              {value: 0.091, label: 'B6'},
              {value: 0.005, label: 'C'},
            ],
            label: '',
            config: {
              colors: [
                processColor('#A4E666'),
                processColor('#c1e0da'),
                processColor('#FFF056'),
                processColor('#C3C3E5'),
                processColor('#ffb47b'),
                processColor('#D7C8B6'),
                processColor('#72B095'),
                processColor('#94DAF0'),
              ],
              valueTextSize: 20,
              valueTextColor: processColor(' #20366b'),
              sliceSpace: 5,
              selectionShift: 13,

              valueFormatter: "#.#'%'",
              valueLineColor: processColor(' #20366b'),
              valueLinePart1Length: 0.5,
            },
          },
        ],
      },
      highlights: [{x: 2}],
      description: {
        //text: 'This is Pie chart description',
        textSize: 0,
        textColor: processColor('#F2E3CB'),
      },
    };
  }

  handleSelect(event) {
    const entry = event.nativeEvent;
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null});
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)});
    }

    console.log(event.nativeEvent);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.back}>
            <Image style={styles.pic} source={require('./assets/Apple.png')} />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.text}>蘋果</Text>
            <Text style={styles.text}>存入日：10/17</Text>
            <Text style={styles.text}>保存期限：10/24</Text>
            <Text style={styles.text}>約1份水果</Text>
          </View>
        </View>
        <ScrollView horizontal={true} style={styles.box}>
          <View style={styles.tablet}>
            <View style={styles.container}>
              <PieChart
                style={styles.chart}
                logEnabled
                chartBackgroundColor={processColor('#f0e68c')}
                chartDescription={this.state.description}
                data={this.state.data}
                legend={this.state.legend}
                highlights={this.state.highlights}
                entryLabelColor={processColor('#20366b')}
                entryLabelTextSize={20}
                drawEntryLabels
                rotationEnabled
                rotationAngle={45}
                usePercentValues
                styledCenterText={{
                  text: '維生素',
                  color: processColor('black'),
                  size: 38,
                }}
                centerTextRadiusPercent={100}
                holeRadius={40}
                holeColor={processColor('#f0f0f0')}
                transparentCircleRadius={45}
                transparentCircleColor={processColor('#f0f0f088')}
                maxAngle={350}
                onSelect={this.handleSelect.bind(this)}
                onChange={event => console.log(event.nativeEvent)}
              />
            </View>
          </View>
          <View style={styles.tablet}>
            <View style={styles.container}>
              <PieChart
                style={styles.chart}
                logEnabled
                chartBackgroundColor={processColor('#f0e68c')}
                chartDescription={this.state.description}
                data={this.state.pieData}
                legend={this.state.legend}
                highlights={this.state.highlights}
                entryLabelColor={processColor(' #20366b')}
                entryLabelTextSize={20}
                drawEntryLabels
                rotationEnabled
                rotationAngle={45}
                usePercentValues
                styledCenterText={{
                  text: '礦物質',
                  color: processColor('black'),
                  size: 40,
                }}
                centerTextRadiusPercent={100}
                holeRadius={40}
                holeColor={processColor('#f0f0f0')}
                transparentCircleRadius={45}
                transparentCircleColor={processColor('#f0f0f088')}
                maxAngle={350}
                onSelect={this.handleSelect.bind(this)}
                onChange={event => console.log(event.nativeEvent)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default F4_1;

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
  },
  chart: {
    flex: 0.9,
  },
  tablet: {
    height: 380,
    width: 380,
  },
  title: {
    alignContent: 'flex-start',
  },
  end: {
    alignContent: 'flex-end',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
  box: {
    backgroundColor: '#f0e68c',
    paddingTop: 10,
    borderRadius: 20,
    marginBottom: 120,
  },
  back: {
    height: 200,
    width: 150,
    margin: 20,
    paddingTop: 20,
    backgroundColor: '#f4a460',
    borderRadius: 15,
  },
  pic: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 120,
    width: 110,
  },
  text: {
    fontSize: 20,
    fontWeight: '100',
    color: '#8b4513',
  },
});
