import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Employee from "./components/Employee";
import Product from "./components/Product";
import List from "./components/List";

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
    "Mango"];

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
    </>
    );
    
}
export default App;