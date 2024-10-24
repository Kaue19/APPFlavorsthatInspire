import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "./src/Home";
import Local from "./src/Local";
import Pagamento from "./src/Pagamento";
import Favoritos from "./src/Favoritos";
import { useState } from 'react';
import Login from './src/Login';
import Cadastro from './src/Cadastro';

const Tab = createBottomTabNavigator();

export default function App() {

  const[ logado, setLogado ] = useState(false);
  const[ cadastro, setCadastro ] = useState(false);

  if( logado == false){
    return( <Login setLogado={setLogado} setCadastro={setCadastro}/>)
  }

  if( cadastro ){
    return( <Cadastro setCadastro={setCadastro} setLogado={setLogado}/>)
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: "#E05151"},
        headerStyle: { backgroundColor: "#E05151"}, 
        tabBarLabelStyle: { color: "white"},
        headerTitleStyle: { color: "white"},
        tabBarActiveTintColor: "lightgray",
        tabBarInactiveTintColor: "white",
      }}>
        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen name="Local" component={Local}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Pagamento" component={Pagamento}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cash" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Favoritos" component={Favoritos}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}