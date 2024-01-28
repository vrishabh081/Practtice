import "./App.css";
import Navbar from "./components/navbar";
import AllRoutes from "./routes/allRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
