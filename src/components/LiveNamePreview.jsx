import { useState } from "react";

function LiveNamePreview() {

    const [name, setName] = useState("");

    return (
        <>
            <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
            />

            <h2>
                {name === "" ? "Hello Guest" : `Hello ${name}`}
            </h2>
        </>
    );
}

export default LiveNamePreview;