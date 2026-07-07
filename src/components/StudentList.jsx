function StudentList({students}){

   return(

    <ul>
        {students.map((student) =>{
            return (
                <li key = {student.id}>
                    {student.name}- {student.marks}
                </li>
            );
        })}
    </ul>
   );
}
export default StudentList;