import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { AddTodoItem } from '../components/AddTodoItem'
import { TodoItem } from '../components/TodoItem'

export const TodoListScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  return (
    <View>
      <AddTodoItem onSubmit={addTodo} />

      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onRemove={removeTodo}
            onOpen={openTodo}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

