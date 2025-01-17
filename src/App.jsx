import "./App.css";
import Aboutus from "./components/Aboutus";
import Body from "./components/Body";
import Nav from "./components/Nav";
// import Staff from "./components/Staff";

function App() {
  return (
    <div className="">
      <Nav />
      {/* <Navbar /> */}
      <Body />
      <Aboutus />
      {/* <Staff /> */}
    </div>
  );
}

export default App;
