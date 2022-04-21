import {
  Header,
  Services,
  Features,
  Testimonials,
  Pricing,
  Faqs,
  Footer,
} from "./container";
import { Brand } from "./components";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Brand />
      <Services />
      <Features />
      <Testimonials />
      <Pricing />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
