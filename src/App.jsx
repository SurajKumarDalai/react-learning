import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Employee from "./components/Employee";
import Product from "./components/Product";
import List from "./components/List";
import StudentList from "./components/StudentList";
import MovieList from "./components/MovieList";
import Counter from "./components/Counter-State";
import LikeButton from "./components/LikeButton";
import Password from "./components/Password";

function App(){

  const employee = {
    name: "Suraj Kumar Dalai",
    company: "OpenAI",
    salary: 5000,
    city:"Hyderbad"
    };

    const product ={
      name : "iphone 15",
      price : 69999,
      brand : "Apple"
    };

    const fruits = ["Apple",
    "Banana",
    "Mango",
    "Orange"];

    const students = [
      {
        id: 1,
        name: "Suraj",
        marks: 95
      },
      {
        id: 2,
        name: "Rahul",
        marks: 88
      },
      {
        id: 3,
        name: "Ankit",
        marks: 91
      }
    ];

    const movies = [
      {
        id: 1,
        title: "Interstellar",
        rating: 8.7
      },
      {
        id: 2,
        title: "Inception",
        rating: 8.8
      },
      {
        id: 3,
        title: "Avatar",
        rating: 7.9
      }
    ];

  return(
    <>
    <Navbar />
    <Hero />
    <Footer />
    <Button text = "Login" />
    <Button text = "Register" />
    <Button text = "Logout" />

    <Employee employee = {employee}/>

    <Product product = {product}/>

    <List fruits = {fruits}/>

    <StudentList students = {students}/>

    <MovieList movies={movies}/>

    <Counter/>

    <LikeButton/>
    <Password/>
    </>
    );
    
}
export default App;