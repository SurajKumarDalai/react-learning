function Student(){

    const student ={
        name : "Rahul",
        course : "React",
        mark : 92,
        city : "Hyderabad"
    };

    return (

        <div>
            <h1>Student Profile</h1>

            <p>Name : {student.name}</p>
            <p>Name : {student.course}</p>
            <p>Name : {student.mark}%</p>
            <p>Name : {student.city}</p>
        </div>
    );
}
export default Student;