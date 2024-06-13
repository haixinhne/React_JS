import logo from "./logo.svg";
import "./App.scss";
import HaiComponent from "./Example/HaiComponent.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <HaiComponent />
      </header>
    </div>
  );
}

export default App;
