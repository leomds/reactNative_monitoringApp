import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView
  
} from "react-native";


import {
 LineChart,
} from "react-native-chart-kit";

const screenWidth = Dimensions.get('screen').width;

const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#18477B",
    backgroundGradientTo: "#01050F",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "white"
    }
  }

export default class Linedchart extends Component {
    constructor(props){
        super(props);
        this.state={
            datasource: []
        }
    }

  get_chart=()=>{

    fetch("https://api.thingspeak.com/channels/1646651/feeds.json?results=6", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      
    })
      .then(response => response.json())

      .then(response => {
       this.setState({
           datasource:response.feeds
        })
   
      })
      .catch(error => {
          console.error(error);
      });
}

LineChart_Dynamic=()=>{

if (this.state.datasource){
if(this.state.datasource.length){

return(
<SafeAreaView>
<ScrollView>
  <LineChart
    onDataPointClick={({value}) => {
        Alert.alert('' + value + ' NTU');
        //Alert.alert('' + labels[index]);
      }}
    data={{
      legend:["NTU"],  
      labels: this.state.datasource.map(item=>{
        return(
          item.created_at 
        )
      }),
      datasets: [
        {
          data:  this.state.datasource.map(item=>{
            return(
              item.field2 
            )
          })
          
        }
      ]
    }}
    width={screenWidth} // from react-native
    height={350}
    yAxisLabel=""
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={chartConfig}
    style={{
      marginVertical: 8,
      borderRadius: 10
    }}
  />

</ScrollView>
</SafeAreaView>
)
} else {
return(

<View style={{justifyContent:"center",alignItems:'center',flex:1}}>

<ActivityIndicator size="large"/>

</View>

)
  }

}else {

  return(
  
  <View style={{justifyContent:"center",alignItems:'center',flex:1}}>
  
 <Text>no data found</Text>
  
  </View>
  )}

  }

//***************************************************************
//fetch your own data from here

/*componentDidMount will execute the function when the screen is mounted.*/
componentDidMount=()=>{
    this.get_chart()
    }
    
    render() {
    
    return(
    <View>
    
    {this.LineChart_Dynamic()}
    
    </View>
    
    )}


}