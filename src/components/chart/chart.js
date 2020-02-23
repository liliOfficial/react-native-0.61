import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import React from 'react';
import { SafeAreaView, Text, Dimensions, StyleSheet } from 'react-native';

export default function Chart(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Interesting Statistic</Text>
            <LineChart
                data={{
                    labels: ["2015","2016", "2017", "2018", "2019", "2020"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width - 20} // from react-native
                height={250}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#fff",
                    backgroundGradientFrom: "#e62429",
                    backgroundGradientTo: "#e62429",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#e62429"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    marginHorizontal: 10,
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        paddingVertical: 30
    },
    title: {
        paddingHorizontal: 10,
        paddingVertical:5,
        fontWeight: '600',
        color: '#fff',
        fontSize: 20
    }
})

