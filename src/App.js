import "./App.css";
import { Header, Services, Features } from "./container";
import { Brand } from "./components";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Brand />
      <Services />
      <Features />
    </div>
  );
}

export default App;
