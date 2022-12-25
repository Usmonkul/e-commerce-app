import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Footer from "./routes/footer/footer";
const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
