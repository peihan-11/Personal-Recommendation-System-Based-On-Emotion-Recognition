import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  processColor,
} from 'react-native'
import update from 'immutability-helper'

import { LineChart } from 'react-native-charts-wrapper'

class LineChartScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},

      marker: {
        enabled: true,
        digits: 2,
        backgroundTint: processColor('teal'),
        markerColor: processColor('#F0C0FF8C'),
        textColor: processColor('white'),
      },
      xAxis: {
        granularityEnabled: true,
        granularity: 1,
      },
    }
  }

  componentDidMount() {
    this.setState(
      update(this.state, {
        data: {
          $set: {
            dataSets: [
              {
                values: [
                  { x: 1, y: 0.88 },
                  { x: 2, y: 0.77 },
                  { x: 3, y: 105 },
                  { x: 4, y: 135 },
                  { x: 5, y: 0.88 },
                  { x: 6, y: 0.77 },
                  { x: 7, y: 105 },
                  { x: 8, y: 135 },
                ],
                label: 'A',
              },

            ],
          },
        },
      }),
    )
  }

  // onPressLearnMore() {
  //   this.refs.chart.setDataAndLockIndex({
  //     dataSets: [
  //       {
  //         values: [
  //           { x: 1, y: 0.88 },
  //           { x: 2, y: 0.77 },
  //           { x: 3, y: 105 },
  //           { x: 4, y: 135 },
  //           { x: 5, y: 0.88 },
  //           { x: 6, y: 0.77 },
  //           { x: 7, y: 105 },
  //           { x: 8, y: 135 },
  //         ],
  //         label: 'A',
  //       },

  //     ],
  //   })
  // }

  handleSelect(event) {
    const entry = event.nativeEvent
    if (entry == null) {
      this.setState({ ...this.state, selectedEntry: null })
    } else {
      this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) })
    }

    console.log(event.nativeEvent)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>


        <View style={{ height: 80 }}>
          <Text> selected entry</Text>
          <Text> {this.state.selectedEntry}</Text>
        </View>

        <View style={styles.container}>
          <LineChart
            style={styles.chart}
            data={this.state.data}
            chartDescription={{ text: '' }}
            legend={this.state.legend}
            marker={this.state.marker}
            xAxis={this.state.xAxis}
            yAxis={this.state.yAxis}
            drawGridBackground={false}
            borderColor={processColor('teal')}
            borderWidth={1}
            drawBorders
            autoScaleMinMaxEnabled={false}
            touchEnabled
            dragEnabled
            scaleEnabled
            scaleXEnabled
            scaleYEnabled
            pinchZoom
            doubleTapToZoomEnabled
            highlightPerTapEnabled
            highlightPerDragEnabled={false}
            dragDecelerationEnabled
            dragDecelerationFrictionCoef={0.99}
            ref="chart"
            keepPositionOnRotation={false}
            onSelect={this.handleSelect.bind(this)}
            onChange={event => console.log(event.nativeEvent)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  chart: {
    flex: 1,
  },
})

export default LineChartScreen