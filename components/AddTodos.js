/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View, TouchableHighlight} from 'react-native';
import {addNewTodo} from "../actions";
import {connect} from "react-redux";


class AddTodos extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            newTodo: ''
        });
    }


    render() {
        return (

            <View >
                <Text style={styles.appTitle}> Todo App</Text>
                <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Add an item!"  onChangeText={
                    (text) => {
                        this.setState({newTodo: text});
                    }
                }/>
                <TouchableHighlight style={{marginRight: 15}} underlayColor='blue'
                                    onPress={(event) => {
                                        this.props.onClickAdd(this.state.newTodo);
                                    }}
                >
                    <Image
                        style={{width: 35, height: 35}}
                        source={require('../icons/index.jpeg')}
                    />
                </TouchableHighlight>
                </View>

            </View>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onClickAdd: (newTodo) => {
            dispatch(addNewTodo(newTodo));
        }
    };
}

export default connect(null, mapDispatchToProps)(AddTodos);

const styles = StyleSheet.create({

    appTitle: {
        color: '#1c1c1c',
        fontSize: 36,
        marginTop: 20,
        marginBottom: 5,
        fontWeight: '200'
    },
    input: {
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        width : 375,

        //marginBottom: 20,

    },
    container: {
        width: -50,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {

        fontSize: 28,
        marginVertical: 30
    }
});

