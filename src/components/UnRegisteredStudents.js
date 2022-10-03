import {getUnRegStudent} from '../data/students'

export default function UnRegisteredStudents() {

   
    let students = getUnRegStudent();
    return (
        <main style={{ padding: "1rem" }}>
          <h2>student List </h2>
          <ul>
        {students.map((student) => (
          <li >{student.name}</li>
        ))}
      </ul> 
         
        </main>
      );
  }