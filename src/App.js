import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./pages/HomeScreen";

function App() {
  return (
    <div className="">
      <Header></Header>
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
