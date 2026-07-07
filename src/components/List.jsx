function List ({fruits}){

    return(
        
        <ul>
            {fruits.map((fruit) =>{
                return <li key={fruit}>{fruit}</li>
            })}
        </ul>
        
    );
}
export default List;