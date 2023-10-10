import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createSwitchNavigator } from 'react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";

import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";
import LoginScreen from '../screens/LoginScreen'; 

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Alugue uma Bicicleta") {
                iconName = "bicycle";
              } else if (route.name === "Histórico de Locações") {
                iconName = "time";
              }

              const SwitchNavigator = createSwitchNavigator(
                {
                  Login: LoginScreen,
                  Ride: RideScreen
                },
                {
                  initialRouteName: 'Login'
                }
              );
              

              // Você pode retornar qualquer componente que quiser aqui!
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                 
                />
              );
            }
          })}
          tabBarOptions={{
            activeTintColor: "#FBE5C0",
            inactiveTintColor: "black",
            style: {
              height: 100,
              borderTopWidth: 0,
              backgroundColor: "#F88379"
            },
            labelStyle: {
              fontSize: 20,
              fontFamily: "Rajdhani_600SemiBold"
            },
            labelPosition: "below-icon",
            tabStyle: {
              alignItems: "center",
              justifyContent: "center"
            }
          }}
        >
          <Tab.Screen name="Alugue uma Bicicleta" component={RideScreen} />
          <Tab.Screen name="Histórico de Locações" component={RideHistoryScreen} />
        </Tab.Navigator>
      </NavigationContainer>


    );
  }
}
