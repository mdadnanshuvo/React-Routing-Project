import React, {Component} from 'react';
import Like from './Like';



export default class Students extends Component{

  

  state = {
    Students : [
      {Name : "Mohammad Adnan Shuvo", ID:"50", Department:"CSE", CGPA:"3.50", liked:"true"},
      {Name : "MD Firoz Molla", ID:"16", Department:"CSE", CGPA:"2.50"},
      {Name : "MD Rukkon ", ID:"100", Department:"CSE", CGPA:"3.40"},
      {Name : "Mohammad Minhaz", ID:"51", Department:"CSE", CGPA:"3.60"},
      {Name : "Neaz Mahmood", ID:"57", Department:"CSE", CGPA:"3.80"},
      {Name : "MD Hridoy", ID:"10", Department:"CSE", CGPA:"2.95"},
      {Name : "Alief Sadnan Joy", ID:"40", Department:"CSE", CGPA:"3.95"},
      {Name : "Mohammad Sojol", ID:"80", Department:"CSE", CGPA:"3.00"}
    ]
  }

  
  deleteStudents = student => {
    const Students = this.state.Students.filter(s => s.ID !== student);
    this.setState({Students });
  }

  reactButton = (react) => {
    const Students = [...this.state.Students];
    const index = Students.indexOf(react);

    Students[index].liked = !Students[index].liked;

    this.setState({ Students });
  }

  render(){
   
    

    const {length : number} = this.state.Students;

    if(number === 0){
      return <h2 className = "text-center" style = {{color:"#ffc107"}}> No Info to display!</h2>
    }
    return <>
    <h1 className = "text-center">Showing <span style = {{color:"#007bff"}}>{number}</span> Students' Info</h1>

    <table className = "table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>ID</th>
          <th>CGPA</th>
        </tr>
      </thead>
      <tbody>
        {this.state.Students.map(student => (
          <tr key = {student.ID}  className = "text-center">
          <td style = {{background:"orange"}}>{student.Name}</td>
          <td>{student.Department}</td>
          <td style = {{background:"orange"}}>{student.ID}</td>
          <td>{student.CGPA}</td>
          <td></td>
          <td><Like liked = {student.liked} onClick = {() => this.reactButton(student)}/></td>
          <td><button onClick = {() => this.deleteStudents(student.ID)} className = "btn btn-danger btn-sm">Delete</button></td>
          
        </tr>

        ))}
        
      </tbody>
    </table>


    </>
  }
}