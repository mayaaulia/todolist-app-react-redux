import React from 'react';
import { useSelector } from 'react-redux';

function AppContent() {
  // getting todolist data
  const todoList = useSelector((state) => state.todo.todoList);
  console.log(todoList);
  return <div>This is app content</div>;
}

export default AppContent;
