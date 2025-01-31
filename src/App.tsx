import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Quotes from "./components/Quotes";
import "./App.css";

function App() {
  return (
    <main>
      <Quotes />
      <ToastContainer />
    </main>
  );
}

export default App;
