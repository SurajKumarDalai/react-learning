function Dashboard(){
    const user ={
        name: "Suraj",
        age: 27,
        city: "Hyderabad",
        salary: 30000
    };

    return(

        <div>
            <h1>User Dashboard</h1>

            <p>Name:{user.name}</p>
            <p>Age:{user.age}</p>
            <p>City:{user.city}</p>
            <p>Monthly Salary:{user.salary}</p>
            <p>Yearly Salary:{user.salary * 12}</p>
            <p>Name Length: {user.name.length}</p>
            <p>Uppercase Name: {user.name.toUpperCase()}</p>
        </div>
    );
}
export default Dashboard;