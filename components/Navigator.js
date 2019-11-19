import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ToDoApp from "./TodoApp";
import {createMaterialTopTabNavigator} from "react-navigation-tabs";

const TabScreen = createMaterialTopTabNavigator(
    {
        Home: { screen: ToDoApp },
        Settings: { screen: DetailsScreen },
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#F8F8F8',
            style: {
                backgroundColor: '#486d89',
            },
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: '#87B56A',
                borderBottomWidth: 2,
            },
        },
    }
);
const Navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        Todo: TabScreen
    },
    {
        initialRouteName: 'Home',
    }
);
export default createAppContainer(Navigator);