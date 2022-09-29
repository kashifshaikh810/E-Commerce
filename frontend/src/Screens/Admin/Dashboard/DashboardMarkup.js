import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from './styles';
import Header from '../../../components/Layouts/Header/Header';
import DashboardTopBar from '../../../components/materials/DashboardTopBar/DashboardTopBar';
import {LineChart, PieChart} from 'react-native-chart-kit';

const DashboardMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} backRouteName="Home" />

      <DashboardTopBar {...props} />

      <ScrollView style={styles.scrollView}>
        <View style={styles.dashboardContent}>
          <View style={styles.dashboardHeadingContainer}>
            <Text style={styles.dashboardHeadingText}>Dashboard</Text>
          </View>

          <View style={styles.totalAmountContainer}>
            <Text style={styles.totalAmountText}>Total Amount</Text>
            <View style={styles.divider} />
            <Text style={styles.totalAmountText}>$40432</Text>
          </View>

          {props.circleData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.circleContainer,
                {backgroundColor: item.backgroundColor},
              ]}
              onPress={item.onPress}>
              <View style={styles.circleContent}>
                <Text style={[styles.circleTitle, {color: item.textColor}]}>
                  {item.title}
                </Text>
                <Text style={[styles.circleTitle, {color: item.textColor}]}>
                  {item.quantity}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          {props.chartConfigs.map(chartConfig => {
            const graphStyle = {
              marginVertical: 25,
              ...chartConfig.style,
            };
            const {width} = Dimensions.get('window');
            const height = 256;
            return (
              <View style={styles.chartsContainer}>
                <LineChart
                  data={{
                    labels: ['Initial Amount', 'Amount Earned'],
                    datasets: [
                      {
                        data: [0, 25000],
                      },
                    ],
                  }}
                  width={Dimensions.get('window').width * 1.6} // from react-native
                  height={400}
                  // withInnerLines={false}
                  withShadow={false}
                  withScrollableDot={true}
                  yAxisInterval={2} // optional, defaults to 1
                  chartConfig={{
                    backgroundGradientFrom: '#1F1F1F',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => '#FF5500',
                    labelColor: (opacity = 1) => '#A0A0A0',
                    linejoinType: 'round',

                    scrollableDotFill: '#fff',
                    scrollableDotRadius: 6,
                    scrollableDotStrokeColor: '#FF5500',
                    scrollableDotStrokeWidth: 3,

                    scrollableInfoViewStyle: {
                      justifyContent: 'center',
                      alignContent: 'center',
                      backgroundColor: '#121212',
                      borderRadius: 2,
                    },
                    scrollableInfoTextStyle: {
                      color: '#C4C4C4',
                      marginHorizontal: 4,
                      flex: 1,
                      textAlign: 'center',
                    },
                    scrollableInfoSize: {width: 65, height: 30},
                    scrollableInfoOffset: 15,
                  }}
                />
                <PieChart
                  data={props.pieChartData}
                  height={height}
                  width={width}
                  chartConfig={chartConfig}
                  accessor={'stock'}
                  style={graphStyle}
                  backgroundColor="transparent"
                  paddingLeft="5"
                  center={[5, -20]}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardMarkup;
