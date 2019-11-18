import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 138, backgroundColor: 'powderblue' }} />
                <View style={{alignItems:'center',justifyContent:'center', width: 136, backgroundColor: 'skyblue' }} >
                    <Button title="TO DO APP"
                      onPress={()=>{this.props.navigation.navigate('Todo')}}/>
                </View>
                <View style={{width: 138, backgroundColor: 'steelblue' }} />
            </View>

        );
    }
}

export default HomeScreen;