import React from 'react';
import { Text, Image, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import logo from '../../assets/logo.jpeg';

const width = Dimensions.get('screen').width; 

export default function Topo({titulo, logoimg}){
    return<>
        <SafeAreaView style={estilos.fundo}>
        <Image source={logoimg} style={estilos.topo} />
        <Text style={estilos.titulo}>{ titulo }</Text>
        </SafeAreaView>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        paddingVertical: 20,
        marginTop: 20,
        width: "100%",
        height: 626 / 626 * width,/* aqui para definir a altura da imagem, é preciso fazer o seguinte cálculo:
                                   (alturaDaImagem / larguraDaImagem * width)   */
    },
    titulo:  {
        width:'100%', //largura. A largura sempre deve ser definida entre aspas e porcentagem
        position: 'absolute',/*posição tá absoluta com base em todos os outros objetos, 
                            ou seja, está na primeira camada*/
        textAlign: "center",//centraliza o texto
        fontSize: 26,//ajuste tamanho de fonte
        lineHeight: 26,//espaçamento de linha
        color: "#105A85",
        fontWeight: "bold",//deixa em negrito
        padding: 16,// espaçamento ou margem
        paddingTop: 20,

    },

    fundo: {
        backgroundColor:'white'
    }
})