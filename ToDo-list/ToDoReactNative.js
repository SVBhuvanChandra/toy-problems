import React from 'react';
import {View, Text, Button, ScrollView, TextInput, StyleSheet} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Constants } from 'expo';

let id = 0;

const styles = StyleSheet.create({
    todoContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    appContainer: {
        paddingTop: 50,

    },
    scrollContainer: {
        paddingTop: 10,
        backgroundColor: 'lightgreen',
        margin: 5,
    },

})

const Todo = props => (
    <View style = {styles.todoContainer}>
        <Button onPress = {props.onDelete} title = "delete" />
        <CheckBox 
        onPress = {props.onChecked} checked = {props.todo.checked} />
        <Text>{props.todo.text}</Text>
    </View>
)

export default class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            taskName: '',
            dueDate: '',
            todos: [],
        };
    }

    addTodo(text) {
        var text1 = text +  "  :  " + new Date().toLocaleTimeString();
        this.setState({
            todos : [...this.state.todos, 
                {id: id++, text: text1, checked: false}],
            taskName: '',
            dueDate: '',
        })
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    checkedTask(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id !== id) {
                    return todo;
                }
                return {
                    id : todo.id,
                    text: todo.text,
                    checked: !todo.checked,
                }
                
            })
        })
    }


    render() {
        return (
        <View style = {styles.appContainer}>
            <Text style = {{fontWeight: 'bold',color: 'green', fontSize:22, textAlign:'center'}}>Bhuvan's Todo list</Text>
            <Text style = {{paddingTop: 10, marginLeft: 10, color: 'blue', fontStyle: 'italic'}}>Total Tasks : {this.state.todos.length}</Text>
            <Text style = {{marginLeft: 10, color: 'green', fontStyle: 'italic'}}>Completed Tasks : {
                this.state.todos.filter(todo => !todo.checked).length
                }</Text>

            <TextInput style={{backgroundColor:'lightgrey', margin:5, padding:7}} id = "taskName" onChangeText = { (taskName) => this.setState({taskName}) } value = {this.state.taskName} placeholder='What to do?' />
            <TextInput style={{backgroundColor:'lightgrey', margin:5, padding:7}} type = "date"  id = "dueDate"  onChangeText = { (dueDate) => this.setState({dueDate}) } value = {this.state.dueDate} placeholder='When (DD:MM:YYYY) '/>
            <Button onPress = {() => this.addTodo(this.state.taskName 
            + this.state.dueDate)} title = "Add Task" />
            <ScrollView style = {styles.scrollContainer}>
                {this.state.todos.map(
                    todo => <Todo
                    onChecked = {() => this.checkedTask(todo.id)}
                    onDelete = {() => this.removeTodo(todo.id)} todo = {todo}
                    />)}
            </ScrollView>
        </View>
        );
    }
}
