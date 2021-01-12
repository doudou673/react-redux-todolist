import logo from './logo.svg';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibilityFilter from './containers/VisibleTodoList';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <VisibilityFilter/>
      <Footer />
      
    </div>
  );
}

export default App;
