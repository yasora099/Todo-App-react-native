import React, {Component} from 'react';
import { View, Text } from 'react-native';

class DetailsScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 18}}>Details Screen</Text>
            </View>
        );
    }
}

export default DetailsScreen;