import React, { useState } from "react"
import {getStudents} from "../data/students"

export const AddNewStudent = ({addNewStudent}) => {

    // const [student, setStudent] = useState({
    //     name:"",
    //     id: 0,
    //     courses: [],
    //     operation: "",
    //     paid: false,
    // })
    const [student, setStudent] = useState(getStudents)

    const handleName = (event) =>{
        setStudent(previousState => {
            return { ...previousState, name: event.target.value }
          });
      
    }

    const handleId = (event) =>{
        setStudent(previousState => {
            return { ...previousState, id: event.target.value }
          });
      
    }
    const handleCourses = (event) =>{
        setStudent(previousState => {
            return { ...previousState, courses: event.target.value }
          });
    }
    const handleOperation = (event) =>{
        setStudent(previousState => {
            return { ...previousState, operation: event.target.value }
          });
    }
    const handlepaid = (event) =>{
        setStudent(previousState => {
            return { ...previousState, paid: event.target.value }
          });
    }

    const handleClick = () =>{
        const newStudent = student
        console.log(newStudent)
            
        addNewStudent(newStudent)
        const newList = student.concat(newStudent)
        setStudent(newList)
    }
   
    return (
        <div>
           
        <br></br>
        <br></br>
        <label>
        &nbsp;&nbsp;Enter your name: &nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" value={student.name} onChange={handleName} />
        </label>
        <br></br>
        <br></br>
        <label>
        &nbsp;&nbsp;Enter your id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" value={student.id} onChange={handleId} />
        </label>
        <br></br>
        <br></br>
        <label>
        &nbsp;&nbsp;Enter your courses:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" value={student.courses} onChange={handleCourses} />
        </label>
        <br></br>
        <br></br>
        <label>
        &nbsp;&nbsp;Enter your operation:&nbsp;&nbsp;
          <input type="text" value={student.operation} onChange={handleOperation} />
        </label>
        <br></br>
        <br></br>
        <label>
        &nbsp;&nbsp;Enter your paid :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" value={student.paid} onChange={handlepaid} />
        </label>
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={handleClick}>Submit Student</button>
        
        </div>
    )


}
