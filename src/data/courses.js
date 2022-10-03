let  courses=[
    {
        
        id: 1,
        name: "Math",
        studentRegister :["Sandra  ", "samira"]
       
    },

{
   
    id: 2,
    name: "FullStack",
    studentRegister :[" samira  "]
  
}
,

{
   
    id: 3,
    name: "Arabic",
    studentRegister :["Dania"]
  
},

{
   
    id: 4,
    name: "English",
    studentRegister :["dania  ", "zeina"]
  
}



]

  
export function getCourses() {
    return courses ;
  }

  export function getCourse(id) {
    return courses.find(
      (course) => course.id === id
    );

    
  }