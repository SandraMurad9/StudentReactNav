import { Outlet,Link } from "react-router-dom";

export default function FinancialReport() {
   
    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          
          <li>
            <Link to="/registerstudet">Registered Students</Link>
          </li>
          <br></br>
          <li>
            <Link to="/unregisterstudet">UnRegistered Students</Link>
          </li>
          
        </nav>
        <Outlet/>
      </div>
     
    );
          }