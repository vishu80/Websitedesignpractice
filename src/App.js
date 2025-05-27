import "./App.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Maincontainer from "./Components/Maincontainer/Maincontainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="content-wrapper">
          <Sidebar />
          <div className="main-content">
            <Maincontainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

