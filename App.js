import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavBar } from './src/components/Common/NavBar'
import {TodoListScreen} from './src/screens/TodoListScreen'
import {TodoScreen} from './src/screens/TodoScreen'

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    { id: '1', title: 'Первый таск' },
    { id: '2', title: 'Вторая таска' }
  ])

  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  let content = (
    <TodoListScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  )

  if(todoId) {
    const selectedTodo = todos.find( todo => todo.id === todoId )
    content = <TodoScreen item={selectedTodo} goBack={() => setTodoId(null)} />
  }

  return (
    <View style={styles.root}>
      <NavBar title="Title" />
      <View  style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#d4d4d4',
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 32,
  }
});
