import './App.css';
import Header from "./composants/containers/Header/Header";
import Footer from "./composants/containers/Footer/Footer";
import User from "./composants/containers/User/User";

function App() {
  return (
    <div className="container">
      <Header />
      <User />
      <Footer />
    </div>
  );
}

export default App;