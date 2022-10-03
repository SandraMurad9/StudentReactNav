let  students=[
    {
        name:"Samira",
        id: 1,
        courses: [" Math","  FullStack"],
        operation: "Register",
        paid:true,
    },

{
    name:"Sandra",
    id: 2,
    courses: ["Arabic","  FullStack"],
    operation: "Register",
    paid:true,
}
,

{
    name:"Dania ",
    id: 3,
    courses: ["Arabic","  FullStack"],
    operation: "Register",
    paid:false,
}
,

{
    name:"zeina",
    id: 4,
    courses: ["Math","  FullStack"],
    operation: "Unregister",
    paid:false,
}
]

  
export function getStudents() {
    return students ;
  }

  export function getStudent(id) {
    return students.find(
      (student) => student.id === id
    );
 }
    export function getRegStudent() {
        return students.find(
            (student) => student.operation === "Register"
          );
       
    
  }

  export function getUnRegStudent() {
    return students.find(
        (student) => student.operation === "Unregister"
      );
   

}