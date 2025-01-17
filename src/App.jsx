import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import Staff from "./components/Staff";

function App() {
  return (
    <div className="">
      <Nav />
      {/* <Navbar /> */}
      <Body />
      <About />
      <Staff />
    </div>
  );
}

export default App;
