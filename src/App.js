//import logo from './logo.svg';
import './App.css';
import { Outlet,Link } from "react-router-dom";

function App() {
  return (
    <div>
    <h1>Student Register</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
     <Link to="/students">Students</Link> {" "}
      <Link to="/courses">Courses</Link> {" "} 
       <Link to="/financialreport">financial Report</Link>{" "}
       <Link to="/addstudent">Add Student</Link>{" "}
    </nav>
    

    <Outlet />
  </div>
  );
}

export default App;
