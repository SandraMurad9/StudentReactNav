import {getUnRegStudent} from '../data/students'

export default function UnRegisteredStudents() {

   
    let students = getUnRegStudent();
    return (
        <main style={{ padding: "1rem" }}>
          <h2>student List : {students.name}</h2>
         
        </main>
      );
  }