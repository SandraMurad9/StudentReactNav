import {getCourse} from '../data/courses'
import { useParams } from "react-router-dom";
//import { Outlet,Link } from "react-router-dom";

export default function StudentCorurse() {

    let params = useParams();
    let course = getCourse(parseInt(params.courseId, 10));
    return (
        <main style={{ padding: "1rem" }}>
          <h2>student List : {course.studentRegister}</h2>
          
          {/* <p>operation: {student.operation}</p>
          <p>paid: {student.paid.toString()}</p> */}
        </main>
      );
  }