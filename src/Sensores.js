import React from 'react'
import { Dimensions, View, Text, Image, StyleSheet, Modal, SafeAreaView} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
export default function Sensor({ img1, sensorPH, sensorPhDescricao, img2, sensorTBD,
    sensorTBDDescricao, img3, sensorTMP, sensorTMPDescricao}){

    return<>
        <View style = {estilos.tela}>
        <Text style={estilos.nome}>Sensores Utilizados</Text>
                <View style={estilos.sensorSpace}>
                    <Image source={img1} style={estilos.imgSensor} />
                    <View>
                        <Text style = {estilos.sensor}>{sensorPH}</Text>
                        <Text style = {estilos.descricaoSensor}>{sensorPhDescricao}</Text>
                    </View>
                </View>
                <View style={estilos.sensorSpace}>
                    <Image source={img2} style={estilos.imgSensor} />
                    <View>
                        <Text style = {estilos.sensor}>{sensorTBD}</Text>
                        <Text style = {estilos.descricaoSensor}>{sensorTBDDescricao}</Text>
                    </View>
                </View>
                <View style={estilos.sensorSpace}>
                    <Image source={img3} style={estilos.imgSensor} />
                    <View>
                        <Text style = {estilos.sensor}>{sensorTMP}</Text>
                        <Text style = {estilos.descricaoSensor}>{sensorTMPDescricao}</Text>
                    </View>
                </View>
        </View>
    </>
}
const estilos = StyleSheet.create({

    tela: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor:"#EEF8FF",
    },

    nome: {
        padding: 20,
        color: "#105A85",
        fontSize: 26,
        lineHeight: 26,
        textAlign: "center",
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderBottomColor: "#B7BFFF",
    },

    descricao:{
        color: "#919EBB",
        fontSize: 18,
        lineHeight: 20,
        fontWeight: "normal",
        paddingVertical: 12,
    },

    sensorSpace: {
        flexDirection: "row",/* esse comando faz a ordenação das coisas na tela,
                             nesse caso colocando a imagem
                             ao lado do texto sobre os sensores*/
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#B7BFFF",
    },
    

    descricaoSensor: {
        textAlignVertical:'center',
        color:"#919EBB",
        marginHorizontal: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        lineHeight: 16,
        marginRight: 120,
        textAlign: 'justify',
    },

    sensor: {
        color: "#105A85",
        fontSize: 20,
        lineHeight: 26,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        fontWeight: "bold",
    },

    imgSensor: {
        width: 130,
        height: 130,
        borderRadius: 10,
    },

})