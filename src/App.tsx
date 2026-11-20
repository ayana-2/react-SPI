import Clients from "./components/Clients";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Feature /> 
    </>
  );
};

export default App;