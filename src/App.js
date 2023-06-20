import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <img src={logo} className="App-logo" alt="logo" />
      <Main />

      <Footer />
    </div>
  );
}

export default App;
