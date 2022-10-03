import {getRegStudent} from '../data/students'

export default function UnRegisteredStudents() {

   
    let students = getRegStudent();
    return (
        <main style={{ padding: "1rem" }}>
          
          <h2>student List : {students.name}</h2>
          {/* <ul>
        {students.map((student) => (
          <li key={student.name}>{student.name}</li>
        ))}
      </ul> */}
        </main>
      );
  }