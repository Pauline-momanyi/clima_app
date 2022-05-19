import "../App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./layout/Nav";
import Try from "./Try";
import Header from "./dashboard/Header";
import Categories from "./dashboard/Categories";

function App() {
  return (
    <Router>
      <div className="sm:mx-10">
        <Nav />
        <div className="flex mt-2 mx-2">
          <Categories />
          <Header />
        </div>
      </div>
    </Router>
  );
}

export default App;
