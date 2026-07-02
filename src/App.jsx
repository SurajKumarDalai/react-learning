import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Employee from "./components/Employee";

function App(){
  return(
    <>
    <Navbar />
    <Hero />
    <Footer />
    <Button text = "Login" />
    <Button text = "Register" />
    <Button text = "Logout" />
    <Employee 
    name="Suraj Kumar Dalai"
    company="OpenAI"
    salary={5000}
    city="Hyderbad"
    />
    </>
  );
}
export default App;