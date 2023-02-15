import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/card";
import { dataElements } from "./Components/Data";

function App() {
  const dataCard = dataElements.map((data) => {
    return <Card key={data.id} {...data} />;
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">{dataCard}</section>
    </div>
  );
}

export default App;
