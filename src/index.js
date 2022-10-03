import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import StudentReg from './components/StudentReg'
import CoursesList from './components/CourseList'
import FinancialReport from './components/FinancialReport'
import StudentDetial from './components/StudentDetial';
import StudentCorurse from './components/StudentCourse';
//import { StudentsList } from './components/StudentsList';
import {AddNewStudent} from './components/AddNewStudent'
import  RegisteredStudents from './components/RegisteredStudents'
import   UnRegisteredStudents from './components/UnRegisteredStudents'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} >
    <Route path="students" element={<StudentReg />} > 
    
     <Route path=":studentId" element={<StudentDetial />} /> 
    </Route>
    <Route path="courses" element={<CoursesList />} >
    <Route path=":courseId" element={<StudentCorurse />} /> 
    </Route>

    <Route path="financialreport" element={<FinancialReport />} />
    <Route path="addstudent" element={<AddNewStudent />} />
    <Route path="registerstudet" element={<RegisteredStudents />} />
     <Route path="unregisterstudet" element={<UnRegisteredStudents />} /> 
    
    {/* <Route path="invoices_with_param" element={<Invoices />}>
      <Route path=":invoiceId" element={<Invoice />} /> */}
    {/* </Route>
    <Route path="invoices_search_param" element={<InvoicesSearchParam />} /> */}
      {/* no match route*/}
 <Route
  path="*"
  element={
    <main style={{ padding: "1rem" }}>
      <p>There's nothing here!</p>
    </main>
  } 
/>
  </Route>
 
  {/* <Route path="expenses" element={<Expenses />} />
  <Route path="invoices" element={<Invoices />} /> */}
</Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
