import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useContext, useState } from 'react';

import Home from "../Home";
import Local from "../Local";
import Pagamento from "../Pagamento";
import Favoritos from "../Favoritos";

import Login from '../Login';
import Cadastro from '../Cadastro';
import Conta from '../Conta';
import { AuthContext } from '../Context/AuthContext';

const Tab = createBottomTabNavigator();

export default function Rotas() {

  const { logado } = useContext(AuthContext);

  const [cadastro, setCadastro] = useState(false);

  if (!logado && !cadastro ) {
    return (<Login setCadastro={setCadastro} />)
  }

  if (!logado && cadastro) {
    return (<Cadastro setCadastro={setCadastro} />)
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          tabBarStyle: { backgroundColor: "#E05151" },
          headerStyle: { backgroundColor: "#E05151" },
          tabBarLabelStyle: { color: "white" },
          headerTitleStyle: { color: "black" },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "white",
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Image
              source={require("../../assets/logo.png")}  // Substitua o caminho com o caminho da sua logo
              style={{ width: 70, height: 70, marginLeft: 10, marginBottom: 5 }} // Ajuste o tamanho e margens conforme necessário
            />
          ),
        }}>
        <Tab.Screen name="Home" component={Home} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={40} />
            ),
          }}
        />
        <Tab.Screen name="Local" component={Local}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map" color={color} size={40} />
            ),
          }} />
        <Tab.Screen name="Pagamento" component={Pagamento}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cash" color={color} size={40} />
            ),
          }} />
        <Tab.Screen name="Favoritos" component={Favoritos}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={40} />
            ),
          }} />
        <Tab.Screen name="Conta" component={Conta}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={40} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
