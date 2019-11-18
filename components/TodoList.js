/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {connect} from "react-redux";
import {deleteTodo, toggleTodo} from "../actions";


class TodoList extends Component {

    render() {
        return (

            <FlatList

                data={this.props.todos}

                renderItem={({item, index}) =>
                    <View style={styles.container}>
                        <Text style={{
                            color: item.completed ? 'red' : '#505353', marginLeft: 10, fontSize: 24, paddingLeft: 10,
                            marginVertical: 10, backgroundColor: '#f3f6f6', width: 350, flex: 1
                        }} onPress={(event) => {
                            this.props.onClickToggle(item.id);
                        }}>
                            {item.name}
                        </Text>
                        <TouchableHighlight style={{marginRight: 10}} underlayColor='blue'
                                            onPress={(event) => {
                                                this.props.onClickDelete(item.id);
                                            }}
                        >
                            <Image
                                style={{width: 20, height: 20}}
                                source={require('../icons/delete.png')}
                            />
                        </TouchableHighlight>
                    </View>}
            />


        );
    }

}

const mapStateToProps = state => {
    return {
        todos: !state.todoReducers ? [] : state.todoReducers
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onClickToggle: (id) => {
            dispatch(toggleTodo(id));
        },
        onClickDelete: (id) => {
            dispatch(deleteTodo(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const styles = StyleSheet.create({

    container: {
        width: -50,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    text: {
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

