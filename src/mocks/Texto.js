import React from 'react';
import ph from '../../../assets/ph.jpeg';
import logo from '../../../assets/logo.jpeg';
import temperatura from '../../../assets/temperatura.png';
import turbidez from '../../../assets/turbidez.png';
import sensor_temperatura from '../../../assets/sensor_temperatura.png';
import sensor_de_turbidez from '../../../assets/sensor_de_turbidez.png';
import sensor_pH from '../../../assets/sensor_pH.png';

/* o arquivo texto aqui está sendo usado para que não seja necessário
mudar o texto diretamente nas pastas onde estão(Sensores, Topo), assim agrupando todos os textos que 
futuramente possam ou precisem ser mudados numa pasta só */

const texto ={

    topo :{
        titulo: "Monitoramento da Água",
        logoimg: logo,
    },

    topoph :{
        titulo: "Sensor de PH",
        ph: ph,
    },

    topotemp :{
        titulo: "Sensor de Temperatura",
        temp: temperatura,
    },

    topoturb :{
        titulo: "Sensor de Turbidez",
        turbidez: turbidez
    },

    sensores :{
        nome:"Qualidade da Água",
        descricaoNome:"",
        img1: sensor_pH,
        sensorPH:"Sensor de PH",
        sensorPhDescricao:"O Sensor pH Módulo PH4502C é um detector de PH para líquidos, composto por um Eletrodo Hidropônico tipo sonda e um Módulo Eletrônico de controle. O pH pode ser quantificado com precisão por um sensor que mede a diferença de potencial entre dois eletrodos: um eletrodo de referência e um eletrodo de vidro que é sensível ao íon hidrogênio. ",
        img2: sensor_de_turbidez,
        sensorTBD:"Sensor de Turbidez",
        sensorTBDDescricao:"O Sensor de Turbidez ST100, funciona basicamente através de um sistema óptico de atuação no qual existem: um LED emissor e um Fototransístor receptor de luz. A verificação do NTU(Unidade de Turbidez Nefelométrica), acontece utilizando por meio da dispersão de luz pelo meio hídrico, quanto maior a turbidez da água, menor é a dispersão da luz.",
        img3: sensor_temperatura,
        sensorTMP:"Sensor de Temperatura",
        sensorTMPDescricao:"O Sensor de Temperatura NTC 10K 3950, utiliza o princípio de funcionamento deste sensor parte da resistência + elétrica que é alterada termicamente,isto é, apresenta um valor de resistência elétrica para cada temperatura absoluta.",
        botao: "Mais Info"
    },


}





export default texto;