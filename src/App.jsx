import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ShirtDetails from "./pages/ShirtDetails";

import "./App.css";

function App() {
  const [selectedShirt, setSelectedShirt] = useState(null);

  return (
    <div className="app" id="top">
      <Navbar />

      {selectedShirt ? (
        <ShirtDetails
          shirt={selectedShirt}
          onBack={() => setSelectedShirt(null)}
        />
      ) : (
        <Home
          onSelectShirt={setSelectedShirt}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;