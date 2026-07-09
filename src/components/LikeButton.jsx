import {useState} from "react";

function LikeButton(){

    const[liked, setLiked] = useState(false);

    return(
        <>
        <h1>{liked ? "❤️Liked" : "🤍Not Liked"}</h1>

        <button onClick={() => setLiked(true)}>
            Like
            </button>
        </>
    );
}
export default LikeButton;