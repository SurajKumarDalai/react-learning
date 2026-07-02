import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Button from "./components/Button"

function App(){
  return(
    <>
    <Navbar />
    <Hero />
    <Footer />
    <Button text = "Login" />
    <Button text = "Register" />
    <Button text = "Logout" />
    </>
  );
}
export default App;