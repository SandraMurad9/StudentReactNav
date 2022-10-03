import {getStudent} from '../data/students'
import { useParams } from "react-router-dom";
//import { Outlet,Link } from "react-router-dom";

export default function StudentDetial() {

    let params = useParams();
    let student = getStudent(parseInt(params.studentId, 10));
    return (
        <main style={{ padding: "1rem" }}>
          <h2>Course List : {student.courses}</h2>
          
          <p>operation: {student.operation}</p>
          <p>paid: {student.paid.toString()}</p>
        </main>
      );
  }