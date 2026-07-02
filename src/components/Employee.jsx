function Employee ({name, company, salary, city}){
    return(
        <>
        <h2>Employee Details</h2>
        <p>Name : {name}</p>
        <p>Company : {company}</p>
        <p>Salary : ₹{salary}</p>
        <p>City : {city}</p>
        </>
    );
}
export default Employee;