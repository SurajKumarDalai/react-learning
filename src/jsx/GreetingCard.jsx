const name = "suraj";
function greet(){   

    

    return "Welcome to React";
}
function Message(){
    return(
        <div>
            <h1>{greet()}</h1>
            <p>Hello {name}</p>
        </div>
    );
}

export default Message;