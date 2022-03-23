import React from "react";
import {Route, Switch} from 'react-router-dom';

import Employee from './EmployeesPage/Employee';
import Students from './StudentsPage/Students';
import NavBar from './navbar';
import Home from './home';


export default function App() {
  return (
    <div className = "container">
      <NavBar/>
      <div className = 'content'>
        <Switch>

            <Route path = '/' exact component = {Home} />
            <div className = "row">
            
            <Route path = '/Employee' component = {Employee} />
            

            <Route path = '/Students' component = {Students} />
            </div>
          </Switch>
         </div>
    </div>
  );
}
