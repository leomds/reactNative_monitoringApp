import React, {Component} from 'react';
import { View, Text, Dimensions, SafeAreaView, ScrollView, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import { LineChart } from "react-native-chart-kit";

var screenWidth = Dimensions.get('screen').width;

var x = "11";

const chartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#18477B",
  backgroundGradientTo: "#01050F",
  decimalPlaces: 2,
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

export default class GraficoTurbidez extends Component {
  constructor(props){
    super(props);
    this.state={
        datasource: []
    }
}


get_chart=()=>{

fetch("https://api.thingspeak.com/channels/1595751/feeds.json?results="  + x, {
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
<ScrollView horizontal={true}>
<LineChart
verticalLabelRotation={90}
onDataPointClick={({value}) => {
    Alert.alert('' + value + ' NTU');
  }}
data={{
  legend:["NTU"],  
  labels: this.state.datasource.map(item=>{return(
    (item.created_at).charAt(11)+(item.created_at).charAt(12)+
    (item.created_at).charAt(13)+(item.created_at).charAt(14)+(item.created_at).charAt(15)+
    (item.created_at).charAt(16)+(item.created_at).charAt(17)+(item.created_at).charAt(18)
    )}),
  datasets: [
    {
      data: this.state.datasource.map(item=>{return(item.field1)})
    }
  ]
}}
width={screenWidth}
height={400}
yAxisLabel=""
yAxisSuffix=""
yAxisInterval={1}
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

const estilos = StyleSheet.create({

  botao:{
      marginLeft: 5,
      width: 90,
      height: 50,
      marginTop: 16,
      backgroundColor: "#18477B",
      paddingVertical: 16,
      borderRadius: 6,
  },
  textoBotao:{
      color:"white",
      textAlign: "center",
      fontSize: 16,
      lineHeight: 20,
  },
  sensorSpace: {
    flexDirection: "row",/* esse comando faz a ordenação das coisas na tela,
                         nesse caso colocando a imagem
                         ao lado do texto sobre os sensores*/
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#B7BFFF",
},

})