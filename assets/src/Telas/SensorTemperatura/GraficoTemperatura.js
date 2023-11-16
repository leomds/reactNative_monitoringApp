import React, {Component} from 'react';
import { Dimensions, View, Alert, SafeAreaView, ScrollView, ActivityIndicator, Text } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get('screen').width;

var x = "10";

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

export default class GraficoTemperatura extends Component{

  constructor(props){
    super(props);
    this.state={
        datasource: []
    }
}

get_chart=()=>{

fetch("https://api.thingspeak.com/channels/1595751/feeds.json?results=" + x, {
  method: 'GET',
  headers: {Accept: 'application/json','Content-Type': 'application/json',},
})
  .then(response => response.json())
  .then(response => {this.setState({datasource:response.feeds})})
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
verticalLabelRotation={90}
onDataPointClick={({value}) => {
    Alert.alert('' + value + '°C');
    //Alert.alert('' + labels[index]);
  }}
data={{
  legend:["Temperatura em °C"],  
  labels: this.state.datasource.map(item=>{return(
    (item.created_at).charAt(11)+(item.created_at).charAt(12)+(item.created_at).charAt(13)+(item.created_at).charAt(14)+(item.created_at).charAt(15)+
    (item.created_at).charAt(16)+(item.created_at).charAt(17)+(item.created_at).charAt(18)
    )}),
  datasets: [
    {data:this.state.datasource.map(item=>{return(item.field1)}) }
  ]
}}
width={screenWidth} // from react-native
height={400}
yAxisLabel=""
yAxisSuffix=""
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

componentDidMount=()=>{
setInterval(() => this.get_chart(), 1000)
}

render() {

return(
<View>

{this.LineChart_Dynamic()}

</View>

)}

}