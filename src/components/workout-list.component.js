import React, { Component } from'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Workouts = props => (
    <tr>
        <td>{props.workout.username}</td>
        <td>{props.workout.description}</td>
        <td>{props.workout.duration}</td>
        <td>{props.workout.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.workout._id}>edit</Link> | <a href="#" onClick={()=> {props.deleteWorkout(props.workout._id)}}>delete</a>
        </td>
    </tr>
)

export default class WorkoutList extends Component{
    constructor(props){
        super(props);

        this.deleteWorkout = this.deleteWorkout.bind(this);

        this.state = {workouts: []}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/workouts')
        .then(res => {
            this.setState({ workouts: res.data })
        })
        .catch((err)=> {
            console.log(err)})
    }

    deleteWorkout(id){
        axios.delete('http://localhost:5000/workouts/'+id)
        .then(res => console.log(res.data))
        this.setState({
            workouts: this.state.workouts.filter(el => el._id !== id)
        })
    }
    workoutList(){
        return this.state.workouts.map(currentworkout => {
            return <Workouts workout={currentworkout} deleteWorkout={this.deleteWorkout} key={currentworkout._id}/>;
        })
    }
    render(){
        return(
            <div>
                <h3>Workouts History</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.workoutList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
