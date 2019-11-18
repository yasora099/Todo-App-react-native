import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ToDoApp from "./TodoApp";

const Navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        Todo: ToDoApp
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(Navigator);