import './i18n'
import Contact from "./sections/Contact";
import Service from "./sections/Service";
import Prices from "./sections/Prices";
import Header from "./sections/Header";

function App() {

  return (
    <>
      <Header />
      <Prices />
      <Service />
      <Contact />
    </>
  );
}

export default App;
