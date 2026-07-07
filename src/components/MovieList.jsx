function MovieList({movies}){

    return (
        <ul>
        {movies.map((movie) =>{
            return(
                <li key = {movie.id}>
                {movie.title} - ⭐{movie.rating}
                </li>
            );
        })}
        </ul>
    );
}
export default MovieList;