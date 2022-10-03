import {getStudents} from '../data/students'

import { Outlet,Link } from "react-router-dom";

export default function StudentReg() {
    let students = getStudents();
    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          {students.map((student) => (
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/students/${student.id}`}
              key={student.id}
            >
              {student.name}
            </Link>
          ))}
        </nav>
        <Outlet/>
      </div>
     
    );
          }