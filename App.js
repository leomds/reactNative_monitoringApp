import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import chamadaPrincipal from './assets/src/Telas/Principal/chamadaPrincipal';
import TelaTurbidez from './assets/src/Telas/SensorTurbidez/TelaTurbidez';
import TelaTemperatura from './assets/src/Telas/SensorTemperatura/TelaTemperatura';
import TelaPH from './assets/src/Telas/SensorPH/TelaPH';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Principal"
                screenOptions={({ route }) => ({

                  tabBarIcon: ({ color, size }) => {
                    let iconName;
  
                    switch(route.name) {
                      case 'Principal':
                        iconName = 'home';
                        break;
                      case 'PH':
                        iconName = 'chart-line';
                        break;
                      case 'Temperatura':
                        iconName = 'chart-bar';
                        break;
                      case 'Turbidez':
                        iconName = 'chart-area';
                        break;
  
                    }
  
                    return <FontAwesome5 name={iconName} size={size} color={color}/>
                  },

                  "tabBarActiveTintColor":"#18477B",
                  "tabBarinactiveTintColor":"#777",
                  "tabBarshowLabel":false,
                  "tabBarstyle": [ 
                    {
                      "display": "flex"
                    },
                    null
                  ]
                })}
          >
            <Tab.Screen name="Principal" component={chamadaPrincipal} options={{headerTitle: '      Monitoramento Remoto da Água'}}/>
            <Tab.Screen name='PH' component={TelaPH} options={{headerShown: false}}/>
            <Tab.Screen name="Turbidez" component={TelaTurbidez} options={{headerShown: false}}/>
            <Tab.Screen name="Temperatura" component={TelaTemperatura} options={{headerShown: false}}/>
          </Tab.Navigator>
        </NavigationContainer>
  );

}