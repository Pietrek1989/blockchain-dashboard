import { useState } from "react";
import "./App.css";
import {
  Navbar,
  Welcome,
  Footer,
  Transactions,
  Services,
  Loader,
} from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar></Navbar>
          <Welcome></Welcome>
        </div>
        <Services></Services>
        <Transactions></Transactions>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
