import React from 'react';
import { Text, Image, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width; 

export default function TopoPH({titulo, ph}){
    return<>
            <Image source={ph} style={estilos.topo} />
            <Text style={estilos.titulo}>{ titulo }</Text>
    </>
}

const estilos = StyleSheet.create({
    topo: {
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
        paddingTop: 26,

    },
})