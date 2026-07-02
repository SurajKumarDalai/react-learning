function Employee(){

    const employee = {
        name : "Suraj",
        company : "OpenAI",
        salary : 50000
    };

    return(

        <div>
            <h1>Employee Details</h1>

            <p>Name: {employee.name}</p>
            <p>Company: {employee.city}</p>
            <p>Monthly Salary: {employee.salary}</p>
            <p>Yearly Salary: {employee.salary * 12}</p>
        </div>
    );
}
export default Employee;