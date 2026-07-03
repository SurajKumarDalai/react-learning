function Employee ({employee}){
    return(
        <>
        <h2>Employee Details</h2>
        <p>Name : {employee.name}</p>
        <p>Company : {employee.company}</p>
        <p>Salary : ₹{employee.salary}</p>
        <p>City : {employee.city}</p>
        </>
    );
}
export default Employee;