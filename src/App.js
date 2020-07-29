import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component.js'
import WorkoutList from './components/workout-list.component'
import EditWorkout from './components/edit-workout.component'
import CreateWorkout from './components/create-workout.component'
import CreateUser from './components/create-user.component'

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
      <Route path="/" exact component={WorkoutList}/>
      <Route path="/edit/:id" component={EditWorkout}/>
      <Route path="/create" exact component={CreateWorkout}/>
      <Route path="/user" exact component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
